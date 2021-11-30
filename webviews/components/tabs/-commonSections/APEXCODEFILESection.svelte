<script>
    // Helper Files
    import * as js from "../-helperFiles/GlobalJS";
    import { tooltip as tooltipv1 } from "../--tooltip/tooltip.v1";
    import Title from "../-commonPages/Title.svelte";
    import Documentation from "../-commonPages/Documentation.svelte";

    // Store
    import { 
        mapInputVariables, 
        mapShowSections, 
        mapSectionValidation, 
        pickFileType, 
        mapErrors 
    } from "../-helperFiles/GlobalStore";
    
    // Default
    let fileName = "apexcodefile";
    let sectionUCase = fileName.toUpperCase();
    
    // Parameters
    export let mapDoc;
    export let required = false;
    export let onlyOneError = "";
    export let defaultFolder = "";

    // Documentation
    let type = `<b><i>Optional</i></b>`;
    let body = `
        <br/><br/>
        Path to a local file that contains Apex code.
        <br/><br/>
        Type: filepath
    `;

    if(!mapDoc){ // Default
        mapDoc = {
            type: type,
            body: body
        };
    }else{
        if(!mapDoc.type){
            mapDoc.type = type;
        }

        if(!mapDoc.body){
            mapDoc.body = body;
        }
    }
    
    function handleShowSections(event, pSectionName, pOnlyOneError){
        if(event.target.checked === true){
            if($mapSectionValidation[pSectionName] != null && js.listValidation.includes(pSectionName)){
                for(let key in $mapSectionValidation){
                    if($mapSectionValidation[key] === 1){
                        let errorMsg = `ERROR: You already selected: ${key.toUpperCase()}, Select only one between: ${pOnlyOneError ? pOnlyOneError : 'SOURCEPATH, MANIFEST or METADATA'}`;
        
                        event.target.checked = false;
        
                        tsvscode.postMessage({
                            type: 'onError',
                            value: errorMsg
                        });
        
                        return;
                    }
                }
        
                if($mapSectionValidation[pSectionName] === 0){
                    $mapSectionValidation[pSectionName] = 1;
        
                    $mapShowSections[pSectionName] = event.target.checked;
                }else{
                    $mapShowSections[pSectionName] = event.target.checked;
                }
            }else{
                $mapShowSections[pSectionName] = event.target.checked;
            }
        }else{
            $mapShowSections[pSectionName] = event.target.checked;

            if($mapSectionValidation[pSectionName]){
                $mapSectionValidation[pSectionName] = 0;
            }
        }
    }

    function onShowFilePick(type) {
        $pickFileType = type;

        tsvscode.postMessage({
            type: 'onShowFilePick'
        });
    }
</script>

<div class="col align-self-center sfdxet-br">
    <Title pRequired={required} pSFDXParameter="-f" sectionName={sectionUCase} elementName={fileName} fileName={fileName} onlyOneError={onlyOneError}/>
    <Documentation headerD={sectionUCase} typeD={mapDoc.type} bodyD={mapDoc.body} sectionName={fileName}/>

    {#if $mapShowSections.apexcodefile}
        <section class="sfdxet-section sfdxet-br">
            <button class="sfdxet-buttons {$mapErrors.apexcodefile}" on:click={() => {onShowFilePick(`${fileName}`)}}>Set the Apex File</button>
            <br/>
            <br/>
            <label for={fileName}>
                <span title={js.mapTooltips["manuallyDefine"]} use:tooltipv1>Manually define</span> 
                <input type="checkbox" id={fileName} name={fileName} on:change={e => { handleShowSections(e, "apexcodefile2", null) }}> 
            </label>
            {#if $mapShowSections.apexcodefile2}
                <input 
                    type="text" 
                    class="sfdxet-absolute-center" 
                    title={$mapInputVariables.apexcodefile} 
                    use:tooltipv1 
                    placeholder={defaultFolder} 
                    bind:value={$mapInputVariables.apexcodefile2}
                />
            {/if}
        </section>
    {/if}
</div>
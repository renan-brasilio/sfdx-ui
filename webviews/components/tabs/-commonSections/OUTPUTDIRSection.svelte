<svelte:options accessors/>

<script>
    // Helper Files
    import * as js from "../-helperFiles/GlobalJS";
    import { tooltip as tooltipv1 } from "../--tooltip/tooltip.v1";
    import Title from "../-commonPages/Title.svelte";
    import Documentation from "../-commonPages/Documentation.svelte";

    // Store
    import { 
        mapErrors, 
        mapInputVariables, 
        mapSectionValidation, 
        mapShowSections, 
        objSFDX, 
        pickFolderType
    } from "../-helperFiles/GlobalStore";

    // Default
    let fileName = "outputdir";
    let sectionUCase = fileName.toUpperCase();

    // Parameters
    export let mapDoc;
    export let required = false;
    export let onlyOneError = "";
    export let defaultFolder = "";
    export let pSFDXParameter = "-d";

    // Documentation
    let type = `<b><i>Optional</i></b>`;
    let body = `
        <br/><br/>
        A source directory other than the default package to convert.
        <br/><br/>
        Type: directory
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

    function showFolderPick(type) {
        $pickFolderType = type;

        tsvscode.postMessage({
            type: "onShowFolderPick"
        });
    }

    export async function validate(){
        let valid = true;

        return await new Promise(function(resolve, reject) {
            if($mapShowSections.outputdir){
            $objSFDX.terminal += ` ${pSFDXParameter} `;
    
            if($mapShowSections.outputdir2){
                if($mapInputVariables.outputdir2){
                    $mapErrors.outputdir2 = "";
                    $objSFDX.terminal += $mapInputVariables.outputdir2;
                }
            }else if($mapInputVariables.outputdir){
                $mapErrors.outputdir = "";
                $objSFDX.terminal += $mapInputVariables.outputdir;
            }else{
                $mapErrors.outputdir = "sfdxet-error-span";
    
                tsvscode.postMessage({
                    type: "onError",
                    value: `ERROR: Please select/insert a Folder or uncheck the [${pSFDXParameter} OUTPUTDIR] checkbox.` 
                });

                valid = false;
            }
        }

            resolve(valid);
        });
    }
</script>

<div class="col align-self-center sfdxet-br">
    <Title pRequired={required} pSFDXParameter={pSFDXParameter} sectionName={sectionUCase} elementName={fileName} fileName={fileName} onlyOneError={onlyOneError}/>
    <Documentation headerD={sectionUCase} typeD={mapDoc.type} bodyD={mapDoc.body} sectionName={fileName}/>

    {#if $mapShowSections.outputdir}
        <section class="sfdxet-section sfdxet-br">
            <button class="sfdxet-buttons {$mapErrors.outputdir}" on:click={() => {showFolderPick(`${fileName}`)}}>Set Folder Path</button>
            <br/>
            <br/>
            <label for={fileName}>
                <span title={js.mapTooltips["manuallyDefine"]} use:tooltipv1>Manually define</span> 
                <input type="checkbox" id={fileName} name={fileName} on:change={e => { handleShowSections(e, "outputdir2", null) }}> 
            </label>
            {#if $mapShowSections.outputdir2}
                <input 
                    type="text" 
                    class="sfdxet-absolute-center" 
                    title={$mapInputVariables.outputdir} 
                    use:tooltipv1 
                    placeholder={defaultFolder} 
                    bind:value={$mapInputVariables.outputdir2}
                />
            {/if}
        </section>
    {/if}
</div>
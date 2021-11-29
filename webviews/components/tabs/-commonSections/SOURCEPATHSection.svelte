<script>
    import * as js from "../-helperFiles/GlobalJS";
    import { tooltip as tooltipv1 } from "../--tooltip/tooltip.v1";
    import { mapInputVariables, mapShowSections, mapSectionValidation, showDebug, pickFolderType, mapErrors } from "../-helperFiles/GlobalStore";
    import Title from "../-commonPages/Title.svelte";
    import Documentation from "../-commonPages/Documentation.svelte";

    let fileName = "sourcepath";
    let sectionUCase = fileName.toUpperCase();

    export let mapDoc;
    export let required = false;
    export let onlyOneError = "";

    let type = `<b><i>Optional</i></b>`;
    let body = `
        <br/><br/>
        A comma-separated list of file paths for source to retrieve from the org. The supplied paths can be to a single file (in which case the operation is applied to only one file) or to a folder (in which case the operation is applied to all source files in the directory and its sub-directories).
        <br/><br/>
        If you specify this parameter, don’t specify --manifest or --metadata.
        <br/><br/>
        Type: array
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
</script>

<div class="col align-self-center sfdxet-br">
    <Title pRequired={required} pSFDXParameter="-p" sectionName={sectionUCase} elementName={fileName} fileName={fileName} onlyOneError={onlyOneError}/>
    <Documentation headerD={sectionUCase} typeD={mapDoc.type} bodyD={mapDoc.body} sectionName={fileName}/>

    {#if $mapShowSections.sourcepath}
        <section class="sfdxet-section sfdxet-br">
            <button class="sfdxet-buttons {$mapErrors.sourcepath}" on:click={() => {showFolderPick("sourcepath")}}>Set Folder Path</button>
            <br/>
            <br/>
            <label for="sourcepath">
                <span title={js.mapTooltips["tSOURCEPATH2"]} use:tooltipv1>Manually define</span> <input type="checkbox" id="sourcepath" name="sourcepath" on:change={e => { handleShowSections(e, "sourcepath2", null) }}> 
            </label>
            {#if $mapShowSections.sourcepath2}
                <input type="text" class="sfdxet-absolute-center" title={$mapInputVariables.sourcepath} use:tooltipv1 placeholder="Insert..." bind:value={$mapInputVariables.sourcepath2}/>
            {/if}
        </section>
    {/if}
</div>
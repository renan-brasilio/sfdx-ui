<script>
    import * as js from "../-helperFiles/GlobalJS";
    import { tooltip as tooltipv1 } from "../--tooltip/tooltip.v1"
    import { mapInputVariables, mapShowSections, mapSectionValidation, pickFolderType, mapErrors } from "../-helperFiles/GlobalStore";
    import Title from "../--collapsible/Title.svelte";
    import Documentation from "../--collapsible/Documentation.svelte";

    let fileName = "rootdir";
    let sectionUCase = fileName.toUpperCase();

    export let mapDoc;
    export let required = false;
    export let onlyOneError = "";

    let type = `<b><i>Optional</i></b>`;
    let body = `
        <br/><br/>
        Output directory to store the Metadata API–formatted files in.
        <br/><br/>
        Type: directory<br/>
        Default value: metadataPackage_1636067288937
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
    
    function handleShowSections(event, sectionName){
        if(event.target.checked === true){
            let selected;
            
            if($mapSectionValidation && js.listValidation.includes(sectionName)){
                for(let key in $mapSectionValidation){
                    if($mapSectionValidation[key] === 1){
                        selected = key;
        
                        event.target.checked = false;
        
                        tsvscode.postMessage({
                            type: "onError",
                            value: `ERROR: You already selected: ${selected.toUpperCase()}, Select only one between: SOURCEPATH, MANIFEST or METADATA` 
                        });
        
                        return;
                    }
                }
        
                if($mapSectionValidation[sectionName] === 0){
                    $mapSectionValidation[sectionName] = 1;
        
                    $mapShowSections[sectionName] = event.target.checked;
                }else{
                    $mapShowSections[sectionName] = event.target.checked;
                }
            }else{
                $mapShowSections[sectionName] = event.target.checked;
            }
        }else{
            $mapShowSections[sectionName] = event.target.checked;

            if($mapSectionValidation[sectionName]){
                $mapSectionValidation[sectionName] = 0;
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
    <Title pRequired={required} sectionTag="-r" sectionName={sectionUCase} elementName={fileName} fileName={fileName} onlyOneError={onlyOneError}/>
    <Documentation headerD={sectionUCase} typeD={mapDoc.type} bodyD={mapDoc.body} sectionName={fileName}/>

    {#if $mapShowSections.rootdir}
        <section class="sfdxet-section sfdxet-br">
            <button class="sfdxet-buttons {$mapErrors.rootdir}" on:click={() => {showFolderPick("rootdir")}}>Set Folder Path</button>
            <br/>
            <br/>
            <label for="rootdir">
                <span title={js.mapTooltips["tROOTDIR2"]} use:tooltipv1>Manually define</span> <input type="checkbox" id="rootdir" name="rootdir" on:change={e => { handleShowSections(e, "rootdir2") }}> 
            </label>
            {#if $mapShowSections.rootdir2}
                <input type="text" class="sfdxet-absolute-center" title={$mapInputVariables.rootdir} use:tooltipv1 placeholder="Insert..." bind:value={$mapInputVariables.rootdir2}/>
            {/if}
        </section>
    {/if}
</div>
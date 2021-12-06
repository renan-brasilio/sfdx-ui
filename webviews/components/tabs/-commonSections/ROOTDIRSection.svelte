<svelte:options accessors/>

<script>
    // Helper Files
    import * as js from "../-helperFiles/GlobalJS";
    import { tooltip as tooltipv1 } from "../--tooltip/tooltip.v1"
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
    let fileName = "rootdir";
    let sectionUCase = fileName.toUpperCase();

    // Parameters
    export let mapDoc;
    export let required = false;
    export let onlyOneError = "";
    export let pSFDXParameter = "-r";

    // Documentation
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
            if($mapShowSections.rootdir){
                if($mapInputVariables.rootdir){
                    $mapErrors.rootdir = '';
                    $objSFDX.terminal += ` ${pSFDXParameter} ${$mapInputVariables.rootdir}`;
                }else{
                    $mapErrors.rootdir = 'sfdxet-error-button';

                    tsvscode.postMessage({
                        type: 'onError',
                        value: `ERROR: Please select a Folder or uncheck the [${pSFDXParameter} ROOTDIR] checkbox.` 
                    });

                    valid = false;
                }
            }else{
                $mapErrors.rootdir = '';
            }

            resolve(valid);
        });
    }
</script>

<div class="col align-self-center sfdxet-br">
    <Title pRequired={required} pSFDXParameter={pSFDXParameter} sectionName={sectionUCase} elementName={fileName} fileName={fileName} onlyOneError={onlyOneError}/>
    <Documentation pHeader={sectionUCase} typeD={mapDoc.type} bodyD={mapDoc.body} sectionName={fileName}/>

    {#if $mapShowSections.rootdir}
        <section class="sfdxet-section sfdxet-br">
            <button class="sfdxet-buttons {$mapErrors.rootdir}" on:click={() => {showFolderPick("rootdir")}}>Set Folder Path</button>
            <br/>
            <br/>
            <label for="rootdir">
                <span title={js.mapTooltips["tROOTDIR2"]} use:tooltipv1>Manually define</span> <input type="checkbox" id="rootdir" name="rootdir" on:change={e => { handleShowSections(e, "rootdir2", null) }}> 
            </label>
            {#if $mapShowSections.rootdir2}
                <input type="text" class="sfdxet-absolute-center" title={$mapInputVariables.rootdir} use:tooltipv1 placeholder="Insert..." bind:value={$mapInputVariables.rootdir2}/>
            {/if}
        </section>
    {/if}
</div>
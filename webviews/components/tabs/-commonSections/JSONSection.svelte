<svelte:options accessors/>

<script>
    // Helper Files
    import * as js from "../-helperFiles/GlobalJS";
    import { tooltip as tooltipv1 } from "../--tooltip/tooltip.v1";
    import Title from "../-commonPages/Title.svelte";
    import Documentation from "../-commonPages/Documentation.svelte";

    // Store
    import { 
        mapInputVariables, 
        mapSectionValidation, 
        mapShowSections, 
        objSFDX, 
    } from "../-helperFiles/GlobalStore";

    // Default
    let fileName = "json";
    let sectionUCase = fileName.toUpperCase();

    // Parameters
    export let mapDoc;
    export let required = false;
    export let onlyOneError = "";
    export let pSFDXParameter = "--json";

    // Documentation
    let type = `<b><i>Optional</i></b>`;
    let body = `
        <br/><br/>
        Format output as JSON.<br/><br/>
        Type: boolean
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

    export async function validate(){
        let valid = true;

        return await new Promise(function(resolve, reject) {
            if($mapShowSections.json){
                $objSFDX.terminal += ` ${pSFDXParameter} > `;
                
                if($mapInputVariables.json){
                    $objSFDX.terminal += $mapInputVariables.json;
                }else{
                    $objSFDX.terminal += "output.json";
                }
            }
    
            if($mapInputVariables.json2){
                $objSFDX.pJSON = ` ${pSFDXParameter}`;
                $objSFDX.vJSONPath = $mapInputVariables.json2;
    
                if($mapInputVariables.json){
                    $objSFDX.vJSON += $mapInputVariables.json;
                }
            }

            resolve(valid);
        });
    }
</script>

<div class="col align-self-center sfdxet-br">
    <Title pRequired={required} pSFDXParameter={pSFDXParameter} elementName={fileName} fileName={fileName} onlyOneError={onlyOneError}/>
    <Documentation headerD={sectionUCase} typeD={mapDoc.type} bodyD={mapDoc.body} sectionName={fileName}/>
    
    {#if $mapShowSections.json}
        <h4 class="sfdxet-br"><b>JSON Options:</b></h4>
        <section class="sfdxet-section">
            <label for="jsoninput">
                JSON File Name
                <input 
                    type="text" 
                    id="jsoninput" 
                    name="jsoninput" 
                    class="sfdxet-absolute-center" 
                    title="Insert the JSON filename (don't include .json), or leave blank for the default: output" 
                    use:tooltipv1 
                    placeholder="output" 
                    bind:value={$mapInputVariables.json}
                />
            </label>
            <br/>
    
            <label for="json2">
                <span 
                    title={js.mapTooltips["tJSON2"]} 
                    use:tooltipv1 
                    class="sfdxet-inner-span"
                >Define output folder?</span> 
                <input 
                    type="checkbox" 
                    id="json2" 
                    name="json2" 
                    on:change={e => { handleShowSections(e, "json2", null) }}
                > 
            </label>
            <br/>
            <br/>
    
            {#if $mapShowSections.json2}
                <button class="sfdxet-buttons" on:click={() => {js.showFolderPick("json2")}} title={js.mapTooltips["tJSON2"]} use:tooltipv1>Set Folder Path</button>
                <br/>
                <br/>
                <label for="json3">
                    <span 
                        title={js.mapTooltips["tJSON3"]} 
                        use:tooltipv1 
                        class="sfdxet-inner-span"
                    >Manually define</span> <input type="checkbox" id="json3" name="json3" on:change={e => { handleShowSections(e, "json3", null) }}> 
                </label>
                {#if $mapShowSections.json3}
                    <br/>
                    <br/>
                    <label for="jsonpath">
                        JSON Folder Path
                        <input 
                            type="text" 
                            id="jsonpath" 
                            name="jsonpath" 
                            class="sfdxet-absolute-center" 
                            disabled={!$mapShowSections.json3} 
                            title={$mapInputVariables.json2} 
                            use:tooltipv1 
                            placeholder="Insert..." 
                            bind:value={$mapInputVariables.json2}
                        />
                    </label>
                {/if}
                <br/>
            {/if}
        </section>
    {/if}
</div>
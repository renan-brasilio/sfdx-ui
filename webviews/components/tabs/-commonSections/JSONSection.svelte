<script>
    import * as js from "../-helperFiles/GlobalJS";
    import { tooltip as tooltipv1 } from '../--tooltip/tooltip.v1'
    import { mapInputVariables } from "../-helperFiles/GlobalStore"
    import { mapShowSections } from "../-helperFiles/GlobalStore"
    import { mapSectionValidation } from "../-helperFiles/GlobalStore";
    import { showDebug } from "../-helperFiles/GlobalStore";

    let fileName = 'JSONSection';
    
    function handleShowSections(event, sectionName){
        let methodName = 'handleShowSections()';
        
        if($showDebug){
            console.info(fileName + '.' + methodName + ' - event: ');
            console.info(event);
            console.info(fileName + '.' + methodName + ' - sectionName: ' + sectionName);
        }
        
        if(event.target.checked === true){
            let selected;
            
            if($mapSectionValidation && js.listValidation.includes(sectionName)){
                for(let key in $mapSectionValidation){
                    if($mapSectionValidation[key] === 1){
                        selected = key;
        
                        event.target.checked = false;
        
                        tsvscode.postMessage({
                            type: 'onError',
                            value: `ERROR: You already selected: ${selected}, Select only one between: SOURCEPATH, MANIFEST or METADATA` 
                        });
        
                        return;
                    }else{
                        break;
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
</script>

<label for="json">
    <span title={js.mapTooltips['tJSON']} use:tooltipv1>[--json]</span> <input type="checkbox" id="json" name="json" on:change={e => { handleShowSections(e, 'json') }}>
</label>
<br/>

{#if $mapShowSections.json}
    <br/>
    <section class="sfdxet-section">
        <label for="jsoninput">
            JSON File Name
            <input type="text" id="jsoninput" name="jsoninput" class="sfdxet-absolute-center" title="Insert the JSON filename (don't include .json), or leave blank for the default: output" use:tooltipv1 placeholder="output" bind:value={$mapInputVariables.json}/>
        </label>
        <br/>

        <label for="json2">
            <span title={js.mapTooltips['tJSON2']} use:tooltipv1 class="sfdxet-inner-span">Define output folder?</span> <input type="checkbox" id="json2" name="json2" on:change={e => { handleShowSections(e, 'json2') }}> 
        </label>
        <br/>
        <br/>

        {#if $mapShowSections.json2}
            <button class="sfdxet-buttons" on:click={() => {js.showFolderPick('json2')}} title={js.mapTooltips['tJSON2']} use:tooltipv1>Set Folder Path</button>
            <br/>
            <br/>
            <label for="json3">
                <span title={js.mapTooltips['tJSON3']} use:tooltipv1 class="sfdxet-inner-span">Manually define</span> <input type="checkbox" id="json3" name="json3" on:change={e => { handleShowSections(e, 'json3') }}> 
            </label>
            {#if $mapShowSections.json3}
                <br/>
                <br/>
                <label for="jsonpath">
                    JSON Folder Path
                    <input type="text" id="jsonpath" name="jsonpath" class="sfdxet-absolute-center" disabled={!$mapShowSections.json3} title={$mapInputVariables.json2} use:tooltipv1 placeholder="Insert..." bind:value={$mapInputVariables.json2}/>
                </label>
            {/if}
            <br/>
        {/if}
    </section>
    <br/>
{/if}
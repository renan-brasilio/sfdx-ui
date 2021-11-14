<script>
    import * as js from "../-helperFiles/GlobalJS";
    import { tooltip as tooltipv1 } from '../--tooltip/tooltip.v1'
    import { mapShowSections } from '../-helperFiles/GlobalStore';
    import { mapInputVariables } from '../-helperFiles/GlobalStore';
    import { showDebug } from '../-helperFiles/GlobalStore';
    import { mapSectionValidation } from '../-helperFiles/GlobalStore';

    let fileName = 'WAITSection';
    
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

<br/>
<label for="wait">
    <span title={js.mapTooltips['tWAIT']} use:tooltipv1>[-w WAIT]</span> <input type="checkbox" id="wait" name="wait" on:change={e => { handleShowSections(e, 'wait') }}> 
</label>
<br/>

{#if $mapShowSections.wait}
    <br/>
    <section class="sfdxet-section">
        <input type="number" on:keypress={e => {if(e.key==='.'){e.preventDefault();}}} on:input={e => {e.target.value = e.target.value.replace(/[^0-9]*/g,'');}} class="sfdxet-absolute-center" title="Type: minutes; Default value: 33 minutes." use:tooltipv1 placeholder="33" bind:value={$mapInputVariables.wait}/>
    </section>
    <br/>
{/if}
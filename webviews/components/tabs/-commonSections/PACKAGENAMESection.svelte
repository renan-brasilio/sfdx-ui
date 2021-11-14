<script>
    import * as js from "../-helperFiles/GlobalJS";
    import { tooltip as tooltipv1 } from '../--tooltip/tooltip.v1'
    import { mapInputVariables } from "../-helperFiles/GlobalStore"
    import { mapShowSections } from "../-helperFiles/GlobalStore"
    import { mapSectionValidation } from "../-helperFiles/GlobalStore";
    import { showDebug } from "../-helperFiles/GlobalStore";
    import { mapErrors } from "../-helperFiles/GlobalStore";

    let fileName = 'ADVANCEDSection';
    
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
<label for="packagename">
    <span title={js.mapTooltips['tPACKAGENAME']} use:tooltipv1>[-n PACKAGENAME]</span> <input type="checkbox" id="packagename" name="packagename" on:change={e => { handleShowSections(e, 'packagename') }}>
</label>
<br/>

{#if $mapShowSections.packagename}
    <br/>
    <section class="sfdxet-section">
        <label for="advancedinput">
            Package Name
            <input type="text" id="advancedinput" name="advancedinput" class="sfdxet-absolute-center sfdxet-error-button {$mapErrors.packagename}" title={js.mapTooltips['tPACKAGENAME']} use:tooltipv1 placeholder="Insert..." bind:value={$mapInputVariables.packagename}/>
        </label>
        <br/>
    </section>
    <br/>
{/if}
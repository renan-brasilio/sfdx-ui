<script>
    import * as js from "../-helperFiles/GlobalJS";
    import { tooltip as tooltipv1 } from '../--tooltip/tooltip.v1'
    import { mapInputVariables } from "../-helperFiles/GlobalStore"
    import { mapShowSections } from "../-helperFiles/GlobalStore"
    import { mapSectionValidation } from "../-helperFiles/GlobalStore";
    import { showDebug } from "../-helperFiles/GlobalStore";
    import { pickFolderType } from "../-helperFiles/GlobalStore";
    import { mapErrors } from "../-helperFiles/GlobalStore";

    let fileName = 'MANIFESTSection';
    
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
            type: 'onShowFolderPick'
        });
    }
</script>

<br/>
<label for="manifest">
    <span title={js.mapTooltips['tMANIFEST']} use:tooltipv1 class={$mapErrors.manifest}>*[-x MANIFEST]</span> <input type="checkbox" id="manifest" name="manifest" on:change={e => { handleShowSections(e, 'manifest') }}> 
</label>
<br/>

{#if $mapShowSections.manifest}
    <br/>
    <section class="sfdxet-section">
        <button class="sfdxet-buttons" on:click={() => {showFolderPick('manifest')}}>Select File</button>
        <br/>
        <br/>
        {#if $mapShowSections.manifest2}
            <input type="text" class="sfdxet-absolute-center" title={$mapInputVariables.manifest} use:tooltipv1 value={$mapInputVariables.manifest} disabled/>
        {/if}
    </section>
    <br/>
{/if}
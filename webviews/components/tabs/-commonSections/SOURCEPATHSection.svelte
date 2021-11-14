<script>
    import * as js from "../-helperFiles/GlobalJS";
    import { tooltip as tooltipv1 } from '../--tooltip/tooltip.v1'
    import { mapInputVariables } from "../-helperFiles/GlobalStore"
    import { mapShowSections } from "../-helperFiles/GlobalStore"
    import { mapSectionValidation } from "../-helperFiles/GlobalStore";
    import { showDebug } from "../-helperFiles/GlobalStore";
    import { pickFolderType } from "../-helperFiles/GlobalStore";
    import { mapErrors } from "../-helperFiles/GlobalStore";

    let fileName = 'SOURCEPATHSection';
    
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
<label for="sourcepath">
    <span title={js.mapTooltips['tSOURCEPATH']} use:tooltipv1 class={$mapErrors.sourcepath}>*[-p SOURCEPATH]</span> <input type="checkbox" id="sourcepath" name="sourcepath" on:change={e => { handleShowSections(e, 'sourcepath') }}> 
</label>
<br/>

{#if $mapShowSections.sourcepath}
    <br/>
    <section class="sfdxet-section">
        <button class="sfdxet-buttons {$mapErrors.sourcepath}" on:click={() => {showFolderPick('sourcepath')}}>Set Folder Path</button>
        <br/>
        <br/>
        <label for="sourcepath">
            <span title={js.mapTooltips['tSOURCEPATH2']} use:tooltipv1>Manually define</span> <input type="checkbox" id="sourcepath" name="sourcepath" on:change={e => { handleShowSections(e, 'sourcepath2') }}> 
        </label>
        {#if $mapShowSections.sourcepath2}
            <input type="text" class="sfdxet-absolute-center" title={$mapInputVariables.sourcepath} use:tooltipv1 placeholder="Insert..." bind:value={$mapInputVariables.sourcepath2}/>
        {/if}
    </section>
    <br/>
{/if}
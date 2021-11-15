<script>
    import * as js from "../-helperFiles/GlobalJS";
    import { tooltip as tooltipv1 } from '../--tooltip/tooltip.v1'
    import { mapInputVariables } from "../-helperFiles/GlobalStore"
    import { mapShowSections } from "../-helperFiles/GlobalStore"
    import { mapSectionValidation } from "../-helperFiles/GlobalStore";
    import { showDebug } from "../-helperFiles/GlobalStore";
    import { pickFolderType } from "../-helperFiles/GlobalStore";
    import { mapErrors } from "../-helperFiles/GlobalStore";
    import CollapsibleSection from "../--collapsible/CollapsibleSection.svelte";

    let fileName = 'SOURCEPATHSection';

    export let mapDocument;
    export let required = false;

    let type = `<b><i>Optional</i></b>`;
    let body = `
            <br/><br/>
            A comma-separated list of file paths for source to retrieve from the org. The supplied paths can be to a single file (in which case the operation is applied to only one file) or to a folder (in which case the operation is applied to all source files in the directory and its sub-directories).
            <br/><br/>
            If you specify this parameter, don’t specify --manifest or --metadata.
            <br/><br/>
            Type: array
        `;

    if(!mapDocument){ // Default
        mapDocument = {
            type: type,
            body: body
        };
    }else{
        if(!mapDocument.type){
            mapDocument.type = type;
        }

        if(!mapDocument.body){
            mapDocument.body = body;
        }
    }
    
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
    <span title={js.mapTooltips['defaultSection']} use:tooltipv1 class:sfdxet-required={required} class:sfdxet-error-span={$mapErrors.sourcepath}>{required ? '*' : ''}[-p SOURCEPATH]</span> <input type="checkbox" id="sourcepath" name="sourcepath" on:change={e => { handleShowSections(e, 'sourcepath') }}> 
</label>
<br/>

{#if $mapShowSections.sourcepath}
    <br/>
    <CollapsibleSection headerText={'Documentation'}>
        <div class="content">
            {@html mapDocument.type}
            {@html mapDocument.body}
        </div>
        <br/>
    </CollapsibleSection>
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
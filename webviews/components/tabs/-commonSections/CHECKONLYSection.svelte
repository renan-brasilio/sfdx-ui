<script>
    import * as js from "../-helperFiles/GlobalJS";
    import { tooltip as tooltipv1 } from '../--tooltip/tooltip.v1'
    import { mapShowSections } from "../-helperFiles/GlobalStore"
    import { mapSectionValidation } from "../-helperFiles/GlobalStore";
    import { showDebug } from "../-helperFiles/GlobalStore";
    import { mapErrors } from "../-helperFiles/GlobalStore";
    import CollapsibleSection from "../--collapsible/CollapsibleSection.svelte";

    let fileName = 'CHECKONLYSection';

    export let mapDocument;
    export let required = false;

    let type = `<b><i>Optional</i></b>`;
    let body = `
            <br/><br/>
            Validates the deleted metadata and runs all Apex tests, but prevents the deletion from being saved to the org.
            <br/><br/>
            If you change a field type from Master-Detail to Lookup or vice versa, that change isn’t supported when using the --checkonly parameter to test a deletion (validation). This kind of change isn’t supported for test deletions to avoid the risk of data loss or corruption. If a change that isn’t supported for test deletions is included in a deletion package, the test deletion fails and issues an error.
            <br/><br/>
            If your deletion package changes a field type from Master-Detail to Lookup or vice versa, you can still validate the changes prior to deploying to Production by performing a full deletion to another test Sandbox. A full deletion includes a validation of the changes as part of the deletion process.
            <br/><br/>
            Note: A Metadata API deletion that includes Master-Detail relationships deletes all detail records in the Recycle Bin in the following cases.
            <br/><br/>
            1. For a deletion with a new Master-Detail field, soft delete (send to the Recycle Bin) all detail records before proceeding to delete the Master-Detail field, or the deletion fails. During the deletion, detail records are permanently deleted from the Recycle Bin and cannot be recovered.
            <br/><br/>
            2. For a deletion that converts a Lookup field relationship to a Master-Detail relationship, detail records must reference a master record or be soft-deleted (sent to the Recycle Bin) for the deletion to succeed. However, a successful deletion permanently deletes any detail records in the Recycle Bin.
            <br/><br/>
            Type: boolean
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
<label for="checkonly">
    <span title={js.mapTooltips['defaultSection']} use:tooltipv1 class:sfdxet-required={required} class:sfdxet-error-span={$mapErrors.checkonly}>{required ? '*' : ''}[-c CHECKONLY]</span> <input class="{$mapErrors.checkonly}" type="checkbox" id="checkonly" name="checkonly" on:change={e => { handleShowSections(e, 'checkonly') }}>
</label>
<br/>

{#if $mapShowSections.checkonly}
    <br/>
    <CollapsibleSection headerText={'Documentation'}>
        <div class="content">
            {@html mapDocument.type}
            {@html mapDocument.body}
        </div>
        <br/>
    </CollapsibleSection>
    <br/>
{/if}
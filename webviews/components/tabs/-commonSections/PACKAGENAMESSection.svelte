<script>
    import * as js from "../-helperFiles/GlobalJS";
    import { tooltip as tooltipv1 } from '../--tooltip/tooltip.v1'
    import { mapInputVariables } from "../-helperFiles/GlobalStore"
    import { mapShowSections } from "../-helperFiles/GlobalStore"
    import { mapSectionValidation } from "../-helperFiles/GlobalStore";
    import { showDebug } from "../-helperFiles/GlobalStore";
    import { mapErrors } from "../-helperFiles/GlobalStore";
    import CollapsibleSection from "../--collapsible/CollapsibleSection.svelte";

    let fileName = 'PACKAGENAMESSection';

    export let mapDocument;
    export let required = false;

    let type = `<b><i>Optional</i></b>`;
    let body = `
            <br/><br/>
            A comma-separated list of packages to retrieve.
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
<label for="packagenames">
    <span title={js.mapTooltips['defaultSection']} use:tooltipv1 class:sfdxet-required={required} class:sfdxet-error-span={$mapErrors.packagenames}>{required ? '*' : ''}[-n PACKAGENAMES]</span> <input type="checkbox" id="packagenames" name="packagenames" on:change={e => { handleShowSections(e, 'packagenames') }}>
</label>
<br/>

{#if $mapShowSections.packagenames}
    <br/>
    <CollapsibleSection headerText={'Documentation'}>
        <div class="content">
            {@html mapDocument.type}
            {@html mapDocument.body}
        </div>
        <br/>
    </CollapsibleSection>
    <section class="sfdxet-section">
        <label for="packagenamesinput">
            Package(s) Name(s)
            <input type="text" id="packagenamesinput" name="packagenamesinput" class="sfdxet-absolute-center {$mapErrors.packagenames}" title="Insert the Package(s) filename(s) (comma-separated), Ex: MyPackage1, MyPackage1" use:tooltipv1 placeholder="Package name..." bind:value={$mapInputVariables.packagenames}/>
        </label>
        <br/>
    </section>
    <br/>
{/if}
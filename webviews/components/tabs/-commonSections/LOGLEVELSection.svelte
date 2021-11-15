<script>
    import * as js from "../-helperFiles/GlobalJS";
    import Select from 'svelte-select'
    import { tooltip as tooltipv1 } from '../--tooltip/tooltip.v1'
    import { mapShowSections } from '../-helperFiles/GlobalStore';
    import { mapInputVariables } from '../-helperFiles/GlobalStore';
    import { showDebug } from '../-helperFiles/GlobalStore';
    import { mapSectionValidation } from '../-helperFiles/GlobalStore';
    import { mapErrors } from '../-helperFiles/GlobalStore';
    import CollapsibleSection from "../--collapsible/CollapsibleSection.svelte";

    let fileName = 'LOGLEVELSection';

    export let mapDocument;
    export let required = false;

    let type = `<b><i>Optional</i></b>`;
    let body = `
            <br/><br/>            
            The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log.
            <br/><br/>
            Type: enum<br/>
            Permissible values are: trace, debug, info, warn, error, fatal, TRACE, DEBUG, INFO, WARN, ERROR, FATAL<br/>
            Default value: warn
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

    $mapInputVariables.loglevel = 'warn';
    
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

    function handleSelect(event, inputName, isMulti) {
        if(event.type === "select" && event.detail){
            if(isMulti && event.detail){
                if($mapInputVariables[inputName]){
                    for(let i=0; i < event.detail.length; i++){
                        if(!$mapInputVariables[inputName].includes(event.detail[i].value)){
                            $mapInputVariables[inputName].push(event.detail[i].value);
                        }
                    }
                }else{
                    $mapInputVariables[inputName] = [];
                    $mapInputVariables[inputName].push(event.detail[0].value);
                }
            }else{
                $mapInputVariables[inputName] = event.detail.value;
            }
        }
    }

    function handleSelectClear(event, inputName, isMulti) {
        if(event.type === "clear"){
            if(isMulti){
                if($mapInputVariables[inputName]){
                    if(event.detail){
                        for(let i=0; i < $mapInputVariables[inputName].length; i++){
                            if($mapInputVariables[inputName][i].includes(event.detail.value)){
                                $mapInputVariables[inputName].splice(i, 1);
                                break;
                            }
                        }
                    }else{
                        for(let i=0; i < $mapInputVariables[inputName].length; i++){
                            $mapInputVariables[inputName].splice(i, 1);
                        }
                    }
                }
            }else{
                $mapInputVariables[inputName] = '';
            }
        }
    }
</script>

<br/>
<label for="loglevel">
    <span title={js.mapTooltips['defaultSection']} use:tooltipv1 class={required ? 'sfdxet-required' : ''}>{required ? '*' : ''}[--loglevel LOGLEVEL]</span> <input type="checkbox" id="loglevel" name="loglevel" on:change={e => { handleShowSections(e, 'loglevel') }}>
</label>
<br/>

{#if $mapShowSections.loglevel}
    <br/>
    <CollapsibleSection headerText={'Documentation'}>
        <div class="content">
            {@html mapDocument.type}
            {@html mapDocument.body}
        </div>
        <br/>
    </CollapsibleSection>
    <section class="sfdxet-section">
        <div class="sfdxet-select-theme sfdxet-absolute-center {$mapErrors.loglevel}">
            <Select id="loglevelsel" items={js.lLOGLEVEL} on:select={e => { handleSelect(e, 'loglevel', false) }} on:clear={e => { handleSelectClear(e, 'loglevel', false) }} value={$mapInputVariables.loglevel}></Select>
        </div>
    </section>
{/if}
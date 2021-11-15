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

    let fileName = 'TESTLEVELSection';

    export let mapDocument;
    export let required = false;

    let type = `<b><i>Optional</i></b>`;
    let body = `
            <br/><br/>            
            Specifies which level of deployment tests to run. Valid values are:
            <br/><br/>
            NoTestRun—No tests are run. This test level applies only to deployments to development environments, such as sandbox, Developer Edition, or trial orgs. This test level is the default for development environments.
            <br/><br/>
            RunLocalTests—All tests in your org are run, except the ones that originate from installed managed packages. This test level is the default for production deployments that include Apex classes or triggers.
            <br/><br/>
            RunAllTestsInOrg—All tests in your org are run, including tests of managed packages.
            <br/><br/>
            If you don’t specify a test level, the default behavior depends on the contents of your deployment package. For more information, see “Running Tests in a Deployment” in the Metadata API Developer Guide.
            <br/><br/>
            Type: enum<br/>
            Permissible values are: NoTestRun, RunLocalTests, RunAllTestsInOrg<br/>
            Default value: NoTestRun
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

    $mapInputVariables.testlevel = 'NoTestRun';
    
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
<label for="testlevel">
    <span title={js.mapTooltips['defaultSection']} use:tooltipv1 class={required ? 'sfdxet-required' : ''}>{required ? '*' : ''}[-l TESTLEVEL]</span> <input type="checkbox" id="testlevel" name="testlevel" on:change={e => { handleShowSections(e, 'testlevel') }}>
</label>
<br/>

{#if $mapShowSections.testlevel}
    <br/>
    <CollapsibleSection headerText={'Documentation'}>
        <div class="content">
            {@html mapDocument.type}
            {@html mapDocument.body}
        </div>
        <br/>
    </CollapsibleSection>
    <section class="sfdxet-section">
        <div class="sfdxet-select-theme sfdxet-absolute-center {$mapErrors.testlevel}">
            <Select id="testlevelsel" items={js.lTESTLEVEL} on:select={e => { handleSelect(e, 'testlevel', false) }} on:clear={e => { handleSelectClear(e, 'testlevel', false) }} value={$mapInputVariables.testlevel}></Select>
        </div>
    </section>
{/if}
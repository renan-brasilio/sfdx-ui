<script>
    import * as js from "../-helperFiles/GlobalJS";
    import { mapErrors, mapSectionValidation, mapShowSections, mapDocument } from "../-helperFiles/GlobalStore";

    export let pRequired = false;
    export let sectionTag = '';
    export let sectionName = '';
    export let elementName = '';
    export let fileName = '';
    export let onlyOneError = '';
    export let pStyle = '';
    export let pClass = '';

    function handleShowSections(event, pSectionName, pOnlyOneError){
        console.log(`event: ${JSON.stringify(event)}`);
        console.log(`pSectionName: ${pSectionName}`);
        console.log(`pOnlyOneError: ${pOnlyOneError}`);
        console.log(`$mapSectionValidation: ${JSON.stringify($mapSectionValidation)}`);
        console.log(`js.listValidation: ${JSON.stringify(js.listValidation)}`);
        if(event.target.checked === true){
            if($mapSectionValidation[pSectionName] && js.listValidation.includes(pSectionName)){
                for(let key in $mapSectionValidation){
                    console.log(`$mapSectionValidation[key]: ${$mapSectionValidation[key]}`);
                    if($mapSectionValidation[key] === 1){
                        let errorMsg = `ERROR: You already selected: ${key.toUpperCase()}, Select only one between: ${pOnlyOneError ? pOnlyOneError : 'SOURCEPATH, MANIFEST or METADATA'}`;
        
                        event.target.checked = false;
        
                        tsvscode.postMessage({
                            type: 'onError',
                            value: errorMsg
                        });
        
                        return;
                    }
                }

                console.log(`$mapSectionValidation[pSectionName]: ${$mapSectionValidation[pSectionName]}`);
        
                if($mapSectionValidation[pSectionName] === 0){
                    $mapSectionValidation[pSectionName] = 1;
        
                    $mapShowSections[pSectionName] = event.target.checked;
                }else{
                    $mapShowSections[pSectionName] = event.target.checked;
                }
            }else{
                $mapShowSections[pSectionName] = event.target.checked;
            }
        }else{
            $mapShowSections[pSectionName] = event.target.checked;

            if($mapSectionValidation[pSectionName]){
                $mapSectionValidation[pSectionName] = 0;
            }
        }

        console.log(`$mapSectionValidation: ${JSON.stringify($mapSectionValidation)}`);
        console.log(`$mapShowSections: ${JSON.stringify($mapShowSections)}`);
    }

    function openDoc(){
        if(!$mapDocument[fileName]){
            $mapDocument[fileName] = true;
        }else{
            $mapDocument[fileName] = !$mapDocument[fileName] ? true : false;
        }
    }
</script>

<span 
    title={js.mapTooltips['collapseDoc']}
    class:sfdxet-required={pRequired} 
    class:sfdxet-error-span={$mapErrors[fileName]} 
    on:click={openDoc}
    style={pStyle}
    class={pClass}
>{pRequired ? '*' : ''}[{sectionTag ? sectionTag : ''}{sectionName ? ' ' + sectionName : ''}]</span> 

<input 
    type="checkbox" 
    id={elementName} 
    name={elementName} 
    on:change={e => { handleShowSections(e, `${fileName}`, `${onlyOneError}`) }} 
    title={js.mapTooltips['checkbox']}
/> 
<script>
    // Helper Files
    import * as js from "../-helperFiles/GlobalJS";

    // Store
    import { 
        mapDocument, 
        mapErrors, 
        mapSectionValidation, 
        mapShowSections, 
    } from "../-helperFiles/GlobalStore";

    // Parameters
    export let pRequired = false;
    export let pPartialRequired = true;
    export let pSFDXParameter = "";
    export let sectionName = "";
    export let elementName = "";
    export let fileName = "";
    export let onlyOneError = "";
    export let pStyle = "";
    export let pClass = "";

    function handleShowSections(event, pSectionName, pOnlyOneError){
        if(event.target.checked === true){
            if($mapSectionValidation[pSectionName] != null && js.listValidation.includes(pSectionName)){
                for(let key in $mapSectionValidation){
                    if($mapSectionValidation[key] === 1){
                        let errorMsg = `ERROR: You already selected: ${key.toUpperCase()}, Select only one between: ${pOnlyOneError ? pOnlyOneError : "SOURCEPATH, MANIFEST or METADATA"}`;
        
                        event.target.checked = false;
        
                        tsvscode.postMessage({
                            type: "onError",
                            value: errorMsg
                        });
        
                        return;
                    }
                }
        
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
    title={js.mapTooltips["collapseDoc"]}
    class:sfdxet-required={pRequired} 
    class:sfdxet-error-span={$mapErrors[fileName]} 
    on:click={openDoc}
    style={pStyle}
    class={pClass}
>{pRequired ? "*" : "["}{pSFDXParameter ? pSFDXParameter : ""}{sectionName ? " " + sectionName : ""}{pRequired ? "" : "]"}</span> 

{#if pPartialRequired}
    <input 
        type="checkbox" 
        id={elementName} 
        name={elementName} 
        on:change={e => { handleShowSections(e, `${fileName}`, `${onlyOneError}`) }} 
        title={js.mapTooltips["checkbox"]}
        checked={$mapShowSections[fileName]}
    />
    {:else}
        <input 
            type="checkbox" 
            id={elementName} 
            name={elementName} 
            on:change={e => { handleShowSections(e, `${fileName}`, `${onlyOneError}`) }} 
            title={js.mapTooltips["checkbox"]}
            checked={true}
            disabled
        />
{/if}
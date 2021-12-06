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
    export let pSectionName = "";
    export let pElementName = "";
    export let pFileName = "";
    export let pOnlyOneError = "";
    export let pStyle = "";
    export let pClass = "";
    export let pShowSectionName = true;

    function handleShowSections(event, pSectionName, pOnlyOneError){
        if(event.target.checked === true){
            if($mapSectionValidation[pSectionName] != null && $mapSectionValidation.hasOwnProperty(pSectionName)){
                for(let key in $mapSectionValidation){
                    if($mapSectionValidation[key] === 1){
                        let errorMsg = `ERROR: You already selected: ${key.toUpperCase()}, Select only one between: ${pOnlyOneError}`;
        
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
        if(!$mapDocument[pFileName]){
            $mapDocument[pFileName] = true;
        }else{
            $mapDocument[pFileName] = !$mapDocument[pFileName] ? true : false;
        }
    }
</script>
<span 
        title={js.mapTooltips["collapseDoc"]}
        class:sfdxet-required={pRequired} 
        class:sfdxet-error-span={$mapErrors[pFileName]} 
        on:click={openDoc}
        style={pStyle}
        class={pClass}
    >{pRequired ? "*" : "["}{pSFDXParameter ? pSFDXParameter : ""}{pSectionName && pShowSectionName ? " " + pSectionName.toUpperCase() : ""}{pRequired ? "" : "]"}</span>
    
{#if pPartialRequired}
    <input 
        type="checkbox" 
        id={pElementName} 
        name={pElementName} 
        on:change={e => { handleShowSections(e, `${pFileName}`, `${pOnlyOneError}`) }} 
        title={js.mapTooltips["checkbox"]}
    />
    {:else} 
        <input 
            type="checkbox" 
            id={pElementName} 
            name={pElementName} 
            on:change={e => { handleShowSections(e, `${pFileName}`, `${pOnlyOneError}`) }} 
            title={js.mapTooltips["checkbox"]}
            checked={true}
            disabled
        />
{/if}
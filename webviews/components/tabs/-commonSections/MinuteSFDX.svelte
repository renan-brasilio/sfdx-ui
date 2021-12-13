<svelte:options accessors/>

<script>
    // Helper Files
    import { tooltip as tooltipv1 } from "../--tooltip/tooltip.v1";
    import Title from "../-commonPages/Title.svelte";
    import Documentation from "../-commonPages/Documentation.svelte";

    // Store
    import { 
        mapErrors, 
        mapInputVariables, 
        mapShowSections, 
        objSFDX, 
    } from "../-helperFiles/GlobalStore";

    // Parameters
    export let pSectionName = "";
    export let pMapDoc;
    export let pRequired = false;
    export let pOnlyOneError = "";
    export let pSFDXParameter = "";
    export let pTitle = "";
    export let pPlaceholder = "";
    export let pStyle = "";
    export let pShowSectionName = true;
    export let pChecked = false;
    export let pDisabled = false;
    export let pDefaultValue = "";

    // Default
    let sectionUCase = pSectionName.toUpperCase();

    export async function validate(){
        let valid = true;

        return await new Promise(function(resolve, reject) {
            if($mapShowSections[pSectionName] && $mapInputVariables[pSectionName]){
                $mapErrors[pSectionName] = "";
                $objSFDX.terminal += ` ${pSFDXParameter} ${$mapInputVariables[pSectionName]}`;
            }else{
                $mapErrors[pSectionName] = "sfdxet-error-select";

                if(pRequired){
                    tsvscode.postMessage({
                        type: "onError",
                        value: `ERROR: ${sectionUCase} is required.` 
                    });
                }else{
                    tsvscode.postMessage({
                        type: "onError",
                        value: `ERROR: Please select a ${sectionUCase} or uncheck the [${pSFDXParameter} ${sectionUCase}] checkbox.` 
                    });
                }

                valid = false;
            }

            resolve(valid);
        });
    }
</script>

<div class="col align-self-center sfdxet-br">
    <Title 
        pRequired={pRequired} 
        pSFDXParameter={pSFDXParameter} 
        pSectionName={pSectionName} 
        pElementName={pSectionName} 
        pFileName={pSectionName} 
        pOnlyOneError={pOnlyOneError}
        pShowSectionName={pShowSectionName}
        pChecked={pChecked}
        pDisabled={pDisabled}
        pStyle={pStyle}
    />
    <Documentation 
        pHeader={sectionUCase} 
        pType={pMapDoc.type} 
        pBody={pMapDoc.body} 
        pSectionName={pSectionName}
    />
    
    {#if $mapShowSections[pSectionName]}
        <section class="sfdxet-section sfdxet-br">
            <input 
                type="number"
                on:keypress={e => {if(e.key==="."){e.preventDefault();}}}
                on:input={e => {e.target.value = e.target.value.replace(/[^0-9]*/g,"");}}
                class="sfdxet-absolute-center"
                title={pTitle}
                use:tooltipv1
                placeholder={pPlaceholder}
                on:input={(e) => $mapInputVariables[pSectionName] = e.target.value}
                value={pDefaultValue}
            />
        </section>
    {/if}
</div>
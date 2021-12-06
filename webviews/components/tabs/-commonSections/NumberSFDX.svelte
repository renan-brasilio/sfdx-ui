<svelte:options accessors/>

<script>
    // Helper Files
    import { tooltip as tooltipv1 } from "../--tooltip/tooltip.v1";
    import Title from "../-commonPages/Title.svelte";
    import Documentation from "../-commonPages/Documentation.svelte";

    // Store
    import { 
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
    export let pSectionTitle = "";
    export let pTitle = "";
    export let pPlaceholder = "";
    export let pMaxLength = 255;
    export let pShowSectionName = true;
    export let pPartialRequired = true;
    
    // Default
    let sectionUCase = pSectionName.toUpperCase();

    export async function validate(){
        let valid = true;

        return await new Promise(function(resolve, reject) {
            if($mapShowSections[pSectionName] && $mapInputVariables[pSectionName]){
                $objSFDX.terminal += ` ${pSFDXParameter} ${$mapInputVariables[pSectionName]}`;
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
        pPartialRequired={pPartialRequired}
    />
    <Documentation 
        pHeader={sectionUCase} 
        pType={pMapDoc.type} 
        pBody={pMapDoc.body} 
        pSectionName={pSectionName}
    />
    
    {#if $mapShowSections[pSectionName]}
        <section class="sfdxet-section sfdxet-br">
            <label for={pSectionName + `input`}>
                {pSectionTitle}
                <input 
                    type="number" 
                    on:keypress={e => {if(e.key==="."){e.preventDefault();}}} 
                    on:input={e => {e.target.value = e.target.value.replace(/[^0-9]*/g,"");}} 
                    class="sfdxet-absolute-center" 
                    title={pTitle} 
                    use:tooltipv1 
                    placeholder={pPlaceholder} 
                    maxlength={pMaxLength} 
                    bind:value={$mapInputVariables[pSectionName]}
                />
            </label>
        </section>
    {/if}
</div>
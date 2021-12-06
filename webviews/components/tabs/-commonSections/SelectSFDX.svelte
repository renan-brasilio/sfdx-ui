<svelte:options accessors/>

<script>
    // Helper Files
    import Title from "../-commonPages/Title.svelte";
    import Documentation from "../-commonPages/Documentation.svelte";
    import SelectCommon from "../-commonPages/SelectCommon.svelte";

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
    export let pList = [];
    export let pDefaultValue = "";
    export let pShowSectionName = true;
    export let pPartialRequired = true;
    export let pIsMulti = false;
    
    // Default
    let sectionUCase = pSectionName.toUpperCase();

    $mapInputVariables[pSectionName] = pDefaultValue;

    export async function validate(){
        let valid = true;

        return await new Promise(function(resolve, reject) {
            if($mapShowSections[pSectionName]){
                if($mapInputVariables[pSectionName]){
                    $mapErrors[pSectionName] = "";
                    $objSFDX.terminal += ` ${pSFDXParameter} ${$mapInputVariables[pSectionName]}`;
                }else{
                    $mapErrors[pSectionName] = "sfdxet-error-select";

                    tsvscode.postMessage({
                        type: "onError",
                        value: `ERROR: Please select a ${sectionUCase} or uncheck the [${pSFDXParameter} ${sectionUCase}] checkbox.` 
                    });

                    valid = false;
                }
            }else{
                $mapErrors[pSectionName] = "";
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
        <h4 class="sfdxet-br"><b>{sectionUCase} Options:</b></h4>
        <section class="sfdxet-section">
            <SelectCommon error={$mapErrors[pSectionName]} pList={pList} sectionName={pSectionName} defaultVal={pDefaultValue} pIsMulti={pIsMulti}/>
        </section>
    {/if}
</div>
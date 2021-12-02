<svelte:options accessors/>

<script>
    // Helper Files
    import * as js from "../-helperFiles/GlobalJS";
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

    // Default
    let fileName = "packagename";
    let sectionUCase = fileName.toUpperCase();

    // Parameters
    export let mapDoc;
    export let required = false;
    export let onlyOneError = "";
    export let pSFDXParameter = "-n";

    // Documentation
    let type = `<b><i>Optional</i></b>`;
    let body = `
        <br/><br/>
        Name of the package to associate with the metadata-formatted files.
        <br/><br/>
        Type: string
    `;

    if(!mapDoc){ // Default
        mapDoc = {
            type: type,
            body: body
        };
    }else{
        if(!mapDoc.type){
            mapDoc.type = type;
        }

        if(!mapDoc.body){
            mapDoc.body = body;
        }
    }

    export async function validate(){
        let valid = true;

        return await new Promise(function(resolve, reject) {
            if($mapShowSections.packagename){
                if($mapInputVariables.packagename){
                    $mapErrors.packagename = "";
                    $objSFDX.terminal += ` ${pSFDXParameter} ${$mapInputVariables.packagename}`;
                }else{
                    $mapErrors.packagename = "sfdxet-error-button";

                    tsvscode.postMessage({
                        type: "onError",
                        value: `ERROR: Please insert at least one Package Name or uncheck the [${pSFDXParameter} PACKAGENAME] checkbox.` 
                    });

                    valid = false;
                }
            }else{
                $mapErrors.packagename = "";
            }

            resolve(valid);
        });
    }
</script>

<div class="col align-self-center sfdxet-br">
    <Title pRequired={required} pSFDXParameter={pSFDXParameter} sectionName={sectionUCase} elementName={fileName} fileName={fileName} onlyOneError={onlyOneError}/>
    <Documentation headerD={sectionUCase} typeD={mapDoc.type} bodyD={mapDoc.body} sectionName={fileName}/>

    {#if $mapShowSections.packagename}
        <section class="sfdxet-section sfdxet-br">
            <label for={fileName}>
                Package Name
                <input 
                    type="text" 
                    id={fileName} 
                    name={fileName} 
                    class="sfdxet-absolute-center sfdxet-error-button {$mapErrors.packagename}" 
                    title={js.mapTooltips["manuallyDefine"]} 
                    use:tooltipv1 
                    placeholder="Insert..." 
                    bind:value={$mapInputVariables.packagename}
                />
            </label>
            <br/>
        </section>
    {/if}
</div>
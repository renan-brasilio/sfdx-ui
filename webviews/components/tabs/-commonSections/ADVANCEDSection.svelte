<svelte:options accessors/>

<script>
    // Helper Pages
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

    console.log(`mapShowSections: ${JSON.stringify($mapShowSections)}`);
    console.log(`mapInputVariables: ${JSON.stringify($mapInputVariables)}`);

    // Default
    let fileName = "advanced";
    let sectionUCase = fileName.toUpperCase();

    // Parameters
    export let mapDoc;
    export let required = false;
    export let onlyOneError = "";

    // Documentation
    let type = `<b><i>Optional</i></b>`;
    let body = `
        <br/><br/>
        Here you can insert any extra or manual tags.
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
            if($mapShowSections.advanced){
                if($mapInputVariables.advanced){
                    $mapErrors.advanced = "";
                    $objSFDX.terminal += ` ${$mapInputVariables.advanced}`;
                }else{
                    tsvscode.postMessage({
                        type: "onError",
                        value: `ERROR: Please insert your advanced input or uncheck the Advanced checkbox.` 
                    });

                    valid = false;
                }
            }

            resolve(valid);
        });
    }

    if(!$mapInputVariables.advanced){
        $mapInputVariables.advanced = "";
    }
</script>

<div class="col align-self-center sfdxet-br">
    <Title pRequired={required} pSFDXParameter={sectionUCase} elementName={fileName} fileName={fileName} onlyOneError={onlyOneError} pStyle="color: green;"/>
    <Documentation headerD={sectionUCase} typeD={mapDoc.type} bodyD={mapDoc.body} sectionName={fileName}/>
    
    {#if $mapShowSections.advanced}
        <section class="sfdxet-section sfdxet-br">
            <label for="advancedinput">
                Advanced Entry
                <input 
                    type="text" 
                    id="advancedinput" 
                    name="advancedinput" 
                    class="sfdxet-absolute-center sfdxet-error-button" 
                    title="Add any extra advanced statement. *USE THIS CAREFULLY." 
                    use:tooltipv1 
                    placeholder="Be carefull..."
                    on:input={(e) => $mapInputVariables.advanced = e.target.value}
                    value={$mapInputVariables.advanced}
                />
            </label>
        </section>
    {/if}
</div>
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
        mapSectionValidation, 
        mapShowSections, 
        objSFDX, 
    } from "../-helperFiles/GlobalStore";
    
    // Default
    let fileName = "classname";
    let sectionUCase = fileName.toUpperCase();

    // Parameters
    export let mapDoc;
    export let required = false;
    export let onlyOneError = "";
    export let pSFDXParameter = "-n";

    // Documentation
    let type = `<b>Required</b>`;
    let body = `
        <br/><br/>
        The name of the new Apex class. The name can be up to 40 characters and must start with a letter.<br/><br/>
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

    function validatePattern(){
        const pattern = /^[a-zA-Z0-9]*$/;

        if(!pattern.test($mapInputVariables.classname)){
            $mapErrors.classname2 = "sfdxet-error-span";

            tsvscode.postMessage({
                type: "onError",
                value: `ERROR: Name must contain only alphanumeric characters.` 
            });

            return;
        }else{
            $mapErrors.classname2 = "";
        }
    }

    export async function validate(){
        let valid = true;

        return await new Promise(function(resolve, reject) {
            if($mapShowSections.classname){
                if($mapErrors.classname2){
                    $mapErrors.classname2 = "sfdxet-error-span";

                    tsvscode.postMessage({
                        type: "onError",
                        value: `ERROR: Name must contain only alphanumeric characters.` 
                    });

                    $mapSectionValidation.classname = 0;

                    valid = false;
                }else if($mapInputVariables.classname){
                    $objSFDX.terminal += ` ${pSFDXParameter} ${$mapInputVariables.classname}`;
                    $mapSectionValidation.classname = 1;
                }
            }

            resolve(valid);
        });
    }
</script>

<div class="col align-self-center sfdxet-br">
    <Title pRequired={required} pSFDXParameter={pSFDXParameter} sectionName={sectionUCase} elementName={fileName} fileName={fileName} onlyOneError={onlyOneError} pPartialRequired={false}/>
    <Documentation pHeader={sectionUCase} typeD={mapDoc.type} bodyD={mapDoc.body} sectionName={fileName}/>
    
    {#if $mapShowSections.classname}
        <h4 class="sfdxet-br"><b>{sectionUCase} Options:</b></h4>
        <section class="sfdxet-section">
            <label for="jsoninput">
                Apex Class Name
                <input 
                    type="text" 
                    id="jsoninput" 
                    name="jsoninput" 
                    class="sfdxet-absolute-center" 
                    title="Insert the name of the new Apex Class." 
                    use:tooltipv1 
                    placeholder="Insert..."
                    maxlength="40" 
                    on:input={validatePattern}
                    class:sfdxet-error-span={$mapErrors.classname2} 
                    bind:value={$mapInputVariables.classname}
                />
            </label>
        </section>
    {/if}
</div>
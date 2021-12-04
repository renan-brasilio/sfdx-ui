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

    // Default
    let fileName = "logid";
    let sectionUCase = fileName.toUpperCase();

    // Parameters
    export let mapDoc;
    export let required = false;
    export let onlyOneError = "";
    export let pSFDXParameter = "-i";

    // Documentation
    let type = `<b>Optional</b>`;
    let body = `
        <br/><br/>
        Id of the log to display.<br/><br/>
        Type: id
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
            if($mapShowSections.logid){
                if($mapInputVariables.logid){
                    $objSFDX.terminal += ` ${pSFDXParameter} ${$mapInputVariables.logid}`;
                }else{
                    tsvscode.postMessage({
                        type: "onError",
                        value: `ERROR: Please insert a LogId or uncheck the [${pSFDXParameter} LOGID] checkbox.` 
                    });

                    valid = false;
                }
            }

            resolve(valid);
        });
    }
</script>

<div class="col align-self-center sfdxet-br">
    <Title pRequired={required} pSFDXParameter={pSFDXParameter} sectionName={sectionUCase} elementName={fileName} fileName={fileName} onlyOneError={onlyOneError}/>
    <Documentation headerD={sectionUCase} typeD={mapDoc.type} bodyD={mapDoc.body} sectionName={fileName}/>
    
    {#if $mapShowSections.logid}
        <h4 class="sfdxet-br"><b>{sectionUCase} Options:</b></h4>
        <section class="sfdxet-section">
            <label for="logidinput">
                Log ID
                <input 
                    type="text" 
                    id="logidinput" 
                    name="logidinput" 
                    class="sfdxet-absolute-center" 
                    title="Insert the Id of the Log." 
                    use:tooltipv1 
                    placeholder="Insert..."
                    maxlength="18" 
                    class:sfdxet-error-span={$mapErrors.logid} 
                    bind:value={$mapInputVariables.logid}
                />
            </label>
        </section>
    {/if}
</div>
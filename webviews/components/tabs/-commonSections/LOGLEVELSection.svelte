<svelte:options accessors/>

<script>
    // Helper Files
    import * as js from "../-helperFiles/GlobalJS";
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

    // Default
    let fileName = "loglevel";
    let sectionUCase = fileName.toUpperCase();

    // Parameters
    export let mapDoc;
    export let required = false;
    export let onlyOneError = "";
    export let pSFDXParameter = "--loglevel";

    // Documentation
    let type = `<b><i>Optional</i></b>`;
    let body = `
        <br/><br/>            
        The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log.
        <br/><br/>
        Type: enum<br/>
        Permissible values are: trace, debug, info, warn, error, fatal, TRACE, DEBUG, INFO, WARN, ERROR, FATAL<br/>
        Default value: warn
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

    $mapInputVariables.loglevel = "warn";

    export async function validate(){
        let valid = true;

        return await new Promise(function(resolve, reject) {
            if($mapShowSections.loglevel){
                if($mapInputVariables.loglevel){
                    $mapErrors.loglevel = "";
                    $objSFDX.terminal += ` ${pSFDXParameter} ${$mapInputVariables.loglevel}`;
                }else{
                    $mapErrors.loglevel = "sfdxet-error-select";

                    tsvscode.postMessage({
                        type: "onError",
                        value: `ERROR: Please select a Loglevel or uncheck the [${pSFDXParameter} LOGLEVEL] checkbox.` 
                    });

                    valid = false;
                }
            }else{
                $mapErrors.loglevel = "";
            }

            resolve(valid);
        });
    }
</script>

<div class="col align-self-center sfdxet-br">
    <Title pRequired={required} pSFDXParameter={pSFDXParameter} sectionName={sectionUCase} elementName={fileName} fileName={fileName} onlyOneError={onlyOneError}/>
    <Documentation pHeader={sectionUCase} typeD={mapDoc.type} bodyD={mapDoc.body} sectionName={fileName}/>
    
    {#if $mapShowSections.loglevel}
        <h4 class="sfdxet-br"><b>{sectionUCase} Options:</b></h4>
        <section class="sfdxet-section">
            <SelectCommon error={$mapErrors.loglevel} pList={js.lLOGLEVEL} sectionName={fileName} defaultVal={$mapInputVariables.loglevel}/>
        </section>
    {/if}
</div>
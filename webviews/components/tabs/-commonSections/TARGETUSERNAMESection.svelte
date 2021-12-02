<svelte:options accessors/>

<script>
    // Helper Files
    import Title from "../-commonPages/Title.svelte";
    import Documentation from "../-commonPages/Documentation.svelte";
    import SelectCommon from "../-commonPages/SelectCommon.svelte";

    // Store
    import { 
        lTARGETUSERNAME, 
        mapErrors, 
        mapInputVariables, 
        mapShowSections, 
        objSFDX, 
    } from "../-helperFiles/GlobalStore";

    // Default
    let fileName = "targetusername";
    let sectionUCase = fileName.toUpperCase();

    // Parameters
    export let mapDoc;
    export let required = false;
    export let onlyOneError = "";
    export let pSFDXParameter = "-u";

    // Documentation
    let type = `<b><i>Optional</i></b>`;
    let body = `
        <br/><br/>            
        A username or alias for the target org. Overrides the default target org.
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

    tsvscode.postMessage({
        type: "onGetAliasUsers"
    });

    export async function validate(){
        let valid = true;

        return await new Promise(function(resolve, reject) {
            if($mapShowSections.targetusername){
                if($mapInputVariables.targetusername){
                    $mapErrors.targetusername = "";
                    $objSFDX.terminal += ` ${pSFDXParameter} ${$mapInputVariables.targetusername}`;
                }else{
                    $mapErrors.targetusername = "sfdxet-error-select";

                    tsvscode.postMessage({
                        type: "onError",
                        value: `ERROR: Please select a Targetusername or uncheck the [${pSFDXParameter} TARGETUSERNAME] checkbox.` 
                    });

                    return;
                }
            }else{
                $mapErrors.targetusername = "";
            }

            resolve(valid);
        });
    }
</script>

<div class="col align-self-center sfdxet-br">
    <Title pRequired={required} pSFDXParameter={pSFDXParameter} sectionName={sectionUCase} elementName={fileName} fileName={fileName} onlyOneError={onlyOneError}/>
    <Documentation headerD={sectionUCase} typeD={mapDoc.type} bodyD={mapDoc.body} sectionName={fileName}/>

    {#if $mapShowSections.targetusername}
        <section class="sfdxet-section sfdxet-br">
            <SelectCommon error={$mapErrors.targetusername} pList={$lTARGETUSERNAME} sectionName={fileName} />
        </section>
    {/if}
</div>
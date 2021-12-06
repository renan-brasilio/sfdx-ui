<svelte:options accessors/>

<script>
    // Helper Pages
    import Title from "../-commonPages/Title.svelte";
    import Documentation from "../-commonPages/Documentation.svelte";
    import SelectCommon from "../-commonPages/SelectCommon.svelte";
    import { lMETADATA } from "../-helperFiles/retrieve_metadatalist"

    // Store
    import { 
        mapErrors,
        mapInputVariables, 
        mapShowSections, 
        objSFDX, 
    } from "../-helperFiles/GlobalStore";

    // Default
    let fileName = "metadata";
    let sectionUCase = fileName.toUpperCase();

    // Parameters
    export let mapDoc;
    export let required = false;
    export let onlyOneError = "";
    export let pSFDXParameter = "-m";

    // Documentation
    let type = `<b><i>Optional</i></b>`;
    let body = `
        <br/><br/>
        A comma-separated list of names of metadata components to retrieve from the org.
        <br/><br/>
        If you specify this parameter, don’t specify --manifest or --sourcepath.
        <br/><br/>
        Type: array
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
            if($mapShowSections.metadata){
                $mapErrors.sourcepath = "";
                $mapErrors.manifest = "";
            
                if($mapInputVariables.metadata.length > 0){
                    $mapErrors.metadata = "";
                    $objSFDX.terminal += ` ${pSFDXParameter} ${$mapInputVariables.metadata}`;
                }else{
                    $mapErrors.metadata = "sfdxet-error-select";

                    tsvscode.postMessage({
                        type: "onError",
                        value: `ERROR: Please select the Metadata or uncheck the [${pSFDXParameter} METADATA] checkbox.` 
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
    <Documentation pHeader={sectionUCase} typeD={mapDoc.type} bodyD={mapDoc.body} sectionName={fileName}/>

    {#if $mapShowSections.metadata}
        <section class="sfdxet-section">
            <SelectCommon error={$mapErrors.apiversion} pList={lMETADATA} sectionName={fileName} pIsMulti={true}/>
        </section>
    {/if}
</div>
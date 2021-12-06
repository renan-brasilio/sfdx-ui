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
    
    // Default
    let fileName = "template";
    let sectionUCase = fileName.toUpperCase();

    // Parameters
    export let mapDoc;
    export let required = false;
    export let onlyOneError = "";
    export let pSFDXParameter = "-t";

    // Documentation
    let type = `<b><i>Optional</i></b>`;
    let body = `
        <br/><br/>
        The template to use to create the file. Supplied parameter values or default values are filled into a copy of the template.
        <br/><br/>
        Type: string
        <br/>
        Permissible values are: ApexException, ApexUnitTest, DefaultApexClass, InboundEmailService<br/>
        Default value: DefaultApexClass
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

    const lTEMPLATE = [
        {value: "ApexException", label: "ApexException"},
        {value: "ApexUnitTest", label: "ApexUnitTest"},
        {value: "DefaultApexClass", label: "DefaultApexClass"},
        {value: "InboundEmailService", label: "InboundEmailService"}
    ];

    let dTEMPLATE = "DefaultApexClass";

    $mapInputVariables[fileName] = dTEMPLATE;

    export async function validate(){
        let valid = true;

        return await new Promise(function(resolve, reject) {
            if($mapShowSections.template){
                if($mapInputVariables.template){
                    $mapErrors.template = "";
                    $objSFDX.terminal += ` ${pSFDXParameter} ${$mapInputVariables.template}`;
                }else{
                    $mapErrors.template = "sfdxet-error-select";

                    tsvscode.postMessage({
                        type: "onError",
                        value: `ERROR: Please select a Template or uncheck the [${pSFDXParameter} TEMPLATE] checkbox.` 
                    });

                    valid = false;
                }
            }else{
                $mapErrors.template = "";
            }

            resolve(valid);
        });
    }
</script>

<div class="col align-self-center sfdxet-br">
    <Title pRequired={required} pSFDXParameter={pSFDXParameter} sectionName={sectionUCase} elementName={fileName} fileName={fileName} onlyOneError={onlyOneError}/>
    <Documentation pHeader={sectionUCase} typeD={mapDoc.type} bodyD={mapDoc.body} sectionName={fileName}/>

    {#if $mapShowSections.template}
        <section class="sfdxet-section sfdxet-br">
            <SelectCommon error={$mapErrors.template} pList={lTEMPLATE} sectionName={fileName} defaultVal={dTEMPLATE}/>
        </section>
    {/if}
</div>
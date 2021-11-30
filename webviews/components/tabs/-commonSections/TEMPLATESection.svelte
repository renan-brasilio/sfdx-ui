<script>
    import { mapShowSections, mapInputVariables, mapErrors } from "../-helperFiles/GlobalStore";
    import Title from "../-commonPages/Title.svelte";
    import Documentation from "../-commonPages/Documentation.svelte";
    import SelectCommon from "../-commonPages/SelectCommon.svelte";
    
    let fileName = "template";
    let sectionUCase = fileName.toUpperCase();

    export let mapDoc;
    export let required = false;
    export let onlyOneError = "";

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
</script>

<div class="col align-self-center sfdxet-br">
    <Title pRequired={required} pSFDXParameter="-a" sectionName={sectionUCase} elementName={fileName} fileName={fileName} onlyOneError={onlyOneError}/>
    <Documentation headerD={sectionUCase} typeD={mapDoc.type} bodyD={mapDoc.body} sectionName={fileName}/>

    {#if $mapShowSections.template}
        <section class="sfdxet-section sfdxet-br">
            <SelectCommon error={$mapErrors.template} pList={lTEMPLATE} sectionName={fileName} defaultVal={dTEMPLATE}/>
        </section>
    {/if}
</div>
<script>
    import * as js from "../-helperFiles/GlobalJS";
    import Title from "../-commonPages/Title.svelte";
    import Documentation from "../-commonPages/Documentation.svelte";

    let fileName = "soapdeploy";
    let sectionUCase = fileName.toUpperCase();

    export let mapDoc;
    export let required = false;
    export let onlyOneError = "";

    let type = `<b><i>Optional</i></b>`;
    let body = `
        <br/><br/>
        Deploy metadata with SOAP API instead of REST API.
        <br/><br/>
        Type: boolean
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
</script>

<div class="col align-self-center sfdxet-br">
    <Title pRequired={required} pSFDXParameter="--soapdeploy" elementName={fileName} fileName={fileName} onlyOneError={onlyOneError}/>
    <Documentation headerD={sectionUCase} typeD={mapDoc.type} bodyD={mapDoc.body} sectionName={fileName}/>
</div>
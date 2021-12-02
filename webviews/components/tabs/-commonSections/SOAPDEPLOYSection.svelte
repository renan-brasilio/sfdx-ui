<svelte:options accessors/>

<script>
    // Helper Files
    import Title from "../-commonPages/Title.svelte";
    import Documentation from "../-commonPages/Documentation.svelte";

    // Store
    import { 
        mapShowSections, 
        objSFDX, 
    } from "../-helperFiles/GlobalStore";

    // Default
    let fileName = "soapdeploy";
    let sectionUCase = fileName.toUpperCase();

    // Parameters
    export let mapDoc;
    export let required = false;
    export let onlyOneError = "";
    export let pSFDXParameter = "--soapdeploy";

    // Documentation
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

    export async function validate(){
        let valid = true;

        return await new Promise(function(resolve, reject) {
            if($mapShowSections.soapdeploy){
                $objSFDX.terminal += ` ${pSFDXParameter}`;
            }

            resolve(valid);
        });
    }
</script>

<div class="col align-self-center sfdxet-br">
    <Title pRequired={required} pSFDXParameter={pSFDXParameter} elementName={fileName} fileName={fileName} onlyOneError={onlyOneError}/>
    <Documentation headerD={sectionUCase} typeD={mapDoc.type} bodyD={mapDoc.body} sectionName={fileName}/>
</div>
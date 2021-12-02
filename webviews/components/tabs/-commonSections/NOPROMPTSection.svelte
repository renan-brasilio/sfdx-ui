<svelte:options accessors/>

<script>
    // Helper Pages
    import Title from "../-commonPages/Title.svelte";
    import Documentation from "../-commonPages/Documentation.svelte";

    // Store
    import { 
        mapShowSections, 
        objSFDX, 
    } from "../-helperFiles/GlobalStore";

    // Default
    let fileName = "noprompt";
    let sectionUCase = fileName.toUpperCase();

    // Parameters
    export let mapDoc;
    export let required = false;
    export let onlyOneError = "";
    export let pSFDXParameter = "-r";

    // Documentation
    let type = `<b><i>Optional</i></b>`;
    let body = `
        <br/><br/>
        Do not prompt for delete confirmation.
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
            if($mapShowSections.noprompt){
                $objSFDX.terminal += ` ${pSFDXParameter}`;
            }

            resolve(valid);
        });
    }
</script>

<div class="col align-self-center sfdxet-br">
    <Title pRequired={required} pSFDXParameter={pSFDXParameter} sectionName={sectionUCase} elementName={fileName} fileName={fileName} onlyOneError={onlyOneError}/>
    <Documentation headerD={sectionUCase} typeD={mapDoc.type} bodyD={mapDoc.body} sectionName={fileName}/>
</div>
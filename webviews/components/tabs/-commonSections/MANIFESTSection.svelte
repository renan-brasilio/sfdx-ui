<svelte:options accessors/>

<script>
    // Helper Files
    import { tooltip as tooltipv1 } from "../--tooltip/tooltip.v1";
    import Title from "../-commonPages/Title.svelte";
    import Documentation from "../-commonPages/Documentation.svelte";

    // Store
    import { 
        mapDocument, 
        mapErrors,
        mapInputVariables, 
        mapShowSections, 
        objSFDX, 
        pickFileType, 
    } from "../-helperFiles/GlobalStore";

    let fileName = "manifest";
    let sectionUCase = fileName.toUpperCase();

    export let mapDoc;
    export let required = false;
    export let onlyOneError = "";
    export let pSFDXParameter = "-x";

    let type = `<b><i>Optional</i></b>`;
    let body = `
        <br/><br/>
        The complete path for the manifest (package.xml) file that specifies the components to retrieve.
        <br/><br/>
        If you specify this parameter, don’t specify --metadata or --sourcepath.
        <br/><br/>
        Type: filepath
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

    function onShowFilePick(type) {
        $pickFileType = type;

        tsvscode.postMessage({
            type: 'onShowFilePick'
        });
    }

    $mapDocument[fileName] = false;

    export async function validate(){
        let valid = true;

        return await new Promise(function(resolve, reject) {
            if($mapShowSections.manifest){
                if($mapInputVariables.manifest){
                    $mapErrors.sourcepath = "";
                    $mapErrors.metadata = "";

                    $objSFDX.terminal += ` ${pSFDXParameter} ${$mapInputVariables.manifest}`;
                }else{
                    tsvscode.postMessage({
                        type: "onError",
                        value: `ERROR: Please select the Manifest file or uncheck the [${pSFDXParameter} MANIFEST] checkbox.` 
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

    {#if $mapShowSections.manifest}
        <section class="sfdxet-section sfdxet-br">
            <button class="sfdxet-buttons" on:click={() => {onShowFilePick({fileName})}}>Select File</button>
            <br/>
            <br/>
            {#if $mapShowSections.manifest2}
                <input type="text" class="sfdxet-absolute-center" title={$mapInputVariables.manifest} use:tooltipv1 value={$mapInputVariables.manifest} disabled/>
            {/if}
        </section>
    {/if}
</div>
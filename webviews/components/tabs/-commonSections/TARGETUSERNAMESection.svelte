<script>
    import { 
        lTARGETUSERNAME, 
        mapErrors, 
        mapShowSections 
    } from "../-helperFiles/GlobalStore";

    import Title from "../-commonPages/Title.svelte";
    import Documentation from "../-commonPages/Documentation.svelte";
    import SelectCommon from "../-commonPages/SelectCommon.svelte";

    let fileName = "targetusername";
    let sectionUCase = fileName.toUpperCase();

    export let mapDoc;
    export let required = false;
    export let onlyOneError = "";

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
</script>

<div class="col align-self-center sfdxet-br">
    <Title pRequired={required} pSFDXParameter="-u" sectionName={sectionUCase} elementName={fileName} fileName={fileName} onlyOneError={onlyOneError}/>
    <Documentation headerD={sectionUCase} typeD={mapDoc.type} bodyD={mapDoc.body} sectionName={fileName}/>

    {#if $mapShowSections.targetusername}
        <section class="sfdxet-section sfdxet-br">
            <SelectCommon error={$mapErrors.targetusername} pList={$lTARGETUSERNAME} sectionName={fileName} />
        </section>
    {/if}
</div>
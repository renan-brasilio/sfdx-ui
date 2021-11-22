<script>
    import * as js from "../-helperFiles/GlobalJS";
    import { mapShowSections, mapErrors } from "../-helperFiles/GlobalStore";
    import { lMETADATA } from "../-helperFiles/retrieve_metadatalist"
    import Title from "../--collapsible/Title.svelte";
    import Documentation from "../--collapsible/Documentation.svelte";
    import SelectCommon from "../--collapsible/SelectCommon.svelte";

    let fileName = "metadata";
    let sectionUCase = fileName.toUpperCase();

    export let mapDoc;
    export let required = false;
    export let onlyOneError = "";

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

    tsvscode.postMessage({
        type: "onGetAliasUsers"
    });
</script>

<div class="col align-self-center sfdxet-br">
    <Title pRequired={required} sectionTag="-m" sectionName={sectionUCase} elementName={fileName} fileName={fileName} onlyOneError={onlyOneError}/>
    <Documentation headerD={sectionUCase} typeD={mapDoc.type} bodyD={mapDoc.body} sectionName={fileName}/>

    {#if $mapShowSections.metadata}
        <section class="sfdxet-section">
            <SelectCommon error={$mapErrors.apiversion} pList={lMETADATA} sectionName={fileName} pIsMulti={true}/>
        </section>
    {/if}
</div>
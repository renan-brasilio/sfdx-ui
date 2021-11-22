<script>
    import * as js from "../-helperFiles/GlobalJS";
    import { tooltip as tooltipv1 } from "../--tooltip/tooltip.v1";
    import { mapInputVariables, mapShowSections, mapDocument } from "../-helperFiles/GlobalStore";
    import Title from "../--collapsible/Title.svelte";
    import Documentation from "../--collapsible/Documentation.svelte";

    let fileName = "manifest";
    let sectionUCase = fileName.toUpperCase();

    export let mapDoc;
    export let required = false;
    export let onlyOneError = "";
    $mapDocument[fileName] = false;

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
</script>

<div class="col align-self-center sfdxet-br">
    <Title pRequired={required} sectionTag="-x" sectionName={sectionUCase} elementName={fileName} fileName={fileName} onlyOneError={onlyOneError}/>
    <Documentation headerD={sectionUCase} typeD={mapDoc.type} bodyD={mapDoc.body} sectionName={fileName}/>

    {#if $mapShowSections.manifest}
        <section class="sfdxet-section sfdxet-br">
            <button class="sfdxet-buttons" on:click={() => {js.showFolderPick({fileName})}}>Select File</button>
            <br/>
            <br/>
            {#if $mapShowSections.manifest2}
                <input type="text" class="sfdxet-absolute-center" title={$mapInputVariables.manifest} use:tooltipv1 value={$mapInputVariables.manifest} disabled/>
            {/if}
        </section>
    {/if}
</div>
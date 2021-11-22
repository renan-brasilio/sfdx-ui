<script>
    import * as js from "../-helperFiles/GlobalJS";
    import { tooltip as tooltipv1 } from "../--tooltip/tooltip.v1";
    import { mapInputVariables, mapShowSections, mapErrors } from "../-helperFiles/GlobalStore";
    import Title from "../--collapsible/Title.svelte";
    import Documentation from "../--collapsible/Documentation.svelte";

    let fileName = "packagename";
    let sectionUCase = fileName.toUpperCase();

    export let mapDoc;
    export let required = false;
    export let onlyOneError = "";

    let type = `<b><i>Optional</i></b>`;
    let body = `
        <br/><br/>
        Name of the package to associate with the metadata-formatted files.
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
</script>

<div class="col align-self-center sfdxet-br">
    <Title pRequired={required} sectionTag="-n" sectionName={sectionUCase} elementName={fileName} fileName={fileName} onlyOneError={onlyOneError}/>
    <Documentation headerD={sectionUCase} typeD={mapDoc.type} bodyD={mapDoc.body} sectionName={fileName}/>

    {#if $mapShowSections.packagename}
        <section class="sfdxet-section sfdxet-br">
            <label for={fileName}>
                Package Name
                <input 
                    type="text" 
                    id={fileName} 
                    name={fileName} 
                    class="sfdxet-absolute-center sfdxet-error-button {$mapErrors.packagename}" 
                    title={js.mapTooltips["manuallyDefine"]} 
                    use:tooltipv1 
                    placeholder="Insert..." 
                    bind:value={$mapInputVariables.packagename}
                />
            </label>
            <br/>
        </section>
    {/if}
</div>
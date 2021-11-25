<script>
    import * as js from "../-helperFiles/GlobalJS";
    import { tooltip as tooltipv1 } from "../--tooltip/tooltip.v1";
    import { mapInputVariables, mapShowSections } from "../-helperFiles/GlobalStore";
    import Title from "../-commonPages/Title.svelte";
    import Documentation from "../-commonPages/Documentation.svelte";

    let fileName = "advanced";
    let sectionUCase = fileName.toUpperCase();

    export let mapDoc;
    export let required = false;
    export let onlyOneError = "";

    let type = `<b><i>Optional</i></b>`;
    let body = `
        <br/><br/>
        Here you can insert any extra or manual tags.
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
    <Title pRequired={required} sectionTag={sectionUCase} elementName={fileName} fileName={fileName} onlyOneError={onlyOneError} pStyle="color: green;"/>
    <Documentation headerD={sectionUCase} typeD={mapDoc.type} bodyD={mapDoc.body} sectionName={fileName}/>
    
    {#if $mapShowSections.advanced}
        <section class="sfdxet-section sfdxet-br">
            <label for="advancedinput">
                Advanced Entry
                <input type="text" id="advancedinput" name="advancedinput" class="sfdxet-absolute-center sfdxet-error-button" title="Add any extra advanced statement. *USE THIS CAREFULLY." use:tooltipv1 placeholder="Be carefull..." bind:value={$mapInputVariables.advanced}/>
            </label>
        </section>
    {/if}
</div>
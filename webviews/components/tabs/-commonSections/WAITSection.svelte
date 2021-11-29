<script>
    import * as js from "../-helperFiles/GlobalJS";
    import { tooltip as tooltipv1 } from "../--tooltip/tooltip.v1";
    import { mapShowSections, mapInputVariables } from "../-helperFiles/GlobalStore";
    import Title from "../-commonPages/Title.svelte";
    import Documentation from "../-commonPages/Documentation.svelte";

    let fileName = "wait";
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
</script>

<div class="col align-self-center sfdxet-br">
    <Title pRequired={required} pSFDXParameter="-w" sectionName={sectionUCase} elementName={fileName} fileName={fileName} onlyOneError={onlyOneError}/>
    <Documentation headerD={sectionUCase} typeD={mapDoc.type} bodyD={mapDoc.body} sectionName={fileName}/>
    
    {#if $mapShowSections.wait}
        <section class="sfdxet-section sfdxet-br">
            <input type="number" on:keypress={e => {if(e.key==="."){e.preventDefault();}}} on:input={e => {e.target.value = e.target.value.replace(/[^0-9]*/g,"");}} class="sfdxet-absolute-center" title="Type: minutes; Default value: 33 minutes." use:tooltipv1 placeholder="33" bind:value={$mapInputVariables.wait}/>
        </section>
    {/if}
</div>
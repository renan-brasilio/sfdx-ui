<script>
    import * as js from "../-helperFiles/GlobalJS";
    import { mapShowSections, mapInputVariables, mapErrors } from "../-helperFiles/GlobalStore";
    import Title from "../-commonPages/Title.svelte";
    import Documentation from "../-commonPages/Documentation.svelte";
    import SelectCommon from "../-commonPages/SelectCommon.svelte";

    let fileName = "loglevel";
    let sectionUCase = fileName.toUpperCase();

    export let mapDoc;
    export let required = false;
    export let onlyOneError = "";

    let type = `<b><i>Optional</i></b>`;
    let body = `
        <br/><br/>            
        The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log.
        <br/><br/>
        Type: enum<br/>
        Permissible values are: trace, debug, info, warn, error, fatal, TRACE, DEBUG, INFO, WARN, ERROR, FATAL<br/>
        Default value: warn
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

    $mapInputVariables.loglevel = "warn";
</script>

<div class="col align-self-center sfdxet-br">
    <Title pRequired={required} pSFDXParameter="--loglevel" sectionName={sectionUCase} elementName={fileName} fileName={fileName} onlyOneError={onlyOneError}/>
    <Documentation headerD={sectionUCase} typeD={mapDoc.type} bodyD={mapDoc.body} sectionName={fileName}/>
    
    {#if $mapShowSections.loglevel}
        <h4 class="sfdxet-br"><b>{sectionUCase} Options:</b></h4>
        <section class="sfdxet-section">
            <SelectCommon error={$mapErrors.loglevel} pList={js.lLOGLEVEL} sectionName={fileName} defaultVal={$mapInputVariables.loglevel}/>
        </section>
    {/if}
</div>
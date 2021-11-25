<script>
    import * as js from "../-helperFiles/GlobalJS";
    import { mapShowSections, mapInputVariables, mapErrors } from "../-helperFiles/GlobalStore";
    import Title from "../-commonPages/Title.svelte";
    import Documentation from "../-commonPages/Documentation.svelte";
    import SelectCommon from "../-commonPages/SelectCommon.svelte";
    
    let fileName = "apiversion";
    let sectionUCase = fileName.toUpperCase();

    export let mapDoc;
    export let required = false;
    export let onlyOneError = "";

    let type = `<b><i>Optional</i></b>`;
    let body = `
        <br/><br/>
        Override the API version used for API requests made by this command.
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

    const lAPIVERSION = [];
    let dAPIVERSION;

    for(let i=8; i < 54; i++){
        if(i === 53){
            dAPIVERSION = i.toFixed(1);
        }

        lAPIVERSION.push({value: i.toFixed(1), label: i.toFixed(1)});
        
        if(i === 11){
            let j = i + .1;
            lAPIVERSION.push({value: j.toFixed(1), label: j.toFixed(1)});
        }
    }

    lAPIVERSION.reverse();

    $mapInputVariables[fileName] = dAPIVERSION;
    
    tsvscode.postMessage({
        type: "onGetAliasUsers"
    });
</script>

<div class="col align-self-center sfdxet-br">
    <Title pRequired={required} sectionTag="-a" sectionName={sectionUCase} elementName={fileName} fileName={fileName} onlyOneError={onlyOneError}/>
    <Documentation headerD={sectionUCase} typeD={mapDoc.type} bodyD={mapDoc.body} sectionName={fileName}/>

    {#if $mapShowSections.apiversion}
        <section class="sfdxet-section sfdxet-br">
            <SelectCommon error={$mapErrors.apiversion} pList={lAPIVERSION} sectionName={fileName} defaultVal={dAPIVERSION}/>
        </section>
    {/if}
</div>
<svelte:options accessors/>

<script>
    // Helper Files
    import { tooltip as tooltipv1 } from "../--tooltip/tooltip.v1";
    import Title from "../-commonPages/Title.svelte";
    import Documentation from "../-commonPages/Documentation.svelte";

    // Store
    import { 
        mapInputVariables, 
        mapShowSections, 
        objSFDX, 
    } from "../-helperFiles/GlobalStore";

    // Default
    let fileName = "number";
    let sectionUCase = fileName.toUpperCase();

    // Parameters
    export let mapDoc;
    export let required = false;
    export let onlyOneError = "";
    export let pSFDXParameter = "-n";

    // Documentation
    let type = `<b><i>Optional</i></b>`;
    let body = `
        <br/><br/>
        Number of most recent logs to display.
        <br/><br/>
        Type: number
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
            if($mapShowSections.number && $mapInputVariables.number){
                $objSFDX.terminal += ` ${pSFDXParameter} ${$mapInputVariables.number}`;
            }

            resolve(valid);
        });
    }
</script>

<div class="col align-self-center sfdxet-br">
    <Title pRequired={required} pSFDXParameter={pSFDXParameter} sectionName={sectionUCase} elementName={fileName} fileName={fileName} onlyOneError={onlyOneError}/>
    <Documentation headerD={sectionUCase} typeD={mapDoc.type} bodyD={mapDoc.body} sectionName={fileName}/>
    
    {#if $mapShowSections.number}
        <section class="sfdxet-section sfdxet-br">
            <input 
                type="number" 
                on:keypress={e => {if(e.key==="."){e.preventDefault();}}} 
                on:input={e => {e.target.value = e.target.value.replace(/[^0-9]*/g,"");}} 
                class="sfdxet-absolute-center" 
                title="Type: number; Default value: 1" 
                use:tooltipv1 
                placeholder="1" 
                bind:value={$mapInputVariables.number}
            />
        </section>
    {/if}
</div>
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
    let fileName = "wait";
    let sectionUCase = fileName.toUpperCase();

    // Parameters
    export let mapDoc;
    export let required = false;
    export let onlyOneError = "";
    export let pSFDXParameter = "-w";

    // Documentation
    let type = `<b><i>Optional</i></b>`;
    let body = `
        <br/><br/>
        Sets the streaming client socket timeout in minutes; specify a longer wait time if timeouts occur frequently.<br/><br/>
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

    export async function validate(){
        let valid = true;

        return await new Promise(function(resolve, reject) {
            if($mapShowSections.wait && $mapInputVariables.wait){
                $objSFDX.terminal += ` ${pSFDXParameter} ${$mapInputVariables.wait}`;
            }

            resolve(valid);
        });
    }
</script>

<div class="col align-self-center sfdxet-br">
    <Title pRequired={required} pSFDXParameter={pSFDXParameter} sectionName={sectionUCase} elementName={fileName} fileName={fileName} onlyOneError={onlyOneError}/>
    <Documentation pHeader={sectionUCase} typeD={mapDoc.type} bodyD={mapDoc.body} sectionName={fileName}/>
    
    {#if $mapShowSections.wait}
        <section class="sfdxet-section sfdxet-br">
            <input type="number" on:keypress={e => {if(e.key==="."){e.preventDefault();}}} on:input={e => {e.target.value = e.target.value.replace(/[^0-9]*/g,"");}} class="sfdxet-absolute-center" title="Type: minutes; Default value: 33 minutes." use:tooltipv1 placeholder="33" bind:value={$mapInputVariables.wait}/>
        </section>
    {/if}
</div>
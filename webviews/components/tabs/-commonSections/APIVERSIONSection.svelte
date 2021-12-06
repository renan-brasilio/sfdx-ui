<svelte:options accessors/>

<script>
    // Helper Pages
    import Title from "../-commonPages/Title.svelte";
    import Documentation from "../-commonPages/Documentation.svelte";
    import SelectCommon from "../-commonPages/SelectCommon.svelte";

    // Store
    import { 
        mapErrors,
        mapInputVariables, 
        mapShowSections, 
        objSFDX, 
    } from "../-helperFiles/GlobalStore";
    
    // Default
    let fileName = "apiversion";
    let sectionUCase = fileName.toUpperCase();

    // Parameters
    export let mapDoc;
    export let required = false;
    export let onlyOneError = "";
    export let pSFDXParameter = "-a";

    // Documentation
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

    export async function validate(){
        let valid = true;

        return await new Promise(function(resolve, reject) {
            if($mapShowSections.apiversion){
                if($mapInputVariables.apiversion){
                    $mapErrors.apiversion = "";
                    $objSFDX.terminal += ` ${pSFDXParameter} ${$mapInputVariables.apiversion}`;
                }else{
                    $mapErrors.apiversion = "sfdxet-error-select";

                    tsvscode.postMessage({
                        type: "onError",
                        value: `ERROR: Please select a Apiversion or uncheck the [${pSFDXParameter} APIVERSION] checkbox.` 
                    });

                    valid = false;
                }
            }else{
                $mapErrors.apiversion = "";
            }

            resolve(valid);
        });
    }
</script>

<div class="col align-self-center sfdxet-br">
    <Title pRequired={required} pSFDXParameter={pSFDXParameter} sectionName={sectionUCase} elementName={fileName} fileName={fileName} onlyOneError={onlyOneError}/>
    <Documentation pHeader={sectionUCase} typeD={mapDoc.type} bodyD={mapDoc.body} sectionName={fileName}/>

    {#if $mapShowSections.apiversion}
        <section class="sfdxet-section sfdxet-br">
            <SelectCommon error={$mapErrors.apiversion} pList={lAPIVERSION} sectionName={fileName} defaultVal={dAPIVERSION}/>
        </section>
    {/if}
</div>
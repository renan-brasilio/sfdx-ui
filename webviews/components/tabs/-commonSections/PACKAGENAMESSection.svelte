<script>
    import * as js from "../-helperFiles/GlobalJS";
    import { tooltip as tooltipv1 } from "../--tooltip/tooltip.v1";
    import { mapInputVariables, mapShowSections, mapErrors } from "../-helperFiles/GlobalStore";
    import Title from "../-commonPages/Title.svelte";
    import Documentation from "../-commonPages/Documentation.svelte";

    let fileName = "packagenames";
    let sectionUCase = fileName.toUpperCase();

    export let mapDoc;
    export let required = false;
    export let onlyOneError = "";

    let type = `<b><i>Optional</i></b>`;
    let body = `
        <br/><br/>
        A comma-separated list of packages to retrieve.
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
    <Title pRequired={required} sectionTag="-x" sectionName={sectionUCase} elementName={fileName} fileName={fileName} onlyOneError={onlyOneError}/>
    <Documentation headerD={sectionUCase} typeD={mapDoc.type} bodyD={mapDoc.body} sectionName={fileName}/>
    
    {#if $mapShowSections.packagenames}
        <section class="sfdxet-section sfdxet-br">
            <label for="packagenamesinput">
                Package(s) Name(s)
                <input 
                    type="text" 
                    id="packagenamesinput" 
                    name="packagenamesinput" 
                    class="sfdxet-absolute-center {$mapErrors.packagenames}" 
                    title="Insert the Package(s) filename(s) (comma-separated), Ex: MyPackage1, MyPackage1" 
                    use:tooltipv1 
                    placeholder="Package name..." 
                    bind:value={$mapInputVariables.packagenames}
                />
            </label>
        </section>
    {/if}
</div>

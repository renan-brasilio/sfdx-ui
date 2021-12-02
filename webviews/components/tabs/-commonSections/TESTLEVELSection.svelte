<svelte:options accessors/>

<script>
    // Helper Files
    import * as js from "../-helperFiles/GlobalJS";
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
    let fileName = "testlevel";
    let sectionUCase = fileName.toUpperCase();

    // Parameters
    export let mapDoc;
    export let required = false;
    export let onlyOneError = "";
    export let pSFDXParameter = "-l";

    // Documentation
    let type = `<b><i>Optional</i></b>`;
    let body = `
        <br/><br/>            
        Specifies which level of deployment tests to run. Valid values are:
        <br/><br/>
        NoTestRun—No tests are run. This test level applies only to deployments to development environments, such as sandbox, Developer Edition, or trial orgs. This test level is the default for development environments.
        <br/><br/>
        RunLocalTests—All tests in your org are run, except the ones that originate from installed managed packages. This test level is the default for production deployments that include Apex classes or triggers.
        <br/><br/>
        RunAllTestsInOrg—All tests in your org are run, including tests of managed packages.
        <br/><br/>
        If you don’t specify a test level, the default behavior depends on the contents of your deployment package. For more information, see “Running Tests in a Deployment” in the Metadata API Developer Guide.
        <br/><br/>
        Type: enum<br/>
        Permissible values are: NoTestRun, RunLocalTests, RunAllTestsInOrg<br/>
        Default value: NoTestRun
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

    $mapInputVariables.testlevel = "NoTestRun";

    export async function validate(){
        let valid = true;

        return await new Promise(function(resolve, reject) {
            if($mapShowSections.testlevel){
                if($mapInputVariables.testlevel){
                    $mapErrors.testlevel = '';
                    $objSFDX.terminal += ` ${pSFDXParameter} ${$mapInputVariables.testlevel}`;
                }else{
                    $mapErrors.testlevel = 'sfdxet-error-select';

                    tsvscode.postMessage({
                        type: 'onError',
                        value: `ERROR: Please select a TestLevel or uncheck the [${pSFDXParameter} TESTLEVEL] checkbox.` 
                    });

                    valid = false;
                }
            }else{
                $mapErrors.testlevel = '';
            }

            resolve(valid);
        });
    }
</script>

<div class="col align-self-center sfdxet-br">
    <Title pRequired={required} pSFDXParameter={pSFDXParameter} sectionName={sectionUCase} elementName={fileName} fileName={fileName} onlyOneError={onlyOneError}/>
    <Documentation headerD={sectionUCase} typeD={mapDoc.type} bodyD={mapDoc.body} sectionName={fileName}/>

    {#if $mapShowSections.testlevel}
        <section class="sfdxet-section sfdxet-br">
            <SelectCommon error={$mapErrors.testlevel} pList={js.lTESTLEVEL} sectionName={fileName} defaultVal={$mapInputVariables.testlevel}/>
        </section>
    {/if}
</div>
<script>
    // Helper Files
    import * as js from "../../-helperFiles/GlobalJS";
    import CSS from "../../-helperFiles/GlobalCSS.svelte";
    import { Circle2 } from "svelte-loading-spinners";
    import { } from "os";
    import WebviewListener from "../../-commonPages/WebviewListener.svelte";
    import RefreshIcon from "svelte-bootstrap-icons/lib/ArrowClockwise";

    // Store
    import { 
        mapInformation,
        mapInputVariables,
        mapShowSections,
        mapSpinner,
        objSFDX,
    } from "../../-helperFiles/GlobalStore";

    // Sections
    import JSONs from "../../-commonSections/JSONSection.svelte";
    import LOGLEVELs from "../../-commonSections/LOGLEVELSection.svelte";
    import TARGETUSERNAMEs from "../../-commonSections/TARGETUSERNAMESection.svelte";
    import APIVERSIONs from "../../-commonSections/APIVERSIONSection.svelte";
    // import COLORs from "../../-commonSections/COLORSection.svelte";
    import OUTPUTDIRs from "../../-commonSections/OUTPUTDIRSection.svelte";
    // import TESTLEVELs from "../../-commonSections/TESTLEVELSection.svelte";
    import CLASSNAMEs from "../../-commonSections/CLASSNAMESection.svelte";
    // import RESULTFORMATs from "../../-commonSections/RESULTFORMATSection.svelte";
    // import SUITENAMESs from "../../-commonSections/SUITENAMESSection.svelte";
    // import TESTSs from "../../-commonSections/TESTSSection.svelte";
    import WAITs from "../../-commonSections/WAITSection.svelte";
    // import SYNCHRONOUSs from "../../-commonSections/SYNCHRONOUSSection.svelte";
    import VERBOSEs from "../../-commonSections/VERBOSESection.svelte";
    // import DETAILEDCOVERAGEs from "../../-commonSections/DETAILEDCOVERAGESection.svelte";
    import ADVANCEDs from "../../-commonSections/ADVANCEDSection.svelte";

    // Component Validations
    let 
    JSONv, 
    LOGLEVELv, 
    TARGETUSERNAMEv,
    APIVERSIONv,
    // COLORv,
    OUTPUTDIRv,
    // TESTLEVELv,
    CLASSNAMEv,
    // RESULTFORMATv,
    // SUITENAMESv,
    // TESTSv,
    WAITv,
    // SYNCHRONOUSv,
    VERBOSEv,
    // DETAILEDCOVERAGEv,
    ADVANCEDv;

    // Documentation
    let fileName = "test_run";
    let showFileName = fileName.replace("_", ":");
    let showFileNameUpper = "Test:Run";
    let linkDocumentation = `https://developer.salesforce.com/docs/atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_force_apex.htm#cli_reference_force_apex_${fileName}`;

    // Initial loading
    if(!$mapSpinner.force){
        $mapSpinner.force = {};
    }

    $mapSpinner.force[fileName] = true;

    setTimeout(() => {
        $mapSpinner.force[fileName] = false;
    }, 1000);

    function startSFDX() {
        $objSFDX.terminal = "";
        $objSFDX.terminal = `force:apex:${showFileName}`;

        Promise.all([
            JSONv.validate(), 
            LOGLEVELv.validate(), 
            TARGETUSERNAMEv.validate(), 
            APIVERSIONv.validate(), 
            // COLORv.validate(), 
            OUTPUTDIRv.validate(), 
            CLASSNAMEv.validate(),  
            // RESULTFORMATv.validate(),  
            // SUITENAMESv.validate(),  
            // TESTSv.validate(),  
            WAITv.validate(),  
            // SYNCHRONOUSv.validate(),  
            VERBOSEv.validate(),  
            // DETAILEDCOVERAGEv.validate(),  
            ADVANCEDv.validate(), 
        ]).then((values) => {
            if(values){
                if(!values.includes(false)){
                    $mapSpinner.main = true;
                    $mapInformation.main = true;
            
                    js.globalContinue();
                }
            }
        });
    }

    function reset(){
        $mapInputVariables = {};
        
        for(let key in $mapShowSections){
            $mapShowSections[key] = false;
        }
    } 
</script>

<WebviewListener fileName={fileName} commandType="apex" showCommand={showFileNameUpper}/>

{#if $mapSpinner.force[fileName]}
    <div class="sfdxet-spinner">
        <Circle2 size="60" colorOuter="#034efc" unit="px"></Circle2>
    </div>
{:else}
    <div class="sfdxet-absolute-center">
        <h3>sfdx force:apex:{showFileName}</h3>
        <br/>
        <br/>
        <button class="sfdxet-buttons" on:click={startSFDX}>{showFileNameUpper}</button>
        <br/>
        <br/>
        <h3>Options:</h3>
        <h4><a target="_blank" href={linkDocumentation}>Official Documentation</a></h4>
        <br/>

        <!-- [--json] -->
        <svelte:component this="{JSONs}" bind:this="{JSONv}" />

        <!-- [--loglevel LOGLEVEL] -->
        <svelte:component this="{LOGLEVELs}" bind:this="{LOGLEVELv}" />
        
        <!-- [-u TARGETUSERNAME] -->
        <svelte:component this="{TARGETUSERNAMEs}" bind:this="{TARGETUSERNAMEv}" />
        
        <!-- [--apiversion APIVERSION] -->
        <svelte:component this="{APIVERSIONs}" bind:this="{APIVERSIONv}" />
        
        <!-- [-c] -->
        <!-- <svelte:component this="{COLORs}" bind:this="{COLORv}" /> -->

        <!-- [-d OUTPUTDIR] -->
        <svelte:component this="{OUTPUTDIRs}" bind:this="{OUTPUTDIRv}" />

        <!-- [-l TESTLEVEL] -->
        <!-- <svelte:component this="{TESTLEVELs}" bind:this="{TESTLEVELv}" /> -->
        
        <!-- [-n CLASSNAMES] -->
        <svelte:component this="{CLASSNAMEs}" bind:this="{CLASSNAMEv}" />

        <!-- [-r RESULTFORMAT] -->
        <!-- <svelte:component this="{RESULTFORMATs}" bind:this="{RESULTFORMATv}" /> -->

        <!-- [-s SUITENAMES] -->
        <!-- <svelte:component this="{SUITENAMESs}" bind:this="{SUITENAMESv}" /> -->

        <!-- [-t TESTS] -->
        <!-- <svelte:component this="{TESTSs}" bind:this="{TESTSv}" /> -->

        <!-- [-w WAIT] -->
        <svelte:component this="{WAITs}" bind:this="{WAITv}" />
        
        <!-- [-y] -->
        <!-- <svelte:component this="{SYNCHRONOUSs}" bind:this="{SYNCHRONOUSv}" /> -->
        
        <!-- [--verbose] -->
        <svelte:component this="{VERBOSEs}" bind:this="{VERBOSEv}" />
        
        <!-- [-v] -->
        <!-- <svelte:component this="{DETAILEDCOVERAGEs}" bind:this="{DETAILEDCOVERAGEv}" /> -->

        <!-- [ADVANCED] -->
        <svelte:component this="{ADVANCEDs}" bind:this="{ADVANCEDv}" />
        <br/>
        <br/>
        <button class="sfdxet-buttons-icon" on:click={reset} title="Reset Options"><RefreshIcon /></button>
    </div>
{/if}

<CSS />
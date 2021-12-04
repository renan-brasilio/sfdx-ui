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
        mapErrors,
        mapInformation,
        mapInputVariables,
        mapSectionValidation,
        mapShowSections,
        mapSpinner,
        objSFDX,
    } from "../../-helperFiles/GlobalStore";

    // Sections
    import JSONs from "../../-commonSections/JSONSection.svelte";
    import LOGLEVELs from "../../-commonSections/LOGLEVELSection.svelte";
    import TARGETUSERNAMEs from "../../-commonSections/TARGETUSERNAMESection.svelte";
    import APIVERSIONs from "../../-commonSections/APIVERSIONSection.svelte";
    // import TESTRUNIDs from "../../-commonSections/TESTRUNIDSection.svelte";
    // import CODECOVERAGEs from "../../-commonSections/CODECOVERAGESection.svelte";
    import OUTPUTDIRs from "../../-commonSections/OUTPUTDIRSection.svelte";
    // import RESULTFORMATs from "../../-commonSections/RESULTFORMATSection.svelte";
    import WAITs from "../../-commonSections/WAITSection.svelte";
    import VERBOSEs from "../../-commonSections/VERBOSESection.svelte";
    import ADVANCEDs from "../../-commonSections/ADVANCEDSection.svelte";

    // Component Validations
    let 
    JSONv, 
    LOGLEVELv, 
    TARGETUSERNAMEv,
    APIVERSIONv,
    // TESTRUNIDv,
    // CODECOVERAGEv,
    OUTPUTDIRv,
    // RESULTFORMATv,
    WAITv,
    VERBOSEv,
    ADVANCEDv;

    // Documentation
    let fileName = "test_report";
    let showFileName = fileName.replace("_", ":");
    let showFileNameUpper = "Test:Report";
    let linkDocumentation = `https://developer.salesforce.com/docs/atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_force_apex.htm#cli_reference_force_apex_${fileName}`;

    // Initial loading
    if(!$mapSpinner.force){
        $mapSpinner.force = {};
    }

    $mapSpinner.force[fileName] = true;

    setTimeout(() => {
        $mapSpinner.force[fileName] = false;
    }, 1000);

    // Mandatory Field(s)
    let mandatorySections = [
        "testrunid",
    ];

    if(!$mapShowSections){
        $mapShowSections = {};
    }

    if(!$mapSectionValidation){
        $mapSectionValidation = {};
    }

    for(let i = 0; i < mandatorySections.length; i++){
        $mapShowSections[mandatorySections[i]] = true;
        $mapSectionValidation[mandatorySections[i]] = 0;
    }

    function startSFDX() {
        let validation = 0;
        let sectionError;

        $objSFDX.terminal = "";
        $objSFDX.terminal = `force:apex:${showFileName}`;

        Promise.all([
            JSONv.validate(), 
            LOGLEVELv.validate(), 
            TARGETUSERNAMEv.validate(), 
            APIVERSIONv.validate(), 
            // TESTRUNIDv.validate(), 
            // CODECOVERAGEv.validate(), 
            OUTPUTDIRv.validate(), 
            // RESULTFORMATv.validate(), 
            WAITv.validate(), 
            VERBOSEv.validate(), 
            ADVANCEDv.validate(), 
        ]).then((values) => {
            if(values){
                for(let i in $mapSectionValidation){
                    if($mapSectionValidation[i] === 1){
                        validation++;
                        break;
                    }else if($mapSectionValidation[i] === 0){
                        sectionError = i;
                        break;
                    }
                }
    
                if(validation === 0){
                    if(!$mapErrors){
                        $mapErrors = {};
                    }

                    if(sectionError){
                        $mapErrors[sectionError] = "sfdxet-error-span";
                        sectionError = sectionError.toUpperCase();
                        
                        tsvscode.postMessage({
                            type: "onError",
                            value: `ERROR: ${sectionError} is required.` 
                        });
        
                        return;
                    }
                }else if(!values.includes(false)){
                    for(let key in $mapErrors){
                        $mapErrors[key] = "";
                    }     
    
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
        
        <!-- -i TESTRUNID -->
        <!-- <svelte:component this="{TESTRUNIDs}" bind:this="{TESTRUNIDv}" required={true} /> -->
        
        <!-- [-c] -->
        <!-- <svelte:component this="{CODECOVERAGEs}" bind:this="{CODECOVERAGEv}" /> -->
        
        <!-- [-d OUTPUTDIR] -->
        <svelte:component this="{OUTPUTDIRs}" bind:this="{OUTPUTDIRv}" />
        
        <!-- [-r RESULTFORMAT] -->
        <!-- <svelte:component this="{RESULTFORMATs}" bind:this="{RESULTFORMATv}" /> -->
        
        <!-- [-w WAIT] -->
        <svelte:component this="{WAITs}" bind:this="{WAITv}" />
        
        <!-- [--verbose] -->
        <svelte:component this="{VERBOSEs}" bind:this="{VERBOSEv}" />

        <!-- [ADVANCED] -->
        <svelte:component this="{ADVANCEDs}" bind:this="{ADVANCEDv}" />
        <br/>
        <br/>
        <button class="sfdxet-buttons-icon" on:click={reset} title="Reset Options"><RefreshIcon /></button>
    </div>
{/if}

<CSS />
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
    // import TRIGGERNAMes from "../../-commonSections/TRIGGERNAMESection.svelte";
    import TEMPLATEs from "../../-commonSections/TEMPLATESection.svelte";
    import OUTPUTDIRs from "../../-commonSections/OUTPUTDIRSection.svelte";
    import APIVERSIONs from "../../-commonSections/APIVERSIONSection.svelte";
    // import SOBJECTs from "../../-commonSections/SOBJECTSection.svelte";
    // import TRIGGEREVENTSs from "../../-commonSections/TRIGGEREVENTSSection.svelte";
    import ADVANCEDs from "../../-commonSections/ADVANCEDSection.svelte";

    // Component Validations
    let 
    JSONv, 
    LOGLEVELv, 
    // TRIGGERNAMEv,
    TEMPLATEv,
    OUTPUTDIRv,
    APIVERSIONv,
    // SOBJECTv,
    // TRIGGEREVENTSv,
    ADVANCEDv;

    // Documentation
    let fileName = "trigger_create";
    let showFileName = fileName.replace("_", ":");
    let showFileNameUpper = "Trigger:Create";
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
        "triggername",
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
            // TRIGGERNAMEv.validate(), 
            TEMPLATEv.validate(), 
            OUTPUTDIRv.validate(), 
            APIVERSIONv.validate(), 
            // SOBJECTv.validate(), 
            // TRIGGEREVENTSv.validate(), 
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
            if(key !== "triggername"){
                $mapShowSections[key] = false;
            }
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
        <h3>sfdx force:apex:{showFileName} </h3>
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

        <!-- -n TRIGGERNAME -->
        <!-- <svelte:component this="{TRIGGERNAMEs}" bind:this="{TRIGGERNAMEv}" required={true}/> -->
        
        <!-- [-t TEMPLATE] -->
        <svelte:component this="{TEMPLATEs}" bind:this="{TEMPLATEv}" />
        
        <!-- [-d OUTPUTDIR] -->
        <svelte:component this="{OUTPUTDIRs}" bind:this="{OUTPUTDIRv}" defaultFolder="." />

        <!-- [--apiversion APIVERSION] -->
        <svelte:component this="{APIVERSIONs}" bind:this="{APIVERSIONv}" pSFDXParameter="--apiversion" />
        
        <!-- [-s SOBJECT] -->
        <!-- <svelte:component this="{SOBJECTs}" bind:this="{SOBJECTv}" /> -->
        
        <!-- [-e TRIGGEREVENTS] -->
        <!-- <svelte:component this="{TRIGGEREVENTSs}" bind:this="{TRIGGEREVENTSv}" /> -->

        <!-- [ADVANCED] -->
        <svelte:component this="{ADVANCEDs}" bind:this="{ADVANCEDv}" />
        <br/>
        <br/>
        <button class="sfdxet-buttons-icon" on:click={reset} title="Reset Options"><RefreshIcon /></button>
    </div>
{/if}

<CSS />
<script>
    // Helper Files
    import { } from "os";
    import CSS from "../../-helperFiles/GlobalCSS.svelte";
    import { Circle2 } from "svelte-loading-spinners";
    import { onMount } from "svelte";
    import * as js from "../../-helperFiles/GlobalJS";

    // Store
    import { 
        lTARGETUSERNAME,
        mapApex, 
        mapErrors,
        mapForceShowSections,
        mapInformation,
        mapInputVariables,
        mapSectionValidation,
        mapShowSections,
        mapSpinner,
        mapTargetUsername,
        objSFDX,
        pickFolderType,
    } from "../../-helperFiles/GlobalStore";

    // Sections
    import ADVANCEDs from "../../-commonSections/ADVANCEDSection.svelte";
    import APIVERSIONs from "../../-commonSections/APIVERSIONSection.svelte";
    import CLASSNAMEs from "../../-commonSections/CLASSNAMESection.svelte";
    import JSONs from "../../-commonSections/JSONSection.svelte";
    import LOGLEVELs from "../../-commonSections/LOGLEVELSection.svelte";
    import OUTPUTDIRs from "../../-commonSections/OUTPUTDIRSection.svelte";
    import TEMPLATEs from "../../-commonSections/TEMPLATESection.svelte";

    // Component Validations
    let 
        ADVANCEDValidation,
        APIVERSIONValidation,
        CLASSNAMEValidation,
        JSONValidation, 
        LOGLEVELValidation, 
        OUTPUTDIRValidation,
        TEMPLATEValidation;

    // Initial loading
    $mapSpinner.force = {
        class_create: true
    };

    if($mapApex){
        for(const key in $mapApex){
            if(key !== "class_create"){
                $mapApex[key] = false;
            }
        }
    }

    setTimeout(() => {
        $mapSpinner.force.class_create= false;
    }, 1000);

    if($mapShowSections){
        for(const key in $mapShowSections){
            $mapShowSections[key] = false;
        }
    }

    $mapShowSections["classname"] = true;

    $mapSectionValidation = {
        classname: 0
    };

    $mapErrors = {};
    $mapInputVariables = {};

    // Webview Listener
    onMount(() => {
        window.addEventListener("message", event => {
            const backReturn = event.data; // The json data that the extension sent
            switch (backReturn.type) {
                case "onConfirmRet":
                    if(backReturn.value === true){
                        callSFDX();
                    }else{
                        $mapSpinner.main = false;
                        $mapInformation.main = false;
                    }

                    break;
                case "folderUri":
                    $mapInputVariables[$pickFolderType] = backReturn.value[0].path;
                    break;
                case "fileUri":
                    $mapInputVariables[$pickFolderType] = backReturn.value[0].path;
                    $mapShowSections[$pickFolderType] = true;
                    break;
                case "aliasJSON":
                    for(const key in backReturn.value){
                        let option = {value: key, label: key};

                        $mapTargetUsername[key] = backReturn.value[key];
                        $lTARGETUSERNAME.push(option);

                        $mapShowSections.targetusernamespinner = false;
                    }
                    break;
                case "sfdxClosed":
                    if($mapShowSections){
                        for(const key in $mapShowSections){
                            $mapShowSections[key] = false;
                        }
                    }

                    if($mapSectionValidation){
                        for(const key in $mapSectionValidation){
                            $mapSectionValidation[key] = 0;
                        }
                    }

                    if($mapApex){
                        for(const key in $mapApex){
                            if(key !== "class_create"){
                                $mapApex[key] = false;
                            }
                        }
                    }

                    $mapSpinner.main = false;
                    $mapInformation.main = false;
                    $mapForceShowSections.apex = true;
                    $mapApex.class_create = true;
                    break;
            }
        });
    });

    function class_create() {
        $objSFDX.terminal = "";
        $objSFDX.terminal = "force:apex:class:create";

        // JSON
        JSONValidation.validate()
        .then(function(valid) {
            if(!valid){
                return;
            }
        });

        // LOGLEVEL
        LOGLEVELValidation.validate()
        .then(function(valid) {
            if(!valid){
                return;
            }
        });

        // CLASSNAME
        CLASSNAMEValidation.validate()
        .then(function(valid) {
            if(!valid){
                return;
            }
        });

        // TEMPLATE
        TEMPLATEValidation.validate()
        .then(function(valid) {
            if(!valid){
                return;
            }
        });
        
        // OUTPUTDIR
        OUTPUTDIRValidation.validate()
        .then(function(valid) {
            if(!valid){
                return;
            }
        });

        // APIVERSION
        APIVERSIONValidation.validate()
        .then(function(valid) {
            if(!valid){
                return;
            }
        });

        // ADVANCED
        ADVANCEDValidation.validate()
        .then(function(valid) {
            if(!valid){
                return;
            }
        });

        let validation = 0;

        for(let i in $mapSectionValidation){
            if($mapSectionValidation[i] === 1){
                validation++;
                break;
            }
        }

        if(validation === 0){
            $mapErrors.classname = "sfdxet-error-span";

            tsvscode.postMessage({
                    type: "onError",
                    value: `ERROR: CLASSNAME is required.` 
                });

                return;
        }else{            
            $mapErrors.classname = "";
            $mapErrors.outputdir = "";

            $mapSpinner.main = true;
            $mapInformation.main = true;
    
            js.globalContinue();
        }
    }

    function callSFDX(){
        tsvscode.postMessage({
            type: "onInfo",
            value: "Starting the Terminal + Script: Class:Create" 
        });

        tsvscode.postMessage($objSFDX);
    }
</script>

{#if $mapSpinner.force.class_create}
    <div class="sfdxet-spinner">
        <Circle2 size="60" colorOuter="#034efc" unit="px"></Circle2>
    </div>
{:else}
    <div class="sfdxet-absolute-center">
        <h3>sfdx force:apex:class:create</h3>
        <br/>
        <br/>
        <button class="sfdxet-buttons" on:click={class_create}>Class:Create</button>
        <br/>
        <br/>
        <h3>Options:</h3>
        <h4><a target="_blank" href="https://developer.salesforce.com/docs/atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_force_apex.htm#cli_reference_force_apex_class_create">Official Documentation</a></h4>
        <br/>

        <!-- [--json] -->
        <svelte:component this="{JSONs}" bind:this="{JSONValidation}" />
        
        <!-- [--loglevel LOGLEVEL] -->
        <svelte:component this="{LOGLEVELs}" bind:this="{LOGLEVELValidation}" />

        <!-- [-n CLASSNAME] -->
        <svelte:component this="{CLASSNAMEs}" bind:this="{CLASSNAMEValidation}" required={true}/>
        
        <!-- [-t TEMPLATE] -->
        <svelte:component this="{TEMPLATEs}" bind:this="{TEMPLATEValidation}" />
        
        <!-- [-d OUTPUTDIR] -->
        <svelte:component this="{OUTPUTDIRs}" bind:this="{OUTPUTDIRValidation}" defaultFolder="." />

        <!-- [--apiversion APIVERSION] -->
        <svelte:component this="{APIVERSIONs}" bind:this="{APIVERSIONValidation}" pSFDXParameter="--apiversion" />

        <!-- [ADVANCED] -->
        <svelte:component this="{ADVANCEDs}" bind:this="{ADVANCEDValidation}" />
    </div>
{/if}

<CSS />
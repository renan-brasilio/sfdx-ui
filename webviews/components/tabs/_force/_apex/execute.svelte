<script>
    // Helper Files
    import { } from "os";
    import { Circle2 } from "svelte-loading-spinners";
    import CSS from "../../-helperFiles/GlobalCSS.svelte";
    import { onMount } from "svelte";

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
        pickFileType, 
        pickFolderType,
    } from "../../-helperFiles/GlobalStore";

    // Sections
    import JSONs from "../../-commonSections/JSONSection.svelte";
    import LOGLEVELs from "../../-commonSections/LOGLEVELSection.svelte";
    import TARGETUSERNAMEs from "../../-commonSections/TARGETUSERNAMESection.svelte";
    import APIVERSIONs from "../../-commonSections/APIVERSIONSection.svelte";
    import APEXCODEFILEs from "../../-commonSections/APEXCODEFILESection.svelte";
    import ADVANCEDs from "../../-commonSections/ADVANCEDSection.svelte";

     // Component Validations
     let 
        ADVANCEDValidation,
        APEXCODEFILEValidation,
        APIVERSIONValidation,
        JSONValidation, 
        LOGLEVELValidation, 
        TARGETUSERNAMEValidation;

    // Initial loading
    $mapSpinner.force = {
        execute: true
    };

    if($mapApex){
        for(const key in $mapApex){
            if(key !== "execute"){
                $mapApex[key] = false;
            }
        }
    }

    setTimeout(() => {
        $mapSpinner.force.execute = false;
    }, 1000);

    if($mapShowSections){
        for(const key in $mapShowSections){
            $mapShowSections[key] = false;
        }
    }

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

    function execute() {
        $objSFDX.terminal = "";
        $objSFDX.terminal = "force:apex:execute";

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

        // TARGETUSERNAME
        TARGETUSERNAMEValidation.validate()
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

        // APEXCODEFILE
        APEXCODEFILEValidation.validate()
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

        $mapSpinner.main = true;
        $mapInformation.main = true;

        js.globalContinue();
    }

    function callSFDX(){
        tsvscode.postMessage({
            type: "onInfo",
            value: "Starting the Terminal + Script: Execute" 
        });

        tsvscode.postMessage($objSFDX);
    }
</script>

{#if $mapSpinner.force.execute}
    <div class="sfdxet-spinner">
        <Circle2 size="60" colorOuter="#034efc" unit="px"></Circle2>
    </div>
{:else}
    <div class="sfdxet-absolute-center">
        <h3>sfdx force:apex:execute</h3>
        <br/>
        <br/>
        <button class="sfdxet-buttons" on:click={execute}>Execute</button>
        <br/>
        <br/>
        <h3>Options:</h3>
        <h4><a target="_blank" href="https://developer.salesforce.com/docs/atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_force_apex.htm#cli_reference_force_apex_execute">Official Documentation</a></h4>
        <br/>

        <!-- [--json] -->
        <svelte:component this="{JSONs}" bind:this="{JSONValidation}" />

        <!-- [--loglevel LOGLEVEL] -->
        <svelte:component this="{LOGLEVELs}" bind:this="{LOGLEVELValidation}" />
        
        <!-- [-u TARGETUSERNAME] -->
        <svelte:component this="{TARGETUSERNAMEs}" bind:this="{TARGETUSERNAMEValidation}" />
        
        <!-- [--apiversion APIVERSION] -->
        <svelte:component this="{APIVERSIONs}" bind:this="{APIVERSIONValidation}" />
        
        <!-- [-f APEXCODEFILE] -->
        <svelte:component this="{APEXCODEFILEs}" bind:this="{APEXCODEFILEValidation}" />

        <!-- [ADVANCED] -->
        <svelte:component this="{ADVANCEDs}" bind:this="{ADVANCEDValidation}" />
    </div>
{/if}

<CSS />
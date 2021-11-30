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
        pickFileType, 
        pickFolderType
    } from "../../-helperFiles/GlobalStore";

    // Sections
    import JSONs from "../../-commonSections/JSONSection.svelte";
    import LOGLEVELs from "../../-commonSections/LOGLEVELSection.svelte";
    import TARGETUSERNAMEs from "../../-commonSections/TARGETUSERNAMESection.svelte";
    import APIVERSIONs from "../../-commonSections/APIVERSIONSection.svelte";
    import APEXCODEFILEs from "../../-commonSections/APEXCODEFILESection.svelte";
    import ADVANCEDs from "../../-commonSections/ADVANCEDSection.svelte";

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
            const message = event.data; // The json data that the extension sent
            switch (message.type) {
                case "onConfirmRet":
                    if(message.value === true){
                        callSFDX();
                    }else{
                        $mapSpinner.main = false;
                        $mapInformation.main = false;
                    }

                    break;
                case "folderUri":
                    $mapInputVariables[$pickFolderType] = message.value[0].path;
                    break;
                case "fileUri":
                    $mapInputVariables[$pickFileType] = message.value[0].path;
                    $mapShowSections[$pickFileType] = true;
                    break;
                case "aliasJSON":
                    for(const key in message.value){
                        let option = {value: key, label: key};

                        $mapTargetUsername[key] = message.value[key];
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
                            if(key !== "execute"){
                                $mapApex[key] = false;
                            }
                        }
                    }

                    $mapSpinner.main = false;
                    $mapInformation.main = false;
                    $mapForceShowSections.apex = true;
                    $mapApex.execute = true;
                    break;
            }
        });
    });

    let message = {
        type: "onTerminalSFDX"
    };

    function execute() {
        message.sfdx = "";

        message.sfdx = "force:apex:execute";

        // JSON
        if($mapShowSections.json){
            message.sfdx += " --json > ";
            
            if($mapInputVariables.json){
                message.sfdx += $mapInputVariables.json;
            }else{
                message.sfdx += "output.json";
            }
        }

        if($mapInputVariables.json2){
            message.pJSON = " --json";
            message.vJSONPath = $mapInputVariables.json2;

            if($mapInputVariables.json){
                message.vJSON += $mapInputVariables.json;
            }
        }

        // LOGLEVEL
        if($mapShowSections.loglevel){
            if($mapInputVariables.loglevel){
                $mapErrors.loglevel = "";
                message.sfdx += ` --loglevel ${$mapInputVariables.loglevel}`;
            }else{
                $mapErrors.loglevel = "sfdxet-error-select";

                tsvscode.postMessage({
                    type: "onError",
                    value: `ERROR: Please select a Loglevel or uncheck the [--loglevel LOGLEVEL] checkbox.` 
                });

                return;
            }
        }else{
            $mapErrors.loglevel = "";
        }

        // TARGETUSERNAME
        if($mapShowSections.targetusername){
            if($mapInputVariables.targetusername){
                $mapErrors.targetusername = "";
                message.sfdx += ` -u ${$mapInputVariables.targetusername}`;
            }else{
                $mapErrors.targetusername = "sfdxet-error-select";

                tsvscode.postMessage({
                    type: "onError",
                    value: `ERROR: Please select a Targetusername or uncheck the [-u TARGETUSERNAME] checkbox.` 
                });

                return;
            }
        }else{
            $mapErrors.targetusername = "";
        }

        // APIVERSION
        if($mapShowSections.apiversion){
            if($mapInputVariables.apiversion){
                $mapErrors.apiversion = "";
                message.sfdx += ` --apiversion ${$mapInputVariables.apiversion}`;
            }else{
                $mapErrors.apiversion = "sfdxet-error-select";

                tsvscode.postMessage({
                    type: "onError",
                    value: `ERROR: Please select a Apiversion or uncheck the [-a APIVERSION] checkbox.` 
                });

                return;
            }
        }else{
            $mapErrors.apiversion = "";
        }

        // APEXCODEFILE
        if($mapShowSections.apexcodefile){
            message.sfdx += ` -f `;

            console.log(`mapInputVariables: ${JSON.stringify($mapInputVariables)}`);

            if($mapShowSections.apexcodefile2){
                if($mapInputVariables.apexcodefile2){
                    $mapErrors.apexcodefile2 = "";
                    message.sfdx += $mapInputVariables.apexcodefile2;
                }
            }else if($mapInputVariables.apexcodefile){
                $mapErrors.apexcodefile = "";
                message.sfdx += $mapInputVariables.apexcodefile;
            }else{
                $mapErrors.apexcodefile = "sfdxet-error-span";

                tsvscode.postMessage({
                    type: "onError",
                    value: `ERROR: Please select/insert a Folder or uncheck the [-f APEXCODEFILE] checkbox.` 
                });

                return;
            }
        }

        // ADVANCED
        if($mapShowSections.advanced){
            if($mapInputVariables.advanced){
                $mapErrors.advanced = "";
                message.sfdx += ` ${$mapInputVariables.advanced}`;
            }else{
                tsvscode.postMessage({
                    type: "onError",
                    value: `ERROR: Please insert your advanced input or uncheck the Advanced checkbox.` 
                });

                return;
            }
        }

        $mapSpinner.main = true;
        $mapInformation.main = true;

        tsvscode.postMessage({
            type: "onConfirm",
            title: "This action will start the terminal with the selected options, Continue?",
            confirmLabel: "Continue",
            declineLabel: "Cancel" 
        });
    }

    function callSFDX(){
        tsvscode.postMessage({
            type: "onInfo",
            value: "Starting the Terminal + Script: Execute" 
        });

        tsvscode.postMessage(message);
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
        <JSONs />

        <!-- [--loglevel LOGLEVEL] -->
        <LOGLEVELs />

        <!-- [-u TARGETUSERNAME] -->
        <TARGETUSERNAMEs />
        
        <!-- [--apiversion APIVERSION] -->
        <APIVERSIONs />

        <!-- [-f APEXCODEFILE] -->
        <APEXCODEFILEs />

        <!-- ADVANCED -->
        <ADVANCEDs />
    </div>
{/if}

<CSS />
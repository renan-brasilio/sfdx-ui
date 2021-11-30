<script>
    import { } from "os";
    import { Circle2 } from "svelte-loading-spinners";
    import CSS from "../../-helperFiles/GlobalCSS.svelte";
    import { onMount } from "svelte";
    import { 
        mapInputVariables,
        mapShowSections,
        lTARGETUSERNAME,
        mapTargetUsername,
        pickFolderType,
        mapErrors,
        mapSpinner,
        mapSectionValidation,
        mapInformation,
        mapForceShowSections,
        mapApex 
    } from "../../-helperFiles/GlobalStore";
    import JSONs from "../../-commonSections/JSONSection.svelte";
    import LOGLEVELs from "../../-commonSections/LOGLEVELSection.svelte";
    import TARGETUSERNAMEs from "../../-commonSections/TARGETUSERNAMESection.svelte";
    import APIVERSIONs from "../../-commonSections/APIVERSIONSection.svelte";
    import ADVANCEDs from "../../-commonSections/ADVANCEDSection.svelte";

    $mapSpinner.force = {
        log_tail: true
    };

    if($mapApex){
        for(const key in $mapApex){
            if(key !== "log_tail"){
                $mapApex[key] = false;
            }
        }
    }

    //Initial loading
    setTimeout(() => {
        $mapSpinner.force.log_tail = false;
    }, 1000);

    if($mapShowSections){
        for(const key in $mapShowSections){
            $mapShowSections[key] = false;
        }
    }

    $mapSectionValidation = {
        classname: 0
    };

    $mapErrors = {};
    $mapInputVariables = {};

    let mapDocRequired = {
        type: `<b>Required</b>`,
    };

    // Webview Listener
    onMount(() => {
        window.addEventListener("message", event => {
            const message = event.data; // The json data that the extension sent
            switch (message.type) {
                case "folderUri":
                    $mapInputVariables[$pickFolderType] = message.value[0].path;
                    break;
                case "fileUri":
                    $mapInputVariables[$pickFolderType] = message.value[0].path;
                    $mapShowSections[$pickFolderType] = true;
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
                            if(key !== "log_tail"){
                                $mapApex[key] = false;
                            }
                        }
                    }

                    $mapSpinner.main = false;
                    $mapInformation.main = false;
                    $mapForceShowSections.apex = true;
                    $mapApex.log_tail = true;
                    break;
            }
        });
    });

    function log_tail() {
        tsvscode.postMessage({
            type: "onInfo",
            value: "Starting the Terminal + Script: Log:Tail" 
        });

        let message = {
            type: "onTerminalSFDX"
        };

        message.sfdx = "force:apex:log:tail";

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

        // APIVERSION

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

            tsvscode.postMessage({
                type: "onInfo",
                value: "Starting the Terminal + Script: Log:Tail" 
            });

            $mapSpinner.main = true;
            $mapInformation.main = true;
    
            tsvscode.postMessage(message);
        }
    }
</script>

{#if $mapSpinner.force.log_tail}
    <div class="sfdxet-spinner">
        <Circle2 size="60" colorOuter="#034efc" unit="px"></Circle2>
    </div>
{:else}
    <div class="sfdxet-absolute-center">
        <h3>sfdx force:apex:log:tail</h3>
        <br/>
        <br/>
        <button class="sfdxet-buttons" on:click={log_tail}>Log:Tail</button>
        <br/>
        <br/>
        <h3>Options:</h3>
        <h4><a target="_blank" href="https://developer.salesforce.com/docs/atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_force_apex.htm#cli_reference_force_apex_log_list">Official Documentation</a></h4>
        <br/>

        <!-- [--json] -->
        <JSONs />

        <!-- [--loglevel LOGLEVEL] -->
        <LOGLEVELs />

        <!-- [-u TARGETUSERNAME] -->
        <TARGETUSERNAMEs />

        <!-- [--apiversion APIVERSION] -->
        <APIVERSIONs />

        <!-- [-c] -->
        <!-- [-d DEBUGLEVEL] -->
        <!-- [-s] -->

        <!-- ADVANCED -->
        <ADVANCEDs />

    </div>
{/if}

<CSS />
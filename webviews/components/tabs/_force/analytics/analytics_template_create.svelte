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
        mapInformation,
        mapForceShowSections,
        mapSource,
        mapSectionValidation
    } from "../../-helperFiles/GlobalStore";
    import JSONs from "../../-commonSections/JSONSection.svelte";
    import LOGLEVELs from "../../-commonSections/LOGLEVELSection.svelte";
    import OUTPUTDIRs from "../../-commonSections/OUTPUTDIRSection.svelte";
    import APIVERSIONs from "../../-commonSections/APIVERSIONSection.svelte";
    import ADVANCEDs from "../../-commonSections/ADVANCEDSection.svelte";

    $mapSpinner.force = {
        analytics: true
    };

    //Initial loading
    setTimeout(() => {
        $mapSpinner.force.analytics = false;
    }, 1000);

    if($mapShowSections){
        for(const key in $mapShowSections){
            $mapShowSections[key] = false;
        }
    }

    $mapSectionValidation = {
        templatename: 0
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
                case "onConfirmRet":
                    if(message.value === true){
                        analytics();
                    }else{
                        $mapSpinner.main = false;
                        $mapInformation.main = false;
                    }

                    break;
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

                    if($mapSource){
                        for(const key in $mapSource){
                            if(key !== "analytics"){
                                $mapSource[key] = false;
                            }
                        }
                    }

                    $mapSpinner.main = false;
                    $mapInformation.main = false;
                    $mapForceShowSections.source = true;
                    $mapSource.analytics = true;
                    break;
            }
        });
    });

    let message = {
        type: "onTerminalSFDX"
    };

    function validateAnalytics() {
        message.sfdx = "";
    
        message.sfdx = "force:analytics:template:create";
        
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

        // OUTPUTDIR

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

        // TEMPLATENAME

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
            $mapErrors.metadata = "sfdxet-error-span";
            $mapErrors.manifest = "sfdxet-error-span";
            $mapErrors.sourcepath = "sfdxet-error-span";

            tsvscode.postMessage({
                    type: "onError",
                    value: `ERROR: Select one between: SOURCEPATH, MANIFEST or METADATA` 
                });

                return;
        }else{
            $mapErrors.metadata = "";
            $mapErrors.manifest = "";
            $mapErrors.sourcepath = "";

            $mapSpinner.main = true;
            $mapInformation.main = true;
            
            tsvscode.postMessage({
                type: "onConfirm",
                title: "This action will start the terminal with the selected options, Continue?",
                confirmLabel: "Continue",
                declineLabel: "Cancel" 
            });
        }
    }

    function analytics() {
        tsvscode.postMessage({
            type: "onInfo",
            value: "Starting the Terminal + Script: force:analytics:template:create" 
        });

        tsvscode.postMessage(message);
    }
</script>

{#if $mapSpinner.force.analytics}
    <div class="sfdxet-spinner">
        <Circle2 size="60" colorOuter="#034efc" unit="px"></Circle2>
    </div>
{:else}
    <div class="sfdxet-absolute-center">
        <h3>sfdx force:source:analytics</h3>
        <br/>
        <br/>
        <button class="sfdxet-buttons" on:click={() => {validateAnalytics()}}>Template:Create</button>
        <br/>
        <br/>
        <h3>Options:</h3>
        <h4><a target="_blank" href="https://developer.salesforce.com/docs/atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_force_analytics.htm#cli_reference_force_analytics_template_create">Official Documentation</a></h4>
        <br/>

        <div class="container">
            <div class="row">

                <!-- [--json] -->
                <JSONs />

                <!-- [--loglevel LOGLEVEL]    -->
                <LOGLEVELs />

                <!-- [-d OUTPUTDIR] -->
                <OUTPUTDIRs />

                <!-- [--apiversion APIVERSION] -->
                <APIVERSIONs />

                <!-- -n TEMPLATENAME -->
        
                <!-- ADVANCED -->
                <ADVANCEDs />
            </div>
        </div>
    </div>
{/if}

<CSS />
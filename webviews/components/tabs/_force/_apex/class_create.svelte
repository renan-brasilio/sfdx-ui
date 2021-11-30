<script>
    // Helper Files
    import { } from "os";
    import CSS from "../../-helperFiles/GlobalCSS.svelte";
    import { Circle2 } from "svelte-loading-spinners";
    import { onMount } from "svelte";

    // Store
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

    // Sections
    import JSONs from "../../-commonSections/JSONSection.svelte";
    import LOGLEVELs from "../../-commonSections/LOGLEVELSection.svelte";
    import CLASSNAMEs from "../../-commonSections/CLASSNAMESection.svelte";
    import TEMPLATEs from "../../-commonSections/TEMPLATESection.svelte";
    import APIVERSIONs from "../../-commonSections/APIVERSIONSection.svelte";
    import ADVANCEDs from "../../-commonSections/ADVANCEDSection.svelte";
    import OUTPUTDIRs from "../../-commonSections/OUTPUTDIRSection.svelte";

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

    //Initial loading
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
        let message = {
            type: "onTerminalSFDX"
        };

        message.sfdx = "force:apex:class:create";

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

        // CLASSNAME
        if($mapShowSections.classname){
            if($mapErrors.classname2){
                $mapErrors.classname2 = "sfdxet-error-span";

                tsvscode.postMessage({
                    type: "onError",
                    value: `ERROR: Name must contain only alphanumeric characters.` 
                });

                return;
            }else if($mapInputVariables.classname){
                message.sfdx += " -n " + $mapInputVariables.classname;
                $mapSectionValidation[classname] = 1;
            }else{
                $mapSectionValidation[classname] = 0;
                tsvscode.postMessage({
                    type: "onError",
                    value: `ERROR: Please insert your new Apex Class Name.` 
                });

                return;
            }
        }

        // TEMPLATE
        if($mapShowSections.template){
            console.log(`mapInputVariables: ${JSON.stringify($mapInputVariables)}`);
            if($mapInputVariables.template){
                $mapErrors.template = "";
                message.sfdx += ` -t ${$mapInputVariables.template}`;
            }else{
                $mapErrors.template = "sfdxet-error-select";

                tsvscode.postMessage({
                    type: "onError",
                    value: `ERROR: Please select a Template or uncheck the [-t TEMPLATE] checkbox.` 
                });

                return;
            }
        }else{
            $mapErrors.template = "";
        }

        // OUTPUTDIR
        if($mapShowSections.outputdir){
            message.sfdx += ` -d `;

            if($mapShowSections.outputdir2){
                if($mapInputVariables.outputdir2){
                    $mapErrors.outputdir2 = "";
                    message.sfdx += $mapInputVariables.outputdir2;
                }
            }else if($mapInputVariables.outputdir){
                $mapErrors.outputdir = "";
                message.sfdx += $mapInputVariables.outputdir;
            }else{
                $mapErrors.outputdir = "sfdxet-error-span";

                tsvscode.postMessage({
                    type: "onError",
                    value: `ERROR: Please select/insert a Folder or uncheck the [-d OUTPUTDIR] checkbox.` 
                });

                return;
            }
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
            $mapErrors.outputdir = "";

            tsvscode.postMessage({
                type: "onInfo",
                value: "Starting the Terminal + Script: Class:Create" 
            });

            $mapSpinner.main = true;
            $mapInformation.main = true;
    
            tsvscode.postMessage(message);
        }
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
        <JSONs />

        <!-- [--loglevel LOGLEVEL] -->
        <LOGLEVELs />

        <!-- -n CLASSNAME -->
        <CLASSNAMEs required={true}/>
        
        <!-- [-t TEMPLATE] -->
        <TEMPLATEs />
        
        <!-- [-d OUTPUTDIR] -->
        <OUTPUTDIRs defaultFolder="."/>

        <!-- [--apiversion APIVERSION] -->
        <APIVERSIONs />

        <!-- ADVANCED -->
        <ADVANCEDs />
    </div>
{/if}

<CSS />
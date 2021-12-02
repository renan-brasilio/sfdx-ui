<script>
    // Helper Files
    import { } from "os";
    import { Circle2 } from "svelte-loading-spinners";
    import CSS from "../../-helperFiles/GlobalCSS.svelte";
    import { onMount } from "svelte";

    // Store
    import { 
        lTARGETUSERNAME, 
        mapErrors,
        mapForceShowSections,
        mapInformation,
        mapInputVariables, 
        mapSectionValidation,
        mapShowSections, 
        mapSource,
        mapSpinner,
        mapTargetUsername, 
        pickFolderType
    } from "../../-helperFiles/GlobalStore";

    // Sections
    import JSONs from "../../-commonSections/JSONSection.svelte";
    import LOGLEVELs from "../../-commonSections/LOGLEVELSection.svelte";
    import TARGETUSERNAMEs from "../../-commonSections/TARGETUSERNAMESection.svelte";
    import APIVERSIONs from "../../-commonSections/APIVERSIONSection.svelte";
    import SOURCEPATHs from "../../-commonSections/SOURCEPATHSection.svelte";
    import WAITs from "../../-commonSections/WAITSection.svelte";
    import MANIFESTs from "../../-commonSections/MANIFESTSection.svelte";
    import METADATAs from "../../-commonSections/METADATASection.svelte";
    import PACKAGENAMESs from "../../-commonSections/PACKAGENAMESSection.svelte";
    import VERBOSEs from "../../-commonSections/VERBOSESection.svelte";
    import ADVANCEDs from "../../-commonSections/ADVANCEDSection.svelte";

    // Component Validations
    let 
        ADVANCEDValidation,
        APIVERSIONValidation,
        JSONValidation,
        LOGLEVELValidation, 
        OUTPUTDIRValidation, 
        TARGETUSERNAMEValidation;

    $mapSpinner.force = {
        retrieve: true
    };

    // Initial loading
    setTimeout(() => {
        $mapSpinner.force.retrieve = false;
    }, 1000);

    if($mapShowSections){
        for(const key in $mapShowSections){
            $mapShowSections[key] = false;
        }
    }

    $mapSectionValidation = {
        sourcepath: 0,
        manifest: 0,
        metadata: 0
    };

    $mapErrors = {};
    $mapInputVariables = {};

    let mapDocRequired = {
        type: `<b>1/3 Required</b>`,
    };

    // Webview Listener
    onMount(() => {
        window.addEventListener("message", event => {
            const message = event.data; // The json data that the extension sent
            switch (message.type) {
                case "onConfirmRet":
                    if(message.value === true){
                        retrieve();
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
                            if(key !== "retrieve"){
                                $mapSource[key] = false;
                            }
                        }
                    }

                    $mapSpinner.main = false;
                    $mapInformation.main = false;
                    $mapForceShowSections.source = true;
                    $mapSource.retrieve = true;
                    break;
            }
        });
    });

    let message = {
        type: "onTerminalSFDX"
    };

    function validateRetrieve() {
        message.sfdx = "";
    
        message.sfdx = "force:source:retrieve";
        
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

        // SOURCEPATH
        if($mapShowSections.sourcepath){
            if($mapInputVariables.sourcepath){
                $mapErrors.sourcepath = "";
                message.sfdx += ` -p ${$mapInputVariables.sourcepath}`;
            }else{
                $mapErrors.sourcepath = "sfdxet-error-button";

                tsvscode.postMessage({
                    type: "onError",
                    value: `ERROR: Please select a Folder or uncheck the [-p SOURCEPATH] checkbox.` 
                });

                return;
            }
        }else if($mapShowSections.manifest && $mapInputVariables.manifest){ // MANIFEST
            $mapErrors.sourcepath = "";
            $mapErrors.metadata = "";

            message.sfdx += ` -x ${$mapInputVariables.manifest}`;
        }else if($mapShowSections.metadata){ // METADATA
            $mapErrors.sourcepath = "";
            
            if($mapInputVariables.metadata && $mapInputVariables.metadata.length > 0){
                $mapErrors.metadata = "";
                message.sfdx += ` -m ${$mapInputVariables.metadata}`;
            }else{
                $mapErrors.metadata = "sfdxet-error-select";

                tsvscode.postMessage({
                    type: "onError",
                    value: `ERROR: Please select a Metadata or uncheck the [-m METADATA] checkbox.` 
                });

                return;
            }
        }

        // WAIT
        if($mapShowSections.wait && $mapInputVariables.wait){
            message.sfdx += ` -w ${$mapInputVariables.wait}`;
        }

        // PACKAGENAMES
        if($mapShowSections.packagenames){
            if($mapInputVariables.packagenames){
                $mapErrors.packagenames = "";
                message.sfdx += ` -n ${$mapInputVariables.packagenames}`;
            }else{
                $mapErrors.packagenames = "sfdxet-error-button";

                tsvscode.postMessage({
                    type: "onError",
                    value: `ERROR: Please insert one or more Package Name or uncheck the [-n PACKAGENAMES] checkbox.` 
                });

                return;
            }
        }else{
            $mapErrors.packagenames = "";
        }

        // VERBOSE
        if($mapShowSections.verbose){
            message.sfdx += ` --verbose`;
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

    function retrieve() {
        tsvscode.postMessage({
            type: "onInfo",
            value: "Starting the Terminal + Script: Retrieve" 
        });

        tsvscode.postMessage(message);
    }
</script>

{#if $mapSpinner.force.retrieve}
    <div class="sfdxet-spinner">
        <Circle2 size="60" colorOuter="#034efc" unit="px"></Circle2>
    </div>
{:else}
    <div class="sfdxet-absolute-center">
        <h3>sfdx force:source:retrieve</h3>
        <br/>
        <br/>
        <button class="sfdxet-buttons" on:click={() => {validateRetrieve()}}>Retrieve</button>
        <br/>
        <br/>
        <h3>Options:</h3>
        <h4><a target="_blank" href="https://developer.salesforce.com/docs/atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_force_source.htm#cli_reference_force_source_retrieve">Official Documentation</a></h4>
        <br/>

        <div class="container">
            <div class="row">
                <!-- JSON -->
                <svelte:component this="{JSONs}" bind:this="{JSONValidation}" />
                
                <!-- LOGLEVEL -->
                <svelte:component this="{LOGLEVELs}" bind:this="{LOGLEVELValidation}" />
                
                <!-- TARGETUSERNAME -->
                <svelte:component this="{TARGETUSERNAMEs}" bind:this="{TARGETUSERNAMEValidation}" />
        
                <!-- APIVERSION -->
                <svelte:component this="{APIVERSIONs}" bind:this="{APIVERSIONValidation}" />
        
                <!-- SOURCEPATH -->
                <SOURCEPATHs mapDoc={mapDocRequired} required={true}/>
        
                <!-- WAIT -->
                <WAITs />
        
                <!-- MANIFEST -->
                <MANIFESTs mapDoc={mapDocRequired} required={true}/>
        
                <!-- METADATA -->
                <METADATAs mapDoc={mapDocRequired} required={true}/>
        
                <!-- PACKAGENAMES -->
                <PACKAGENAMESs />
        
                <!-- VERBOSE -->
                <VERBOSEs />
        
                <!-- ADVANCED -->
                <svelte:component this="{ADVANCEDs}" bind:this="{ADVANCEDValidation}" />
            </div>
        </div>

    </div>
{/if}

<CSS />
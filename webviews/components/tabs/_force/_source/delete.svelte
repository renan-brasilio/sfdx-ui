<script>
    import { } from 'os';
    import { Circle2 } from 'svelte-loading-spinners'
    import CSS from '../../-helperFiles/GlobalCSS.svelte'
    import { onMount } from 'svelte'
    import * as js from '../../-helperFiles/GlobalJS'
    import { mapInputVariables } from '../../-helperFiles/GlobalStore'
    import { mapShowSections } from '../../-helperFiles/GlobalStore'
    import { lTARGETUSERNAME } from '../../-helperFiles/GlobalStore'
    import { mapTargetUsername } from '../../-helperFiles/GlobalStore'
    import { pickFolderType } from '../../-helperFiles/GlobalStore'
    import { mapErrors } from '../../-helperFiles/GlobalStore'
    import { mapSpinner } from '../../-helperFiles/GlobalStore'
    import JSONSection from '../../-commonSections/JSONSection.svelte'
    import LOGLEVELSection from '../../-commonSections/LOGLEVELSection.svelte'
    import TARGETUSERNAMESection from '../../-commonSections/TARGETUSERNAMESection.svelte'
    import APIVERSIONSection from '../../-commonSections/APIVERSIONSection.svelte'
    import SOURCEPATHSection from '../../-commonSections/SOURCEPATHSection.svelte'
    import WAITSection from '../../-commonSections/WAITSection.svelte'
    import METADATASection from '../../-commonSections/METADATASection.svelte';
    import VERBOSESection from '../../-commonSections/VERBOSESection.svelte';
    import ADVANCEDSection from '../../-commonSections/ADVANCEDSection.svelte';

    $mapSpinner.forceDelete = true;

    //Initial loading
    setTimeout(() => {
        $mapSpinner.forceDelete = false;
    }, 1000);

    // Webview Listener
    onMount(() => {
        window.addEventListener('message', event => {
            const message = event.data; // The json data that the extension sent
            switch (message.type) {
                case 'folderUri':
                    $mapInputVariables[$pickFolderType] = message.value[0].path;
                    break;
                case 'fileUri':
                    $mapInputVariables[$pickFolderType] = message.value[0].path;
                    $mapShowSections[$pickFolderType] = true;
                    break;
                case 'aliasJSON':
                    for(const key in message.value){
                        let option = {value: key, label: key};

                        $mapTargetUsername[key] = message.value[key];
                        $lTARGETUSERNAME.push(option);

                        $mapShowSections.targetusernamespinner = false;
                    }
                    break;
            }
        });
    });

    function deleteF() {
        tsvscode.postMessage({
            type: 'onInfo',
            value: 'Starting the Terminal + Script: Retrieve' 
        });

        let message = {
            type: 'onTerminalRetrieve'
        };

        message.sfdx = 'force:source:delete';

        if($mapShowSections.json){
            message.sJSON = $mapShowSections.json;
        }

        if($mapShowSections.json && $mapInputVariables.json){
            message.vJSON = $mapInputVariables.json;
        }

        if($mapInputVariables.json2){
            message.vJSONPath = $mapInputVariables.json2;
        }

        if($mapShowSections.loglevel){
            if($mapInputVariables.loglevel){
                $mapErrors.loglevel = '';
                message.vLOGLEVEL = $mapInputVariables.loglevel;
            }else{
                $mapErrors.loglevel = 'sfdxet-error-select';

                tsvscode.postMessage({
                    type: 'onError',
                    value: `ERROR: Please select a Loglevel or uncheck the [--loglevel LOGLEVEL] checkbox.` 
                });

                return;
            }
        }else{
            $mapErrors.loglevel = '';
        }

        
        if($mapShowSections.targetusername){
            if($mapInputVariables.targetusername){
                $mapErrors.targetusername = '';
                message.vTARGETUSERNAME = $mapInputVariables.targetusername;
            }else{
                $mapErrors.targetusername = 'sfdxet-error-select';

                tsvscode.postMessage({
                    type: 'onError',
                    value: `ERROR: Please select a Targetusername or uncheck the [-u TARGETUSERNAME] checkbox.` 
                });

                return;
            }
        }else{
            $mapErrors.targetusername = '';
        }

        if($mapShowSections.apiversion){
            if($mapInputVariables.apiversion){
                $mapErrors.apiversion = '';
                message.vAPIVERSION = $mapInputVariables.apiversion;
            }else{
                $mapErrors.apiversion = 'sfdxet-error-select';

                tsvscode.postMessage({
                    type: 'onError',
                    value: `ERROR: Please select a Apiversion or uncheck the [-a APIVERSION] checkbox.` 
                });

                return;
            }
        }else{
            $mapErrors.apiversion = '';
        }

        if($mapShowSections.sourcepath){
            if($mapInputVariables.sourcepath){
                $mapErrors.sourcepath = '';
                message.vSOURCEPATH = $mapInputVariables.sourcepath;
            }else{
                $mapErrors.sourcepath = 'sfdxet-error-button';

                tsvscode.postMessage({
                    type: 'onError',
                    value: `ERROR: Please select a Folder or uncheck the [-p SOURCEPATH] checkbox.` 
                });

                return;
            }
        }else{
            $mapErrors.sourcepath = '';
        }

        if($mapShowSections.wait && $mapInputVariables.wait){
            message.vWAIT = $mapInputVariables.wait;
        }

        if($mapShowSections.metadata){
            if($mapInputVariables.metadata && $mapInputVariables.metadata.length > 0){
                $mapErrors.metadata = '';
                message.vMETADATA = $mapInputVariables.metadata;
            }else{
                $mapErrors.metadata = 'sfdxet-error-select';

                tsvscode.postMessage({
                    type: 'onError',
                    value: `ERROR: Please select a Metadata or uncheck the [-m METADATA] checkbox.` 
                });

                return;
            }
        }else{
            $mapErrors.metadata = '';
        }

        if($mapShowSections.verbose){
            message.sVERBOSE = $mapShowSections.verbose;
        }

        if($mapShowSections.advanced){
            if($mapInputVariables.advanced){
                $mapErrors.advanced = '';
                message.vADVANCED = $mapInputVariables.advanced;
            }else{
                tsvscode.postMessage({
                    type: 'onError',
                    value: `ERROR: Please insert your advanced input or uncheck the Advanced checkbox.` 
                });

                return;
            }
        }

        // $mapSpinner.main = true;
        // $mapInformation.main = true;

        tsvscode.postMessage(message);
    }
</script>

{#if $mapSpinner.forceDelete}
    <div class="sfdxet-spinner">
        <Circle2 size="60" colorOuter="#034efc" unit="px"></Circle2>
    </div>
{:else}
    <div class="sfdxet-absolute-center">
        <h3>sfdx force:source:delete</h3>
        <br/>
        <br/>
        <button class="sfdxet-buttons" on:click={deleteF}>Delete</button>
        <br/>
        <br/>
        <h3>Options:</h3>
        <h4><a target="_blank" href="https://developer.salesforce.com/docs/atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_force_source.htm#cli_reference_force_source_retrieve">Official Documentation</a></h4>
        <br/>

        <!-- JSON -->
        <JSONSection />
        
        <!-- LOGLEVEL -->
        <LOGLEVELSection />
        
        <!-- TARGETUSERNAME -->
        <TARGETUSERNAMESection />

        <!-- APIVERSION -->
        <APIVERSIONSection />

        <!-- CHECKONLY -->

        <!-- WAIT -->
        <WAITSection />

        <!-- TESTLEVEL -->

        <!-- NOPROMPT -->

        <!-- METADATA -->
        <METADATASection />

        <!-- SOURCEPATH -->
        <SOURCEPATHSection />

        <!-- VERBOSE -->
        <VERBOSESection />

        <!-- ADVANCED -->
        <ADVANCEDSection />
    </div>
{/if}

<CSS />
<script>
    import { } from 'os';
    import { Circle2 } from 'svelte-loading-spinners'
    import CSS from '../../-helperFiles/GlobalCSS.svelte'
    import { onMount } from 'svelte'
    import { mapInputVariables } from '../../-helperFiles/GlobalStore'
    import { mapShowSections } from '../../-helperFiles/GlobalStore'
    import { lTARGETUSERNAME } from '../../-helperFiles/GlobalStore'
    import { mapTargetUsername } from '../../-helperFiles/GlobalStore'
    import { pickFolderType } from '../../-helperFiles/GlobalStore'
    import { mapErrors } from '../../-helperFiles/GlobalStore'
    import { mapSpinner } from '../../-helperFiles/GlobalStore'
    import { mapSectionValidation } from '../../-helperFiles/GlobalStore'
    import { mapInformation } from '../../-helperFiles/GlobalStore'
    import { mapForceShowSections } from '../../-helperFiles/GlobalStore'
    import { mapSource } from '../../-helperFiles/GlobalStore'
    import JSON from '../../-commonSections/JSONSection.svelte'
    import LOGLEVEL from '../../-commonSections/LOGLEVELSection.svelte'
    import SOURCEPATH from '../../-commonSections/SOURCEPATHSection.svelte'
    import MANIFEST from '../../-commonSections/MANIFESTSection.svelte';
    import METADATA from '../../-commonSections/METADATASection.svelte';
    import ADVANCED from '../../-commonSections/ADVANCEDSection.svelte';
    import ROOTDIR from '../../-commonSections/ROOTDIRSection.svelte';
    import OUTPUTDIR from '../../-commonSections/OUTPUTDIRSection.svelte';
    import PACKAGENAME from '../../-commonSections/PACKAGENAMESection.svelte';

    $mapSpinner.forceConvert = true;

    //Initial loading
    setTimeout(() => {
        $mapSpinner.forceConvert = false;
    }, 1000);

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

    $mapErrors.metadata = '';
    $mapErrors.manifest = '';
    $mapErrors.sourcepath = '';

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
                case 'sfdxClosed':
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

                    $mapSpinner.main = false;
                    $mapInformation.main = false;
                    $mapForceShowSections.source = true;
                    $mapSource.convert = true;
                    break;
            }
        });
    });

    function convert() {
        tsvscode.postMessage({
            type: 'onInfo',
            value: 'Starting the Terminal + Script: Retrieve' 
        });

        let message = {
            type: 'onTerminalRetrieve'
        };

        message.sfdx = 'force:source:convert';

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

        if($mapShowSections.rootdir){
            if($mapInputVariables.rootdir){
                $mapErrors.rootdir = '';
                message.vROOTDIR = $mapInputVariables.rootdir;
            }else{
                $mapErrors.rootdir = 'sfdxet-error-button';

                tsvscode.postMessage({
                    type: 'onError',
                    value: `ERROR: Please select a Folder or uncheck the [-r ROOTDIR] checkbox.` 
                });

                return;
            }
        }else{
            $mapErrors.rootdir = '';
        }

        if($mapShowSections.outputdir){
            message.sOUTPUTDIR = $mapShowSections.outputdir;

            if($mapInputVariables.outputdir){
                message.vOUTPUTDIR = $mapInputVariables.outputdir;
            }
        }

        if($mapShowSections.manifest && $mapInputVariables.manifest){
            message.vMANIFEST = $mapInputVariables.manifest;
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

        if($mapShowSections.packagename){
            if($mapInputVariables.packagename){
                $mapErrors.packagename = '';
                message.vPACKAGENAME = $mapInputVariables.packagename;
            }else{
                $mapErrors.packagename = 'sfdxet-error-button';

                tsvscode.postMessage({
                    type: 'onError',
                    value: `ERROR: Please inset a Package Name or uncheck the [-n PACKAGENAME] checkbox.` 
                });

                return;
            }
        }else{
            $mapErrors.packagename = '';
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

{#if $mapSpinner.forceConvert}
    <div class="sfdxet-spinner">
        <Circle2 size="60" colorOuter="#034efc" unit="px"></Circle2>
    </div>
{:else}
    <div class="sfdxet-absolute-center">
        <h3>sfdx force:source:convert</h3>
        <br/>
        <br/>
        <button class="sfdxet-buttons" on:click={convert}>Convert</button>
        <br/>
        <br/>
        <h3>Options:</h3>
        <h4><a target="_blank" href="https://developer.salesforce.com/docs/atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_force_source.htm#cli_reference_force_source_convert">Official Documentation</a></h4>
        <br/>

        <!-- JSON -->
        <JSON />
        
        <!-- LOGLEVEL -->
        <LOGLEVEL />

        <!-- ROOTDIR -->
        <ROOTDIR />
        
        <!-- OUTPUTDIR -->
        <OUTPUTDIR />

        <!-- PACKAGENAME -->
        <PACKAGENAME />

        <!-- MANIFEST -->
        <MANIFEST />

        <!-- SOURCEPATH -->
        <SOURCEPATH/>

        <!-- METADATA -->
        <METADATA />

        <!-- ADVANCED -->
        <ADVANCED />
    </div>
{/if}

<CSS />
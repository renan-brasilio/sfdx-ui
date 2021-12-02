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
    import JSONs from '../../-commonSections/JSONSection.svelte'
    import LOGLEVELs from '../../-commonSections/LOGLEVELSection.svelte'
    import SOURCEPATHs from '../../-commonSections/SOURCEPATHSection.svelte'
    import MANIFESTs from '../../-commonSections/MANIFESTSection.svelte';
    import METADATAs from '../../-commonSections/METADATASection.svelte';
    import ADVANCEDs from '../../-commonSections/ADVANCEDSection.svelte';
    import ROOTDIRs from '../../-commonSections/ROOTDIRSection.svelte';
    import OUTPUTDIRs from '../../-commonSections/OUTPUTDIRSection.svelte';
    import PACKAGENAMEs from '../../-commonSections/PACKAGENAMESection.svelte';

    // Component Validations
    let 
        ADVANCEDValidation,
        APIVERSIONValidation,
        JSONValidation,
        LOGLEVELValidation, 
        OUTPUTDIRValidation, 
        TARGETUSERNAMEValidation;

    $mapSpinner.force = {
        convert: true
    };

    // Initial loading
    setTimeout(() => {
        $mapSpinner.force.convert= false;
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
                case "aliasJSON":
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

                    if($mapSource){
                        for(const key in $mapSource){
                            if(key !== 'convert'){
                                $mapSource[key] = false;
                            }
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
            type: 'onTerminalSFDX'
        };

        message.sfdx = 'force:source:convert';

        // JSON
        if($mapShowSections.json){
            message.sfdx += ' --json > ';
            
            if($mapInputVariables.json){
                message.sfdx += $mapInputVariables.json;
            }else{
                message.sfdx += 'output.json';
            }
        }

        if($mapInputVariables.json2){
            message.pJSON = ' --json';
            message.vJSONPath = $mapInputVariables.json2;

            if($mapInputVariables.json){
                message.vJSON += $mapInputVariables.json;
            }
        }

        // LOGLEVEL
        if($mapShowSections.loglevel){
            if($mapInputVariables.loglevel){
                $mapErrors.loglevel = '';
                message.sfdx += ` --loglevel ${$mapInputVariables.loglevel}`;
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

        // ROOTDIR
        if($mapShowSections.rootdir){
            if($mapInputVariables.rootdir){
                $mapErrors.rootdir = '';
                message.sfdx += ` -r ${$mapInputVariables.rootdir}`;
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

        // OUTPUTDIR
        if($mapShowSections.outputdir){
            message.sfdx += ` -d ${$mapInputVariables.rootdir ? $mapInputVariables.rootdir : ''}`;
        }

        // SOURCEPATH
        if($mapShowSections.sourcepath){
            if($mapInputVariables.sourcepath){
                $mapErrors.sourcepath = '';
                message.sfdx += ` -p ${$mapInputVariables.sourcepath}`;
            }else{
                $mapErrors.sourcepath = 'sfdxet-error-button';

                tsvscode.postMessage({
                    type: 'onError',
                    value: `ERROR: Please select a Folder or uncheck the [-p SOURCEPATH] checkbox.` 
                });

                return;
            }
        }else if($mapShowSections.manifest && $mapInputVariables.manifest){ // MANIFEST
            $mapErrors.sourcepath = '';
            $mapErrors.metadata = '';

            message.sfdx += ` -x ${$mapInputVariables.manifest}`;
        }else if($mapShowSections.metadata){ // METADATA
            $mapErrors.sourcepath = '';
            
            if($mapInputVariables.metadata && $mapInputVariables.metadata.length > 0){
                $mapErrors.metadata = '';
                message.sfdx += ` -m ${$mapInputVariables.metadata}`;
            }else{
                $mapErrors.metadata = 'sfdxet-error-select';

                tsvscode.postMessage({
                    type: 'onError',
                    value: `ERROR: Please select a Metadata or uncheck the [-m METADATA] checkbox.` 
                });

                return;
            }
        }

        // PACKAGENAME
        if($mapShowSections.packagename){
            if($mapInputVariables.packagename){
                $mapErrors.packagename = '';
                message.sfdx += ` -n ${$mapInputVariables.packagename}`;
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

        // ADVANCED
        if($mapShowSections.advanced){
            if($mapInputVariables.advanced){
                $mapErrors.advanced = '';
                message.sfdx += ` ${$mapInputVariables.advanced}`;
            }else{
                tsvscode.postMessage({
                    type: 'onError',
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
            $mapErrors.metadata = 'sfdxet-error-span';
            $mapErrors.manifest = 'sfdxet-error-span';
            $mapErrors.sourcepath = 'sfdxet-error-span';

            tsvscode.postMessage({
                    type: 'onError',
                    value: `ERROR: Select one between: SOURCEPATH, MANIFEST or METADATA` 
                });

                return;
        }else{
            $mapErrors.metadata = '';
            $mapErrors.manifest = '';
            $mapErrors.sourcepath = '';

            tsvscode.postMessage({
                type: 'onInfo',
                value: 'Starting the Terminal + Script: Convert' 
            });

            $mapSpinner.main = true;
            $mapInformation.main = true;
    
            tsvscode.postMessage(message);
        }
    }
</script>

{#if $mapSpinner.force.convert}
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
        <svelte:component this="{JSONs}" bind:this="{JSONValidation}" />
        
        <!-- LOGLEVEL -->
        <svelte:component this="{LOGLEVELs}" bind:this="{LOGLEVELValidation}" />

        <!-- ROOTDIR -->
        <ROOTDIRs />
        
        <!-- OUTPUTDIR -->
        <svelte:component this="{OUTPUTDIRs}" bind:this="{OUTPUTDIRValidation}" defaultFolder="." />

        <!-- PACKAGENAME -->
        <PACKAGENAMEs />

        <!-- MANIFEST -->
        <MANIFESTs mapDoc={mapDocRequired} required={true}/>

        <!-- SOURCEPATH -->
        <SOURCEPATHs mapDoc={mapDocRequired} required={true}/>

        <!-- METADATA -->
        <METADATAs mapDoc={mapDocRequired} required={true}/>

        <!-- ADVANCED -->
        <svelte:component this="{ADVANCEDs}" bind:this="{ADVANCEDValidation}" />
    </div>
{/if}

<CSS />
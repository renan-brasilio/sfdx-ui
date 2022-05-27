<script>
    // Helper Files
    import * as js from "../../-helperFiles/GlobalJS";
    import CSS from "../../-helperFiles/GlobalCSS.svelte";
    import { Circle2 } from "svelte-loading-spinners";
    import { } from "os";
    import WebviewListener from "../../-commonPages/WebviewListener.svelte";
    import RefreshIcon from "svelte-bootstrap-icons/lib/ArrowClockwise";
    import { mapDoc } from "../../-helperFiles/MapDocumentation";
    import * as gLists from "../../-helperFiles/Lists";

    // Store
    import { 
        lTARGETUSERNAME,
        lastAPIVersion,
        mapErrors,
        mapInformation,
        mapInputVariables,
        mapSectionValidation,
        mapShowSections,
        mapSpinner,
        objSFDX,
    } from "../../-helperFiles/GlobalStore";

    // Sections
    import JSONs from "../../-commonSections/JSONSection.svelte";
    import LOGLEVELs from "../../-commonSections/SelectSFDX.svelte";
    import TARGETUSERNAMEs from "../../-commonSections/SelectSFDX.svelte";
    import APIVERSIONs from "../../-commonSections/SelectSFDX.svelte";
    import SOURCEFILEs from "../../-commonSections/FilepathSFDX.svelte";
    import URLONLYs from "../../-commonSections/StringSFDX.svelte";
    import ADVANCEDs from "../../-commonSections/ADVANCEDSection.svelte";

    // Component Validations
    let 
    JSONv, 
    LOGLEVELv, 
    TARGETUSERNAMEv,
    APIVERSIONv,
    SOURCEFILEv,
    URLONLYv,
    ADVANCEDv;

    // Documentation
    let fileName = "open";
    let showFileName = fileName.replace("_", ":");
    let showFileNameUpper = "Open";
    let commandType = "source";
    let linkDocumentation = `https://developer.salesforce.com/docs/atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_force_${commandType}.htm#cli_reference_force_${commandType}_${fileName}`;

    // Initial loading
    if(!$mapSpinner.force){
        $mapSpinner.force = {};
    }

    $mapSpinner.force[fileName] = true;

    setTimeout(() => {
        $mapSpinner.force[fileName] = false;
    }, 1000);

    // Mandatory Field(s)
    let mandatorySections = [
        "sourcefile",
    ];

    if(!$mapShowSections){
        $mapShowSections = {};
    }

    $mapSectionValidation = {};

    for(let i = 0; i < mandatorySections.length; i++){
        $mapShowSections[mandatorySections[i]] = true;
        $mapSectionValidation[mandatorySections[i]] = 0;
    }

    function startSFDX() {
        let validation = 0;
        let sectionError;

        $objSFDX.terminal = "";
        $objSFDX.terminal = `force:${commandType}:${showFileName}`;

        Promise.all([
            JSONv.validate(), 
            LOGLEVELv.validate(), 
            TARGETUSERNAMEv.validate(), 
            APIVERSIONv.validate(), 
            SOURCEFILEv.validate(), 
            URLONLYv.validate(), 
            ADVANCEDv.validate(), 
        ]).then((values) => {
            if(values){
                for(let i in $mapSectionValidation){
                    if($mapSectionValidation[i] === 1){
                        validation++;
                        break;
                    }else if($mapSectionValidation[i] === 0){
                        sectionError = i;
                        break;
                    }
                }
    
                if(validation === 0){
                    if(!$mapErrors){
                        $mapErrors = {};
                    }

                    if(sectionError){
                        $mapErrors[sectionError] = "sfdxet-error-span";
                        sectionError = sectionError.toUpperCase();
                        
                        tsvscode.postMessage({
                            type: "onError",
                            value: `ERROR: ${sectionError} is required.` 
                        });
        
                        return;
                    }
                }else if(!values.includes(false)){
                    for(let key in $mapErrors){
                        $mapErrors[key] = "";
                    }     
    
                    $mapSpinner.main = true;
                    $mapInformation.main = true;
            
                    js.globalContinue();
                }
            }
        });
    }

    function reset(){
        $mapInputVariables = {};
        
        for(let key in $mapShowSections){
            $mapShowSections[key] = false;
        }
    }

    // TARGETUSERNAME
    tsvscode.postMessage({
        type: "onGetAliasUsers"
    });

    // APIVERSION
    let dAPIVERSION = "";
    const lAPIVERSION = [];

    for(let i=8; i < ($lastAPIVersion + 1); i++){
        if(i === ($lastAPIVersion - 1)){
            dAPIVERSION = i.toFixed(1);
        }

        lAPIVERSION.push({value: i.toFixed(1), label: i.toFixed(1)});
        
        if(i === 11){
            let j = i + .1;
            lAPIVERSION.push({value: j.toFixed(1), label: j.toFixed(1)});
        }
    }

    lAPIVERSION.reverse();

    $mapInputVariables[fileName] = dAPIVERSION;
</script>

<WebviewListener fileName={fileName} commandType={commandType} showCommand={showFileNameUpper}/>

{#if $mapSpinner.force[fileName]}
    <div class="sfdxet-spinner">
        <Circle2 size="60" colorOuter="#034efc" unit="px"></Circle2>
    </div>
{:else}
    <div class="sfdxet-absolute-center">
        <h3>sfdx force:{commandType}:{showFileName}</h3>
        <br/>
        <br/>
        <button class="sfdxet-buttons" on:click={startSFDX}>{showFileNameUpper}</button>
        <br/>
        <br/>
        <h3>Options:</h3>
        <h4><a target="_blank" href={linkDocumentation}>Official Documentation</a></h4>
        <br/>

        <!-- [--json] -->
        <svelte:component 
            this="{JSONs}" 
            bind:this="{JSONv}" 
            pMapDoc={mapDoc[commandType][fileName].json}
            pShowSectionName={false}
        />

        <!-- [--loglevel LOGLEVEL] -->
        <svelte:component 
            this="{LOGLEVELs}" 
            bind:this="{LOGLEVELv}" 
            pSectionName="loglevel"
            pMapDoc={mapDoc[commandType][fileName].loglevel} 
            pSFDXParameter="--loglevel"
            pList={gLists.lLOGLEVEL}
            pDefaultValue="warn"
        />

        <!-- [-u TARGETUSERNAME] -->
        <svelte:component 
            this="{TARGETUSERNAMEs}" 
            bind:this="{TARGETUSERNAMEv}" 
            pSectionName="targetusername"
            pMapDoc={mapDoc[commandType][fileName].targetusername} 
            pSFDXParameter="-u"
            pList={$lTARGETUSERNAME}
        />

        <!-- [--apiversion APIVERSION] -->
        <svelte:component 
            this="{APIVERSIONs}" 
            bind:this="{APIVERSIONv}" 
            pSectionName="apiversion"
            pMapDoc={mapDoc[commandType][fileName].apiversion} 
            pSFDXParameter="--apiversion"
            pList={lAPIVERSION}
            pDefaultValue={dAPIVERSION}
        />

        <!-- -f SOURCEFILE -->
        <svelte:component 
            this="{SOURCEFILEs}" 
            bind:this="{SOURCEFILEv}" 
            pSectionName="sourcefile"
            pMapDoc={mapDoc[commandType][fileName].sourcefile} 
            pSFDXParameter="-f"
            pPlaceholder="Insert..."
            pButtonText="Select Source File"
            pRequired={true}
            pChecked={true}
            pDisabled={true}
        />

        <!-- [-r] -->
        <svelte:component 
            this="{URLONLYs}" 
            bind:this="{URLONLYv}"
            pSectionName="urlonly"
            pMapDoc={mapDoc[commandType][fileName].urlonly} 
            pSFDXParameter="-r"
            pShowSectionName={false} 
        />

        <!-- [ADVANCED] -->
        <svelte:component this="{ADVANCEDs}" bind:this="{ADVANCEDv}" pMapDoc={mapDoc.advanced}/>
        <br/>
        <br/>
        <button class="sfdxet-buttons-icon" on:click={reset} title="Reset Options"><RefreshIcon /></button>
    </div>
{/if}

<CSS />
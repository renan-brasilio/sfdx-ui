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
    import CHECKONLYs from "../../-commonSections/BooleanSFDX.svelte";
    import WAITs from "../../-commonSections/MinuteSFDX.svelte";
    import TESTLEVELs from "../../-commonSections/SelectSFDX.svelte";
    import NOPROMPTs from "../../-commonSections/BooleanSFDX.svelte";
    import SOURCEPATHs from "../../-commonSections/StringSFDX.svelte";
    import METADATAs from "../../-commonSections/StringSFDX.svelte";
    import VERBOSEs from "../../-commonSections/BooleanSFDX.svelte";
    import ADVANCEDs from "../../-commonSections/ADVANCEDSection.svelte";

    // Component Validations
    let 
    JSONv, 
    LOGLEVELv, 
    TARGETUSERNAMEv,
    APIVERSIONv,
    CHECKONLYv,
    WAITv,
    TESTLEVELv,
    NOPROMPTv,
    SOURCEPATHv,
    METADATAv,
    VERBOSEv,
    ADVANCEDv;

    // Documentation
    let fileName = "delete";
    let showFileName = fileName.replace("_", ":");
    let showFileNameUpper = "Delete";
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
        "sourcepath",
        "metadata",
    ];

    let pOnlyOneError = "-p SOURCEPATH or -m METADATA"

    if(!$mapShowSections){
        $mapShowSections = {};
    }

    if(!$mapSectionValidation){
        $mapSectionValidation = {};
    }

    for(let i = 0; i < mandatorySections.length; i++){
        $mapSectionValidation[mandatorySections[i]] = 0;
    }

    function startSFDX() {
        $objSFDX.terminal = "";
        $objSFDX.terminal = `force:${commandType}:${showFileName}`;

        Promise.all([
            JSONv.validate(), 
            LOGLEVELv.validate(), 
            TARGETUSERNAMEv.validate(), 
            APIVERSIONv.validate(), 
            CHECKONLYv.validate(), 
            WAITv.validate(), 
            TESTLEVELv.validate(), 
            NOPROMPTv.validate(), 
            SOURCEPATHv.validate(), 
            METADATAv.validate(), 
            VERBOSEv.validate(), 
            ADVANCEDv.validate(), 
        ]).then((values) => {
            if(values){
                if(!values.includes(false)){
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

    for(let i=8; i < 54; i++){
        if(i === 53){
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

        <!-- [-c] -->
        <svelte:component 
            this="{CHECKONLYs}" 
            bind:this="{CHECKONLYv}"
            pSectionName="checkonly"
            pMapDoc={mapDoc[commandType][fileName].checkonly} 
            pSFDXParameter="-c"
            pShowSectionName={false} 
        />

        <!-- [-w WAIT] -->
        <svelte:component 
            this="{WAITs}" 
            bind:this="{WAITv}" 
            pSectionName="wait"
            pMapDoc={mapDoc[commandType][fileName].wait} 
            pSFDXParameter="-w"
        />

        <!-- [-l TESTLEVEL] -->
        <svelte:component 
            this="{TESTLEVELs}" 
            bind:this="{TESTLEVELv}" 
            pSectionName="testlevel"
            pMapDoc={mapDoc[commandType][fileName].testlevel} 
            pSFDXParameter="-l"
            pList={gLists.lTESTLEVEL[commandType][fileName]}
        />

        <!-- [-r] -->
        <svelte:component 
            this="{NOPROMPTs}" 
            bind:this="{NOPROMPTv}"
            pSectionName="noprompt"
            pMapDoc={mapDoc[commandType][fileName].noprompt} 
            pSFDXParameter="-r"
            pShowSectionName={false} 
        />

        <!-- [-m METADATA] -->
        <svelte:component 
            this="{METADATAs}" 
            bind:this="{METADATAv}" 
            pSectionName="metadata"
            pMapDoc={mapDoc[commandType][fileName].metadata}
            pSFDXParameter="-m"
            pSectionTitle="Metadata List"
            pTitle={mapDoc[commandType][fileName].metadata.title}
            pPlaceholder="Insert..."
            pOnlyOneError={pOnlyOneError}
        />

        <!-- [-p SOURCEPATH] -->
        <svelte:component 
            this="{SOURCEPATHs}" 
            bind:this="{SOURCEPATHv}" 
            pSectionName="sourcepath"
            pMapDoc={mapDoc[commandType][fileName].sourcepath}
            pSFDXParameter="-p"
            pSectionTitle="Source Path List"
            pTitle={mapDoc[commandType][fileName].sourcepath.title}
            pPlaceholder="Insert..."
            pOnlyOneError={pOnlyOneError}
        />

        <!-- [--verbose] -->
        <svelte:component 
            this="{VERBOSEs}" 
            bind:this="{VERBOSEv}"
            pSectionName="verbose"
            pMapDoc={mapDoc[commandType][fileName].verbose} 
            pSFDXParameter="--verbose"
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
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
    import CHECKONLYs from "../../-commonSections/BooleanSFDX.svelte";
    import SOAPDEPLOYs from "../../-commonSections/BooleanSFDX.svelte";
    import WAITs from "../../-commonSections/MinuteSFDX.svelte";
    import TESTLEVELs from "../../-commonSections/SelectSFDX.svelte";
    import RUNTESTSs from "../../-commonSections/StringSFDX.svelte";
    import IGNOREERRORSs from "../../-commonSections/BooleanSFDX.svelte";
    import IGNOREWARNINGSs from "../../-commonSections/BooleanSFDX.svelte";
    import VALIDATEDDEPLOYREQUESTIDs from "../../-commonSections/StringSFDX.svelte";
    import VERBOSEs from "../../-commonSections/BooleanSFDX.svelte";
    import METADATAs from "../../-commonSections/StringSFDX.svelte";
    import SOURCEPATHs from "../../-commonSections/StringSFDX.svelte";
    import MANIFESTs from "../../-commonSections/FilepathSFDX.svelte";
    import PREDESTRUCTIVECHANGESs from "../../-commonSections/FilepathSFDX.svelte";
    import POSTDESTRUCTIVECHANGESs from "../../-commonSections/FilepathSFDX.svelte";
    import ADVANCEDs from "../../-commonSections/ADVANCEDSection.svelte";

    // Component Validations
    let 
    JSONv, 
    LOGLEVELv, 
    TARGETUSERNAMEv,
    APIVERSIONv,
    CHECKONLYv,
    SOAPDEPLOYv,
    WAITv,
    TESTLEVELv,
    RUNTESTSv,
    IGNOREERRORSv,
    IGNOREWARNINGSv,
    VALIDATEDDEPLOYREQUESTIDv,
    VERBOSEv,
    METADATAv,
    SOURCEPATHv,
    MANIFESTv,
    PREDESTRUCTIVECHANGESv,
    POSTDESTRUCTIVECHANGESv,
    ADVANCEDv;

    // Documentation
    let fileName = "deploy";
    let showFileName = fileName.replaceAll("_", ":");
    let showFileNameUpper = "Deploy";
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
        "metadata",
        "sourcepath",
        "manifest",
    ];

    let pOnlyOneError = "-m METADATA, -p SOURCEPATH or -x MANIFEST"

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
        let validation = 0;

        $objSFDX.terminal = "";
        $objSFDX.terminal = `force:${commandType}:${showFileName}`;

        Promise.all([
            JSONv.validate(), 
            LOGLEVELv.validate(), 
            TARGETUSERNAMEv.validate(), 
            APIVERSIONv.validate(), 
            CHECKONLYv.validate(), 
            SOAPDEPLOYv.validate(), 
            WAITv.validate(), 
            TESTLEVELv.validate(), 
            RUNTESTSv.validate(), 
            IGNOREERRORSv.validate(), 
            IGNOREWARNINGSv.validate(), 
            VALIDATEDDEPLOYREQUESTIDv.validate(), 
            VERBOSEv.validate(), 
            METADATAv.validate(), 
            SOURCEPATHv.validate(), 
            MANIFESTv.validate(), 
            PREDESTRUCTIVECHANGESv.validate(), 
            POSTDESTRUCTIVECHANGESv.validate(), 
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

    let testValidation;

    $: if ($mapInputVariables) {
        testValidation = $mapInputVariables.testlevel === "RunSpecifiedTests";
        
        if(testValidation === true){
            $mapShowSections.runtests = true;
        }
    }
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
            pMapDoc={mapDoc["force"][commandType][fileName].json}
            pShowSectionName={false}
        />

        <!-- [--loglevel LOGLEVEL] -->
        <svelte:component 
            this="{LOGLEVELs}" 
            bind:this="{LOGLEVELv}" 
            pSectionName="loglevel"
            pMapDoc={mapDoc["force"][commandType][fileName].loglevel} 
            pSFDXParameter="--loglevel"
            pList={gLists.lLOGLEVEL}
            pDefaultValue="warn"
        />

        <!-- [-u TARGETUSERNAME] -->
        <svelte:component 
            this="{TARGETUSERNAMEs}" 
            bind:this="{TARGETUSERNAMEv}" 
            pSectionName="targetusername"
            pMapDoc={mapDoc["force"][commandType][fileName].targetusername} 
            pSFDXParameter="-u"
            pList={$lTARGETUSERNAME}
        />

        <!-- [--apiversion APIVERSION] -->
        <svelte:component 
            this="{APIVERSIONs}" 
            bind:this="{APIVERSIONv}" 
            pSectionName="apiversion"
            pMapDoc={mapDoc["force"][commandType][fileName].apiversion} 
            pSFDXParameter="--apiversion"
            pList={lAPIVERSION}
            pDefaultValue={dAPIVERSION}
        />

        <!-- [-c] -->
        <svelte:component 
            this="{CHECKONLYs}" 
            bind:this="{CHECKONLYv}"
            pSectionName="checkonly"
            pMapDoc={mapDoc["force"][commandType][fileName].checkonly} 
            pSFDXParameter="-c"
            pShowSectionName={false} 
        />

        <!-- [--soapdeploy] -->
        <svelte:component 
            this="{SOAPDEPLOYs}" 
            bind:this="{SOAPDEPLOYv}"
            pSectionName="soapdeploy"
            pMapDoc={mapDoc["force"][commandType][fileName].soapdeploy} 
            pSFDXParameter="--soapdeploy"
            pShowSectionName={false} 
        />

        <!-- [-w WAIT] -->
        <svelte:component 
            this="{WAITs}" 
            bind:this="{WAITv}" 
            pSectionName="wait"
            pMapDoc={mapDoc["force"][commandType][fileName].wait} 
            pSFDXParameter="-w"
            pDefaultValue="-1"
        />

        <!-- [-l TESTLEVEL] -->
        <svelte:component 
            this="{TESTLEVELs}" 
            bind:this="{TESTLEVELv}" 
            pSectionName="testlevel"
            pMapDoc={mapDoc["force"][commandType][fileName].testlevel} 
            pSFDXParameter="-l"
            pList={gLists.lTESTLEVEL[commandType][fileName]}
        />

        <!-- [-r RUNTESTS] -->
        {#if testValidation === true}
            <svelte:component 
                this="{RUNTESTSs}" 
                bind:this="{RUNTESTSv}" 
                pSectionName="runtests"
                pMapDoc={mapDoc["force"][commandType][fileName].runtests}
                pSFDXParameter="-r"
                pSectionTitle="Run Tests"
                pTitle={mapDoc["force"][commandType][fileName].runtests.title}
                pPlaceholder="Insert..."
                pChecked={true}
                pRequired={true}
                pDisabled={true}
            />
        {/if}

        <!-- [-o] -->
        <svelte:component 
            this="{IGNOREERRORSs}" 
            bind:this="{IGNOREERRORSv}"
            pSectionName="ignoreerrors"
            pMapDoc={mapDoc["force"][commandType][fileName].ignoreerrors} 
            pSFDXParameter="-o"
            pShowSectionName={false} 
        />

        <!-- [-g] -->
        <svelte:component 
            this="{IGNOREWARNINGSs}" 
            bind:this="{IGNOREWARNINGSv}"
            pSectionName="ignorewarnings"
            pMapDoc={mapDoc["force"][commandType][fileName].ignorewarnings} 
            pSFDXParameter="-g"
            pShowSectionName={false} 
        />

        <!-- [-q VALIDATEDDEPLOYREQUESTID] -->
        <svelte:component 
            this="{VALIDATEDDEPLOYREQUESTIDs}" 
            bind:this="{VALIDATEDDEPLOYREQUESTIDv}" 
            pSectionName="validateddeployrequestid"
            pMapDoc={mapDoc["force"][commandType][fileName].validateddeployrequestid}
            pSFDXParameter="-q"
            pSectionTitle="Validated Deploy Request Id"
            pTitle={mapDoc["force"][commandType][fileName].validateddeployrequestid.title}
            pPlaceholder="Insert..."
        />

        <!-- [--verbose] -->
        <svelte:component 
            this="{VERBOSEs}" 
            bind:this="{VERBOSEv}"
            pSectionName="verbose"
            pMapDoc={mapDoc["force"][commandType][fileName].verbose} 
            pSFDXParameter="--verbose"
            pShowSectionName={false} 
        />

        <!-- [-m METADATA] -->
        <svelte:component 
            this="{METADATAs}" 
            bind:this="{METADATAv}" 
            pSectionName="metadata"
            pMapDoc={mapDoc["force"][commandType][fileName].metadata}
            pSFDXParameter="-m"
            pSectionTitle="Metadata List"
            pTitle={mapDoc["force"][commandType][fileName].metadata.title}
            pPlaceholder="Insert..."
            pOnlyOneError={pOnlyOneError}
        />

        <!-- [-p SOURCEPATH] -->
        <svelte:component 
            this="{SOURCEPATHs}" 
            bind:this="{SOURCEPATHv}" 
            pSectionName="sourcepath"
            pMapDoc={mapDoc["force"][commandType][fileName].sourcepath}
            pSFDXParameter="-p"
            pSectionTitle="Source Path List"
            pTitle={mapDoc["force"][commandType][fileName].sourcepath.title}
            pPlaceholder="Insert..."
            pOnlyOneError={pOnlyOneError}
        />

        <!-- [-x MANIFEST] -->
        <svelte:component 
            this="{MANIFESTs}" 
            bind:this="{MANIFESTv}" 
            pSectionName="manifest"
            pMapDoc={mapDoc["force"][commandType][fileName].manifest} 
            pSFDXParameter="-x"
            pPlaceholder="Insert..."
            pButtonText="Select Manifest File"
            pOnlyOneError={pOnlyOneError}
        />

        <!-- [--predestructivechanges PREDESTRUCTIVECHANGES] -->
        <svelte:component 
            this="{PREDESTRUCTIVECHANGESs}" 
            bind:this="{PREDESTRUCTIVECHANGESv}" 
            pSectionName="predestructivechanges"
            pMapDoc={mapDoc["force"][commandType][fileName].predestructivechanges} 
            pSFDXParameter="--predestructivechanges"
            pPlaceholder="Insert..."
            pButtonText="Select Pre-Destructive Changes File"
            pOnlyOneError={pOnlyOneError}
        />

        <!-- [--postdestructivechanges POSTDESTRUCTIVECHANGES] -->
        <svelte:component 
            this="{POSTDESTRUCTIVECHANGESs}" 
            bind:this="{POSTDESTRUCTIVECHANGESv}" 
            pSectionName="postdestructivechanges"
            pMapDoc={mapDoc["force"][commandType][fileName].postdestructivechanges} 
            pSFDXParameter="--postdestructivechanges"
            pPlaceholder="Insert..."
            pButtonText="Select Post-Destructive Changes File"
            pOnlyOneError={pOnlyOneError}
        />

        <!-- [ADVANCED] -->
        <svelte:component this="{ADVANCEDs}" bind:this="{ADVANCEDv}" pMapDoc={mapDoc.advanced}/>
        <br/>
        <br/>
        <button class="sfdxet-buttons-icon" on:click={reset} title="Reset Options"><RefreshIcon /></button>
    </div>
{/if}

<CSS />
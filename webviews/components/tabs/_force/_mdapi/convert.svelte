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
    import ROOTDIRs from "../../-commonSections/FolderpathSFDX.svelte";
    import OUTPUTDIRs from "../../-commonSections/FolderpathSFDX.svelte";
    import MANIFESTs from "../../-commonSections/StringSFDX.svelte";
    import METADATAPATHs from "../../-commonSections/StringSFDX.svelte";
    import METADATAs from "../../-commonSections/StringSFDX.svelte";
    import ADVANCEDs from "../../-commonSections/ADVANCEDSection.svelte";

    // Component Validations
    let 
    JSONv, 
    LOGLEVELv, 
    ROOTDIRv,
    OUTPUTDIRv,
    MANIFESTv,
    METADATAPATHv,
    METADATAv,
    ADVANCEDv;

    // Documentation
    let fileName = "convert";
    let showFileName = fileName.replace("_", ":");
    let showFileNameUpper = "Convert";
    let commandType = "mdapi";
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
        "manifest",
        "metadatapath",
        "metadata",
    ];

    let pOnlyOneError = "-x MANIFEST, -p METADATAPATH or -m METADATA"

    if(!$mapShowSections){
        $mapShowSections = {};
    }

    if(!$mapSectionValidation){
        $mapSectionValidation = {};
    }

    for(let i = 0; i < mandatorySections.length; i++){
        $mapSectionValidation[mandatorySections[i]] = 0;
    }

    $mapShowSections["rootdir"] = true;

    function startSFDX() {
        $objSFDX.terminal = "";
        $objSFDX.terminal = `force:${commandType}:${showFileName}`;

        Promise.all([
            JSONv.validate(), 
            LOGLEVELv.validate(), 
            ROOTDIRv.validate(), 
            OUTPUTDIRv.validate(), 
            MANIFESTv.validate(), 
            METADATAPATHv.validate(), 
            METADATAv.validate(), 
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

        <!-- -r ROOTDIR -->
        <svelte:component 
            this="{ROOTDIRs}" 
            bind:this="{ROOTDIRv}" 
            pSectionName="rootdir"
            pMapDoc={mapDoc[commandType][fileName].rootdir} 
            pSFDXParameter="-r"
            pRequired={true}
            pChecked={true}
            pDisabled={true}
        />

        <!-- [-d OUTPUTDIR] -->
        <svelte:component 
            this="{OUTPUTDIRs}" 
            bind:this="{OUTPUTDIRv}" 
            pSectionName="outputdir"
            pMapDoc={mapDoc[commandType][fileName].outputdir} 
            pSFDXParameter="-d"
            pDefaultFolder="."
        />

        <!-- [-x MANIFEST] -->
        <svelte:component 
            this="{MANIFESTs}" 
            bind:this="{MANIFESTv}" 
            pSectionName="manifest"
            pMapDoc={mapDoc[commandType][fileName].manifest} 
            pSFDXParameter="-x"
            pPlaceholder="Insert..."
            pButtonText="Select Manifest File"
            pOnlyOneError={pOnlyOneError}
        />

        <!-- [-p METADATAPATH] -->
        <svelte:component 
            this="{METADATAPATHs}" 
            bind:this="{METADATAPATHv}" 
            pSectionName="metadatapath"
            pMapDoc={mapDoc[commandType][fileName].metadatapath}
            pSFDXParameter="-p"
            pSectionTitle="Metadata Path List"
            pTitle={mapDoc[commandType][fileName].metadatapath.title}
            pPlaceholder="Insert..."
            pOnlyOneError={pOnlyOneError}
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

        <!-- [ADVANCED] -->
        <svelte:component this="{ADVANCEDs}" bind:this="{ADVANCEDv}" pMapDoc={mapDoc.advanced}/>
        <br/>
        <br/>
        <button class="sfdxet-buttons-icon" on:click={reset} title="Reset Options"><RefreshIcon /></button>
    </div>
{/if}

<CSS />
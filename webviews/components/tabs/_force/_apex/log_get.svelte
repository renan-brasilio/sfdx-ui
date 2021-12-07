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
        mapInformation,
        mapInputVariables,
        mapShowSections,
        mapSpinner,
        objSFDX,
        lTARGETUSERNAME,
    } from "../../-helperFiles/GlobalStore";

    // Sections
    import JSONs from "../../-commonSections/JSONSection.svelte";
    import LOGLEVELs from "../../-commonSections/SelectSFDX.svelte";
    import TARGETUSERNAMEs from "../../-commonSections/SelectSFDX.svelte";
    import APIVERSIONs from "../../-commonSections/SelectSFDX.svelte";
    import LOGIDs from "../../-commonSections/StringSFDX.svelte";
    import NUMBERs from "../../-commonSections/NumberSFDX.svelte";
    import OUTPUTDIRs from "../../-commonSections/FolderpathSFDX.svelte";
    import ADVANCEDs from "../../-commonSections/ADVANCEDSection.svelte";

    // Component Validations
    let 
    JSONv, 
    LOGLEVELv, 
    TARGETUSERNAMEv,
    APIVERSIONv,
    LOGIDv,
    NUMBERv,
    OUTPUTDIRv,
    ADVANCEDv;

    // Documentation
    let fileName = "log_get";
    let showFileName = fileName.replace("_", ":");
    let showFileNameUpper = "Log:Gist";
    let commandType = "apex";
    let linkDocumentation = `https://developer.salesforce.com/docs/atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_force_${commandType}.htm#cli_reference_force_${commandType}_${fileName}`;

    // Initial loading
    if(!$mapSpinner.force){
        $mapSpinner.force = {};
    }

    $mapSpinner.force[fileName] = true;

    setTimeout(() => {
        $mapSpinner.force[fileName] = false;
    }, 1000);

    function startSFDX() {
        $objSFDX.terminal = "";
        $objSFDX.terminal = `force:${commandType}:${showFileName}`;

        Promise.all([
            JSONv.validate(), 
            LOGLEVELv.validate(), 
            TARGETUSERNAMEv.validate(), 
            APIVERSIONv.validate(), 
            LOGIDv.validate(), 
            NUMBERv.validate(), 
            OUTPUTDIRv.validate(), 
            ADVANCEDv.validate(), 
        ]).then((values) => {
            if(values){
                if(!values.includes(false)){
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
            pMapDoc={mapDoc.json}
            pShowSectionName={false}
        />

        <!-- [--loglevel LOGLEVEL] -->
        <svelte:component 
            this="{LOGLEVELs}" 
            bind:this="{LOGLEVELv}" 
            pSectionName="loglevel"
            pMapDoc={mapDoc.loglevel} 
            pSFDXParameter="--loglevel"
            pList={gLists.lLOGLEVEL}
            pDefaultValue="warn"
        />
        
        <!-- [-u TARGETUSERNAME] -->
        <svelte:component 
            this="{TARGETUSERNAMEs}" 
            bind:this="{TARGETUSERNAMEv}" 
            pSectionName="targetusername"
            pMapDoc={mapDoc.targetusername} 
            pSFDXParameter="-u"
            pList={$lTARGETUSERNAME}
        />
        
        <!-- [--apiversion APIVERSION] -->
        <svelte:component 
            this="{APIVERSIONs}" 
            bind:this="{APIVERSIONv}" 
            pSectionName="apiversion"
            pMapDoc={mapDoc.apiversion} 
            pSFDXParameter="--apiversion"
            pList={lAPIVERSION}
            pDefaultValue={dAPIVERSION}
        />
        
        <!-- [-i LOGID] -->
        <svelte:component 
            this="{LOGIDs}" 
            bind:this="{LOGIDv}" 
            pSectionName="logid"
            pMapDoc={mapDoc.logid}
            pSFDXParameter="-i"
            pSectionTitle="Log Id"
            pTitle="Insert the Log Id"
            pPlaceholder="Insert..."
            pMaxLength={18}
        />
        
        <!-- [-n NUMBER] -->
        <svelte:component 
            this="{NUMBERs}" 
            bind:this="{NUMBERv}" 
            pSectionName="number"
            pMapDoc={mapDoc.number} 
            pSFDXParameter="-n"
            pPlaceholder="Insert..."
        />
        
        <!-- [-d OUTPUTDIR] -->
        <svelte:component 
            this="{OUTPUTDIRs}" 
            bind:this="{OUTPUTDIRv}" 
            pSectionName="outputdir"
            pMapDoc={mapDoc.outputdir} 
            pSFDXParameter="-d"
            pDefaultFolder="."
        />

        <!-- [ADVANCED] -->
        <svelte:component this="{ADVANCEDs}" bind:this="{ADVANCEDv}" pMapDoc={mapDoc.advanced}/>
        <br/>
        <br/>
        <button class="sfdxet-buttons-icon" on:click={reset} title="Reset Options"><RefreshIcon /></button>
    </div>
{/if}

<CSS />
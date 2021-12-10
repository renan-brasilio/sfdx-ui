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
    import FILEPATHs from "../../-commonSections/FilepathSFDX.svelte";
    import TYPENAMEs from "../../-commonSections/StringSFDX.svelte";
    import INPUTDIRs from "../../-commonSections/FolderpathSFDX.svelte";
    import OUTPUTDIRs from "../../-commonSections/FolderpathSFDX.svelte";
    import NAMECOLUMNs from "../../-commonSections/StringSFDX.svelte";
    import ADVANCEDs from "../../-commonSections/ADVANCEDSection.svelte";

    // Component Validations
    let 
    JSONv, 
    LOGLEVELv,
    FILEPATHv,
    TYPENAMEv,
    INPUTDIRv,
    OUTPUTDIRv,
    NAMECOLUMNv,
    ADVANCEDv;

    // Documentation
    let fileName = "record_insert";
    let showFileName = fileName.replace("_", ":");
    let showFileNameUpper = "Record:Insert";
    let commandType = "cmdt";
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
        "filepath",
        "typename",
    ];

    if(!$mapShowSections){
        $mapShowSections = {};
    }

    if(!$mapSectionValidation){
        $mapSectionValidation = {};
    }

    for(let i = 0; i < mandatorySections.length; i++){
        $mapShowSections[mandatorySections[i]] = true;
        $mapSectionValidation[mandatorySections[i]] = 0;
    }

    function startSFDX() {
        let validation = 0;

        $objSFDX.terminal = "";
        $objSFDX.terminal = `force:${commandType}:${showFileName}`;

        Promise.all([
            JSONv.validate(), 
            LOGLEVELv.validate(), 
            FILEPATHv.validate(), 
            TYPENAMEv.validate(), 
            INPUTDIRv.validate(), 
            OUTPUTDIRv.validate(),  
            NAMECOLUMNv.validate(), 
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
                    return;
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
            if(key !== fileName){
                $mapShowSections[key] = false;
            }
        }
    }

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
        <h3>sfdx force:{commandType}:{showFileName} </h3>
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

        <!-- -f FILEPATH -->
        <svelte:component 
            this="{FILEPATHs}" 
            bind:this="{FILEPATHv}" 
            pSectionName="filepath"
            pMapDoc={mapDoc[commandType][fileName].filepath} 
            pSFDXParameter="-f"
            pPlaceholder="Insert..."
            pButtonText="Select CSV File"
            pRequired={true}
            pChecked={true}
            pDisabled={true}
        />

        <!-- -t TYPENAME -->
        <svelte:component 
            this="{TYPENAMEs}" 
            bind:this="{TYPENAMEv}" 
            pSectionName="typename"
            pRequired={true}
            pMapDoc={mapDoc[commandType][fileName].typename}
            pSFDXParameter="-t"
            pSectionTitle="Type Name"
            pTitle={mapDoc[commandType][fileName].typename.title}
            pPlaceholder="Insert..."
            pChecked={true}
            pDisabled={true}
        />

        <!-- [-i INPUTDIR] -->
        <svelte:component 
            this="{INPUTDIRs}" 
            bind:this="{INPUTDIRv}" 
            pSectionName="inputdir"
            pMapDoc={mapDoc[commandType][fileName].inputdir} 
            pSFDXParameter="-i"
            pDefaultFolder="force-app/main/default/objects"
        />

        <!-- [-d OUTPUTDIR] -->
        <svelte:component 
            this="{OUTPUTDIRs}" 
            bind:this="{OUTPUTDIRv}" 
            pSectionName="outputdir"
            pMapDoc={mapDoc[commandType][fileName].outputdir} 
            pSFDXParameter="-d"
            pDefaultFolder="force-app/main/default/customMetadata"
        />

        <!-- [-n NAMECOLUMN] -->
        <svelte:component 
            this="{NAMECOLUMNs}" 
            bind:this="{NAMECOLUMNv}" 
            pSectionName="namecolumn"
            pMapDoc={mapDoc[commandType][fileName].namecolumn}
            pSFDXParameter="-n"
            pSectionTitle="Name Column"
            pTitle={mapDoc[commandType][fileName].namecolumn.title}
            pPlaceholder="Insert..."
        />

        <!-- [ADVANCED] -->
        <svelte:component this="{ADVANCEDs}" bind:this="{ADVANCEDv}" pMapDoc={mapDoc.advanced}/>
        <br/>
        <br/>
        <button class="sfdxet-buttons-icon" on:click={reset} title="Reset Options"><RefreshIcon /></button>
    </div>
{/if}

<CSS />
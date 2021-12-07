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
    import TYPENAMEs from "../../-commonSections/StringSFDX.svelte";
    import LABELs from "../../-commonSections/StringSFDX.svelte";
    import PLURALLABELs from "../../-commonSections/StringSFDX.svelte";
    import VISIBILITYs from "../../-commonSections/SelectSFDX.svelte";
    import OUTPUTDIRs from "../../-commonSections/FolderpathSFDX.svelte";
    import ADVANCEDs from "../../-commonSections/ADVANCEDSection.svelte";

    // Component Validations
    let 
    JSONv, 
    LOGLEVELv, 
    TYPENAMEv,
    LABELv,
    PLURALLABELv,
    VISIBILITYv,
    OUTPUTDIRv,
    ADVANCEDv;

    // Documentation
    let fileName = "create";
    let showFileName = fileName.replace("_", ":");
    let showFileNameUpper = "Create";
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
        let sectionError;

        $objSFDX.terminal = "";
        $objSFDX.terminal = `force:${commandType}:${showFileName}`;

        Promise.all([
            JSONv.validate(), 
            LOGLEVELv.validate(), 
            TYPENAMEv.validate(), 
            LABELv.validate(), 
            PLURALLABELv.validate(), 
            VISIBILITYv.validate(), 
            OUTPUTDIRv.validate(), 
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
            if(key !== "create"){
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

        <!-- -n TYPENAME -->
        <svelte:component 
            this="{TYPENAMEs}" 
            bind:this="{TYPENAMEv}" 
            pSectionName="typename"
            pRequired={true}
            pMapDoc={mapDoc.typename}
            pSFDXParameter="-n"
            pSectionTitle="Type Name"
            pTitle="Insert the Type Name"
            pPlaceholder="Insert..."
            pPartialRequired={false}
        />
        
        <!-- [-l LABEL] -->
        <svelte:component 
            this="{LABELs}" 
            bind:this="{LABELv}" 
            pSectionName="label"
            pMapDoc={mapDoc.label}
            pSFDXParameter="-l"
            pSectionTitle="Label"
            pTitle="Insert the custom metadata Label"
            pPlaceholder="Insert..."
        />

        <!-- [-p PLURALLABEL] -->
        <svelte:component 
            this="{PLURALLABELs}" 
            bind:this="{PLURALLABELv}" 
            pSectionName="plurallabel"
            pMapDoc={mapDoc.plurallabel}
            pSFDXParameter="-p"
            pSectionTitle="Plural Label"
            pTitle="Insert the custom metadata Plural Label"
            pPlaceholder="Insert..."
        />

        <!-- [-v VISIBILITY] -->
        <svelte:component 
            this="{VISIBILITYs}" 
            bind:this="{VISIBILITYv}" 
            pSectionName="visibility"
            pMapDoc={mapDoc.visibility} 
            pSFDXParameter="-v"
            pList={gLists.lVISIBILITY}
            pDefaultValue="Public"
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
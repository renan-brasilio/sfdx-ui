<script>
  // Helper Files
  import * as js from "../../-helperFiles/GlobalJS";
  import CSS from "../../-helperFiles/GlobalCSS.svelte";
  import { Circle2 } from "svelte-loading-spinners";
  import {} from "os";
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
  import DEVNAMEs from "../../-commonSections/StringSFDX.svelte";
  import LABELs from "../../-commonSections/StringSFDX.svelte";
  import PLURALLABELs from "../../-commonSections/StringSFDX.svelte";
  import VISIBILITYs from "../../-commonSections/SelectSFDX.svelte";
  import SOBJECTNAMEs from "../../-commonSections/StringSFDX.svelte";
  import IGNOREUNSUPPORTEDs from "../../-commonSections/BooleanSFDX.svelte";
  import TYPEOUTPUTDIRs from "../../-commonSections/FolderpathSFDX.svelte";
  import RECORDSOUTPUTDIRs from "../../-commonSections/FolderpathSFDX.svelte";
  import ADVANCEDs from "../../-commonSections/ADVANCEDSection.svelte";

  // Component Validations
  let JSONv,
    LOGLEVELv,
    TARGETUSERNAMEv,
    APIVERSIONv,
    DEVNAMEv,
    LABELv,
    PLURALLABELv,
    VISIBILITYv,
    SOBJECTNAMEv,
    IGNOREUNSUPPORTEDv,
    TYPEOUTPUTDIRv,
    RECORDSOUTPUTDIRv,
    ADVANCEDv;

  // Documentation
  let fileName = "generate";
  let showFileName = fileName.replaceAll("_", ":");
  let showFileNameUpper = "Generate";
  let commandType = "cmdt";
  let linkDocumentation = `https://developer.salesforce.com/docs/atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_force_${commandType}.htm#cli_reference_force_${commandType}_${fileName}`;

  // Initial loading
  if (!$mapSpinner.force) {
    $mapSpinner.force = {};
  }

  $mapSpinner.force[fileName] = true;

  setTimeout(() => {
    $mapSpinner.force[fileName] = false;
  }, 1000);

  // Mandatory Field(s)
  let mandatorySections = ["devname", "sobjectname"];

  if (!$mapShowSections) {
    $mapShowSections = {};
  }

  if (!$mapSectionValidation) {
    $mapSectionValidation = {};
  }

  for (let i = 0; i < mandatorySections.length; i++) {
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
      TARGETUSERNAMEv.validate(),
      APIVERSIONv.validate(),
      DEVNAMEv.validate(),
      LABELv.validate(),
      PLURALLABELv.validate(),
      VISIBILITYv.validate(),
      SOBJECTNAMEv.validate(),
      IGNOREUNSUPPORTEDv.validate(),
      TYPEOUTPUTDIRv.validate(),
      RECORDSOUTPUTDIRv.validate(),
      ADVANCEDv.validate(),
    ]).then((values) => {
      if (values) {
        for (let i in $mapSectionValidation) {
          if ($mapSectionValidation[i] === 1) {
            validation++;
            break;
          } else if ($mapSectionValidation[i] === 0) {
            sectionError = i;
            break;
          }
        }

        if (validation === 0) {
          return;
        } else if (!values.includes(false)) {
          for (let key in $mapErrors) {
            $mapErrors[key] = "";
          }

          $mapSpinner.main = true;
          $mapInformation.main = true;

          js.globalContinue();
        }
      }
    });
  }

  function reset() {
    $mapInputVariables = {};

    for (let key in $mapShowSections) {
      if (key !== fileName) {
        $mapShowSections[key] = false;
      }
    }
  }

  // TARGETUSERNAME
  tsvscode.postMessage({
    type: "onGetAliasUsers",
  });

  // APIVERSION
  let dAPIVERSION = "";
  const lAPIVERSION = [];

  for (let i = 8; i < ($lastAPIVersion + 1); i++) {
    if (i === ($lastAPIVersion - 1)) {
      dAPIVERSION = i.toFixed(1);
    }

    lAPIVERSION.push({ value: i.toFixed(1), label: i.toFixed(1) });

    if (i === 11) {
      let j = i + 0.1;
      lAPIVERSION.push({ value: j.toFixed(1), label: j.toFixed(1) });
    }
  }

  lAPIVERSION.reverse();

  $mapInputVariables[fileName] = dAPIVERSION;
</script>

<WebviewListener {fileName} {commandType} showCommand={showFileNameUpper} />

{#if $mapSpinner.force[fileName]}
  <div class="sfdxet-spinner">
    <Circle2 size="60" colorOuter="#034efc" unit="px" />
  </div>
{:else}
  <div class="sfdxet-absolute-center">
    <h3>sfdx force:{commandType}:{showFileName}</h3>
    <br />
    <br />
    <button class="sfdxet-buttons" on:click={startSFDX}
      >{showFileNameUpper}</button
    >
    <br />
    <br />
    <h3>Options:</h3>
    <h4>
      <a target="_blank" href={linkDocumentation}>Official Documentation</a>
    </h4>
    <br />

    <!-- [--json] -->
    <svelte:component
      this={JSONs}
      bind:this={JSONv}
      pMapDoc={mapDoc[commandType][fileName].json}
      pShowSectionName={false}
    />

    <!-- [--loglevel LOGLEVEL] -->
    <svelte:component
      this={LOGLEVELs}
      bind:this={LOGLEVELv}
      pSectionName="loglevel"
      pMapDoc={mapDoc[commandType][fileName].loglevel}
      pSFDXParameter="--loglevel"
      pList={gLists.lLOGLEVEL}
      pDefaultValue="warn"
    />

    <!-- [-u TARGETUSERNAME] -->
    <svelte:component
      this={TARGETUSERNAMEs}
      bind:this={TARGETUSERNAMEv}
      pSectionName="targetusername"
      pMapDoc={mapDoc[commandType][fileName].targetusername}
      pSFDXParameter="-u"
      pList={$lTARGETUSERNAME}
    />

    <!-- [--apiversion APIVERSION] -->
    <svelte:component
      this={APIVERSIONs}
      bind:this={APIVERSIONv}
      pSectionName="apiversion"
      pMapDoc={mapDoc[commandType][fileName].apiversion}
      pSFDXParameter="--apiversion"
      pList={lAPIVERSION}
      pDefaultValue={dAPIVERSION}
    />

    <!-- -n DEVNAME -->
    <svelte:component
      this={DEVNAMEs}
      bind:this={DEVNAMEv}
      pSectionName="devname"
      pRequired={true}
      pMapDoc={mapDoc[commandType][fileName].devname}
      pSFDXParameter="-n"
      pSectionTitle="DEV Name"
      pTitle={mapDoc[commandType][fileName].devname.title}
      pPlaceholder="Insert..."
      pChecked={true}
      pDisabled={true}
    />

    <!-- [-l LABEL] -->
    <svelte:component
      this={LABELs}
      bind:this={LABELv}
      pSectionName="label"
      pMapDoc={mapDoc[commandType][fileName].label}
      pSFDXParameter="-l"
      pSectionTitle="Label"
      pTitle={mapDoc[commandType][fileName].label.title}
      pPlaceholder="Insert..."
    />

    <!-- [-p PLURALLABEL] -->
    <svelte:component
      this={PLURALLABELs}
      bind:this={PLURALLABELv}
      pSectionName="plurallabel"
      pMapDoc={mapDoc[commandType][fileName].plurallabel}
      pSFDXParameter="-p"
      pSectionTitle="Plural Label"
      pTitle={mapDoc[commandType][fileName].plurallabel.title}
      pPlaceholder="Insert..."
    />

    <!-- [-v VISIBILITY] -->
    <svelte:component
      this={VISIBILITYs}
      bind:this={VISIBILITYv}
      pSectionName="visibility"
      pMapDoc={mapDoc[commandType][fileName].visibility}
      pSFDXParameter="-v"
      pList={gLists.lVISIBILITY}
      pDefaultValue="Public"
    />

    <!-- -s SOBJECTNAME -->
    <svelte:component
      this={SOBJECTNAMEs}
      bind:this={SOBJECTNAMEv}
      pSectionName="sobjectname"
      pRequired={true}
      pMapDoc={mapDoc[commandType][fileName].sobjectname}
      pSFDXParameter="-s"
      pSectionTitle="sObject Name"
      pTitle={mapDoc[commandType][fileName].sobjectname.title}
      pPlaceholder="Insert..."
      pChecked={true}
      pDisabled={true}
    />

    <!-- [-i] -->
    <svelte:component
      this={IGNOREUNSUPPORTEDs}
      bind:this={IGNOREUNSUPPORTEDv}
      pSectionName="ignoreunsupported"
      pMapDoc={mapDoc[commandType][fileName].ignoreunsupported}
      pSFDXParameter="-i"
      pShowSectionName={false}
    />

    <!-- [-d TYPEOUTPUTDIR] -->
    <svelte:component
      this={TYPEOUTPUTDIRs}
      bind:this={TYPEOUTPUTDIRv}
      pSectionName="typeoutputdir"
      pMapDoc={mapDoc[commandType][fileName].typeoutputdir}
      pSFDXParameter="-d"
      pDefaultFolder="force-app/main/default/objects/"
    />

    <!-- [-r RECORDSOUTPUTDIR] -->
    <svelte:component
      this={RECORDSOUTPUTDIRs}
      bind:this={RECORDSOUTPUTDIRv}
      pSectionName="recordsoutputdir"
      pMapDoc={mapDoc[commandType][fileName].recordsoutputdir}
      pSFDXParameter="-r"
      pDefaultFolder="force-app/main/default/customMetadata/"
    />

    <!-- [ADVANCED] -->
    <svelte:component
      this={ADVANCEDs}
      bind:this={ADVANCEDv}
      pMapDoc={mapDoc.advanced}
    />
    <br />
    <br />
    <button class="sfdxet-buttons-icon" on:click={reset} title="Reset Options"
      ><RefreshIcon /></button
    >
  </div>
{/if}

<CSS />

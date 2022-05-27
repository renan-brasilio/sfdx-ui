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
  import TESTRUNIDs from "../../-commonSections/StringSFDX.svelte";
  import CODECOVERAGEs from "../../-commonSections/BooleanSFDX.svelte";
  import OUTPUTDIRs from "../../-commonSections/FolderpathSFDX.svelte";
  import RESULTFORMATs from "../../-commonSections/SelectSFDX.svelte";
  import WAITs from "../../-commonSections/MinuteSFDX.svelte";
  import VERBOSEs from "../../-commonSections/BooleanSFDX.svelte";
  import ADVANCEDs from "../../-commonSections/ADVANCEDSection.svelte";

  // Component Validations
  let JSONv,
    LOGLEVELv,
    TARGETUSERNAMEv,
    APIVERSIONv,
    TESTRUNIDv,
    CODECOVERAGEv,
    OUTPUTDIRv,
    RESULTFORMATv,
    WAITv,
    VERBOSEv,
    ADVANCEDv;

  // Documentation
  let fileName = "test_report";
  let showFileName = fileName.replace("_", ":");
  let showFileNameUpper = "Test:Report";
  let commandType = "apex";
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
  let mandatorySections = ["testrunid"];

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
    let sectionError;

    $objSFDX.terminal = "";
    $objSFDX.terminal = `force:${commandType}:${showFileName}`;

    Promise.all([
      JSONv.validate(),
      LOGLEVELv.validate(),
      TARGETUSERNAMEv.validate(),
      APIVERSIONv.validate(),
      TESTRUNIDv.validate(),
      CODECOVERAGEv.validate(),
      OUTPUTDIRv.validate(),
      RESULTFORMATv.validate(),
      WAITv.validate(),
      VERBOSEv.validate(),
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
      $mapShowSections[key] = false;
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

    <!-- -i TESTRUNID -->
    <svelte:component
      this={TESTRUNIDs}
      bind:this={TESTRUNIDv}
      pSectionName="testrunid"
      pRequired={true}
      pMapDoc={mapDoc[commandType][fileName].testrunid}
      pSFDXParameter="-n"
      pSectionTitle="Test Run Id"
      pTitle={mapDoc[commandType][fileName].testrunid.title}
      pPlaceholder="Insert..."
      pMaxLength={18}
      pChecked={true}
      pDisabled={true}
    />

    <!-- [-c] -->
    <svelte:component
      this={CODECOVERAGEs}
      bind:this={CODECOVERAGEv}
      pSectionName="codecoverage"
      pMapDoc={mapDoc[commandType][fileName].codecoverage}
      pSFDXParameter="-c"
      pShowSectionName={false}
    />

    <!-- [-d OUTPUTDIR] -->
    <svelte:component
      this={OUTPUTDIRs}
      bind:this={OUTPUTDIRv}
      pSectionName="outputdir"
      pMapDoc={mapDoc[commandType][fileName].outputdir}
      pSFDXParameter="-d"
    />

    <!-- [-r RESULTFORMAT] -->
    <svelte:component
      this={RESULTFORMATs}
      bind:this={RESULTFORMATv}
      pSectionName="resultformat"
      pMapDoc={mapDoc[commandType][fileName].resultformat}
      pSFDXParameter="-r"
      pList={gLists.lRESULTFORMAT}
    />

    <!-- [-w WAIT] -->
    <svelte:component
      this={WAITs}
      bind:this={WAITv}
      pSectionName="wait"
      pMapDoc={mapDoc[commandType][fileName].wait}
      pSFDXParameter="-w"
    />

    <!-- [--verbose] -->
    <svelte:component
      this={VERBOSEs}
      bind:this={VERBOSEv}
      pSectionName="verbose"
      pMapDoc={mapDoc[commandType][fileName].verbose}
      pSFDXParameter="--verbose"
      pShowSectionName={false}
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

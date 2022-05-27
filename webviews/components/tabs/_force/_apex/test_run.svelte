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
  import CODECOVERAGEs from "../../-commonSections/BooleanSFDX.svelte";
  import OUTPUTDIRs from "../../-commonSections/FolderpathSFDX.svelte";
  import TESTLEVELs from "../../-commonSections/SelectSFDX.svelte";
  import CLASSNAMEs from "../../-commonSections/StringSFDX.svelte";
  import RESULTFORMATs from "../../-commonSections/SelectSFDX.svelte";
  import SUITENAMESs from "../../-commonSections/StringSFDX.svelte";
  import TESTSs from "../../-commonSections/StringSFDX.svelte";
  import WAITs from "../../-commonSections/MinuteSFDX.svelte";
  import SYNCHRONOUSs from "../../-commonSections/BooleanSFDX.svelte";
  import VERBOSEs from "../../-commonSections/BooleanSFDX.svelte";
  import DETAILEDCOVERAGEs from "../../-commonSections/BooleanSFDX.svelte";
  import ADVANCEDs from "../../-commonSections/ADVANCEDSection.svelte";

  // Component Validations
  let JSONv,
    LOGLEVELv,
    TARGETUSERNAMEv,
    APIVERSIONv,
    CODECOVERAGEv,
    OUTPUTDIRv,
    TESTLEVELv,
    CLASSNAMEv,
    RESULTFORMATv,
    SUITENAMESv,
    TESTSv,
    WAITv,
    SYNCHRONOUSv,
    VERBOSEv,
    DETAILEDCOVERAGEv,
    ADVANCEDv;

  // Documentation
  let fileName = "test_run";
  let showFileName = fileName.replace("_", ":");
  let showFileNameUpper = "Test:Run";
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
  let mandatorySections = ["suitenames", "classnames", "tests"];

  let pOnlyOneError = "-n CLASSNAMES, -s SUITENAMES or -t TESTS";

  if (!$mapShowSections) {
    $mapShowSections = {};
  }

  if (!$mapSectionValidation) {
    $mapSectionValidation = {};
  }

  for (let i = 0; i < mandatorySections.length; i++) {
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
      CODECOVERAGEv.validate(),
      OUTPUTDIRv.validate(),
      TESTLEVELv.validate(),
      CLASSNAMEv.validate(),
      RESULTFORMATv.validate(),
      SUITENAMESv.validate(),
      TESTSv.validate(),
      WAITv.validate(),
      SYNCHRONOUSv.validate(),
      VERBOSEv.validate(),
      DETAILEDCOVERAGEv.validate(),
      ADVANCEDv.validate(),
    ]).then((values) => {
      if (values) {
        for (let i in $mapSectionValidation) {
          if ($mapSectionValidation[i] === 1) {
            validation++;
            break;
          }
        }

        if (validation === 0) {
          if (!$mapErrors) {
            $mapErrors = {};
          }

          for (let key in mandatorySections) {
            $mapErrors[key] = "sfdxet-error-span";
          }

          tsvscode.postMessage({
            type: "onError",
            value: `ERROR: At least one between (${pOnlyOneError}) is required.`,
          });

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
      pDefaultFolder="."
    />

    <!-- [-l TESTLEVEL] -->
    <svelte:component
      this={TESTLEVELs}
      bind:this={TESTLEVELv}
      pSectionName="testlevel"
      pMapDoc={mapDoc[commandType][fileName].testlevel}
      pSFDXParameter="-l"
      pList={gLists.lTESTLEVEL[commandType][fileName]}
    />

    <!-- [-n CLASSNAMES] -->
    <svelte:component
      this={CLASSNAMEs}
      bind:this={CLASSNAMEv}
      pSectionName="classnames"
      pMapDoc={mapDoc[commandType][fileName].classnames}
      pSFDXParameter="-n"
      pSectionTitle="Apex Class Names"
      pTitle={mapDoc[commandType][fileName].classnames.title}
      pPlaceholder="Insert..."
      pRequired={true}
      pStyle="color: orange;"
      {pOnlyOneError}
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

    <!-- [-s SUITENAMES] -->
    <svelte:component
      this={SUITENAMESs}
      bind:this={SUITENAMESv}
      pSectionName="suitenames"
      pMapDoc={mapDoc[commandType][fileName].suitenames}
      pSFDXParameter="-s"
      pSectionTitle="Suite Names"
      pTitle={mapDoc[commandType][fileName].suitenames.title}
      pPlaceholder="Insert..."
      pRequired={true}
      pStyle="color: orange;"
      {pOnlyOneError}
    />

    <!-- [-t TESTS] -->
    <svelte:component
      this={TESTSs}
      bind:this={TESTSv}
      pSectionName="tests"
      pMapDoc={mapDoc[commandType][fileName].tests}
      pSFDXParameter="-t"
      pSectionTitle="Test Names"
      pTitle={mapDoc[commandType][fileName].tests.title}
      pPlaceholder="Insert..."
      pRequired={true}
      pStyle="color: orange;"
      {pOnlyOneError}
    />

    <!-- [-w WAIT] -->
    <svelte:component
      this={WAITs}
      bind:this={WAITv}
      pSectionName="wait"
      pMapDoc={mapDoc[commandType][fileName].wait}
      pSFDXParameter="-w"
    />

    <!-- [-y] -->
    <svelte:component
      this={SYNCHRONOUSs}
      bind:this={SYNCHRONOUSv}
      pSectionName="synchronous"
      pMapDoc={mapDoc[commandType][fileName].synchronous}
      pSFDXParameter="-y"
      pShowSectionName={false}
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

    <!-- [-v] -->
    <svelte:component
      this={DETAILEDCOVERAGEs}
      bind:this={DETAILEDCOVERAGEv}
      pSectionName="detailedcoverage"
      pMapDoc={mapDoc[commandType][fileName].detailedcoverage}
      pSFDXParameter="-v"
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

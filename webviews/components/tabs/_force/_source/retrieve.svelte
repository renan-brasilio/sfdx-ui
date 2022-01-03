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
    mapErrors,
    mapInformation,
    mapInputVariables,
    mapShowSections,
    mapSectionValidation,
    mapSpinner,
    objSFDX,
  } from "../../-helperFiles/GlobalStore";

  // Sections
  import JSONs from "../../-commonSections/JSONSection.svelte";
  import LOGLEVELs from "../../-commonSections/SelectSFDX.svelte";
  import TARGETUSERNAMEs from "../../-commonSections/SelectSFDX.svelte";
  import APIVERSIONs from "../../-commonSections/SelectSFDX.svelte";
  import SOURCEPATHs from "../../-commonSections/StringSFDX.svelte";
  import WAITs from "../../-commonSections/MinuteSFDX.svelte";
  import MANIFESTs from "../../-commonSections/FilepathSFDX.svelte";
  import METADATAs from "../../-commonSections/StringSFDX.svelte";
  import PACKAGENAMESs from "../../-commonSections/StringSFDX.svelte";
  import VERBOSEs from "../../-commonSections/BooleanSFDX.svelte";
  import ADVANCEDs from "../../-commonSections/ADVANCEDSection.svelte";

  // Component Validations
  let JSONv,
    LOGLEVELv,
    TARGETUSERNAMEv,
    APIVERSIONv,
    SOURCEPATHv,
    WAITv,
    MANIFESTv,
    METADATAv,
    PACKAGENAMESv,
    VERBOSEv,
    ADVANCEDv;

  // Documentation
  let fileName = "retrieve";
  let showFileName = fileName.replace("_", ":");
  let showFileNameUpper = "Retrieve";
  let commandType = "source";
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
  let mandatorySections = ["metadata", "sourcepath", "manifest"];

  let pOnlyOneError = "-m METADATA, -p SOURCEPATH or -x MANIFEST";

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
    $objSFDX.terminal = "";
    $objSFDX.terminal = `force:${commandType}:${showFileName}`;

    Promise.all([
      JSONv.validate(),
      LOGLEVELv.validate(),
      TARGETUSERNAMEv.validate(),
      APIVERSIONv.validate(),
      SOURCEPATHv.validate(),
      WAITv.validate(),
      MANIFESTv.validate(),
      METADATAv.validate(),
      PACKAGENAMESv.validate(),
      VERBOSEv.validate(),
      ADVANCEDv.validate(),
    ]).then((values) => {
      if (values) {
        if (!values.includes(false)) {
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

  for (let i = 8; i < 54; i++) {
    if (i === 53) {
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

    <!-- [-p SOURCEPATH] -->
    <svelte:component
      this={SOURCEPATHs}
      bind:this={SOURCEPATHv}
      pSectionName="sourcepath"
      pMapDoc={mapDoc[commandType][fileName].sourcepath}
      pSFDXParameter="-p"
      pSectionTitle="Source Path List"
      pTitle={mapDoc[commandType][fileName].sourcepath.title}
      pPlaceholder="Insert..."
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

    <!-- [-x MANIFEST] -->
    <svelte:component
      this={MANIFESTs}
      bind:this={MANIFESTv}
      pSectionName="manifest"
      pMapDoc={mapDoc[commandType][fileName].manifest}
      pSFDXParameter="-x"
      pPlaceholder="Insert..."
      pButtonText="Select Manifest File"
      {pOnlyOneError}
    />

    <!-- [-m METADATA] -->
    <svelte:component
      this={METADATAs}
      bind:this={METADATAv}
      pSectionName="metadata"
      pMapDoc={mapDoc[commandType][fileName].metadata}
      pSFDXParameter="-m"
      pSectionTitle="Metadata List"
      pTitle={mapDoc[commandType][fileName].metadata.title}
      pPlaceholder="Insert..."
      {pOnlyOneError}
    />

    <!-- [-n PACKAGENAMES] -->
    <svelte:component
      this={PACKAGENAMESs}
      bind:this={PACKAGENAMESv}
      pSectionName="packagenames"
      pMapDoc={mapDoc[commandType][fileName].packagenames}
      pSFDXParameter="-n"
      pSectionTitle="Package Names"
      pTitle={mapDoc[commandType][fileName].packagenames.title}
      pPlaceholder="Insert..."
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

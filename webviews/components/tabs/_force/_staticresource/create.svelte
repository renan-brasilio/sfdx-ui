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
  import RESOURCENAMEs from "../../-commonSections/StringSFDX.svelte";
  import CONTENTTYPEs from "../../-commonSections/SelectSFDX.svelte";
  import OUTPUTDIRs from "../../-commonSections/FolderpathSFDX.svelte";
  import APIVERSIONs from "../../-commonSections/SelectSFDX.svelte";
  import ADVANCEDs from "../../-commonSections/ADVANCEDSection.svelte";

  // Component Validations
  let JSONv,
    LOGLEVELv,
    RESOURCENAMEv,
    CONTENTTYPEv,
    OUTPUTDIRv,
    APIVERSIONv,
    ADVANCEDv;

  // Documentation
  let fileName = "create";
  let showFileName = fileName.replaceAll("_", ":");
  let showFileNameUpper = "StaticResource:Create";
  let commandType = "staticresource";
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
    let mandatorySections = ["resourcename"];

    if (!$mapShowSections) {
      $mapShowSections = {};
    }

    $mapSectionValidation = {};

    for (let i = 0; i < mandatorySections.length; i++) {
      $mapShowSections[mandatorySections[i]] = true;
      $mapSectionValidation[mandatorySections[i]] = 0;
    }

  function startSFDX() {
    $objSFDX.terminal = "";
    $objSFDX.terminal = `force:${commandType}:${showFileName}`;

    Promise.all([
      JSONv.validate(),
      LOGLEVELv.validate(),
      RESOURCENAMEv.validate(),
      CONTENTTYPEv.validate(),
      OUTPUTDIRv.validate(),
      APIVERSIONv.validate(),
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

  // CONTENTTYPE
  let dCONTENTTYPE = "application/zip";
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
      pMapDoc={mapDoc["force"][commandType][fileName].json}
      pShowSectionName={false}
    />

    <!-- [--loglevel LOGLEVEL] -->
    <svelte:component
      this={LOGLEVELs}
      bind:this={LOGLEVELv}
      pSectionName="loglevel"
      pMapDoc={mapDoc["force"][commandType][fileName].loglevel}
      pSFDXParameter="--loglevel"
      pList={gLists.lLOGLEVEL}
      pDefaultValue="warn"
    />

    <!-- -n RESOURCENAME -->
    <svelte:component
      this={RESOURCENAMEs}
      bind:this={RESOURCENAMEv}
      pSectionName="resourcename"
      pRequired={true}
      pMapDoc={mapDoc["force"][commandType][fileName].resourcename}
      pSFDXParameter="-n"
      pSectionTitle="Resource Name"
      pTitle={mapDoc["force"][commandType][fileName].resourcename}
      pPlaceholder="Insert..."
      pChecked={true}
      pDisabled={true}
    />

    <!-- [--contenttype CONTENTTYPE] -->
    <svelte:component
      this={CONTENTTYPEs}
      bind:this={CONTENTTYPEv}
      pSectionName="contenttype"
      pMapDoc={mapDoc["force"][commandType][fileName].contenttype}
      pSFDXParameter="--contenttype"
      pList={gLists.lCONTENTTYPE}
      pDefaultValue={dCONTENTTYPE}
    />

    <!-- [-d OUTPUTDIR] -->
    <svelte:component
      this={OUTPUTDIRs}
      bind:this={OUTPUTDIRv}
      pSectionName="outputdir"
      pMapDoc={mapDoc["force"][commandType][fileName].outputdir}
      pSFDXParameter="-d"
      pDefaultFolder="."
    />

    <!-- [--apiversion APIVERSION] -->
    <svelte:component
      this={APIVERSIONs}
      bind:this={APIVERSIONv}
      pSectionName="apiversion"
      pMapDoc={mapDoc["force"][commandType][fileName].apiversion}
      pSFDXParameter="--apiversion"
      pList={lAPIVERSION}
      pDefaultValue={dAPIVERSION}
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

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
  import TARGETDEVHUBUSERNAMEs from "../../-commonSections/SelectSFDX.svelte";
  import APIVERSIONs from "../../-commonSections/SelectSFDX.svelte";
  import CREATEDLASTDAYSs from "../../-commonSections/NumberSFDX.svelte";
  import CONCISEs from "../../-commonSections/BooleanSFDX.svelte";
  import MODIFIEDLASTDAYSs from "../../-commonSections/NumberSFDX.svelte";
  import PACKAGESs from "../../-commonSections/StringSFDX.svelte";
  import RELEASEDs from "../../-commonSections/BooleanSFDX.svelte";
  import ORDERBYs from "../../-commonSections/StringSFDX.svelte";
  import VERBOSEs from "../../-commonSections/BooleanSFDX.svelte";
  import ADVANCEDs from "../../-commonSections/ADVANCEDSection.svelte";

  // Component Validations
  let JSONv,
    LOGLEVELv,
    TARGETDEVHUBUSERNAMEv,
    APIVERSIONv,
    CREATEDLASTDAYSv,
    CONCISEv,
    MODIFIEDLASTDAYSv,
    PACKAGESv,
    RELEASEDv,
    ORDERBYv,
    VERBOSEv,
    ADVANCEDv;

  // Documentation
  let fileName = "version_list";
  let showFileName = fileName.replaceAll("_", ":");
  let showFileNameUpper = "Version:List";
  let commandType = "package";
  let linkDocumentation = `https://developer.salesforce.com/docs/atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_force_${commandType}.htm#cli_reference_force_${commandType}_${fileName}`;

  // Initial loading
  if (!$mapSpinner.force) {
    $mapSpinner.force = {};
  }

  $mapSpinner.force[fileName] = true;

  setTimeout(() => {
    $mapSpinner.force[fileName] = false;
  }, 1000);

  function startSFDX() {
    let validation = 0;
    let sectionError;

    $objSFDX.terminal = "";
    $objSFDX.terminal = `force:${commandType}:${showFileName}`;

    Promise.all([
      JSONv.validate(),
      LOGLEVELv.validate(),
      TARGETDEVHUBUSERNAMEv.validate(),
      APIVERSIONv.validate(),
      CREATEDLASTDAYSv.validate(),
      CONCISEv.validate(),
      MODIFIEDLASTDAYSv.validate(),
      PACKAGESv.validate(),
      RELEASEDv.validate(),
      ORDERBYv.validate(),
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
          if (!$mapErrors) {
            $mapErrors = {};
          }

          if (sectionError) {
            $mapErrors[sectionError] = "sfdxet-error-span";
            sectionError = sectionError.toUpperCase();

            tsvscode.postMessage({
              type: "onError",
              value: `ERROR: ${sectionError} is required.`,
            });

            return;
          }
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

    <!-- [-v TARGETDEVHUBUSERNAME] -->
    <svelte:component
      this={TARGETDEVHUBUSERNAMEs}
      bind:this={TARGETDEVHUBUSERNAMEv}
      pSectionName="targetdevhubusername"
      pMapDoc={mapDoc["force"][commandType][fileName].targetdevhubusername}
      pSFDXParameter="-v"
      pList={$lTARGETUSERNAME}
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

    <!-- [-c CREATEDLASTDAYS] -->
    <svelte:component
      this={CREATEDLASTDAYSs}
      bind:this={CREATEDLASTDAYSv}
      pSectionName="createdlastdays"
      pMapDoc={mapDoc["force"][commandType][fileName].createdlastdays}
      pSFDXParameter="-c"
      pPlaceholder="Insert..."
    />

    <!-- [--concise] -->
    <svelte:component
      this={CONCISEs}
      bind:this={CONCISEv}
      pSectionName="concise"
      pMapDoc={mapDoc["force"][commandType][fileName].concise}
      pSFDXParameter="--concise"
      pShowSectionName={false}
    />

    <!-- [-m MODIFIEDLASTDAYS] -->
    <svelte:component
      this={MODIFIEDLASTDAYSs}
      bind:this={MODIFIEDLASTDAYSv}
      pSectionName="modifiedlastdays"
      pMapDoc={mapDoc["force"][commandType][fileName].modifiedlastdays}
      pSFDXParameter="-m"
      pPlaceholder="Insert..."
    />

    <!-- [-p PACKAGES] -->
    <svelte:component
      this={PACKAGESs}
      bind:this={PACKAGESv}
      pSectionName="packages"
      pMapDoc={mapDoc["force"][commandType][fileName].packages}
      pSFDXParameter="-p"
      pSectionTitle="Package List"
      pTitle={mapDoc["force"][commandType][fileName].packages}
      pPlaceholder="Insert..."
    />

    <!-- [-r] -->
    <svelte:component
      this={RELEASEDs}
      bind:this={RELEASEDv}
      pSectionName="released"
      pMapDoc={mapDoc["force"][commandType][fileName].released}
      pSFDXParameter="-r"
      pShowSectionName={false}
    />

    <!-- [-o ORDERBY] -->
    <svelte:component
      this={ORDERBYs}
      bind:this={ORDERBYv}
      pSectionName="orderby"
      pMapDoc={mapDoc["force"][commandType][fileName].orderby}
      pSFDXParameter="-o"
      pSectionTitle="Order By"
      pTitle={mapDoc["force"][commandType][fileName].orderby}
      pPlaceholder="Insert..."
    />

    <!-- [--verbose] -->
    <svelte:component
      this={VERBOSEs}
      bind:this={VERBOSEv}
      pSectionName="verbose"
      pMapDoc={mapDoc["force"][commandType][fileName].verbose}
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

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
  import INSTANCEURLs from "../../-commonSections/StringSFDX.svelte";
  import SETDEFAULTDEVHUBUSERNAMEs from "../../-commonSections/BooleanSFDX.svelte";
  import SETDEFAULTUSERNAMEs from "../../-commonSections/BooleanSFDX.svelte";
  import SETALIASs from "../../-commonSections/StringSFDX.svelte";
  import NOPROMPTs from "../../-commonSections/BooleanSFDX.svelte";
  import ADVANCEDs from "../../-commonSections/ADVANCEDSection.svelte";

  // Component Validations
  let JSONv,
    LOGLEVELv,
    INSTANCEURLv,
    SETDEFAULTDEVHUBUSERNAMEv,
    SETDEFAULTUSERNAMEv,
    SETALIASv,
    NOPROMPTv,
    ADVANCEDv;

  // Documentation
  let fileName = "store";
  let showFileName = fileName.replaceAll("_", ":");
  let showFileNameUpper = "Store";
  let commandType = "accesstoken";
  let linkDocumentation = `https://developer.salesforce.com/docs/atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_auth_${commandType}.htm#cli_reference_auth_${commandType}_${fileName}`;

  // Initial loading
  if (!$mapSpinner.auth) {
    $mapSpinner.auth = {};
  }

  $mapSpinner.auth[fileName] = true;

  setTimeout(() => {
    $mapSpinner.auth[fileName] = false;
  }, 1000);

  // Mandatory Field(s)
  let mandatorySections = ["instanceurl"];

  if (!$mapShowSections) {
    $mapShowSections = {};
  }

  $mapSectionValidation = {};

  for (let i = 0; i < mandatorySections.length; i++) {
    $mapShowSections[mandatorySections[i]] = true;
    $mapSectionValidation[mandatorySections[i]] = 0;
  }

  function startSFDX() {
    let validation = 0;
    let sectionError;

    $objSFDX.terminal = "";
    $objSFDX.terminal = `auth:${commandType}:${showFileName}`;

    Promise.all([
      JSONv.validate(),
      LOGLEVELv.validate(),
      INSTANCEURLv.validate(),
      SETDEFAULTDEVHUBUSERNAMEv.validate(),
      SETDEFAULTUSERNAMEv.validate(),
      SETALIASv.validate(),
      NOPROMPTv.validate(),
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
</script>

<WebviewListener {fileName} {commandType} showCommand={showFileNameUpper} />

{#if $mapSpinner.auth[fileName]}
  <div class="sfdxet-spinner">
    <Circle2 size="60" colorOuter="#034efc" unit="px" />
  </div>
{:else}
  <div class="sfdxet-absolute-center">
    <h3>sfdx auth:{commandType}:{showFileName}</h3>
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
      pMapDoc={mapDoc["auth"][commandType][fileName].json}
      pShowSectionName={false}
    />

    <!-- [--loglevel LOGLEVEL] -->
    <svelte:component
      this={LOGLEVELs}
      bind:this={LOGLEVELv}
      pSectionName="loglevel"
      pMapDoc={mapDoc["auth"][commandType][fileName].loglevel}
      pSFDXParameter="--loglevel"
      pList={gLists.lLOGLEVEL}
      pDefaultValue="warn"
    />

    <!-- -r INSTANCEURL -->
    <svelte:component
      this={INSTANCEURLs}
      bind:this={INSTANCEURLv}
      pSectionName="instanceurl"
      pRequired={true}
      pMapDoc={mapDoc["auth"][commandType][fileName].instanceurl}
      pSFDXParameter="-r"
      pSectionTitle="Instance URL"
      pTitle={mapDoc["auth"][commandType][fileName].instanceurl}
      pPlaceholder="Insert..."
      pChecked={true}
      pDisabled={true}
    />

    <!-- [-d] -->
    <svelte:component
      this={SETDEFAULTDEVHUBUSERNAMEs}
      bind:this={SETDEFAULTDEVHUBUSERNAMEv}
      pSectionName="setdefaultdevhubusername"
      pMapDoc={mapDoc["auth"][commandType][fileName].setdefaultdevhubusername}
      pSFDXParameter="-d"
      pShowSectionName={false}
    />

    <!-- [-s] -->
    <svelte:component
      this={SETDEFAULTUSERNAMEs}
      bind:this={SETDEFAULTUSERNAMEv}
      pSectionName="setdefaultusername"
      pMapDoc={mapDoc["auth"][commandType][fileName].setdefaultusername}
      pSFDXParameter="-s"
      pShowSectionName={false}
    />

    <!-- [-a SETALIAS] -->
    <svelte:component
      this={SETALIASs}
      bind:this={SETALIASv}
      pSectionName="setalias"
      pMapDoc={mapDoc["auth"][commandType][fileName].setalias}
      pSFDXParameter="-a"
      pSectionTitle="Set Alias"
      pTitle={mapDoc["auth"][commandType][fileName].setalias}
      pPlaceholder="Insert..."
    />

    <!-- [-p] -->
    <svelte:component
      this={NOPROMPTs}
      bind:this={NOPROMPTv}
      pSectionName="noprompt"
      pMapDoc={mapDoc["auth"][commandType][fileName].noprompt}
      pSFDXParameter="-p"
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

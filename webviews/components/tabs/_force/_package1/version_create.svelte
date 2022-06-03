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
  import PACKAGEIDs from "../../-commonSections/StringSFDX.svelte";
  import NAMEs from "../../-commonSections/StringSFDX.svelte";
  import DESCRIPTIONs from "../../-commonSections/StringSFDX.svelte";
  import VERSIONs from "../../-commonSections/StringSFDX.svelte";
  import MANAGEDRELEASEDs from "../../-commonSections/BooleanSFDX.svelte";
  import RELEASENOTESURLs from "../../-commonSections/StringSFDX.svelte";
  import POSTINSTALLURLs from "../../-commonSections/StringSFDX.svelte";
  import INSTALLATIONKEYs from "../../-commonSections/StringSFDX.svelte";
  import WAITs from "../../-commonSections/MinuteSFDX.svelte";
  import ADVANCEDs from "../../-commonSections/ADVANCEDSection.svelte";

  // Component Validations
  let JSONv,
    LOGLEVELv,
    TARGETDEVHUBUSERNAMEv,
    APIVERSIONv,
    PACKAGEIDv,
    NAMEv,
    DESCRIPTIONv,
    VERSIONv,
    MANAGEDRELEASEDv,
    RELEASENOTESURLv,
    POSTINSTALLURLv,
    INSTALLATIONKEYv,
    WAITv,
    ADVANCEDv;

  // Documentation
  let fileName = "version_create";
  let showFileName = fileName.replaceAll("_", ":");
  let showFileNameUpper = "Version:Create";
  let commandType = "package1";
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
  let mandatorySections = ["packageid", "name"];

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
    $objSFDX.terminal = `force:${commandType}:${showFileName}`;

    Promise.all([
      JSONv.validate(),
      LOGLEVELv.validate(),
      TARGETDEVHUBUSERNAMEv.validate(),
      APIVERSIONv.validate(),
      PACKAGEIDv.validate(),
      NAMEv.validate(),
      DESCRIPTIONv.validate(),
      VERSIONv.validate(),
      MANAGEDRELEASEDv.validate(),
      RELEASENOTESURLv.validate(),
      POSTINSTALLURLv.validate(),
      INSTALLATIONKEYv.validate(),
      WAITv.validate(),
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

    <!-- [-v TARGETDEVHUBUSERNAME] -->
    <svelte:component
      this={TARGETDEVHUBUSERNAMEs}
      bind:this={TARGETDEVHUBUSERNAMEv}
      pSectionName="targetdevhubusername"
      pMapDoc={mapDoc[commandType][fileName].targetdevhubusername}
      pSFDXParameter="-v"
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

    <!-- -i PACKAGEID -->
    <svelte:component
      this={PACKAGEIDs}
      bind:this={PACKAGEIDv}
      pSectionName="packageid"
      pRequired={true}
      pMapDoc={mapDoc[commandType][fileName].packageid}
      pSFDXParameter="-i"
      pSectionTitle="Package Id"
      pTitle={mapDoc[commandType][fileName].packageid}
      pPlaceholder="Insert..."
      pChecked={true}
      pDisabled={true}
    />

    <!-- -n NAME -->
    <svelte:component
      this={NAMEs}
      bind:this={NAMEv}
      pSectionName="name"
      pRequired={true}
      pMapDoc={mapDoc[commandType][fileName].name}
      pSFDXParameter="-n"
      pSectionTitle="Package Name"
      pTitle={mapDoc[commandType][fileName].name}
      pPlaceholder="Insert..."
      pChecked={true}
      pDisabled={true}
    />

    <!-- [-d DESCRIPTION] -->
    <svelte:component
      this={DESCRIPTIONs}
      bind:this={DESCRIPTIONv}
      pSectionName="description"
      pMapDoc={mapDoc[commandType][fileName].description}
      pSFDXParameter="-d"
      pSectionTitle="Package Description"
      pTitle={mapDoc[commandType][fileName].description}
      pPlaceholder="Insert..."
    />

    <!-- [-v VERSION] -->
    <svelte:component
      this={VERSIONs}
      bind:this={VERSIONv}
      pSectionName="version"
      pMapDoc={mapDoc[commandType][fileName].version}
      pSFDXParameter="-v"
      pSectionTitle="Package Version"
      pTitle={mapDoc[commandType][fileName].version}
      pPlaceholder="Insert..."
    />

    <!-- [-m] -->
    <svelte:component
      this={MANAGEDRELEASEDs}
      bind:this={MANAGEDRELEASEDv}
      pSectionName="managedreleased"
      pMapDoc={mapDoc[commandType][fileName].managedreleased}
      pSFDXParameter="-m"
      pShowSectionName={false}
    />

    <!-- [-r RELEASENOTESURL] -->
    <svelte:component
      this={RELEASENOTESURLs}
      bind:this={RELEASENOTESURLv}
      pSectionName="releasenotesurl"
      pMapDoc={mapDoc[commandType][fileName].releasenotesurl}
      pSFDXParameter="-r"
      pSectionTitle="Release Notes URL"
      pTitle={mapDoc[commandType][fileName].releasenotesurl}
      pPlaceholder="Insert..."
    />

    <!-- [-p POSTINSTALLURL] -->
    <svelte:component
      this={POSTINSTALLURLs}
      bind:this={POSTINSTALLURLv}
      pSectionName="postinstallurl"
      pMapDoc={mapDoc[commandType][fileName].postinstallurl}
      pSFDXParameter="-p"
      pSectionTitle="Release Install URL"
      pTitle={mapDoc[commandType][fileName].postinstallurl}
      pPlaceholder="Insert..."
    />

    <!-- [-k INSTALLATIONKEY] -->
    <svelte:component
      this={INSTALLATIONKEYs}
      bind:this={INSTALLATIONKEYv}
      pSectionName="installationkey"
      pMapDoc={mapDoc[commandType][fileName].installationkey}
      pSFDXParameter="-k"
      pSectionTitle="Installation Key"
      pTitle={mapDoc[commandType][fileName].installationkey}
      pPlaceholder="Insert..."
    />

    <!-- [-w WAIT] -->
    <svelte:component
      this={WAITs}
      bind:this={WAITv}
      pSectionName="wait"
      pMapDoc={mapDoc[commandType][fileName].wait}
      pSFDXParameter="-w"
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

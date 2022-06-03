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
  import PACKAGEs from "../../-commonSections/StringSFDX.svelte";
  import PATHs from "../../-commonSections/FolderpathSFDX.svelte";
  import DEFINITIONFILEs from "../../-commonSections/FilepathSFDX.svelte";
  import BRANCHs from "../../-commonSections/StringSFDX.svelte";
  import TAGs from "../../-commonSections/StringSFDX.svelte";
  import INSTALLATIONKEYs from "../../-commonSections/StringSFDX.svelte";
  import INSTALLATIONKEYBYPASSs from "../../-commonSections/BooleanSFDX.svelte";
  import WAITs from "../../-commonSections/MinuteSFDX.svelte";
  import VERSIONNAMEs from "../../-commonSections/StringSFDX.svelte";
  import VERSIONNUMBERs from "../../-commonSections/StringSFDX.svelte";
  import VERSIONDESCRIPTIONs from "../../-commonSections/StringSFDX.svelte";
  import CODECOVERAGEs from "../../-commonSections/BooleanSFDX.svelte";
  import RELEASENOTESURLs from "../../-commonSections/StringSFDX.svelte";
  import POSTINSTALLURLs from "../../-commonSections/StringSFDX.svelte";
  import POSTINSTALLSCRIPTs from "../../-commonSections/StringSFDX.svelte";
  import UNINSTALLSCRIPTs from "../../-commonSections/StringSFDX.svelte";
  import SKIPVALIDATIONs from "../../-commonSections/BooleanSFDX.svelte";
  import SKIPANCESTORCHECKs from "../../-commonSections/BooleanSFDX.svelte";
  import ADVANCEDs from "../../-commonSections/ADVANCEDSection.svelte";

  // Component Validations
  let JSONv,
    LOGLEVELv,
    TARGETDEVHUBUSERNAMEv,
    APIVERSIONv,
    PACKAGEv,
    PATHv,
    DEFINITIONFILEv,
    BRANCHv,
    TAGv,
    INSTALLATIONKEYv,
    INSTALLATIONKEYBYPASSv,
    WAITv,
    VERSIONNAMEv,
    VERSIONNUMBERv,
    VERSIONDESCRIPTIONv,
    CODECOVERAGEv,
    RELEASENOTESURLv,
    POSTINSTALLURLv,
    POSTINSTALLSCRIPTv,
    UNINSTALLSCRIPTv,
    SKIPVALIDATIONv,
    SKIPANCESTORCHECKv,
    ADVANCEDv;

  // Documentation
  let fileName = "version_create";
  let showFileName = fileName.replaceAll("_", ":");
  let showFileNameUpper = "Version:Create";
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
      PACKAGEv.validate(),
      PATHv.validate(),
      DEFINITIONFILEv.validate(),
      BRANCHv.validate(),
      TAGv.validate(),
      INSTALLATIONKEYv.validate(),
      INSTALLATIONKEYBYPASSv.validate(),
      WAITv.validate(),
      VERSIONNAMEv.validate(),
      VERSIONNUMBERv.validate(),
      VERSIONDESCRIPTIONv.validate(),
      CODECOVERAGEv.validate(),
      RELEASENOTESURLv.validate(),
      POSTINSTALLURLv.validate(),
      POSTINSTALLSCRIPTv.validate(),
      UNINSTALLSCRIPTv.validate(),
      SKIPVALIDATIONv.validate(),
      SKIPANCESTORCHECKv.validate(),
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

    <!-- [-p PACKAGE] -->
    <svelte:component
      this={PACKAGEs}
      bind:this={PACKAGEv}
      pSectionName="package"
      pMapDoc={mapDoc["force"][commandType][fileName].package}
      pSFDXParameter="-p"
      pSectionTitle="Package Name"
      pTitle={mapDoc["force"][commandType][fileName].package}
      pPlaceholder="Insert..."
    />

    <!-- [-d PATH] -->
    <svelte:component
      this={PATHs}
      bind:this={PATHv}
      pSectionName="path"
      pMapDoc={mapDoc["force"][commandType][fileName].path}
      pSFDXParameter="-d"
      pDefaultFolder="."
    />

    <!-- [-f DEFINITIONFILE] -->
    <svelte:component
      this={DEFINITIONFILEs}
      bind:this={DEFINITIONFILEv}
      pSectionName="definitionfile"
      pMapDoc={mapDoc["force"][commandType][fileName].definitionfile}
      pSFDXParameter="-f"
      pPlaceholder="Insert..."
      pButtonText="Select Definition File"
    />

    <!-- [-b BRANCH] -->
    <svelte:component
      this={BRANCHs}
      bind:this={BRANCHv}
      pSectionName="branch"
      pMapDoc={mapDoc["force"][commandType][fileName].branch}
      pSFDXParameter="-b"
      pSectionTitle="Branch Name"
      pTitle={mapDoc["force"][commandType][fileName].branch}
      pPlaceholder="Insert..."
    />
    
    <!-- [-t TAG] -->
    <svelte:component
      this={TAGs}
      bind:this={TAGv}
      pSectionName="tag"
      pMapDoc={mapDoc["force"][commandType][fileName].tag}
      pSFDXParameter="-t"
      pSectionTitle="Tag Name"
      pTitle={mapDoc["force"][commandType][fileName].tag}
      pPlaceholder="Insert..."
    />

    <!-- [-k INSTALLATIONKEY] -->
    <svelte:component
      this={INSTALLATIONKEYs}
      bind:this={INSTALLATIONKEYv}
      pSectionName="installationkey"
      pMapDoc={mapDoc["force"][commandType][fileName].installationkey}
      pSFDXParameter="-k"
      pSectionTitle="Installation Key"
      pTitle={mapDoc["force"][commandType][fileName].installationkey}
      pPlaceholder="Insert..."
    />

    <!-- [-x] -->
    <svelte:component
      this={INSTALLATIONKEYBYPASSs}
      bind:this={INSTALLATIONKEYBYPASSv}
      pSectionName="installationkeybypass"
      pMapDoc={mapDoc["force"][commandType][fileName].installationkeybypass}
      pSFDXParameter="-x"
      pShowSectionName={false}
    />

    <!-- [-w WAIT] -->
    <svelte:component
      this={WAITs}
      bind:this={WAITv}
      pSectionName="wait"
      pMapDoc={mapDoc["force"][commandType][fileName].wait}
      pSFDXParameter="-w"
      pDefaultValue={0}
    />

    <!-- [-a VERSIONNAME] -->
    <svelte:component
      this={VERSIONNAMEs}
      bind:this={VERSIONNAMEv}
      pSectionName="versionname"
      pMapDoc={mapDoc["force"][commandType][fileName].versionname}
      pSFDXParameter="-a"
      pSectionTitle="Version Name"
      pTitle={mapDoc["force"][commandType][fileName].versionname}
      pPlaceholder="Insert..."
    />

    <!-- [-n VERSIONNUMBER] -->
    <svelte:component
      this={VERSIONNUMBERs}
      bind:this={VERSIONNUMBERv}
      pSectionName="versionnumber"
      pMapDoc={mapDoc["force"][commandType][fileName].versionnumber}
      pSFDXParameter="-n"
      pSectionTitle="Version Number"
      pTitle={mapDoc["force"][commandType][fileName].versionnumber}
      pPlaceholder="Insert..."
    />

    <!-- [-e VERSIONDESCRIPTION] -->
    <svelte:component
      this={VERSIONDESCRIPTIONs}
      bind:this={VERSIONDESCRIPTIONv}
      pSectionName="versiondescription"
      pMapDoc={mapDoc["force"][commandType][fileName].versiondescription}
      pSFDXParameter="-e"
      pSectionTitle="Version Description"
      pTitle={mapDoc["force"][commandType][fileName].versiondescription}
      pPlaceholder="Insert..."
    />

    <!-- [-c] -->
    <svelte:component
      this={CODECOVERAGEs}
      bind:this={CODECOVERAGEv}
      pSectionName="codecoverage"
      pMapDoc={mapDoc["force"][commandType][fileName].codecoverage}
      pSFDXParameter="-c"
      pShowSectionName={false}
    />

    <!-- [--releasenotesurl RELEASENOTESURL] -->
    <svelte:component
      this={RELEASENOTESURLs}
      bind:this={RELEASENOTESURLv}
      pSectionName="releasenotesurl"
      pMapDoc={mapDoc["force"][commandType][fileName].releasenotesurl}
      pSFDXParameter="--releasenotesurl"
      pSectionTitle="Release Notes URL"
      pTitle={mapDoc["force"][commandType][fileName].releasenotesurl}
      pPlaceholder="Insert..."
    />

    <!-- [--postinstallurl POSTINSTALLURL] -->
    <svelte:component
      this={POSTINSTALLURLs}
      bind:this={POSTINSTALLURLv}
      pSectionName="postinstallurl"
      pMapDoc={mapDoc["force"][commandType][fileName].postinstallurl}
      pSFDXParameter="--postinstallurl"
      pSectionTitle="Post Install URL"
      pTitle={mapDoc["force"][commandType][fileName].postinstallurl}
      pPlaceholder="Insert..."
    />

    <!-- [--postinstallscript POSTINSTALLSCRIPT] -->
    <svelte:component
      this={POSTINSTALLSCRIPTs}
      bind:this={POSTINSTALLSCRIPTv}
      pSectionName="postinstallscript"
      pMapDoc={mapDoc["force"][commandType][fileName].postinstallscript}
      pSFDXParameter="--postinstallscript"
      pSectionTitle="Post Install Script"
      pTitle={mapDoc["force"][commandType][fileName].postinstallscript}
      pPlaceholder="Insert..."
    />

    <!-- [--uninstallscript UNINSTALLSCRIPT] -->
    <svelte:component
      this={UNINSTALLSCRIPTs}
      bind:this={UNINSTALLSCRIPTv}
      pSectionName="uninstallscript"
      pMapDoc={mapDoc["force"][commandType][fileName].uninstallscript}
      pSFDXParameter="--uninstallscript"
      pSectionTitle="Uninstall Script"
      pTitle={mapDoc["force"][commandType][fileName].uninstallscript}
      pPlaceholder="Insert..."
    />

    <!-- [--skipvalidation] -->
    <svelte:component
      this={SKIPVALIDATIONs}
      bind:this={SKIPVALIDATIONv}
      pSectionName="skipvalidation"
      pMapDoc={mapDoc["force"][commandType][fileName].skipvalidation}
      pSFDXParameter="--skipvalidation"
      pShowSectionName={false}
    />
    
    <!-- [--skipancestorcheck] -->
    <svelte:component
      this={SKIPANCESTORCHECKs}
      bind:this={SKIPANCESTORCHECKv}
      pSectionName="skipancestorcheck"
      pMapDoc={mapDoc["force"][commandType][fileName].skipancestorcheck}
      pSFDXParameter="--skipancestorcheck"
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

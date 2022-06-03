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
  import PROJECTNAMEs from "../../-commonSections/StringSFDX.svelte";
  import TEMPLATEs from "../../-commonSections/SelectSFDX.svelte";
  import OUTPUTDIRs from "../../-commonSections/FolderpathSFDX.svelte";
  import NAMESPACEs from "../../-commonSections/StringSFDX.svelte";
  import DEFAULTPACKAGEDIRs from "../../-commonSections/FolderpathSFDX.svelte";
  import MANIFESTs from "../../-commonSections/BooleanSFDX.svelte";
  import ADVANCEDs from "../../-commonSections/ADVANCEDSection.svelte";

  // Component Validations
  let JSONv,
    LOGLEVELv,
    PROJECTNAMEv,
    TEMPLATEv,
    OUTPUTDIRv,
    NAMESPACEv,
    DEFAULTPACKAGEDIRv,
    MANIFESTv,
    ADVANCEDv;

  // Documentation
  let fileName = "create";
  let showFileName = fileName.replaceAll("_", ":");
  let showFileNameUpper = "Create";
  let commandType = "project";
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
  let mandatorySections = ["projectname"];

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
      PROJECTNAMEv.validate(),
      TEMPLATEv.validate(),
      OUTPUTDIRv.validate(),
      NAMESPACEv.validate(),
      DEFAULTPACKAGEDIRv.validate(),
      MANIFESTv.validate(),
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

    <!-- -n PROJECTNAME -->
    <svelte:component
      this={PROJECTNAMEs}
      bind:this={PROJECTNAMEv}
      pSectionName="projectname"
      pRequired={true}
      pMapDoc={mapDoc["force"][commandType][fileName].projectname}
      pSFDXParameter="-n"
      pSectionTitle="Package Name"
      pTitle={mapDoc["force"][commandType][fileName].projectname}
      pPlaceholder="Insert..."
      pChecked={true}
      pDisabled={true}
    />

    <!-- [-t TEMPLATE] -->
    <svelte:component
      this={TEMPLATEs}
      bind:this={TEMPLATEv}
      pSectionName="template"
      pMapDoc={mapDoc["force"][commandType][fileName].template}
      pSFDXParameter="-t"
      pList={gLists.lTemplate.project.create}
      pDefaultValue="standard"
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

    <!-- [-s NAMESPACE] -->
    <svelte:component
      this={NAMESPACEs}
      bind:this={NAMESPACEv}
      pSectionName="namespace"
      pMapDoc={mapDoc["force"][commandType][fileName].namespace}
      pSFDXParameter="-s"
      pSectionTitle="Name Space"
      pTitle={mapDoc["force"][commandType][fileName].namespace}
      pPlaceholder="Insert..."
    />

    <!-- [-p DEFAULTPACKAGEDIR] -->
    <svelte:component
      this={DEFAULTPACKAGEDIRs}
      bind:this={DEFAULTPACKAGEDIRv}
      pSectionName="defaultpackagedir"
      pMapDoc={mapDoc["force"][commandType][fileName].defaultpackagedir}
      pSFDXParameter="-p"
      pDefaultFolder="force-app"
    />

    <!-- [-x] -->
    <svelte:component
      this={MANIFESTs}
      bind:this={MANIFESTv}
      pSectionName="manifest"
      pMapDoc={mapDoc["force"][commandType][fileName].manifest}
      pSFDXParameter="-x"
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

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
  import TRIGGERNAMEs from "../../-commonSections/StringSFDX.svelte";
  import TEMPLATEs from "../../-commonSections/SelectSFDX.svelte";
  import OUTPUTDIRs from "../../-commonSections/FolderpathSFDX.svelte";
  import APIVERSIONs from "../../-commonSections/SelectSFDX.svelte";
  import SOBJECTs from "../../-commonSections/StringSFDX.svelte";
  import TRIGGEREVENTSs from "../../-commonSections/SelectSFDX.svelte";
  import ADVANCEDs from "../../-commonSections/ADVANCEDSection.svelte";

  // Component Validations
  let JSONv,
    LOGLEVELv,
    TRIGGERNAMEv,
    TEMPLATEv,
    OUTPUTDIRv,
    APIVERSIONv,
    SOBJECTv,
    TRIGGEREVENTSv,
    ADVANCEDv;

  // Documentation
  let fileName = "trigger_create";
  let showFileName = fileName.replaceAll("_", ":");
  let showFileNameUpper = "Trigger:Create";
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
  let mandatorySections = ["triggername"];

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
      TRIGGERNAMEv.validate(),
      TEMPLATEv.validate(),
      OUTPUTDIRv.validate(),
      APIVERSIONv.validate(),
      SOBJECTv.validate(),
      TRIGGEREVENTSv.validate(),
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
      if (key !== "triggername") {
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

  const lTEMPLATE = [{ value: "ApexTrigger", label: "ApexTrigger" }];

  console.log(`commandType: ${commandType}`);
  console.log(`fileName: ${fileName}`);
  console.log(
    `mapDoc["force"][commandType][fileName]: ${JSON.stringify(
      mapDoc["force"][commandType][fileName]
    )}`
  );
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

    <!-- -n TRIGGERNAME -->
    <svelte:component
      this={TRIGGERNAMEs}
      bind:this={TRIGGERNAMEv}
      pSectionName="triggername"
      pRequired={true}
      pMapDoc={mapDoc["force"][commandType][fileName].triggername}
      pSFDXParameter="-n"
      pSectionTitle="Apex Trigger Name"
      pTitle={mapDoc["force"][commandType][fileName].triggername.title}
      pPlaceholder="Insert..."
      pMaxLength={40}
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
      pList={lTEMPLATE}
      pDefaultValue="ApexTrigger"
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

    <!-- [-s SOBJECT] -->
    <svelte:component
      this={SOBJECTs}
      bind:this={SOBJECTv}
      pSectionName="sobject"
      pMapDoc={mapDoc["force"][commandType][fileName].sobject}
      pSFDXParameter="-s"
      pSectionTitle="SObject API Name"
      pTitle={mapDoc["force"][commandType][fileName].sobject.title}
      pPlaceholder="SObject"
      pMaxLength={40}
      pDefaultValue="SObject"
    />

    <!-- [-e TRIGGEREVENTS] -->
    <svelte:component
      this={TRIGGEREVENTSs}
      bind:this={TRIGGEREVENTSv}
      pSectionName="triggerevents"
      pMapDoc={mapDoc["force"][commandType][fileName].triggerevents}
      pSFDXParameter="-e"
      pList={gLists.lTRIGGEREVENTS}
      pIsMulti={true}
      pDefaultValue="before insert"
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

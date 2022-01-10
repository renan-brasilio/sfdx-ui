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
  import FIELDNAMEs from "../../-commonSections/StringSFDX.svelte";
  import FIELDTYPEs from "../../-commonSections/SelectSFDX.svelte";
  import PICKLISTVALUESs from "../../-commonSections/StringSFDX.svelte";
  import DECIMALPLACESs from "../../-commonSections/NumberSFDX.svelte";
  import LABELs from "../../-commonSections/StringSFDX.svelte";
  import OUTPUTDIRs from "../../-commonSections/FolderpathSFDX.svelte";
  import ADVANCEDs from "../../-commonSections/ADVANCEDSection.svelte";

  // Component Validations
  let JSONv,
    LOGLEVELv,
    FIELDNAMEv,
    FIELDTYPEv,
    PICKLISTVALUESv,
    DECIMALPLACESv,
    LABELv,
    OUTPUTDIRv,
    ADVANCEDv;

  // Documentation
  let fileName = "field_create";
  let showFileName = fileName.replace("_", ":");
  let showFileNameUpper = "Field:Create";
  let commandType = "cmdt";
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
  let mandatorySections = ["fieldname", "fieldtype"];

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

    let listVal = [
      JSONv.validate(),
      LOGLEVELv.validate(),
      FIELDNAMEv.validate(),
      FIELDTYPEv.validate(),
      LABELv.validate(),
      OUTPUTDIRv.validate(),
      ADVANCEDv.validate(),
    ];

    if (picklistValidation === true) {
      listVal.push(PICKLISTVALUESv.validate());
    } else if (decimalplacesValidation === true) {
      listVal.push(DECIMALPLACESv.validate());
    }

    Promise.all(listVal).then((values) => {
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
          // Aditional and custom validation
          if (
            !$mapInputVariables.picklistvalues &&
            $mapInputVariables.fieldtype === "Picklist"
          ) {
            $mapErrors.picklistvalues = "sfdxet-error-span";

            tsvscode.postMessage({
              type: "onError",
              value: `ERROR: PICKLISTVALUES is required for Picklist fields.`,
            });

            return;
          } else if (
            !$mapInputVariables.decimalplaces &&
            ($mapInputVariables.fieldtype === "Number" ||
              $mapInputVariables.fieldtype === "Percent")
          ) {
            $mapErrors.decimalplaces = "sfdxet-error-span";

            tsvscode.postMessage({
              type: "onError",
              value: `ERROR: DECIMALPLACES is required for Number or Percent fields.`,
            });

            return;
          } else {
            for (let key in $mapErrors) {
              $mapErrors[key] = "";
            }

            $mapSpinner.main = true;
            $mapInformation.main = true;

            js.globalContinue();
          }
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

  let picklistValidation;
  let decimalplacesValidation;

  $: if ($mapInputVariables) {
    picklistValidation = $mapInputVariables.fieldtype === "Picklist";
    decimalplacesValidation =
      $mapInputVariables.fieldtype === "Number" ||
      $mapInputVariables.fieldtype === "Percent";

    if (picklistValidation === true) {
      $mapShowSections.picklistvalues = true;
    } else if (decimalplacesValidation === true) {
      $mapShowSections.decimalplaces = true;
    }
  }
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

    <!-- -n FIELDNAME -->
    <svelte:component
      this={FIELDNAMEs}
      bind:this={FIELDNAMEv}
      pSectionName="fieldname"
      pRequired={true}
      pMapDoc={mapDoc[commandType][fileName].fieldname}
      pSFDXParameter="-n"
      pSectionTitle="Field Name"
      pTitle={mapDoc[commandType][fileName].fieldname.title}
      pPlaceholder="Insert..."
      pDisabled={true}
      pChecked={true}
    />

    <!-- -f FIELDTYPE -->
    <svelte:component
      this={FIELDTYPEs}
      bind:this={FIELDTYPEv}
      pSectionName="fieldtype"
      pMapDoc={mapDoc[commandType][fileName].fieldtype}
      pSFDXParameter="-f"
      pList={gLists.lFIELDTYPE}
      pRequired={true}
      pDisabled={true}
      pChecked={true}
    />

    <!-- [-p PICKLISTVALUES] -->
    {#if picklistValidation === true}
      <svelte:component
        this={PICKLISTVALUESs}
        bind:this={PICKLISTVALUESv}
        pSectionName="picklistvalues"
        pMapDoc={mapDoc[commandType][fileName].picklistvalues}
        pSFDXParameter="-p"
        pSectionTitle="Picklist Values"
        pTitle={mapDoc[commandType][fileName].picklistvalues.title}
        pPlaceholder="Insert..."
        pChecked={true}
        pRequired={true}
        pDisabled={true}
      />
    {/if}

    <!-- [-s DECIMALPLACES] -->
    {#if decimalplacesValidation === true}
      <svelte:component
        this={DECIMALPLACESs}
        bind:this={DECIMALPLACESv}
        pSectionName="decimalplaces"
        pMapDoc={mapDoc[commandType][fileName].decimalplaces}
        pSFDXParameter="-s"
        pPlaceholder="0"
        pValidateLessThanZero={true}
        pTitle={mapDoc[commandType][fileName].decimalplaces.title}
        pChecked={true}
        pRequired={true}
        pDisabled={true}
      />
    {/if}

    <!-- [-l LABEL] -->
    <svelte:component
      this={LABELs}
      bind:this={LABELv}
      pSectionName="label"
      pMapDoc={mapDoc[commandType][fileName].label}
      pSFDXParameter="-l"
      pSectionTitle="Label"
      pTitle={mapDoc[commandType][fileName].label.title}
      pPlaceholder="Insert..."
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

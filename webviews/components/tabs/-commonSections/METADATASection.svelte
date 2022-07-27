<svelte:options accessors />

<script>
  // Helper Files
  import Select from "svelte-select";
  import * as js from "../-helperFiles/GlobalJS";
  import { tooltip as tooltipv1 } from "../--tooltip/tooltip.v1";
  import Title from "../-commonPages/Title.svelte";
  import Documentation from "../-commonPages/Documentation.svelte";
  import * as lMETADATA from "../-helperFiles/retrieve_metadatalist";

  // Store
  import {
    mapInputVariables,
    mapSectionValidation,
    mapShowSections,
    objSFDX,
    mapForceShowSections,
    mapCommand,
    mapLastValue,
  } from "../-helperFiles/GlobalStore";

  // Parameters
  export let pSectionName = "metadata";
  export let pMapDoc;
  export let pRequired = false;
  export let pOnlyOneError = "";
  export let pStyle = "";
  export let pSFDXParameter = "-m";
  export let pShowSectionName = true;
  export let pChecked = false;
  export let pDisabled = false;

  // Default
  let sectionUCase = pSectionName.toUpperCase();

  function handleShowSections(event, pSectionName, pOnlyOneError) {
    if (event.target.checked === true) {
      if (
        $mapSectionValidation[pSectionName] != null &&
        js.listValidation.includes(pSectionName)
      ) {
        for (let key in $mapSectionValidation) {
          if ($mapSectionValidation[key] === 1) {
            let errorMsg = `ERROR: You already selected: ${key.toUpperCase()}, Select only one between: ${
              pOnlyOneError ? pOnlyOneError : "SOURCEPATH, MANIFEST or METADATA"
            }`;

            event.target.checked = false;

            tsvscode.postMessage({
              type: "onError",
              value: errorMsg,
            });

            return;
          }
        }

        if ($mapSectionValidation[pSectionName] === 0) {
          $mapSectionValidation[pSectionName] = 1;

          $mapShowSections[pSectionName] = event.target.checked;
        } else {
          $mapShowSections[pSectionName] = event.target.checked;
        }
      } else {
        $mapShowSections[pSectionName] = event.target.checked;
      }
    } else {
      $mapShowSections[pSectionName] = event.target.checked;

      if ($mapSectionValidation[pSectionName]) {
        $mapSectionValidation[pSectionName] = 0;
      }
    }
  }

  function handleSelect(event, type) {
    if (event.type === "select" && event.detail) {
      let select = event.detail.value.replace("_", ":");

      if (type === mainFileName) {
        clearMapForceShowSections(type);
        $mapForceShowSections[select] = true;
      } else {
        $mapCommand[type][select] = true;
        clearMapCommand(type, select);
      }

      $mapLastValue[type] = select;
    }
  }

  function handleClear(event, type) {
    if (event.type === "clear") {
      if (type === mainFileName) {
        $mapForceShowSections[type] = false;
        clearMapForceShowSections(type);
      } else {
        $mapCommand[type][$mapLastValue[type]] = false;
      }

      for (let key in $mapLastValue) {
        if (key === type) {
          $mapLastValue[key] = "";
          break;
        }
      }
    }
  }

  export async function validate() {
    let valid = true;

    return await new Promise(function (resolve, reject) {
      if ($mapShowSections[pSectionName]) {
        $objSFDX.terminal += ` ${pSFDXParameter} > `;

        if ($mapInputVariables[pSectionName]) {
          $objSFDX.terminal += $mapInputVariables[pSectionName];
        } else {
          $objSFDX.terminal += "output[pSectionName]";
        }
      }

      if ($mapInputVariables[`${pSectionName}2`]) {
        $objSFDX.pJSON = ` ${pSFDXParameter}`;
        $objSFDX.vJSONPath = $mapInputVariables[`${pSectionName}2`];

        if ($mapInputVariables[pSectionName]) {
          $objSFDX.vJSON += $mapInputVariables[pSectionName];
        }
      }

      resolve(valid);
    });
  }
</script>

<li class="sfdxet-li">
  <Title
    {pRequired}
    {pSFDXParameter}
    {pSectionName}
    pElementName={pSectionName}
    pFileName={pSectionName}
    {pOnlyOneError}
    {pShowSectionName}
    {pChecked}
    {pDisabled}
    {pStyle}
  />
  <Documentation
    pHeader={sectionUCase}
    pType={pMapDoc.type}
    pBody={pMapDoc.body}
    {pSectionName}
  />

  {#if $mapShowSections[pSectionName]}
    <h4 class="sfdxet-br"><b>{sectionUCase} Options:</b></h4>
    <section class="sfdxet-section">
      <label for={`${pSectionName}input`}>
        Select the METADATA
        <Select
          id="metadata"
          items={lMETADATA}
          on:select={(e) => {
            handleSelect(e, "metadata");
          }}
          on:clear={(e) => {
            handleClear(e, "metadata");
          }}
        />
      </label>
      <br />

      {#if $mapShowSections[`${pSectionName}2`]}
        <br />
        <br />
        <label for={`${pSectionName}3`}>
          <span
            title={"Manually define the Metadata options"}
            use:tooltipv1
            class="sfdxet-inner-span">Manually define</span
          >
          <input
            type="checkbox"
            id={`${pSectionName}3`}
            name={`${pSectionName}3`}
            on:change={(e) => {
              handleShowSections(e, `${pSectionName}3`, null);
            }}
          />
        </label>
        {#if $mapShowSections[`${pSectionName}3`]}
          <br />
          <br />
          <label for={`${pSectionName}path`}>
            METADATA Manually Definition
            <input
              type="text"
              id={`${pSectionName}input`}
              name={`${pSectionName}input`}
              class="sfdxet-absolute-center"
              title="Insert the Metadata Definitions, don't add other advanced commands here, use the Advanced Section for this"
              use:tooltipv1
              placeholder="output"
              bind:value={$mapInputVariables[pSectionName]}
            />
          </label>
        {/if}
        <br />
      {/if}
    </section>
  {/if}
</li>

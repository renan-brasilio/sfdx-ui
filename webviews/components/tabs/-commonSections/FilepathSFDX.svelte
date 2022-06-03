<svelte:options accessors />

<script>
  // Helper Files
  import * as js from "../-helperFiles/GlobalJS";
  import { tooltip as tooltipv1 } from "../--tooltip/tooltip.v1";
  import Title from "../-commonPages/Title.svelte";
  import Documentation from "../-commonPages/Documentation.svelte";

  // Store
  import {
    mapErrors,
    mapInputVariables,
    mapSectionValidation,
    mapShowSections,
    objSFDX,
    pickFileType,
  } from "../-helperFiles/GlobalStore";

  // Parameters
  export let pSectionName = "";
  export let pMapDoc;
  export let pRequired = false;
  export let pOnlyOneError = "";
  export let pPlaceholder = "";
  export let pSFDXParameter = "";
  export let pButtonText = "";
  export let pStyle = "";
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

  function onShowFilePick(type) {
    $pickFileType = type;

    tsvscode.postMessage({
      type: "onShowFilePick",
    });
  }

  export async function validate() {
    let valid = true;

    return await new Promise(function (resolve, reject) {
      if ($mapShowSections[pSectionName]) {
        if (
          $mapShowSections[`${pSectionName}2`] &&
          $mapInputVariables[`${pSectionName}2`]
        ) {
          $objSFDX.terminal += ` ${pSFDXParameter} `;

          $mapErrors[`${pSectionName}2`] = "";
          $objSFDX.terminal += $mapInputVariables[`${pSectionName}2`];
        } else if ($mapInputVariables[pSectionName]) {
          $objSFDX.terminal += ` ${pSFDXParameter} `;

          $mapErrors[pSectionName] = "";
          $objSFDX.terminal += $mapInputVariables[pSectionName];
        } else {
          $mapErrors[pSectionName] = "sfdxet-error-select";

          if (pRequired) {
            tsvscode.postMessage({
              type: "onError",
              value: `ERROR: ${sectionUCase} is required.`,
            });
          } else {
            tsvscode.postMessage({
              type: "onError",
              value: `ERROR: Please select a ${sectionUCase} or uncheck the [${pSFDXParameter} ${sectionUCase}] checkbox.`,
            });
          }

          valid = false;
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
    <section class="sfdxet-section sfdxet-br sfdxet-absolute-center">
      <button
        class="sfdxet-buttons {$mapErrors[pSectionName]}"
        on:click={() => {
          onShowFilePick(`${pSectionName}`);
        }}>{pButtonText}</button
      >
      <br />
      <br />
      <label for={pSectionName}>
        <span title={js.mapTooltips["manuallyDefine"]} use:tooltipv1
          >Manually define</span
        >
        <input
          type="checkbox"
          id={pSectionName}
          name={pSectionName}
          on:change={(e) => {
            handleShowSections(e, `${pSectionName}2`, null);
          }}
        />
      </label>
      {#if $mapShowSections[`${pSectionName}2`]}
        <input
          type="text"
          class="sfdxet-absolute-center"
          title={$mapInputVariables[pSectionName]}
          use:tooltipv1
          placeholder={pPlaceholder}
          bind:value={$mapInputVariables[`${pSectionName}2`]}
        />
      {/if}
    </section>
  {/if}
</li>

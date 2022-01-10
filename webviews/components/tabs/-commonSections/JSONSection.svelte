<svelte:options accessors />

<script>
  // Helper Files
  import * as js from "../-helperFiles/GlobalJS";
  import { tooltip as tooltipv1 } from "../--tooltip/tooltip.v1";
  import Title from "../-commonPages/Title.svelte";
  import Documentation from "../-commonPages/Documentation.svelte";

  // Store
  import {
    mapInputVariables,
    mapSectionValidation,
    mapShowSections,
    objSFDX,
  } from "../-helperFiles/GlobalStore";

  // Parameters
  export let pSectionName = "json";
  export let pMapDoc;
  export let pRequired = false;
  export let pOnlyOneError = "";
  export let pStyle = "";
  export let pSFDXParameter = "--json";
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

<div class="col align-self-center sfdxet-br">
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
        JSON File Name
        <input
          type="text"
          id={`${pSectionName}input`}
          name={`${pSectionName}input`}
          class="sfdxet-absolute-center"
          title="Insert the JSON filename (don't include [pSectionName]), or leave blank for the default: output"
          use:tooltipv1
          placeholder="output"
          bind:value={$mapInputVariables[pSectionName]}
        />
      </label>
      <br />

      <label for={`${pSectionName}2`}>
        <span
          title={js.mapTooltips["tJSON2"]}
          use:tooltipv1
          class="sfdxet-inner-span">Define output folder?</span
        >
        <input
          type="checkbox"
          id={`${pSectionName}2`}
          name={`${pSectionName}2`}
          on:change={(e) => {
            handleShowSections(e, `${pSectionName}2`, null);
          }}
        />
      </label>
      <br />
      <br />

      {#if $mapShowSections[`${pSectionName}2`]}
        <button
          class="sfdxet-buttons"
          on:click={() => {
            js.showFolderPick(`${pSectionName}2`);
          }}
          title={js.mapTooltips["tJSON2"]}
          use:tooltipv1>Set Folder Path</button
        >
        <br />
        <br />
        <label for={`${pSectionName}3`}>
          <span
            title={js.mapTooltips["tJSON3"]}
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
            JSON Folder Path
            <input
              type="text"
              id={`${pSectionName}path`}
              name={`${pSectionName}path`}
              class="sfdxet-absolute-center"
              disabled={!$mapShowSections[`${pSectionName}3`]}
              title={$mapInputVariables[`${pSectionName}2`]}
              use:tooltipv1
              placeholder="Insert..."
              bind:value={$mapInputVariables[`${pSectionName}2`]}
            />
          </label>
        {/if}
        <br />
      {/if}
    </section>
  {/if}
</div>

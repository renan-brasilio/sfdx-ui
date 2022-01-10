<svelte:options accessors />

<script>
  // Helper Pages
  import { tooltip as tooltipv1 } from "../--tooltip/tooltip.v1";
  import Title from "../-commonPages/Title.svelte";
  import Documentation from "../-commonPages/Documentation.svelte";

  // Store
  import {
    mapErrors,
    mapInputVariables,
    mapShowSections,
    objSFDX,
  } from "../-helperFiles/GlobalStore";

  // Parameters
  export let pSectionName = "advanced";
  export let pMapDoc;
  export let pRequired = false;
  export let pOnlyOneError = "";
  export let pSFDXParameter = "";
  export let pShowSectionName = true;
  export let pChecked = false;
  export let pDisabled = false;
  export let pStyle = "";

  // Default
  let sectionUCase = pSectionName.toUpperCase();

  export async function validate() {
    let valid = true;

    return await new Promise(function (resolve, reject) {
      if ($mapShowSections[pSectionName]) {
        if ($mapInputVariables[pSectionName]) {
          $mapErrors[pSectionName] = "";
          $objSFDX.terminal += ` ${$mapInputVariables[pSectionName]}`;
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

  if (!$mapInputVariables[pSectionName]) {
    $mapInputVariables[pSectionName] = "";
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
    <section class="sfdxet-section sfdxet-br">
      <label for="advancedinput">
        Advanced Entry
        <input
          type="text"
          id="advancedinput"
          name="advancedinput"
          class="sfdxet-absolute-center sfdxet-error-button"
          title="Add any extra advanced statement. *USE THIS CAREFULLY."
          use:tooltipv1
          placeholder="Be carefull..."
          on:input={(e) => ($mapInputVariables[pSectionName] = e.target.value)}
          value={$mapInputVariables[pSectionName]}
        />
      </label>
    </section>
  {/if}
</div>

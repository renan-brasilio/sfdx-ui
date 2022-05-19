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
    mapSectionValidation,
    mapShowSections,
    objSFDX,
  } from "../-helperFiles/GlobalStore";

  // Parameters
  export let pSectionName = "";
  export let pMapDoc;
  export let pRequired = false;
  export let pOnlyOneError = "";
  export let pSFDXParameter = "";
  export let pDefaultValue = "";
  export let pSectionTitle = "";
  export let pTitle = "";
  export let pPlaceholder = "";
  export let pMaxLength = 255;
  export let pShowSectionName = true;
  export let pChecked = false;
  export let pDisabled = false;
  export let pStyle = "";
  export let pValidateLessThanZero = false;

  // Default
  let sectionUCase = pSectionName.toUpperCase();

  export async function validate() {
    let valid = true;

    return await new Promise(function (resolve, reject) {
      if ($mapShowSections[pSectionName]) {
        if ($mapInputVariables[pSectionName]) {
          if (pValidateLessThanZero && $mapInputVariables[pSectionName] < 0) {
            $mapErrors[pSectionName] = "sfdxet-error-select";

            tsvscode.postMessage({
              type: "onError",
              value: `ERROR: (${sectionUCase}) Please insert a number greater or equal 0.`,
            });

            valid = false;
          } else {
            $mapErrors[pSectionName] = "";
            $objSFDX.terminal += ` ${pSFDXParameter} ${$mapInputVariables[pSectionName]}`;
          }
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
      } else {
        $mapErrors[pSectionName] = "";
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
      <label for={pSectionName + `input`}>
        {pSectionTitle}
        <input
          type="number"
          id={pSectionName + `input`}
          name={pSectionName + `input`}
          class="sfdxet-absolute-center"
          title={pTitle}
          use:tooltipv1
          placeholder={pPlaceholder}
          maxlength={pMaxLength}
          on:input={(e) => ($mapInputVariables[pSectionName] = e.target.value)}
          class:sfdxet-error-span={$mapErrors[pSectionName]}
          value={pDefaultValue}
        />
      </label>
    </section>
  {/if}
</div>

<svelte:options accessors />

<script>
  // Helper Files
  import Title from "../-commonPages/Title.svelte";
  import Documentation from "../-commonPages/Documentation.svelte";

  // Store
  import {
    mapErrors,
    mapShowSections,
    objSFDX,
  } from "../-helperFiles/GlobalStore";

  // Parameters
  export let pSectionName = "";
  export let pMapDoc;
  export let pRequired = false;
  export let pOnlyOneError = "";
  export let pSFDXParameter = "";
  export let pStyle = "";
  export let pShowSectionName = true;
  export let pChecked = false;
  export let pDisabled = false;

  // Default
  let sectionUCase = pSectionName.toUpperCase();

  export async function validate() {
    let valid = true;

    return await new Promise(function (resolve, reject) {
      if ($mapShowSections[pSectionName]) {
        $objSFDX.terminal += ` ${pSFDXParameter}`;
      } else if (pRequired) {
        $mapErrors[pSectionName] = "sfdxet-error-select";
        tsvscode.postMessage({
          type: "onError",
          value: `ERROR: ${sectionUCase} is required.`,
        });

        valid = false;
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
</li>

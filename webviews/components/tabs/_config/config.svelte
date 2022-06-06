<script>
  // Helper Pages
  import Select from "svelte-select";
  import CSS from "../-helperFiles/GlobalCSS.svelte";
  import * as lists from "../-helperFiles/Lists";

  // Store
  import {
    mapForceShowSections,
    mapLastValue,
    mapCommand,
  } from "../-helperFiles/GlobalStore";

  // Config
  import Config_Get from "./get.svelte";
  import Config_List from "./list.svelte";
  import Config_Set from "./set.svelte";
  import Config_Unset from "./unset.svelte";

  // Fill the initial Maps
  handleMapCommand(lists.config, "config");
  handleMapCommand(lists.configC, "configC");

  export let mainFileName = "config";

  if ($mapLastValue[mainFileName]) {
    $mapCommand[$mapLastValue[mainFileName]][
      $mapLastValue[$mapLastValue[mainFileName]]
    ] = true;
  }

  function handleMapCommand(pList, pParent) {
    $mapCommand[pParent] = {};

    for (let key in pList) {
      $mapCommand[pParent][pList[key].value.replaceAll(":", "_")] = false;
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

  function clearMapCommand(type, select) {
    if (type && select) {
      for (let key in $mapCommand[type]) {
        if (key !== select) {
          $mapCommand[type][key] = false;
        }
      }
    }
  }

  function clearMapForceShowSections(type) {
    for (let key in $mapForceShowSections) {
      if (key !== type) {
        $mapForceShowSections[key] = false;
      }
    }
  }
</script>

<br />
<div class="sfdxet-select-theme sfdxet-absolute-center">
  <h4>config Namespace</h4>
  <br />
  <Select
    id={mainFileName}
    items={lists.config}
    on:select={(e) => {
      handleSelect(e, mainFileName);
    }}
    on:clear={(e) => {
      handleClear(e, mainFileName);
    }}
    value="config"
  />
</div>
<br />

<div class="sfdxet-select-theme sfdxet-absolute-center">
  <h4>config Commands</h4>
  <br />
  <Select
    id="configC"
    items={lists.configC}
    on:select={(e) => {
      handleSelect(e, "configC");
    }}
    on:clear={(e) => {
      handleClear(e, "configC");
    }}
    value={$mapLastValue["configC"]}
  />
  <br />
  <br />
  {#if $mapCommand["configC"]["get"]}
    <Config_Get />
  {:else if $mapCommand["configC"]["list"]}
    <Config_List />
  {:else if $mapCommand["configC"]["set"]}
    <Config_Set />
  {:else if $mapCommand["configC"]["unset"]}
    <Config_Unset />
  {/if}
</div>

<CSS />

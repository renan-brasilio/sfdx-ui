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

  // Analytics
  import Alias_List from "./list.svelte";
  import Alias_Set from "./set.svelte";
  import Alias_Unset from "./unset.svelte";

  // Fill the initial Maps
  handleMapCommand(lists.alias, "alias");
  handleMapCommand(lists.aliasC, "aliasC");

  export let mainFileName = "alias";

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
  <h4>alias Namespace</h4>
  <br />
  <Select
    id={mainFileName}
    items={lists.alias}
    on:select={(e) => {
      handleSelect(e, mainFileName);
    }}
    on:clear={(e) => {
      handleClear(e, mainFileName);
    }}
    value="alias"
  />
</div>
<br />

<div class="sfdxet-select-theme sfdxet-absolute-center">
  <h4>alias Commands</h4>
  <br />
  <Select
    id="aliasC"
    items={lists.aliasC}
    on:select={(e) => {
      handleSelect(e, "aliasC");
    }}
    on:clear={(e) => {
      handleClear(e, "aliasC");
    }}
    value={$mapLastValue["aliasC"]}
  />
  <br />
  <br />
  {#if $mapCommand["aliasC"]["list"]}
    <Alias_List />
  {:else if $mapCommand["aliasC"]["set"]}
    <Alias_Set />
  {:else if $mapCommand["aliasC"]["unset"]}
    <Alias_Unset />
  {/if}
</div>

<CSS />

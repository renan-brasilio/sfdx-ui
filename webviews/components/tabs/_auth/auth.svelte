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

  // Auth
  import Auth_List from "./list.svelte";
  import Auth_Logout from "./logout.svelte";

  // AccessToken
  import AccessToken_Store from "./_acesstoken/store.svelte";

  // Device
  import Device_Login from "./_device/login.svelte";

  // JWT
  import JWT_Grant from "./_jwt/grant.svelte";
  
  // SFDXURL
  import SFDXURL_Store from "./_sfdxurl/store.svelte";
  
  // Web
  // import Web_Login from "./_web/login.svelte";


  // Fill the initial Maps
  handleMapCommand(lists.auth, "auth");
  handleMapCommand(lists.authC, "authC");
  handleMapCommand(lists.accesstoken, "acesstoken");
  handleMapCommand(lists.device, "device");
  handleMapCommand(lists.jwt, "jwt");
  handleMapCommand(lists.sfdxurl, "sfdxurl");
  handleMapCommand(lists.web, "web");

  export let mainFileName = "auth";

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
  <h4>auth Namespace</h4>
  <br />
  <Select
    id={mainFileName}
    items={lists.auth}
    on:select={(e) => {
      handleSelect(e, mainFileName);
    }}
    on:clear={(e) => {
      handleClear(e, mainFileName);
    }}
    value={$mapLastValue[mainFileName]}
  />
</div>
<br />

{#if $mapForceShowSections.auth}
  <div class="sfdxet-select-theme sfdxet-absolute-center">
    <h4>auth Commands</h4>
    <br />
    <Select
      id="authC"
      items={lists.authC}
      on:select={(e) => {
        handleSelect(e, "authC");
      }}
      on:clear={(e) => {
        handleClear(e, "authC");
      }}
      value={$mapLastValue["authC"]}
    />
    <br />
    <br />
    {#if $mapCommand["authC"]["list"]}
      <Auth_List />
    {:else if $mapCommand["authC"]["logout"]}
      <Auth_Logout />
    {/if}
  </div>
{/if}

{#if $mapForceShowSections.accesstoken}
  <div class="sfdxet-select-theme sfdxet-absolute-center">
    <h4>acesstoken Commands</h4>
    <br />
    <Select
      id="accesstoken"
      items={lists.accesstoken}
      on:select={(e) => {
        handleSelect(e, "accesstoken");
      }}
      on:clear={(e) => {
        handleClear(e, "accesstoken");
      }}
      value="store"
    />
    <br />
    <br />
    <AccessToken_Store />
  </div>
{/if}

{#if $mapForceShowSections.device}
  <div class="sfdxet-select-theme sfdxet-absolute-center">
    <h4>device Commands</h4>
    <br />
    <Select
      id="device"
      items={lists.device}
      on:select={(e) => {
        handleSelect(e, "device");
      }}
      on:clear={(e) => {
        handleClear(e, "device");
      }}
      value="login"
    />
    <br />
    <br />
    <Device_Login />
  </div>
{/if}

{#if $mapForceShowSections.jwt}
  <div class="sfdxet-select-theme sfdxet-absolute-center">
    <h4>jwt Commands</h4>
    <br />
    <Select
      id="jwt"
      items={lists.jwt}
      on:select={(e) => {
        handleSelect(e, "jwt");
      }}
      on:clear={(e) => {
        handleClear(e, "jwt");
      }}
      value="grant"
    />
    <br />
    <br />
    <JWT_Grant />
  </div>
{/if}

{#if $mapForceShowSections.sfdxurl}
  <div class="sfdxet-select-theme sfdxet-absolute-center">
    <h4>sfdxurl Commands</h4>
    <br />
    <Select
      id="sfdxurl"
      items={lists.sfdxurl}
      on:select={(e) => {
        handleSelect(e, "sfdxurl");
      }}
      on:clear={(e) => {
        handleClear(e, "sfdxurl");
      }}
      value="store"
    />
    <br />
    <br />
    <SFDXURL_Store />
  </div>
{/if}

<!-- {#if $mapForceShowSections.web}
  <div class="sfdxet-select-theme sfdxet-absolute-center">
    <h4>web Commands</h4>
    <br />
    <Select
      id="web"
      items={lists.web}
      on:select={(e) => {
        handleSelect(e, "web");
      }}
      on:clear={(e) => {
        handleClear(e, "web");
      }}
      value="login"
    />
    <br />
    <br />
    <Web_Login />
  </div>
{/if} -->

<CSS />

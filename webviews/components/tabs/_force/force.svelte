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
  import Analytics from "./_analytics/template_create.svelte";

  // Apex
  import Apex_Class_Create from "./_apex/class_create.svelte";
  import Apex_Execute from "./_apex/execute.svelte";
  import Apex_Log_Get from "./_apex/log_get.svelte";
  import Apex_Log_List from "./_apex/log_list.svelte";
  import Apex_Log_Tail from "./_apex/log_tail.svelte";
  import Apex_Test_Report from "./_apex/test_report.svelte";
  import Apex_Test_Run from "./_apex/test_run.svelte";
  import Apex_Trigger_Create from "./_apex/trigger_create.svelte";

  // CMDT
  import CMDT_Create from "./_cmdt/create.svelte";
  import CMDT_Field_Create from "./_cmdt/field_create.svelte";
  import CMDT_Generate from "./_cmdt/generate.svelte";
  import CMDT_Record_Create from "./_cmdt/record_create.svelte";
  import CMDT_Record_Insert from "./_cmdt/record_insert.svelte";

  // Community
  import Community_Create from "./_community/create.svelte";
  import Community_Publish from "./_community/publish.svelte";
  import Community_Template_List from "./_community/template_list.svelte";

  // Data
  import Data_Bulk_Delete from "./_data/bulk_delete.svelte";
  import Data_Bulk_Status from "./_data/bulk_status.svelte";
  import Data_Bulk_Upsert from "./_data/bulk_upsert.svelte";
  import Data_Record_Create from "./_data/record_create.svelte";
  import Data_Record_Delete from "./_data/record_delete.svelte";
  import Data_Record_Get from "./_data/record_get.svelte";
  import Data_Record_Update from "./_data/record_update.svelte";
  import Data_SOQL_Query from "./_data/soql_query.svelte";
  import Data_Tree_Export from "./_data/tree_export.svelte";
  import Data_Tree_Import from "./_data/tree_import.svelte";

  // Lightning
  import Lightning_App_Create from "./_lightning/app_create.svelte";
  import Lightning_Component_Create from "./_lightning/component_create.svelte";
  import Lightning_Event_Create from "./_lightning/event_create.svelte";
  import Lightning_Interface_Create from "./_lightning/interface_create.svelte";
  import Lightning_LWC_Test_Create from "./_lightning/lwc_test_create.svelte";
  import Lightning_LWC_Test_Run from "./_lightning/lwc_test_run.svelte";
  import Lightning_LWC_Test_Setup from "./_lightning/lwc_test_setup.svelte";
  import Lightning_Test_Create from "./_lightning/test_create.svelte";

  // Limits
  import Limits_API_Display from "./_limits/api_display.svelte";
  import Limits_RecordCounts_Display from "./_limits/recordcounts_display.svelte";

  // MDAPI
  import MDAPI_Beta_Convert from "./_mdapi/beta_convert.svelte";
  import MDAPI_Convert from "./_mdapi/convert.svelte";
  import MDAPI_Deploy from "./_mdapi/deploy.svelte";
  import MDAPI_Deploy_Cancel from "./_mdapi/deploy_cancel.svelte";
  import MDAPI_Deploy_Report from "./_mdapi/deploy_report.svelte";
  import MDAPI_DescribeMetadata from "./_mdapi/describemetadata.svelte";
  import MDAPI_ListMetadata from "./_mdapi/listmetadata.svelte";
  import MDAPI_Retrieve from "./_mdapi/retrieve.svelte";
  import MDAPI_Retrieve_Report from "./_mdapi/retrieve_report.svelte";

  // Org
  import Org_Clone from "./_org/clone.svelte";
  import Org_Create from "./_org/create.svelte";
  import Org_Delete from "./_org/delete.svelte";
  import Org_Display from "./_org/display.svelte";
  import Org_List from "./_org/list.svelte";
  import Org_Open from "./_org/open.svelte";
  import Org_Shape_Create from "./_org/shape_create.svelte";
  import Org_Shape_Delete from "./_org/shape_delete.svelte";
  import Org_Shape_List from "./_org/shape_list.svelte";
  import Org_Snapshot_Create from "./_org/snapshot_create.svelte";
  import Org_Snapshot_Delete from "./_org/snapshot_delete.svelte";
  import Org_Snapshot_Get from "./_org/snapshot_get.svelte";
  import Org_Snapshot_List from "./_org/snapshot_list.svelte";
  import Org_Status from "./_org/status.svelte";

  // Package
  import Package_Create from "./_package/create.svelte";
  import Package_Delete from "./_package/delete.svelte";
  import Package_Install from "./_package/install.svelte";
  import Package_Install_Report from "./_package/install_report.svelte";
  import Package_Installed_List from "./_package/installed_list.svelte";
  import Package_List from "./_package/list.svelte";
  import Package_Uninstall from "./_package/uninstall.svelte";
  import Package_Uninstall_Report from "./_package/uninstall_report.svelte";
  import Package_Update from "./_package/update.svelte";
  import Package_Version_Create from "./_package/version_create.svelte";
  import Package_Version_Create_List from "./_package/version_create_list.svelte";
  import Package_Version_Create_Report from "./_package/version_create_report.svelte";
  import Package_Version_Delete from "./_package/version_delete.svelte";
  import Package_Version_DisplayAncestry from "./_package/version_displayancestry.svelte";
  import Package_Version_List from "./_package/version_list.svelte";
  import Package_Version_Promote from "./_package/version_promote.svelte";
  import Package_Version_Report from "./_package/version_report.svelte";
  import Package_Version_Update from "./_package/version_update.svelte";

  // Package1
  import Package1_Version_Create from "./_package1/version_create.svelte";
  import Package1_Version_Create_Get from "./_package1/version_create_get.svelte";
  import Package1_Version_Display from "./_package1/version_display.svelte";
  import Package1_Version_List from "./_package1/version_list.svelte";

  // Project
  import Project_Create from "./_project/create.svelte";

  // Schema
  import Schema_SObject_Describe from "./_schema/sobject_describe.svelte";
  import Schema_SObject_List from "./_schema/sobject_list.svelte";

  // Source
  import Source_Beta_Pull from "./_source/beta_pull.svelte";
  import Source_Beta_Push from "./_source/beta_push.svelte";
  import Source_Beta_Status from "./_source/beta_status.svelte";
  import Source_Beta_Tracking_Clear from "./_source/beta_tracking_clear.svelte";
  import Source_Beta_Tracking_Reset from "./_source/beta_tracking_reset.svelte";
  import Source_Convert from "./_source/convert.svelte";
  import Source_Delete from "./_source/delete.svelte";
  import Source_Deploy from "./_source/deploy.svelte";
  import Source_Deploy_Cancel from "./_source/deploy_cancel.svelte";
  import Source_Deploy_Report from "./_source/deploy_report.svelte";
  import Source_Ignored_List from "./_source/ignored_list.svelte";
  import Source_Manifest_Create from "./_source/manifest_create.svelte";
  import Source_Open from "./_source/open.svelte";
  import Source_Pull from "./_source/pull.svelte";
  import Source_Push from "./_source/push.svelte";
  import Source_Retrieve from "./_source/retrieve.svelte";
  import Source_Status from "./_source/status.svelte";
  import Source_Tracking_Clear from "./_source/tracking_clear.svelte";
  import Source_Tracking_Reset from "./_source/tracking_reset.svelte";

  // StaticResource
  import StaticResource_Create from "./_staticresource/create.svelte";
  
  // User
  import User_Create from "./_user/create.svelte";
  import User_Display from "./_user/display.svelte";
  import User_List from "./_user/list.svelte";
  import User_Password_Generate from "./_user/password_generate.svelte";
  import User_Permset_Assign from "./_user/permset_assign.svelte";
  import User_PermsetLicense_Assign from "./_user/permsetlicense_assign.svelte";
  
  // User
  import Visualforce_Component_Create from "./_visualforce/component_create.svelte";
  import Visualforce_Page_Create from "./_visualforce/page_create.svelte";

  // Fill the initial Maps
  handleMapCommand(lists.analytics, "analytics");
  handleMapCommand(lists.apex, "apex");
  handleMapCommand(lists.cmdt, "cmdt");
  handleMapCommand(lists.community, "community");
  handleMapCommand(lists.data, "data");
  handleMapCommand(lists.lightning, "lightning");
  handleMapCommand(lists.limits, "limits");
  handleMapCommand(lists.mdapi, "mdapi");
  handleMapCommand(lists.org, "org");
  handleMapCommand(lists.lPackage, "package");
  handleMapCommand(lists.package1, "package1");
  handleMapCommand(lists.project, "project");
  handleMapCommand(lists.schema, "schema");
  handleMapCommand(lists.source, "source");
  handleMapCommand(lists.staticresource, "staticresource");
  handleMapCommand(lists.user, "user");
  handleMapCommand(lists.visualforce, "visualforce");

  export let mainFileName = "force";

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
  <h4>force Namespace</h4>
  <br />
  <Select
    id={mainFileName}
    items={lists.force}
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

{#if $mapForceShowSections.analytics}
  <div class="sfdxet-select-theme sfdxet-absolute-center">
    <h4>analytics Commands</h4>
    <br />
    <Select
      id="analytics"
      items={lists.analytics}
      on:select={(e) => {
        handleSelect(e, "analytics");
      }}
      on:clear={(e) => {
        handleClear(e, "analytics");
      }}
      value="template:create"
    />
    <br />
    <br />
    <Analytics />
  </div>
{/if}

{#if $mapForceShowSections.apex}
  <div class="sfdxet-select-theme sfdxet-absolute-center">
    <h4>apex Commands</h4>
    <br />
    <Select
      id="apex"
      items={lists.apex}
      on:select={(e) => {
        handleSelect(e, "apex");
      }}
      on:clear={(e) => {
        handleClear(e, "apex");
      }}
      value={$mapLastValue["apex"]}
    />
    <br />
    <br />
    {#if $mapCommand["apex"]["class:create"]}
      <Apex_Class_Create />
    {:else if $mapCommand["apex"].execute}
      <Apex_Execute />
    {:else if $mapCommand["apex"]["log:get"]}
      <Apex_Log_Get />
    {:else if $mapCommand["apex"]["log:list"]}
      <Apex_Log_List />
    {:else if $mapCommand["apex"]["log:tail"]}
      <Apex_Log_Tail />
    {:else if $mapCommand["apex"]["test:report"]}
      <Apex_Test_Report />
    {:else if $mapCommand["apex"]["test:run"]}
      <Apex_Test_Run />
    {:else if $mapCommand["apex"]["trigger:create"]}
      <Apex_Trigger_Create />
    {/if}
  </div>
{/if}

{#if $mapForceShowSections.cmdt}
  <div class="sfdxet-select-theme sfdxet-absolute-center">
    <h4>cmdt Commands</h4>
    <br />
    <Select
      id="cmdt"
      items={lists.cmdt}
      on:select={(e) => {
        handleSelect(e, "cmdt");
      }}
      on:clear={(e) => {
        handleClear(e, "cmdt");
      }}
      value={$mapLastValue["cmdt"]}
    />
    <br />
    <br />
    {#if $mapCommand["cmdt"]["create"]}
      <CMDT_Create />
    {:else if $mapCommand["cmdt"]["field:create"]}
      <CMDT_Field_Create />
    {:else if $mapCommand["cmdt"]["generate"]}
      <CMDT_Generate />
    {:else if $mapCommand["cmdt"]["record:create"]}
      <CMDT_Record_Create />
    {:else if $mapCommand["cmdt"]["record:insert"]}
      <CMDT_Record_Insert />
    {/if}
  </div>
{/if}

{#if $mapForceShowSections.community}
  <div class="sfdxet-select-theme sfdxet-absolute-center">
    <h4>community Commands</h4>
    <br />
    <Select
      id="community"
      items={lists.community}
      on:select={(e) => {
        handleSelect(e, "community");
      }}
      on:clear={(e) => {
        handleClear(e, "community");
      }}
      value={$mapLastValue["community"]}
    />
    <br />
    <br />
    {#if $mapCommand["community"]["create"]}
      <Community_Create />
    {:else if $mapCommand["community"]["publish"]}
      <Community_Publish />
    {:else if $mapCommand["community"]["template:list"]}
      <Community_Template_List />
    {/if}
  </div>
{/if}

{#if $mapForceShowSections.data}
  <div class="sfdxet-select-theme sfdxet-absolute-center">
    <h4>data Commands</h4>
    <br />
    <Select
      id="data"
      items={lists.data}
      on:select={(e) => {
        handleSelect(e, "data");
      }}
      on:clear={(e) => {
        handleClear(e, "data");
      }}
      value={$mapLastValue["data"]}
    />
    <br />
    <br />
    {#if $mapCommand["data"]["bulk:delete"]}
      <Data_Bulk_Delete />
    {:else if $mapCommand["data"]["bulk:status"]}
      <Data_Bulk_Status />
    {:else if $mapCommand["data"]["bulk:upsert"]}
      <Data_Bulk_Upsert />
    {:else if $mapCommand["data"]["record:create"]}
      <Data_Record_Create />
    {:else if $mapCommand["data"]["record:delete"]}
      <Data_Record_Delete />
    {:else if $mapCommand["data"]["record:get"]}
      <Data_Record_Get />
    {:else if $mapCommand["data"]["record:update"]}
      <Data_Record_Update />
    {:else if $mapCommand["data"]["soql:query"]}
      <Data_SOQL_Query />
    {:else if $mapCommand["data"]["tree:export"]}
      <Data_Tree_Export />
    {:else if $mapCommand["data"]["tree:import"]}
      <Data_Tree_Import />
    {/if}
  </div>
{/if}

{#if $mapForceShowSections.lightning}
  <div class="sfdxet-select-theme sfdxet-absolute-center">
    <h4>lightning Commands</h4>
    <br />
    <Select
      id="lightning"
      items={lists.lightning}
      on:select={(e) => {
        handleSelect(e, "lightning");
      }}
      on:clear={(e) => {
        handleClear(e, "lightning");
      }}
      value={$mapLastValue["lightning"]}
    />
    <br />
    <br />
    {#if $mapCommand["lightning"]["app:create"]}
      <Lightning_App_Create />
    {:else if $mapCommand["lightning"]["component:create"]}
      <Lightning_Component_Create />
    {:else if $mapCommand["lightning"]["event:create"]}
      <Lightning_Event_Create />
    {:else if $mapCommand["lightning"]["interface:create"]}
      <Lightning_Interface_Create />
    {:else if $mapCommand["lightning"]["lwc:test:create"]}
      <Lightning_LWC_Test_Create />
    {:else if $mapCommand["lightning"]["lwc:test:run"]}
      <Lightning_LWC_Test_Run />
    {:else if $mapCommand["lightning"]["lwc:test:setup"]}
      <Lightning_LWC_Test_Setup />
    {:else if $mapCommand["lightning"]["test:create"]}
      <Lightning_Test_Create />
    {/if}
  </div>
{/if}

{#if $mapForceShowSections.limits}
  <div class="sfdxet-select-theme sfdxet-absolute-center">
    <h4>limits Commands</h4>
    <br />
    <Select
      id="limits"
      items={lists.limits}
      on:select={(e) => {
        handleSelect(e, "limits");
      }}
      on:clear={(e) => {
        handleClear(e, "limits");
      }}
      value={$mapLastValue["limits"]}
    />
    <br />
    <br />
    {#if $mapCommand["limits"]["api:display"]}
      <Limits_API_Display />
    {:else if $mapCommand["limits"]["recordcounts:display"]}
      <Limits_RecordCounts_Display />
    {/if}
  </div>
{/if}

{#if $mapForceShowSections.mdapi}
  <div class="sfdxet-select-theme sfdxet-absolute-center">
    <h4>mdapi Commands</h4>
    <br />
    <Select
      id="mdapi"
      items={lists.mdapi}
      on:select={(e) => {
        handleSelect(e, "mdapi");
      }}
      on:clear={(e) => {
        handleClear(e, "mdapi");
      }}
      value={$mapLastValue["mdapi"]}
    />
    <br />
    <br />
    {#if $mapCommand["mdapi"]["beta:convert"]}
      <MDAPI_Beta_Convert />
    {:else if $mapCommand["mdapi"]["convert"]}
      <MDAPI_Convert />
    {:else if $mapCommand["mdapi"]["deploy"]}
      <MDAPI_Deploy />
    {:else if $mapCommand["mdapi"]["deploy:cancel"]}
      <MDAPI_Deploy_Cancel />
    {:else if $mapCommand["mdapi"]["deploy:report"]}
      <MDAPI_Deploy_Report />
    {:else if $mapCommand["mdapi"]["describemetadata"]}
      <MDAPI_DescribeMetadata />
    {:else if $mapCommand["mdapi"]["listmetadata"]}
      <MDAPI_ListMetadata />
    {:else if $mapCommand["mdapi"]["retrieve"]}
      <MDAPI_Retrieve />
    {:else if $mapCommand["mdapi"]["retrieve:report"]}
      <MDAPI_Retrieve_Report />
    {/if}
  </div>
{/if}

{#if $mapForceShowSections.org}
  <div class="sfdxet-select-theme sfdxet-absolute-center">
    <h4>org Commands</h4>
    <br />
    <Select
      id="org"
      items={lists.org}
      on:select={(e) => {
        handleSelect(e, "org");
      }}
      on:clear={(e) => {
        handleClear(e, "org");
      }}
      value={$mapLastValue["org"]}
    />
    <br />
    <br />
    {#if $mapCommand["org"]["clone"]}
      <Org_Clone />
    {:else if $mapCommand["org"]["create"]}
      <Org_Create />
    {:else if $mapCommand["org"]["delete"]}
      <Org_Delete />
    {:else if $mapCommand["org"]["display"]}
      <Org_Display />
    {:else if $mapCommand["org"]["list"]}
      <Org_List />
    {:else if $mapCommand["org"]["open"]}
      <Org_Open />
    {:else if $mapCommand["org"]["shape:create"]}
      <Org_Shape_Create />
    {:else if $mapCommand["org"]["shape:delete"]}
      <Org_Shape_Delete />
    {:else if $mapCommand["org"]["shape:list"]}
      <Org_Shape_List />
    {:else if $mapCommand["org"]["snapshot:create"]}
      <Org_Snapshot_Create />
    {:else if $mapCommand["org"]["snapshot:delete"]}
      <Org_Snapshot_Delete />
    {:else if $mapCommand["org"]["snapshot:get"]}
      <Org_Snapshot_Get />
    {:else if $mapCommand["org"]["snapshot:list"]}
      <Org_Snapshot_List />
    {:else if $mapCommand["org"]["status"]}
      <Org_Status />
    {/if}
  </div>
{/if}

{#if $mapForceShowSections.package}
  <div class="sfdxet-select-theme sfdxet-absolute-center">
    <h4>package Commands</h4>
    <br />
    <Select
      id="package"
      items={lists.lPackage}
      on:select={(e) => {
        handleSelect(e, "package");
      }}
      on:clear={(e) => {
        handleClear(e, "package");
      }}
      value={$mapLastValue["package"]}
    />
    <br />
    <br />
    {#if $mapCommand["package"]["create"]}
      <Package_Create />
    {:else if $mapCommand["package"]["delete"]}
      <Package_Delete />
    {:else if $mapCommand["package"]["install"]}
      <Package_Install />
    {:else if $mapCommand["package"]["install:report"]}
      <Package_Install_Report />
    {:else if $mapCommand["package"]["installed:list"]}
      <Package_Installed_List />
    {:else if $mapCommand["package"]["list"]}
      <Package_List />
    {:else if $mapCommand["package"]["uninstall"]}
      <Package_Uninstall />
    {:else if $mapCommand["package"]["uninstall:report"]}
      <Package_Uninstall_Report />
    {:else if $mapCommand["package"]["update"]}
      <Package_Update />
    {:else if $mapCommand["package"]["version:create"]}
      <Package_Version_Create />
    {:else if $mapCommand["package"]["version:create:list"]}
      <Package_Version_Create_List />
    {:else if $mapCommand["package"]["version:create:report"]}
      <Package_Version_Create_Report />
    {:else if $mapCommand["package"]["version:delete"]}
      <Package_Version_Delete />
    {:else if $mapCommand["package"]["version:displayancestry"]}
      <Package_Version_DisplayAncestry />
    {:else if $mapCommand["package"]["version:list"]}
      <Package_Version_List />
    {:else if $mapCommand["package"]["version:promote"]}
      <Package_Version_Promote />
    {:else if $mapCommand["package"]["version:report"]}
      <Package_Version_Report />
    {:else if $mapCommand["package"]["version:update"]}
      <Package_Version_Update />
    {/if}
  </div>
{/if}

{#if $mapForceShowSections.package1}
  <div class="sfdxet-select-theme sfdxet-absolute-center">
    <h4>package1 Commands</h4>
    <br />
    <Select
      id="package1"
      items={lists.package1}
      on:select={(e) => {
        handleSelect(e, "package1");
      }}
      on:clear={(e) => {
        handleClear(e, "package1");
      }}
      value={$mapLastValue["package1"]}
    />
    <br />
    <br />
    {#if $mapCommand["package1"]["version:create"]}
      <Package1_Version_Create />
    {:else if $mapCommand["package1"]["version:create:get"]}
      <Package1_Version_Create_Get />
    {:else if $mapCommand["package1"]["version:display"]}
      <Package1_Version_Display />
    {:else if $mapCommand["package1"]["version:list"]}
      <Package1_Version_List />
    {/if}
  </div>
{/if}

{#if $mapForceShowSections.project}
  <div class="sfdxet-select-theme sfdxet-absolute-center">
    <h4>project Commands</h4>
    <br />
    <Select
      id="project"
      items={lists.project}
      on:select={(e) => {
        handleSelect(e, "project");
      }}
      on:clear={(e) => {
        handleClear(e, "project");
      }}
      value={$mapLastValue["project"]}
    />
    <br />
    <br />
    {#if $mapCommand["project"]["create"]}
      <Project_Create />
    {/if}
  </div>
{/if}

{#if $mapForceShowSections.schema}
  <div class="sfdxet-select-theme sfdxet-absolute-center">
    <h4>schema Commands</h4>
    <br />
    <Select
      id="schema"
      items={lists.schema}
      on:select={(e) => {
        handleSelect(e, "schema");
      }}
      on:clear={(e) => {
        handleClear(e, "schema");
      }}
      value={$mapLastValue["schema"]}
    />
    <br />
    <br />
    {#if $mapCommand["schema"]["sobject:describe"]}
      <Schema_SObject_Describe />
      {:else if $mapCommand["schema"]["sobject:list"]}
      <Schema_SObject_List />
    {/if}
  </div>
{/if}

{#if $mapForceShowSections.source}
  <div class="sfdxet-select-theme sfdxet-absolute-center">
    <h4>source Commands</h4>
    <br />
    <Select
      id="source"
      items={lists.source}
      on:select={(e) => {
        handleSelect(e, "source");
      }}
      on:clear={(e) => {
        handleClear(e, "source");
      }}
      value={$mapLastValue["source"]}
    />
    <br />
    <br />
    {#if $mapCommand["source"]["beta:pull"]}
      <Source_Beta_Pull />
    {:else if $mapCommand["source"]["beta:push"]}
      <Source_Beta_Push />
    {:else if $mapCommand["source"]["beta:status"]}
      <Source_Beta_Status />
    {:else if $mapCommand["source"]["beta:tracking:clear"]}
      <Source_Beta_Tracking_Clear />
    {:else if $mapCommand["source"]["beta:tracking:reset"]}
      <Source_Beta_Tracking_Reset />
    {:else if $mapCommand["source"]["convert"]}
      <Source_Convert />
    {:else if $mapCommand["source"]["delete"]}
      <Source_Delete />
    {:else if $mapCommand["source"]["deploy"]}
      <Source_Deploy />
    {:else if $mapCommand["source"]["deploy:cancel"]}
      <Source_Deploy_Cancel />
    {:else if $mapCommand["source"]["deploy:report"]}
      <Source_Deploy_Report />
    {:else if $mapCommand["source"]["ignored:list"]}
      <Source_Ignored_List />
    {:else if $mapCommand["source"]["manifest:create"]}
      <Source_Manifest_Create />
    {:else if $mapCommand["source"]["open"]}
      <Source_Open />
    {:else if $mapCommand["source"]["pull"]}
      <Source_Pull />
    {:else if $mapCommand["source"]["push"]}
      <Source_Push />
    {:else if $mapCommand["source"]["retrieve"]}
      <Source_Retrieve />
    {:else if $mapCommand["source"]["status"]}
      <Source_Status />
    {:else if $mapCommand["source"]["tracking:clear"]}
      <Source_Tracking_Clear />
    {:else if $mapCommand["source"]["tracking:reset"]}
      <Source_Tracking_Reset />
    {/if}
  </div>
{/if}

{#if $mapForceShowSections.staticresource}
  <div class="sfdxet-select-theme sfdxet-absolute-center">
    <h4>staticresource Commands</h4>
    <br />
    <Select
      id="staticresource"
      items={lists.staticresource}
      on:select={(e) => {
        handleSelect(e, "staticresource");
      }}
      on:clear={(e) => {
        handleClear(e, "staticresource");
      }}
      value="create"
    />
    <br />
    <br />
    <StaticResource_Create />
  </div>
{/if}

{#if $mapForceShowSections.user}
  <div class="sfdxet-select-theme sfdxet-absolute-center">
    <h4>user Commands</h4>
    <br />
    <Select
      id="user"
      items={lists.user}
      on:select={(e) => {
        handleSelect(e, "user");
      }}
      on:clear={(e) => {
        handleClear(e, "user");
      }}
      value={$mapLastValue["user"]}
    />
    <br />
    <br />
    {#if $mapCommand["user"]["create"]}
      <User_Create />
    {:else if $mapCommand["user"]["display"]}
      <User_Display />
    {:else if $mapCommand["user"]["list"]}
      <User_List />
    {:else if $mapCommand["user"]["password:generate"]}
      <User_Password_Generate />
    {:else if $mapCommand["user"]["permset:assign"]}
      <User_Permset_Assign />
    {:else if $mapCommand["user"]["permsetlicense:assign"]}
      <User_PermsetLicense_Assign />
    {/if}
  </div>
{/if}

{#if $mapForceShowSections.visualforce}
  <div class="sfdxet-select-theme sfdxet-absolute-center">
    <h4>visualforce Commands</h4>
    <br />
    <Select
      id="visualforce"
      items={lists.visualforce}
      on:select={(e) => {
        handleSelect(e, "visualforce");
      }}
      on:clear={(e) => {
        handleClear(e, "visualforce");
      }}
      value={$mapLastValue["visualforce"]}
    />
    <br />
    <br />
    {#if $mapCommand["visualforce"]["component:create"]}
      <Visualforce_Component_Create />
    {:else if $mapCommand["visualforce"]["page:create"]}
      <Visualforce_Page_Create />
    {/if}
  </div>
{/if}

<CSS />

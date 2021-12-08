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
    import Analytcs from "./_analytics/template_create.svelte";

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
    import Community_Create from "./_community/create.svelte"
    import Community_Publish from "./_community/publish.svelte"
    import Community_Template_List from "./_community/template_list.svelte"

    // Source
    import Source_Retrieve from "./_source/retrieve.svelte";
    import Source_Convert from "./_source/convert.svelte";
    import Source_Delete from "./_source/delete.svelte";
    import Source_Deploy from "./_source/deploy.svelte";

    // Fill the initial Maps
    handleMapCommand(lists.analytics, "analytics");
    handleMapCommand(lists.apex, "apex");
    handleMapCommand(lists.cmdt, "cmdt");
    handleMapCommand(lists.community, "community");
    handleMapCommand(lists.source, "source");

    export let mainFileName = "force";

    if($mapLastValue[mainFileName]){
        $mapCommand[$mapLastValue[mainFileName]][$mapLastValue[$mapLastValue[mainFileName]]] = true;
    }

    function handleMapCommand(pList, pParent){
        $mapCommand[pParent] = {};

        for(let key in pList){
            $mapCommand[pParent][pList[key].value.replace(":", "_")] = false;
        }
    }

    function handleSelect(event, type) {
        if(event.type === "select" && event.detail){
            let select = event.detail.value.replace("_", ":");
            
            if(type === mainFileName){
                clearMapForceShowSections(type);
                $mapForceShowSections[select] = true;
            }else{
                $mapCommand[type][select] = true;
                clearMapCommand(type, select);
            }

            $mapLastValue[type] = select;
        }
	}
	
	function handleClear(event, type) {
        if(event.type === "clear"){
            if(type === mainFileName){
                $mapForceShowSections[type] = false;
                clearMapForceShowSections(type);
            }else{
                $mapCommand[type][$mapLastValue[type]] = false;
            }

            for(let key in $mapLastValue){
                if(key === type){
                    $mapLastValue[key] = ""; 
                    break;
                }
            }

        }
	}

    function clearMapCommand(type, select){
        if(type && select){
            for(let key in $mapCommand[type]){
                if(key !== select){
                    $mapCommand[type][key] = false;
                }
            }
        }
    }

    function clearMapForceShowSections(type){
        for(let key in $mapForceShowSections){
            if(key !== type){
                $mapForceShowSections[key] = false;
            }
        }
    }
</script>

<br/>
    <div class="sfdxet-select-theme sfdxet-absolute-center">
        <h4>force Namespace</h4>
        <br/>
        <Select id={mainFileName} items={lists.force} on:select={e => { handleSelect(e, mainFileName) }} on:clear={e => { handleClear(e, mainFileName) }} value={$mapLastValue[mainFileName]}></Select>
    </div>
<br/>

{#if $mapForceShowSections.analytics}
    <div class="sfdxet-select-theme sfdxet-absolute-center">
        <h4>analytics Commands</h4>
        <br/>
        <Select id="analytics" items={lists.analytics} on:select={e => { handleSelect(e, "analytics") }} on:clear={e => { handleClear(e, "analytics") }} value="template:create"></Select>
        <br/>
        <br/>
        <Analytcs />
    </div>
{/if}

{#if $mapForceShowSections.apex}
    <div class="sfdxet-select-theme sfdxet-absolute-center">
        <h4>apex Commands</h4>
        <br/>
        <Select id="apex" items={lists.apex} on:select={e => { handleSelect(e, "apex") }} on:clear={e => { handleClear(e, "apex") }} value={$mapLastValue["apex"]}></Select>
        <br/>
        <br/>
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
        <h4>apex Commands</h4>
        <br/>
        <Select id="cmdt" items={lists.cmdt} on:select={e => { handleSelect(e, "cmdt") }} on:clear={e => { handleClear(e, "cmdt") }} value={$mapLastValue["cmdt"]}></Select>
        <br/>
        <br/>
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
        <br/>
        <Select id="community" items={lists.community} on:select={e => { handleSelect(e, "community") }} on:clear={e => { handleClear(e, "community") }} value={$mapLastValue["community"]}></Select>
        <br/>
        <br/>
        {#if $mapCommand["community"]["create"]}
            <Community_Create />
        {:else if $mapCommand["community"]["publish"]}
            <Community_Publish />
        {:else if $mapCommand["community"]["template:list"]}
            <Community_Template_List />
        {/if}
    </div>
{/if}

{#if $mapForceShowSections.source}
    <div class="sfdxet-select-theme sfdxet-absolute-center">
        <h4>source Commands</h4>
        <br/>
        <Select id="source" items={lists.source} on:select={e => { handleSelect(e, "source") }} on:clear={e => { handleClear(e, "source") }} value={$mapLastValue["source"]}></Select>
        <br/>
        <br/>
        {#if $mapCommand["source"].retrieve}
            <Source_Retrieve />
        {:else if $mapCommand["source"].convert}
            <Source_Convert />
        {:else if $mapCommand["source"].delete}
            <Source_Delete />
        {:else if $mapCommand["source"].deploy}
            <Source_Deploy />
        {/if}
    </div>
{/if}

<CSS />

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
    import Class_Create from "./_apex/class_create.svelte";
    import Execute from "./_apex/execute.svelte";
    import Log_Get from "./_apex/log_get.svelte";
    import Log_List from "./_apex/log_list.svelte";
    import Log_Tail from "./_apex/log_tail.svelte";
    import Test_Report from "./_apex/test_report.svelte";
    import Test_Run from "./_apex/test_run.svelte";
    import Trigger_Create from "./_apex/trigger_create.svelte";

    // CMDT
    import Create from "./_cmdt/create.svelte";
    import Field_Create from "./_cmdt/field_create.svelte";
    import Generate from "./_cmdt/generate.svelte";

    // Source
    import Retrieve from "./_source/retrieve.svelte";
    import Convert from "./_source/convert.svelte";
    import Delete from "./_source/delete.svelte";
    import Deploy from "./_source/deploy.svelte";

    // Fill the initial Maps
    handleMapCommand(lists.analytics, "analytics");
    handleMapCommand(lists.apex, "apex");
    handleMapCommand(lists.cmdt, "cmdt");
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
            <Class_Create />
        {:else if $mapCommand["apex"].execute}
            <Execute />
        {:else if $mapCommand["apex"]["log:get"]}
            <Log_Get />
        {:else if $mapCommand["apex"]["log:list"]}
            <Log_List />
        {:else if $mapCommand["apex"]["log:tail"]}
            <Log_Tail />
        {:else if $mapCommand["apex"]["test:report"]}
            <Test_Report />
        {:else if $mapCommand["apex"]["test:run"]}
            <Test_Run />
        {:else if $mapCommand["apex"]["trigger:create"]}
            <Trigger_Create />
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
            <Create />
        {:else if $mapCommand["cmdt"]["field:create"]}
            <Field_Create />
        {:else if $mapCommand["cmdt"]["generate"]}
            <Generate />
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
            <Retrieve />
        {:else if $mapCommand["source"].convert}
            <Convert />
        {:else if $mapCommand["source"].delete}
            <Delete />
        {:else if $mapCommand["source"].deploy}
            <Deploy />
        {/if}
    </div>
{/if}

<CSS />

<script>
    import Select from "svelte-select";
    import CSS from "../-helperFiles/GlobalCSS.svelte";
    import Retrieve from "./_source/retrieve.svelte";
    import Convert from "./_source/convert.svelte";
    import Delete from "./_source/delete.svelte";
    import { mapForceShowSections, mapSource, mapLastValue, mapShowSections } from "../-helperFiles/GlobalStore";
    import Deploy from "./_source/deploy.svelte";
    import Analytcs from "../_force/analytics/analytics_template_create.svelte"

    const force = [
        {value: "analytics", label: "analytics"},
        {value: "apex", label: "apex"},
        // {value: "cmdt", label: "cmdt", selectable: false},
        // {value: "community", label: "community", selectable: false},
        // {value: "data", label: "data", selectable: false},
        // {value: "lightning", label: "lightning", selectable: false},
        // {value: "limits", label: "limits", selectable: false},
        // {value: "mdapi", label: "mdapi", selectable: false},
        // {value: "org", label: "org", selectable: false},
        // {value: "package", label: "package", selectable: false},
        // {value: "package1", label: "package1", selectable: false},
        // {value: "project", label: "project", selectable: false},
        // {value: "schema", label: "schema", selectable: false},
        {value: "source", label: "source"},
        // {value: "staticresource", label: "staticresource", selectable: false},
        // {value: "user", label: "user", selectable: false},
        // {value: "visualforce", label: "visualforce", selectable: false}
    ];

    const analytics = [
        {value: "template:create", label: "template:create"}
    ];

    const apex = [
        {value: "class:create", label: "class:create"},
        {value: "execute", label: "execute"},
        {value: "log:get", label: "log:get"},
        {value: "log:list", label: "log:list"},
        {value: "log:tail", label: "log:tail"},
        {value: "test:report", label: "test:report"},
        {value: "test:run", label: "test:run"},
        {value: "trigger:create", label: "trigger:create"}
    ];

    const source = [
        {value: "retrieve", label: "force:source:retrieve"},
        {value: "convert", label: "force:source:convert"},
        {value: "delete", label: "force:source:delete"},
        {value: "deploy", label: "force:source:deploy"}
    ];

    const beta = [
        {value: "pull", label: "force:source:beta:pull"},
        {value: "push", label: "force:source:beta:push"},
        {value: "tracking", label: "force:source:beta:tracking:"}
    ];

    const beta_tracking = [
        {value: "clear", label: "force:source:beta:tracking:clear"},
        {value: "reset", label: "force:source:beta:tracking:clear"}
    ];

    function handleSelect(event, type) {
        if(event.type === "select" && event.detail){
            clearOtherSections(type);
            
            if(type === "force"){
                $mapForceShowSections[event.detail.value] = true;
            }else if(type === "analytics"){
                $mapForceShowSections.analytics = true;
            }else if(type === "source"){
                $mapForceShowSections.source = true;
                $mapSource[event.detail.value] = true;
                
                if($mapSource && $mapLastValue){
                    $mapSource[$mapLastValue[type]] = false;
                }
            }
            
            $mapLastValue[type] = event.detail.value;
        }
	}
	
	function handleClear(event, type) {
        if(event.type === "clear"){
            clearOtherSections(type);
    
            if(type === "force"){
                $mapForceShowSections[type] = false;
            }else if(type === "analytics"){
                $mapForceShowSections.analytics = false;
                $mapLastValue["force"] = "";
            }else if(type === "source"){
                $mapSource[type] = false;
            }
    
            $mapLastValue[type] = "";
        }
	}

    function clearOtherSections(currentSection){
        if($mapLastValue[currentSection]){
            if(currentSection === "force" || currentSection === "analytics" || currentSection === "apex"){
                $mapForceShowSections[$mapLastValue[currentSection]] = false;
            }if(currentSection === "source"){
                $mapSource[$mapLastValue[currentSection]] = false;
            }
        }

    }
</script>

<br/>
    <div class="sfdxet-select-theme sfdxet-absolute-center">
        <h4>force Namespace</h4>
        <br/>
        <Select id="force" items={force} on:select={e => { handleSelect(e, "force") }} on:clear={e => { handleClear(e, "force") }} value={$mapLastValue["force"]}></Select>
    </div>
<br/>

{#if $mapForceShowSections.analytics}
    <div class="sfdxet-select-theme sfdxet-absolute-center">
        <h4>analytics Commands</h4>
        <br/>
        <Select id="analytics" items={analytics} on:select={e => { handleSelect(e, "analytics") }} on:clear={e => { handleClear(e, "analytics") }} value="force:analytics:template:create"></Select>
        <br/>
        <br/>
        <Analytcs />
    </div>
{/if}

{#if $mapForceShowSections.apex}
    <div class="sfdxet-select-theme sfdxet-absolute-center">
        <h4>apex Commands</h4>
        <br/>
        <Select id="apex" items={apex} on:select={e => { handleSelect(e, "apex") }} on:clear={e => { handleClear(e, "apex") }} value={$mapLastValue["apex"]}></Select>
        <br/>
        <br/>
    </div>
{/if}

{#if $mapForceShowSections.source}
    <div class="sfdxet-select-theme sfdxet-absolute-center">
        <h4>source Commands</h4>
        <br/>
        <Select id="source" items={source} on:select={e => { handleSelect(e, "source") }} on:clear={e => { handleClear(e, "source") }} value={$mapLastValue["source"]}></Select>
        <br/>
        <br/>
        {#if $mapSource.retrieve}
            <Retrieve />
        {/if}
        {#if $mapSource.convert}
            <Convert />
        {/if}
        {#if $mapSource.delete}
            <Delete />
        {/if}
        {#if $mapSource.deploy}
            <Deploy />
        {/if}
    </div>
{/if}

<CSS />

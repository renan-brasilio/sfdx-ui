<script>
    import Select from 'svelte-select';
    import CSS from '../-helperFiles/GlobalCSS.svelte';
    import Retrieve from './_source/retrieve.svelte';
    import Convert from './_source/convert.svelte';
    import Delete from './_source/delete.svelte';
    import { mapForceShowSections } from '../-helperFiles/GlobalStore';
    import { mapSource } from '../-helperFiles/GlobalStore';
    import { lastValueForce } from '../-helperFiles/GlobalStore';
    import { mapLastValue } from '../-helperFiles/GlobalStore';
    import { tooltip as tooltipv1 } from '../--tooltip/tooltip.v1';
    import Deploy from './_source/deploy.svelte';

    const force = [
        // {value: 'analytics', label: 'analytics', selectable: false},
        // {value: 'apex', label: 'apex', selectable: false},
        // {value: 'cmdt', label: 'cmdt', selectable: false},
        // {value: 'community', label: 'community', selectable: false},
        // {value: 'data', label: 'data', selectable: false},
        // {value: 'lightning', label: 'lightning', selectable: false},
        // {value: 'limits', label: 'limits', selectable: false},
        // {value: 'mdapi', label: 'mdapi', selectable: false},
        // {value: 'org', label: 'org', selectable: false},
        // {value: 'package', label: 'package', selectable: false},
        // {value: 'package1', label: 'package1', selectable: false},
        // {value: 'project', label: 'project', selectable: false},
        // {value: 'schema', label: 'schema', selectable: false},
        {value: 'source', label: 'source'},
        // {value: 'staticresource', label: 'staticresource', selectable: false},
        // {value: 'user', label: 'user', selectable: false},
        // {value: 'visualforce', label: 'visualforce', selectable: false}
    ];

    const analytics = [
        {value: 'force:analytics:template:create', label: 'force:analytics:template:create'}
    ];

    const source = [
        {value: 'retrieve', label: 'force:source:retrieve'},
        {value: 'convert', label: 'force:source:convert'},
        {value: 'delete', label: 'force:source:delete'},
        {value: 'deploy', label: 'force:source:deploy'}
    ];

    function handleSelect(event, type) {
        if(event.type === "select" && event.detail){
            if(type === 'force'){
                $mapForceShowSections[event.detail.value] = true;
            }else if(type === 'analytics'){
                $mapForceShowSections.analytics = true;
            }else if(type === 'source'){
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
            if($mapLastValue[type]){
                if(type === 'force' || type === 'analytics'){
                    $mapForceShowSections[$mapLastValue[type]] = false;
                }if(type === 'source'){
                    $mapSource[$mapLastValue[type]] = false;
                }
            }
    
            if(type === 'force'){
                $mapForceShowSections[type] = false;
            }else if(type === 'analytics'){
                $mapForceShowSections.analytics = false;
            }else if(type === 'source'){
                $mapSource[type] = false;
            }
    
            $mapLastValue[type] = '';
        }
	}
</script>

<br/>
    <div class="sfdxet-select-theme sfdxet-absolute-center">
        <h4>force Namespace</h4>
        <br/>
        <Select id="force" items={force} on:select={e => { handleSelect(e, 'force') }} on:clear={e => { handleClear(e, 'force') }} value={$mapLastValue['force']}></Select>
    </div>
<br/>

{#if $mapForceShowSections.analytics}
    <div class="sfdxet-select-theme sfdxet-absolute-center" title="force:analytics:template:create" use:tooltipv1>
        <Select id="analytics" items={analytics} isDisabled="true" value="force:analytics:template:create"></Select>
        <br/>
        <br/>
        <!-- <Analytcs /> -->
    </div>
{/if}

{#if $mapForceShowSections.source}
    <div class="sfdxet-select-theme sfdxet-absolute-center">
        <h4>source Commands</h4>
        <br/>
        <Select id="source" items={source} on:select={e => { handleSelect(e, 'source') }} on:clear={e => { handleClear(e, 'source') }} value={$mapLastValue['source']}></Select>
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

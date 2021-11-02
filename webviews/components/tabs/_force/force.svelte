<script>
    import Select from 'svelte-select';
    import CSS from '../GlobalCSS.svelte'
    import Retrieve from './_source/retrieve.svelte'
    import { tooltip as tooltipv1 } from '../--tooltip/tooltip.v1';

    const force = [
        {value: 'analytics', label: 'analytics', selectable: false},
        {value: 'apex', label: 'apex', selectable: false},
        {value: 'cmdt', label: 'cmdt', selectable: false},
        {value: 'community', label: 'community', selectable: false},
        {value: 'data', label: 'data', selectable: false},
        {value: 'lightning', label: 'lightning', selectable: false},
        {value: 'limits', label: 'limits', selectable: false},
        {value: 'mdapi', label: 'mdapi', selectable: false},
        {value: 'org', label: 'org', selectable: false},
        {value: 'package', label: 'package', selectable: false},
        {value: 'package1', label: 'package1', selectable: false},
        {value: 'project', label: 'project', selectable: false},
        {value: 'schema', label: 'schema', selectable: false},
        {value: 'source', label: 'source'},
        {value: 'staticresource', label: 'staticresource', selectable: false},
        {value: 'user', label: 'user', selectable: false},
        {value: 'visualforce', label: 'visualforce', selectable: false}
    ];

    const analytics = [
        {value: 'force:analytics:template:create', label: 'force:analytics:template:create'}
    ];

    const source = [
        {value: 'retrieve', label: 'force:source:retrieve'}
    ];

    let mapMainValues = {
        "analytics": false,
        "source": false
    };

    let mapSource = {
        "retrieve": false
    };

    let lastValueMain, lastValueSource;

    function handleForceSelect(event) {
        mapMainValues[event.detail.value] = true;
        lastValueMain = event.detail.value;
	}
	
	function handleForceClear() {
		mapMainValues[lastValueMain] = false;
	}

    function handleSourceSelect(event) {
        mapSource[event.detail.value] = true;
        lastValueSource = event.detail.value;
	}
	
	function handleSourceClear() {
		mapSource[lastValueSource] = false;
	}
</script>

<br/>
    <div class="sfdxet-select-theme sfdxet-absolute-center">
        <h4>force Namespace</h4>
        <br/>
        <Select id="force" items={force} on:select={handleForceSelect} on:clear={handleForceClear}></Select>
    </div>
<br/>

{#if mapMainValues.analytics}
    <div class="sfdxet-select-theme sfdxet-absolute-center" title="force:analytics:template:create" use:tooltipv1>
        <Select id="analytics" items={analytics} isDisabled="true" value="force:analytics:template:create"></Select>
    </div>
{/if}

{#if mapMainValues.source}
    <div class="sfdxet-select-theme sfdxet-absolute-center">
        <h4>source Commands</h4>
        <br/>
        <Select id="source" items={source} on:select={handleSourceSelect} on:clear={handleSourceClear}></Select>
        <br/>
        <br/>
        {#if mapSource.retrieve}
            <Retrieve />
        {/if}
    </div>
{/if}

<CSS />

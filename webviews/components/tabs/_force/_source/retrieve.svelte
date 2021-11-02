<script>
    import { } from 'os';
    import { Circle2 } from 'svelte-loading-spinners'
    import Select from 'svelte-select';
    import CSS from '../../GlobalCSS.svelte'
	import { tooltip as tooltipv1 } from '../../--tooltip/tooltip.v1';
    import { onMount } from 'svelte';

    // Show variables
    let mapShowSections = {}, mapInputVariables = {};

    export let showSpinner=true, showButton=false, showInformation=false;

    let pickFolderType;

    /**
     * @identifiers
     * d = Default value
     * l = List variable
     * i = Input variable
     * s = Show section boolean control variable
    */

    // Tooltips
    let mapTooltips = {
        'JSON': 'Optional: Format output as JSON',
        'JSON2': 'Open the folder explorer to select the folder output.',
        'JSON3': 'Manually define the folder path.',
        'LOGLEVEL': 'Optional: The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log.',
        'TARGETUSERNAME': 'Optional: A username or alias for the target org. Overrides the default target org.',
        'APIVERSION': 'Optional: Override the API version used for API requests made by this command.',
        'SOURCEPATH': 'Optional: A comma-separated list of file paths for source to retrieve from the org. The supplied paths can be to a single file (in which case the operation is applied to only one file) or to a folder (in which case the operation is applied to all source files in the directory and its sub-directories). **If you specify this parameter, don’t specify --manifest or --metadata.',
        'SOURCEPATH2': 'Manually define the folder path.',
        'WAIT': 'Optional: Number of minutes to wait for the command to complete and display results to the terminal window. If the command continues to run after the wait period, the CLI returns control of the terminal window to you.',

    };

    // Selects lists
    const lLOGLEVEL = [
        {value: 'trace', label: 'trace'},
        {value: 'debug', label: 'debug'},
        {value: 'info', label: 'info'},
        {value: 'warn', label: 'warn'},
        {value: 'error', label: 'error'},
        {value: 'fatal', label: 'fatal'},
        {value: 'TRACE', label: 'TRACE'},
        {value: 'DEBUG', label: 'DEBUG'},
        {value: 'INFO', label: 'INFO'},
        {value: 'WARN', label: 'WARN'},
        {value: 'ERROR', label: 'ERROR'},
        {value: 'FATAL', label: 'FATAL'},
    ];

    const lAPIVERSION = [];

    for(let i=8; i < 54; i++){
        lAPIVERSION.push({value: i.toFixed(1), label: i.toFixed(1)});
        
        if(i === 11){
            let j = i + .1;
            lAPIVERSION.push({value: j.toFixed(1), label: j.toFixed(1)});
        }
    }

    lAPIVERSION.reverse();

    function retrieve() {
        // showSpinner = true;
        // showInformation = true;

        tsvscode.postMessage({
            type: 'onInfo',
            value: 'Starting the Terminal + Script: Retrieve' 
        });

        tsvscode.postMessage({
            type: 'onTerminalRetrieve',
            sJSON: mapShowSections['JSON'],
            vJSON: mapShowSections['JSON'] && mapInputVariables['JSON'] ? mapInputVariables['JSON'] : '',
            vJSON2: mapInputVariables['JSON2'] ? mapInputVariables['JSON2'] : '',
            vJSON3: mapInputVariables['JSON3'] ? mapInputVariables['JSON3'] : '',
            vLOGLEVEL: mapShowSections['LOGLEVEL'] && mapInputVariables['LOGLEVEL'] ? mapInputVariables['LOGLEVEL'] : '',
            vTARGETUSERNAME: mapShowSections['TARGETUSERNAME'] && mapInputVariables['TARGETUSERNAME'] ? mapInputVariables['TARGETUSERNAME'] : '',
            vAPIVERSION: mapShowSections['APIVERSION'] && mapInputVariables['APIVERSION'] ? mapInputVariables['APIVERSION'] : '',
            vSOURCEPATH: mapShowSections['SOURCEPATH'] && mapInputVariables['SOURCEPATH'] ? mapInputVariables['SOURCEPATH'] : '',
            vWAIT: mapShowSections['WAIT'] && mapInputVariables['WAIT'] ? mapInputVariables['WAIT'] : ''
        });
    }

    function showFolderPick(type) {
        pickFolderType = type;

        tsvscode.postMessage({
            type: 'onShowFolderPick'
        });

    }

    function handleSelect(event, inputName) {
        mapInputVariables[inputName] = event.detail.value;
	}
	
	function handleSelectClear(inputName) {
		mapInputVariables[inputName] = '';
	}

    function handleShowSections(event, sectionName){
        mapShowSections[sectionName] = event.target.checked;
    }

    // Initial loading
    setTimeout(() => {
        showSpinner = false;
        showButton = true;
    }, 1000);

    // Webview Listener
    onMount(() => {
        window.addEventListener('message', event => {
            const message = event.data; // The json data that the extension sent
            console.log({message});

            switch (message.type) {
                case 'folderUri':
                    mapInputVariables[pickFolderType] = message.value[0].path;
                    break;
            }
        });
    });
</script>

{#if showSpinner}
    <div class="sfdxet-spinner">
        <Circle2 size="60" colorOuter="#034efc" unit="px"></Circle2>
    </div>
    {#if showInformation}
        <br/>
        <br/>
        <br/>
        <div class="sfdxet-absolute-center">
            <p>Please check the process on the terminal below.</p>
            <br/>
            <p>*To start a new retrieve, please close the terminal.</p>
        </div>
    {/if}
{:else}
	{#if showButton}
        <div class="sfdxet-absolute-center">
            <button class="sfdxet-buttons" on:click={retrieve}>Retrieve</button>
            <br/>
            <br/>
            <h3>Options:</h3>
            <h4><a target="_blank" href="https://developer.salesforce.com/docs/atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_force_source.htm#cli_reference_force_source_retrieve">Official Documentation</a></h4>
            <br/>

            <!-- JSON -->
                <label for="json">
                    <span title={mapTooltips['JSON']} use:tooltipv1>[--json]</span> <input type="checkbox" id="json" name="json" on:change={e => { handleShowSections(e, 'JSON') }}>
                </label>
                <br/>
                <br/>
            
                {#if mapShowSections.JSON}
                    <section class="sfdxet-section">
                        <input type="text" class="sfdxet-absolute-center" title="Insert the JSON filename (don't include .json), or leave blank for the default: output" use:tooltipv1 placeholder="output" bind:value={mapInputVariables['JSON']}/>
                        <br/>

                        <label for="json2">
                            <span title={mapTooltips['JSON2']} use:tooltipv1 class="sfdxet-inner-span">Define output folder?</span> <input type="checkbox" id="json2" name="json2" on:change={e => { handleShowSections(e, 'JSON2') }}> 
                        </label>
                        <br/>
                        <br/>

                        {#if mapShowSections.JSON2}
                            <button class="sfdxet-buttons" on:click={() => {showFolderPick('JSON2')}}>Set Folder Path</button>
                            <br/>
                            <br/>
                            <label for="json3">
                                <span title={mapTooltips['JSON2']} use:tooltipv1 class="sfdxet-inner-span">Manually define</span> <input type="checkbox" id="json3" name="json3" on:change={e => { handleShowSections(e, 'JSON3') }}> 
                            </label>
                            <br/>
                            <br/>
                            {#if mapShowSections.JSON3}
                                <input type="text" class="sfdxet-absolute-center" title={mapInputVariables['JSON3']} use:tooltipv1 placeholder="Insert..." bind:value={mapInputVariables['JSON3']}/>
                            {/if}
                            <br/>
                            <br/>
                        {/if}
                    </section>
                {/if}
            <!-- END - JSON -->
            
            <!-- LOGLEVEL -->
                <label for="loglevel">
                    <span title={mapTooltips['LOGLEVEL']} use:tooltipv1>[--loglevel LOGLEVEL]</span> <input type="checkbox" id="loglevel" name="loglevel" on:change={e => { handleShowSections(e, 'LOGLEVEL') }}>
                </label>
                <br/>
                <br/>

                
                {#if mapShowSections.LOGLEVEL}
                    <div class="sfdxet-select-theme sfdxet-absolute-center">
                        <Select id="loglevelsel" items={lLOGLEVEL} on:select={e => { handleSelect(e, 'LOGLEVEL') }} on:clear={() => { handleSelectClear('LOGLEVEL') }}></Select>
                    </div>
                    <br/>
                {/if}
            <!-- END - LOGLEVEL -->

            <!-- TARGETUSERNAME -->
                <label for="json">
                    <span title={mapTooltips['JSON']} use:tooltipv1>[-u TARGETUSERNAME]</span> <input type="checkbox" id="targetusername" name="targetusername" on:change={e => { handleShowSections(e, 'TARGETUSERNAME') }}>
                </label>
                <br/>
                <br/>

                {#if mapShowSections.TARGETUSERNAME}
                    <input type="text" class="sfdxet-absolute-center" title="Insert the username" use:tooltipv1 placeholder="Insert..." bind:value={mapInputVariables['TARGETUSERNAME']}/>
                    <br/>
                {/if}
            <!-- END - TARGETUSERNAME -->

            <!-- APIVERSION -->
                <label for="apiversion">
                    <span title={mapTooltips['APIVERSION']} use:tooltipv1>[-a APIVERSION]</span> <input type="checkbox" id="apiversion" name="apiversion" on:change={e => { handleShowSections(e, 'APIVERSION') }}>
                </label>
                <br/>
                <br/>

                {#if mapShowSections.APIVERSION}
                    <div class="sfdxet-select-theme sfdxet-absolute-center">
                        <Select id="apiversionsel" items={lAPIVERSION} on:select={e => { handleSelect(e, 'APIVERSION') }} on:clear={() => { handleSelectClear('APIVERSION') }}></Select>
                    </div>
                    <br/>
                {/if}
            <!-- END - APIVERSION -->

            <!-- SOURCEPATH -->
                <label for="sourcepath">
                    <span title={mapTooltips['SOURCEPATH']} use:tooltipv1>[-p SOURCEPATH]</span> <input type="checkbox" id="sourcepath" name="sourcepath" on:change={e => { handleShowSections(e, 'SOURCEPATH') }}> 
                </label>
                <br/>
                <br/>

                {#if mapShowSections.SOURCEPATH}
                    <button class="sfdxet-buttons" on:click={() => {showFolderPick('SOURCEPATH')}}>Set Folder Path</button>
                    <br/>
                    <br/>
                    <label for="sourcepath">
                        <span title={mapTooltips['SOURCEPATH2']} use:tooltipv1>Manually define</span> <input type="checkbox" id="sourcepath" name="sourcepath" on:change={e => { handleShowSections(e, 'SOURCEPATH2') }}> 
                    </label>
                    {#if mapShowSections.SOURCEPATH2}
                        <input type="text" class="sfdxet-absolute-center" title={mapInputVariables['SOURCEPATH2']} use:tooltipv1 placeholder="Insert..." bind:value={mapInputVariables['SOURCEPATH2']}/>
                    {/if}
                    <br/>
                {/if}
            <!-- END - SOURCEPATH -->

            <!-- WAIT -->
                <label for="wait">
                    <span title={mapTooltips['WAIT']} use:tooltipv1>[-w WAIT]</span> <input type="checkbox" id="wait" name="wait" on:change={e => { handleShowSections(e, 'WAIT') }}> 
                </label>
                <br/>
                <br/>

                {#if mapShowSections.WAIT}
                    <input type="number" on:keypress={e => {if(e.key==='.'){e.preventDefault();}}} on:input={e => {e.target.value = e.target.value.replace(/[^0-9]*/g,'');}} class="sfdxet-absolute-center" title="Type: minutes; Default value: 33 minutes." use:tooltipv1 placeholder="33" bind:value={mapInputVariables['WAIT']}/>
                    <br/>
                {/if}
            <!-- END - WAIT -->
        </div>
	{/if}
{/if}

<CSS />
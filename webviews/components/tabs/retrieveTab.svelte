<script>
    import { Circle2 } from 'svelte-loading-spinners'

    function retrieve() {
        showSpinner = true;
        showInformation = true;

        tsvscode.postMessage({
            type: 'onInfo',
            value: 'Starting the Terminal + Script: Retrieve' 
        });

        tsvscode.postMessage({
            type: 'onTerminal',
            value: './retrieve' 
        });
    }

    export let showSpinner = true;
    export let showButton = false;
    export let showInformation = false;

    setTimeout(() => {
        showSpinner = false;
        showButton = true;
    }, 5000);
</script>

<style>
    .buttons-sfdxet {
        max-width: 100px;
        border-radius: 5px;
    }

    .sfdxet-absolute-center  {
        position: absolute;
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
        text-align: center;
    }

    .sfdxet-spinner {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
    }
</style>

{#if showSpinner}
    <div class="sfdxet-spinner">
        <Circle2 size="60" color="#FF3E00" unit="px" duration="3s" class="sfdxet-absolute-center"></Circle2>
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
            <button class="buttons-sfdxet" on:click={retrieve}>Retrieve</button>
        </div>
	{/if}
{/if}
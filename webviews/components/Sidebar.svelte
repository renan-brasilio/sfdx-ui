<script>
    // import alias from "./tabs/_alias/alias.svelte";
    // import auth from "./tabs/_auth/auth.svelte";
    // import config from "./tabs/_config/config.svelte";
    import force from "./tabs/_force/force.svelte";
    import Tabs from "./Tabs.svelte";
    import { Circle2 } from 'svelte-loading-spinners'
    import { mapSpinner } from './tabs/-helperFiles/GlobalStore'
    import { mapInformation } from './tabs/-helperFiles/GlobalStore'

    $mapSpinner.main = true;

    // List of tab items with labels, values and assigned components
    let items = [
        // { 
        //     label: "alias",
        //     value: 1,
        //     component: alias
        // },
        // { 
        //     label: "auth",
        //     value: 2,
        //     component: auth
        // },
        // { 
        //     label: "config",
        //     value: 3,
        //     component: config
        // },
        // { 
        //     label: "force",
        //     value: 4,
        //     component: force
        // },
        { 
            label: "force",
            value: 1,
            component: force
        }
    ];

    // Initial loading
    setTimeout(() => {
        $mapSpinner.main = false;
        $mapInformation.main = true;
    }, 1000);
</script>

{#if $mapSpinner.main}
    <div class="sfdxet-spinner">
        <Circle2 size="60" colorOuter="#034efc" unit="px"></Circle2>
    </div>
    {#if $mapInformation.main}
        <br/>
        <br/>
        <br/>
        <div class="sfdxet-absolute-center">
            <p>Please check the process on the terminal below.</p>
            <br/>
            <p>*To start a new process, please close the terminal or restart the extension.</p>
        </div>
    {/if}
{:else}
    <div>
        <h3 class="sfdxet-absolute-center">Select a Namespace</h3>
        <br/>
        <Tabs {items} />
    </div>
{/if}
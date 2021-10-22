<script>
    import retrieveTab from "./tabs/retrieveTab.svelte";
    import changesetTab from "./tabs/changesetTab.svelte";
    import deployTab from "./tabs/deployTab.svelte";
    import Tabs from "./Tabs.svelte";

    // List of tab items with labels, values and assigned components
    let items = [
        { 
            label: "Retrieve",
            value: 1,
            component: retrieveTab
        },
        { 
            label: "Package",
            value: 2,
            component: changesetTab
        },
        { 
            label: "Deploy",
            value: 3,
            component: deployTab
        }
    ];
</script>

<Tabs {items} />
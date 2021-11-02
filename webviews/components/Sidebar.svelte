<script>
    import alias from "./tabs/_force/force.svelte";
    import auth from "./tabs/_force/force.svelte";
    import config from "./tabs/_force/force.svelte";
    import force from "./tabs/_force/force.svelte";
    import Tabs from "./Tabs.svelte";

    // List of tab items with labels, values and assigned components
    let items = [
        { 
            label: "alias",
            value: 1,
            component: alias
        },
        { 
            label: "auth",
            value: 2,
            component: auth
        },
        { 
            label: "config",
            value: 3,
            component: config
        },
        { 
            label: "force",
            value: 4,
            component: force
        },
    ];
</script>

<Tabs {items} />
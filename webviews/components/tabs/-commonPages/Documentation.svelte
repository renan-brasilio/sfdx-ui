<script>
    // Helper Files
    import * as js from "../-helperFiles/GlobalJS";
    import { CollapsibleCard } from "svelte-collapsible";

    // Store
    import { 
        mapDocument, 
    } from "../-helperFiles/GlobalStore";

    // Parameters
    export let sectionName = '';
    export let headerD = '';
    export let typeD = '';
    export let bodyD = '';
</script>

{#if $mapDocument[sectionName]}
    <h4 class="sfdxet-br"><b>{headerD} Documentation:</b></h4>
    <section class="sfdxet-section">
        <CollapsibleCard open={$mapDocument[sectionName]}>
            <div slot='body' title={js.mapTooltips['documentation']}>
                {@html typeD}
                {@html bodyD}
            </div>
        </CollapsibleCard>
    </section>
{/if}
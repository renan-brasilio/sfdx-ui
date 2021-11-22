<script>
    import * as js from "../-helperFiles/GlobalJS";
    import { mapDocument } from "../-helperFiles/GlobalStore";
    import { CollapsibleCard } from "svelte-collapsible";

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
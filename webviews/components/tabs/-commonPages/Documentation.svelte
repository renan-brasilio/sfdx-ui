<script>
    // Helper Files
    import * as js from "../-helperFiles/GlobalJS";
    import { CollapsibleCard } from "svelte-collapsible";

    // Store
    import { 
        mapDocument, 
    } from "../-helperFiles/GlobalStore";

    // Parameters
    export let pSectionName = '';
    export let pHeader = '';
    export let pType = '';
    export let pBody = '';
</script>

{#if $mapDocument[pSectionName]}
    <h4 class="sfdxet-br"><b>{pHeader} Documentation:</b></h4>
    <section class="sfdxet-section">
        <CollapsibleCard open={$mapDocument[pSectionName]}>
            <div slot='body' title={js.mapTooltips['documentation']}>
                {@html pType}
                {@html pBody}
            </div>
        </CollapsibleCard>
    </section>
{/if}
<script>
  // Importing the components that will be used in the tabs.
  import alias from "./tabs/_alias/alias.svelte";
  import auth from "./tabs/_auth/auth.svelte";
  import config from "./tabs/_config/config.svelte";
  import force from "./tabs/_force/force.svelte";
  import Tabs from "./Tabs.svelte";
  import { Circle2 } from "svelte-loading-spinners";
  import { mapSpinner } from "./tabs/-helperFiles/GlobalStore";
  import { mapInformation } from "./tabs/-helperFiles/GlobalStore";

  // Setting the `main` property to `true` in the `mapSpinner` object.
  $mapSpinner.main = true;

  // List of tab items with labels, values and assigned components
  let items = [
    {
      label: "alias",
      value: 1,
      component: alias,
    },
    {
      label: "auth",
      value: 2,
      component: auth,
    },
    {
      label: "config",
      value: 3,
      component: config,
    },
    {
      label: "force",
      value: 4,
      component: force,
    },
  ];

  // Initial loading
  setTimeout(() => {
    $mapSpinner.main = false;
    $mapInformation.main = true;
  }, 1000);
</script>

<!-- This is a conditional statement that is checking if the `.main` is true. If it is true, then it will render the HTML. -->
{#if $mapSpinner.main}
  <!-- Loading -->
  <div class="sfdxet-spinner">
    <Circle2 size="60" colorOuter="#034efc" unit="px" />
  </div>
  <!-- Shows an information when the Terminal is open -->
  {#if $mapInformation.main}
    <br />
    <br />
    <br />
    <div class="sfdxet-absolute-center">
      <p>Please check the process on the terminal below.</p>
      <br />
      <p>
        *To start a new process, please close the terminal or restart the
        extension.
      </p>
    </div>
  {/if}
{:else}
  <!-- The main component that is rendered in the extension. -->
  <div>
    <h3 class="sfdxet-absolute-center">Select a Namespace</h3>
    <br />
    <Tabs {items} />
  </div>
{/if}

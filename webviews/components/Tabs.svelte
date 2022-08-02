<script>
  // Exporting the items and activeTabValue variables.
  export let items = [];
  export let activeTabValue = 1;

  // A function that is called when a tab is clicked. It sets the activeTabValue variable to the value of the tab that was clicked.
  const handleClick = (tabValue) => () => (activeTabValue = tabValue);
</script>

<!-- Rendering the tabs. -->
<ul>
  {#each items as item}
    <li class={activeTabValue === item.value ? "active" : ""}>
      <span on:click={handleClick(item.value)}>{item.label}</span>
    </li>
  {/each}
</ul>

<!-- This is the part of the code that renders the component that is associated with the active tab. -->
{#each items as item}
  {#if activeTabValue == item.value}
    <div class="box">
      <svelte:component this={item.component} />
    </div>
  {/if}
{/each}

<style>
  /* Styling the box that is rendered when a tab is clicked. */
  .box {
    margin-bottom: 10px;
    padding: 30px;
    border-radius: 0 0 0.5rem 0.5rem;
    border-top: 0;
  }

  /* Styling the ul element. */
  ul {
    display: flex;
    flex-wrap: wrap;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
    border-bottom: 1px solid #dee2e6;
  }

  /* Removing the space between the tabs. */
  li {
    margin-bottom: -1px;
  }

  /* Styling the tabs. */
  span {
    border: 1px solid transparent;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
    display: block;
    padding: 0.5rem 1rem;
    cursor: pointer;
  }

  /* Styling the tabs when the mouse is hovering over them. */
  span:hover {
    border-color: #e9ecef #e9ecef #dee2e6;
  }

  /* Styling the tabs when they are active. */
  li.active > span {
    color: #495057;
    background-color: #fff;
    border-color: #dee2e6 #dee2e6 #fff;
  }
</style>

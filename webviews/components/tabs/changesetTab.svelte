<script>
  import Select from "svelte-select";

  let originOrgList = ["Developer", "Trailhead"];

  let pkgName = "";
  let originOrg = "";

  function handleOriginSelect(event) {
    originOrg = event.detail;
  }

  function handleOriginClear() {
    originOrg = "";
  }
</script>

<div class="sfdxet-absolute-center">
  <label for="orgs">Choose the Origin ORG:</label>
  <br />
  <br />

  <div class="select-theme sfdxet-absolute-center">
    <Select
      id="orgs"
      items={originOrgList}
      data-type="origin"
      on:select={handleOriginSelect}
      on:clear={handleOriginClear}
    />
  </div>

  <br />
  <br />
  <br />
  <br />

  <label for="changeset">Change set/Package Name</label>
  <br />
  <br />

  <input
    class="sfdxet-absolute-center"
    name="changeset"
    placeholder="Insert..."
    bind:value={pkgName}
  />

  <br />
  <br />
  <br />

  <button class="buttons-sfdxet">Retrieve</button>
</div>

<style>
    input{
        background-color: #43434380;
        max-width: 150px;
        border-radius: 5px;
        margin-left: 15px;
    }

    .buttons-sfdxet {
        max-width: 100px;
        border-radius: 5px;
    }

    .sfdxet-absolute-center {
        position: absolute;
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
        text-align: center;
    }

    .select-theme {
        --background: #111c23;
        --borderRadius: 5px;
        --placeholderColor: white;
        --itemColor: white
        --itemIsActiveColor: black;
        --listBackground: #111c23;
        --borderHoverColor: white;
        --itemHoverColor: black;
        max-width: 150px;
    }
</style>

<script>
    import Select from 'svelte-select';

    let originOrgList = ['Developer', 'Trailhead'];
    let destinOrgList = ['Trailhead', 'Developer'];
	
	let pkgName = '';
	let originOrg = '';
	let destinOrg = '';

    function handleOriginSelect(event) {
        originOrg = event.detail;
	}
	
	function handleOriginClear() {
		originOrg = '';
	}

    function handleDestinSelect(event) {
        destinOrg = event.detail;
	}
	
	function handleDestinClear() {
		destinOrg = '';
	}
</script>

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

<div class="sfdxet-absolute-center">
    <label for="originOrg">Choose the Origin ORG:</label>
    <br/>
    <br/>

    <div class="select-theme sfdxet-absolute-center">
        <Select id="originOrg" items={originOrgList} data-type="origin" on:select={handleOriginSelect} on:clear={handleOriginClear}></Select>
    </div>

    <br/>
    <br/>
    <br/>
    <br/>

    <label for="destinOrg">Choose the Destin ORG:</label>
    <br/>
    <br/>

    <div class="select-theme sfdxet-absolute-center">
        <Select id="destinOrg" items={destinOrgList} data-type="destin" on:select={handleDestinSelect} on:clear={handleDestinClear}></Select>
    </div>

    <br/>
    <br/>
    <br/>
    <br/>

    <label for="changeset">Change set/Package Name</label>
    <br/>
    <br/>

    <input class="sfdxet-absolute-center" name="changeset" placeholder="Insert..." bind:value={pkgName}/>   

    <br/>
    <br/>
    <br/>
    
    <button class="buttons-sfdxet">Deploy</button>
</div>
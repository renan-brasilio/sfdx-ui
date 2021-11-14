<script>
    import Select from 'svelte-select';
    import CSS from '../../-helperFiles/GlobalCSS.svelte'

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

<div class="sfdxet-absolute-center">
    <label for="originOrg">Choose the Origin ORG:</label>
    <br/>
    <br/>

    <div class="sfdxet-select-theme sfdxet-absolute-center">
        <Select id="originOrg" items={originOrgList} data-type="origin" on:select={handleOriginSelect} on:clear={handleOriginClear}></Select>
    </div>

    <br/>
    <br/>
    <br/>
    <br/>

    <label for="destinOrg">Choose the Destin ORG:</label>
    <br/>
    <br/>

    <div class="sfdxet-select-theme sfdxet-absolute-center">
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
    
    <button class="sfdxet-buttons">Deploy</button>
</div>

<CSS />
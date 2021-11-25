<script>
    import Select from "svelte-select";
    import { mapInputVariables } from "../-helperFiles/GlobalStore";

    export let error = "";
    export let pList = [];
    export let sectionName = "";
    export let defaultVal = "";
    export let pIsMulti = false;

    function handleSelect(event, inputName, isMulti) {
        if(event.type === "select" && event.detail){
            if(isMulti){
                if($mapInputVariables[inputName]){
                    for(let i=0; i < event.detail.length; i++){
                        if(!$mapInputVariables[inputName].includes(event.detail[i].value)){
                            $mapInputVariables[inputName].push(event.detail[i].value);
                        }
                    }
                }else{
                    $mapInputVariables[inputName] = [];
                    $mapInputVariables[inputName].push(event.detail[0].value);
                }
            }else{
                $mapInputVariables[inputName] = event.detail.value;
            }
        }
    }

    function handleSelectClear(event, inputName, isMulti) {
        if(event.type === "clear"){
            if(isMulti){
                if($mapInputVariables[inputName]){
                    if(event.detail){
                        for(let i=0; i < $mapInputVariables[inputName].length; i++){
                            if($mapInputVariables[inputName][i].includes(event.detail.value)){
                                $mapInputVariables[inputName].splice(i, 1);
                                break;
                            }
                        }
                    }else{
                        for(let i=0; i < $mapInputVariables[inputName].length; i++){
                            $mapInputVariables[inputName].splice(i, 1);
                        }
                    }
                }
            }else{
                $mapInputVariables[inputName] = '';
            }
        }
    }
</script>

<div class="sfdxet-select-theme sfdxet-absolute-center {error}">
    <Select 
        id={sectionName + 'sel'} 
        items={pList} 
        on:select={e => { handleSelect(e, `${sectionName}`, {pIsMulti}) }} 
        on:clear={e => { handleSelectClear(e, `${sectionName}`, {pIsMulti}) }} 
        value={defaultVal}
        isMulti={pIsMulti}
    >
    </Select>
</div>
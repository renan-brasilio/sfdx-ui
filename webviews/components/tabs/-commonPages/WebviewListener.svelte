<script>
    import { onMount } from "svelte";
    
    // Store
    import { 
        lTARGETUSERNAME,
        mapCommand,
        mapForceShowSections,
        mapInformation,
        mapInputVariables,
        mapSectionValidation,
        mapShowSections,
        mapSpinner,
        mapTargetUsername,
        objSFDX,
        pickFolderType,
    } from "../-helperFiles/GlobalStore";

    export let fileName = "";
    export let commandType = "";
    export let showCommand = "";

    // Webview Listener
    onMount(() => {
        window.addEventListener("message", event => {
            const backReturn = event.data; // The json data that the extension sent
            switch (backReturn.type) {
                case "onConfirmRet":
                    if(backReturn.value === true){
                        callSFDX();
                    }else{
                        $mapSpinner.main = false;
                        $mapInformation.main = false;
                    }

                    break;
                case "folderUri":
                    $mapInputVariables[$pickFolderType] = backReturn.value[0].path;
                    break;
                case "fileUri":
                    $mapInputVariables[$pickFolderType] = backReturn.value[0].path;
                    $mapShowSections[$pickFolderType] = true;
                    break;
                case "aliasJSON":
                    for(const key in backReturn.value){
                        let option = {value: key, label: key};

                        $mapTargetUsername[key] = backReturn.value[key];
                        $lTARGETUSERNAME.push(option);

                        $mapShowSections.targetusernamespinner = false;
                    }
                    break;
                case "sfdxClosed":
                    if($mapShowSections){
                        for(const key in $mapShowSections){
                            $mapShowSections[key] = false;
                        }
                    }

                    if($mapSectionValidation){
                        for(const key in $mapSectionValidation){
                            $mapSectionValidation[key] = 0;
                        }
                    }

                    if($mapCommand[commandType]){
                        for(const key in $mapCommand[commandType]){
                            if(key !== fileName){
                                $mapCommand[commandType][key] = false;
                            }
                        }
                    }
                    
                    $mapSpinner.main = false;
                    $mapInformation.main = false;
                    $mapForceShowSections[commandType] = true;
                    $mapCommand[commandType][fileName] = true;
                    break;
            }
        });
    });

    function callSFDX(){
        tsvscode.postMessage({
            type: "onInfo",
            value: `Starting the Terminal + Script: ${showCommand}` 
        });

        tsvscode.postMessage($objSFDX);
    }
</script>
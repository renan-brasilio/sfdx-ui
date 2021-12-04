/**
 * @identifiers
 * d = Default value
 * l = List variable
 * i = Input variable
 * s = Show section boolean control variable
 * r = Validation variable
*/

let fileName = 'GlobalJS';
let showDebug = true;
export let collapse = false;

export let listValidation = ['sourcepath', 'manifest', 'metadata'];

// Tooltips
export let mapTooltips = {
	'collapseDoc': 'Click here to open/close the documentation.',
	'checkbox': 'Click here to select this option and see more details.',
	'documentation': 'Official documentation details.',
	'manuallyDefine': 'Define manually the path/file.'
};

export function handleSelect(event, inputName, isMulti) {
	if(event.type === "select" && event.detail){
		if(isMulti && event.detail){
			if($mapInputVariables.inputName){
				for(let i=0; i < event.detail.length; i++){
					if(!$mapInputVariables.inputName.includes(event.detail[i].value)){
						$mapInputVariables.inputName.push(event.detail[i].value);
					}
				}
			}else{
				$mapInputVariables.inputName = [];
				$mapInputVariables.inputName.push(event.detail[0].value);
			}
		}else{
			$mapInputVariables.inputName = event.detail.value;
		}
	}
}

export function handleSelectClear(event, inputName, isMulti) {
	if(event.type === "clear"){
		if(isMulti){
			if($mapInputVariables.inputName){
				if(event.detail){
					for(let i=0; i < $mapInputVariables.inputName.length; i++){
						if($mapInputVariables.inputName[i].includes(event.detail.value)){
							$mapInputVariables.inputName.splice(i, 1);
							break;
						}
					}
				}else{
					for(let i=0; i < $mapInputVariables.inputName.length; i++){
						$mapInputVariables.inputName.splice(i, 1);
					}
				}
			}
		}else{
			$mapInputVariables.inputName = '';
		}
	}
}

export function showFolderPick(type) {
	pickFolderType = type;

	tsvscode.postMessage({
		type: 'onShowFolderPick'
	});
}

export function onShowFilePick(type) {
	pickFileType = type;

	tsvscode.postMessage({
		type: 'onShowFilePick'
	});
}

export function globalContinue(){
	tsvscode.postMessage({
		type: "onConfirm",
		title: "This action will start the terminal with the selected options, Continue?",
		confirmLabel: "Continue",
		declineLabel: "Cancel" 
	});
}

export let dAPIVERSION = "";

export const lTESTLEVEL = [
	{value: 'NoTestRun', label: 'NoTestRun'},
	{value: 'RunLocalTests', label: 'RunLocalTests'},
	{value: 'RunAllTestsInOrg', label: 'RunAllTestsInOrg'},
];

export const lLOGLEVEL = [
	{value: 'trace', label: 'trace'},
	{value: 'debug', label: 'debug'},
	{value: 'info', label: 'info'},
	{value: 'warn', label: 'warn'},
	{value: 'error', label: 'error'},
	{value: 'fatal', label: 'fatal'},
	{value: 'TRACE', label: 'TRACE'},
	{value: 'DEBUG', label: 'DEBUG'},
	{value: 'INFO', label: 'INFO'},
	{value: 'WARN', label: 'WARN'},
	{value: 'ERROR', label: 'ERROR'},
	{value: 'FATAL', label: 'FATAL'},
];
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
export let listValidation = ['sourcepath', 'manifest', 'metadata'];

// Tooltips
export let mapTooltips = {
	'defaultSection': 'Check it to see more details and the documentation.'
};

// Selects lists
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

export const lTESTLEVEL = [
	{value: 'NoTestRun', label: 'NoTestRun'},
	{value: 'RunLocalTests', label: 'RunLocalTests'},
	{value: 'RunAllTestsInOrg', label: 'RunAllTestsInOrg'},
];

export const lAPIVERSION = [];
export let dAPIVERSION;

for(let i=8; i < 54; i++){
	if(i === 53){
		dAPIVERSION = i.toFixed(1);
	}

	lAPIVERSION.push({value: i.toFixed(1), label: i.toFixed(1)});
	
	if(i === 11){
		let j = i + .1;
		lAPIVERSION.push({value: j.toFixed(1), label: j.toFixed(1)});
	}
}

lAPIVERSION.reverse();

export function handleShowSections(event, sectionName){
	let methodName = 'handleShowSections()';
	
	if(showDebug){
		console.info(fileName + '.' + methodName + ' - event: ');
		console.info(event);
		console.info(fileName + '.' + methodName + ' - sectionName: ' + sectionName);
	}
	
	if(event.target.checked === true){
		let selected;
		
		if($mapSectionValidation){
			for(let key in $mapSectionValidation){
				if($mapSectionValidation.key === 1){
					selected = key;
	
					$mapCheckbox[sectionName] = false;
	
					tsvscode.postMessage({
						type: 'onError',
						value: `You already selected: ${selected}, Select only one between: SOURCEPATH, MANIFEST or METADATA` 
					});
	
					return;
				}
			}
	
			if($mapSectionValidation[sectionName] === 0){
				$mapSectionValidation[sectionName] = 1;
	
				$mapShowSections[sectionName] = event.target.checked;
			}else{
				$mapShowSections[sectionName] = event.target.checked;
			}
		}else{
			$mapShowSections[sectionName] = event.target.checked;
		}
	}else{
		$mapShowSections[sectionName] = event.target.checked;

		if($mapSectionValidation[sectionName]){
			$mapSectionValidation[sectionName] = 0;
		}
	}
}

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
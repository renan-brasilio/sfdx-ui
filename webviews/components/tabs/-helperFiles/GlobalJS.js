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
	'defaultSection': 'Check it to see more details and the documentation.',
	'tJSON2': 'Open the folder explorer to select the folder output.',
	'tJSON2': 'Open the folder explorer to select the folder output.',
	'tJSON3': 'Manually define the folder path.',
	'tLOGLEVEL': 'Optional: The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log.',
	'tTARGETUSERNAME': 'Optional: A username or alias for the target org. Overrides the default target org.',
	'tAPIVERSION': 'Optional: Override the API version used for API requests made by this command.',
	'tSOURCEPATH': '*1/3 Required: A comma-separated list of file paths for source to retrieve from the org. The supplied paths can be to a single file (in which case the operation is applied to only one file) or to a folder (in which case the operation is applied to all source files in the directory and its sub-directories). **If you specify this parameter, don’t specify --manifest or --metadata.',
	'tSOURCEPATH2': 'Manually define the folder path.',
	'tWAIT': 'Optional: Number of minutes to wait for the command to complete and display results to the terminal window. If the command continues to run after the wait period, the CLI returns control of the terminal window to you.',
	'tMANIFEST': '*1/3 Required: The complete path for the manifest (package.xml) file that specifies the components to retrieve. **If you specify this parameter, don’t specify --metadata or --sourcepath.',
	'tMETADATA': '*1/3 Required: A comma-separated list of names of metadata components to retrieve from the org. **If you specify this parameter, don’t specify --manifest or --sourcepath.',
	'tMETADATA2': 'Example: ApexClass, ApexTrigger',
	'tPACKAGENAMES': 'Optional: A comma-separated list of packages to retrieve.',
	'tVERBOSE': 'Optional: Emit additional command output to stdout.',
	'tROOTDIR': 'Optional: A source directory other than the default package to convert.',
	'tROOTDIR2': 'Manually define the root folder path.',
	'tOUTPUTDIR': 'Optional: Output directory to store the Metadata API–formatted files in. Default: metadataPackage_1636067288937',
	'tOUTPUTDIR2': 'Manually define the output folder path.',
	'tPACKAGENAME': 'Optional: Name of the package to associate with the metadata-formatted files.',
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
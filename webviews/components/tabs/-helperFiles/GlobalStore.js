import { writable } from 'svelte/store';

export const mapInputVariables = writable({});
export const mapTargetUsername = writable({});
export const mapErrors = writable({});
export const mapSpinner = writable({});
export const mapInformation = writable({});
export const mapMainValues = writable({});
export const mapForceShowSections = writable({});
export const mapSource = writable({});
export const mapApex = writable({});
export const mapCommand = writable({});
export const mapLastValue = writable({});
export const mapRequired = writable({});
export const mapSectionValidation = writable({});
export const mapDocument = writable({});
export const mapSFDX = writable({});
export const lTARGETUSERNAME = writable([]);

export const mapShowSections = writable({
	spinner: true,
	button: false,
	information: false
});

export let objSFDX = writable({
	type: "onTerminalSFDX"
});

export const showDebug = writable(false);
export const pickFolderType = writable(0);
export const pickFileType = writable(0);
export const lastValueForce = writable(0);
export const lastValueSource = writable(0);
export const modal = writable(null);
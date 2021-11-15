import { writable } from 'svelte/store';

export const mapInputVariables = writable({});
export const mapTargetUsername = writable({});
export const mapErrors = writable({});
export const mapSpinner = writable({});
export const mapInformation = writable({});
export const mapMainValues = writable({});
export const mapForceShowSections = writable({});
export const mapSource = writable({});
export const mapLastValue = writable({});
export const mapRequired = writable({});
export const lTARGETUSERNAME = writable([]);

export const mapShowSections = writable({
	spinner: true,
	button: false,
	information: false
});

export const mapSectionValidation = writable({
	sourcepath: 0,
	manifest: 0,
	metadata: 0
});

export const showDebug = writable(false);
export const pickFolderType = writable(0);
export const pickFileType = writable(0);
export const lastValueForce = writable(0);
export const lastValueSource = writable(0);
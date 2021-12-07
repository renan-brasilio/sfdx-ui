export const force = [
    {value: "analytics", label: "analytics"},
    {value: "apex", label: "apex"},
    {value: "cmdt", label: "cmdt"},
    // {value: "community", label: "community", selectable: false},
    // {value: "data", label: "data", selectable: false},
    // {value: "lightning", label: "lightning", selectable: false},
    // {value: "limits", label: "limits", selectable: false},
    // {value: "mdapi", label: "mdapi", selectable: false},
    // {value: "org", label: "org", selectable: false},
    // {value: "package", label: "package", selectable: false},
    // {value: "package1", label: "package1", selectable: false},
    // {value: "project", label: "project", selectable: false},
    // {value: "schema", label: "schema", selectable: false},
    // {value: "source", label: "source"},
    // {value: "staticresource", label: "staticresource", selectable: false},
    // {value: "user", label: "user", selectable: false},
    // {value: "visualforce", label: "visualforce", selectable: false},
];

export const analytics = [
    {value: "template:create", label: "template:create"},
];

export const apex = [
    {value: "class:create", label: "class:create"},
    {value: "execute", label: "execute"},
    {value: "log:get", label: "log:get"},
    {value: "log:list", label: "log:list"},
    {value: "log:tail", label: "log:tail"},
    {value: "test:report", label: "test:report"},
    {value: "test:run", label: "test:run"},
    {value: "trigger:create", label: "trigger:create"},
];

export const cmdt = [
    {value: "create", label: "create"},
    {value: "field:create", label: "field:create"},
    {value: "generate", label: "generate"},
    // {value: "record:create", label: "record:create"},
    // {value: "record:insert", label: "record:insert"},
];

export const source = [
    {value: "retrieve", label: "force:source:retrieve"},
    {value: "convert", label: "force:source:convert"},
    {value: "delete", label: "force:source:delete"},
    {value: "deploy", label: "force:source:deploy"},
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

export const lTESTLEVEL = [
	{value: 'NoTestRun', label: 'NoTestRun'},
	{value: 'RunLocalTests', label: 'RunLocalTests'},
	{value: 'RunAllTestsInOrg', label: 'RunAllTestsInOrg'},
];

export const lTEMPLATE = [
    {value: "ApexException", label: "ApexException"},
    {value: "ApexUnitTest", label: "ApexUnitTest"},
    {value: "DefaultApexClass", label: "DefaultApexClass"},
    {value: "InboundEmailService", label: "InboundEmailService"},
];

export const lDEBUGLEVEL = [
    {value: "error", label: "error"},
    {value: "warn", label: "warn"},
    {value: "info", label: "info"},
    {value: "debug", label: "debug"},
    {value: "trace", label: "trace"},
    {value: "fatal", label: "fatal"},
];

export const lRESULTFORMAT = [
    {value: "human", label: "human"},
    {value: "tap", label: "tap"},
    {value: "junit", label: "junit"},
    {value: "json", label: "json"},
];

export const lTRIGGEREVENTS = [
    {value: "before insert", label: "before insert"},
    {value: "before update", label: "before update"},
    {value: "before delete", label: "before delete"},
    {value: "before merge", label: "before merge"},
    {value: "before upsert", label: "before upsert"},
    {value: "before undelete", label: "before undelete"},
    {value: "after insert", label: "after insert"},
    {value: "after update", label: "after update"},
    {value: "after delete", label: "after delete"},
    {value: "after merge", label: "after merge"},
    {value: "after upsert", label: "after upsert"},
    {value: "after undelete", label: "after undelete"},
];

export const lVISIBILITY = [
    {value: "PackageProtected", label: "PackageProtected"},
    {value: "Protected", label: "Protected"},
    {value: "Public", label: "Public"},
];

export const lFIELDTYPE = [
    {value: "Checkbox", label: "Checkbox"},
    {value: "Date", label: "Date"},
    {value: "DateTime", label: "DateTime"},
    {value: "Email", label: "Email"},
    {value: "Number", label: "Number"},
    {value: "Percent", label: "Percent"},
    {value: "Phone", label: "Phone"},
    {value: "Picklist", label: "Picklist"},
    {value: "Text", label: "Text"},
    {value: "TextArea", label: "TextArea"},
    {value: "LongTextArea", label: "LongTextArea"},
    {value: "Url", label: "Url"},
];
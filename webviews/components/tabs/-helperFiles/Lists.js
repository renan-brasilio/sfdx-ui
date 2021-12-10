export const force = [
    {value: "analytics", label: "analytics"},
    {value: "apex", label: "apex"},
    {value: "cmdt", label: "cmdt"},
    {value: "community", label: "community"},
    {value: "data", label: "data"},
    // {value: "lightning", label: "lightning"},
    // {value: "limits", label: "limits"},
    // {value: "mdapi", label: "mdapi"},
    // {value: "org", label: "org"},
    // {value: "package", label: "package"},
    // {value: "package1", label: "package1"},
    // {value: "project", label: "project"},
    // {value: "schema", label: "schema"},
    // {value: "source", label: "source"},
    // {value: "staticresource", label: "staticresource"},
    // {value: "user", label: "user"},
    // {value: "visualforce", label: "visualforce"},
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
    {value: "record:create", label: "record:create"},
    {value: "record:insert", label: "record:insert"},
];

export const data = [
    {value: "bulk:delete", label: "bulk:delete"},
    // {value: "bulk:status", label: "bulk:status"},
    // {value: "bulk:upsert", label: "bulk:upsert"},
    // {value: "record:create", label: "record:create"},
    // {value: "record:delete", label: "record:delete"},
    // {value: "record:get", label: "record:get"},
    // {value: "record:update", label: "record:update"},
    // {value: "soql:query", label: "soql:query"},
    // {value: "tree:export", label: "tree:export"},
    // {value: "tree:import", label: "tree:import"},
];

export const community = [
    {value: "create", label: "create"},
    {value: "publish", label: "publish"},
    {value: "template:list", label: "template:list"},
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

export const lBoolean = [
    {value: "true", label: "true"},
    {value: "false", label: "false"},
];
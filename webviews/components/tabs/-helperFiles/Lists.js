export const force = [
    {value: "analytics", label: "analytics"},
    {value: "apex", label: "apex"},
    // {value: "cmdt", label: "cmdt", selectable: false},
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
    {value: "source", label: "source"},
    // {value: "staticresource", label: "staticresource", selectable: false},
    // {value: "user", label: "user", selectable: false},
    // {value: "visualforce", label: "visualforce", selectable: false}
];

export const analytics = [
    {value: "template:create", label: "template:create"}
];

export const apex = [
    {value: "class:create", label: "class:create"},
    {value: "execute", label: "execute"},
    {value: "log:get", label: "log:get"},
    {value: "log:list", label: "log:list"},
    {value: "log:tail", label: "log:tail"},
    {value: "test:report", label: "test:report"},
    {value: "test:run", label: "test:run"},
    {value: "trigger:create", label: "trigger:create"}
];

export const source = [
    {value: "retrieve", label: "force:source:retrieve"},
    {value: "convert", label: "force:source:convert"},
    {value: "delete", label: "force:source:delete"},
    {value: "deploy", label: "force:source:deploy"}
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
    {value: "InboundEmailService", label: "InboundEmailService"}
];
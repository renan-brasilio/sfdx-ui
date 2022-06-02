export const force = [
  { value: "analytics", label: "analytics" },
  { value: "apex", label: "apex" },
  { value: "cmdt", label: "cmdt" },
  { value: "community", label: "community" },
  { value: "data", label: "data" },
  { value: "lightning", label: "lightning" },
  { value: "limits", label: "limits" },
  { value: "mdapi", label: "mdapi" },
  { value: "org", label: "org" },
  {value: "package", label: "package"},
  {value: "package1", label: "package1"},
  // {value: "project", label: "project"},
  // {value: "schema", label: "schema"},
  { value: "source", label: "source" },
  {value: "staticresource", label: "staticresource"},
  {value: "user", label: "user"},
  {value: "visualforce", label: "visualforce"},
];

export const analytics = [
  { value: "template:create", label: "template:create" },
];

export const apex = [
  { value: "class:create", label: "class:create" },
  { value: "execute", label: "execute" },
  { value: "log:get", label: "log:get" },
  { value: "log:list", label: "log:list" },
  { value: "log:tail", label: "log:tail" },
  { value: "test:report", label: "test:report" },
  { value: "test:run", label: "test:run" },
  { value: "trigger:create", label: "trigger:create" },
];

export const cmdt = [
  { value: "create", label: "create" },
  { value: "field:create", label: "field:create" },
  { value: "generate", label: "generate" },
  { value: "record:create", label: "record:create" },
  { value: "record:insert", label: "record:insert" },
];

export const data = [
  { value: "bulk:delete", label: "bulk:delete" },
  { value: "bulk:status", label: "bulk:status" },
  { value: "bulk:upsert", label: "bulk:upsert" },
  { value: "record:create", label: "record:create" },
  { value: "record:delete", label: "record:delete" },
  { value: "record:get", label: "record:get" },
  { value: "record:update", label: "record:update" },
  { value: "soql:query", label: "soql:query" },
  { value: "tree:export", label: "tree:export" },
  { value: "tree:import", label: "tree:import" },
];

export const community = [
  { value: "create", label: "create" },
  { value: "publish", label: "publish" },
  { value: "template:list", label: "template:list" },
];

export const lightning = [
  { value: "app:create", label: "app:create" },
  { value: "component:create", label: "component:create" },
  { value: "event:create", label: "event:create" },
  { value: "interface:create", label: "interface:create" },
  { value: "lwc:test:create", label: "lwc:test:create" },
  { value: "lwc:test:run", label: "lwc:test:run" },
  { value: "lwc:test:setup", label: "lwc:test:setup" },
  { value: "test:create", label: "test:create" },
];

export const limits = [
  { value: "api:display", label: "api:display" },
  { value: "recordcounts:display", label: "recordcounts:display" },
];

export const mdapi = [
  { value: "beta:convert", label: "beta:convert" },
  { value: "convert", label: "convert" },
  { value: "deploy", label: "deploy" },
  { value: "deploy:cancel", label: "deploy:cancel" },
  { value: "deploy:report", label: "deploy:report" },
  { value: "describemetadata", label: "describemetadata" },
  { value: "listmetadata", label: "listmetadata" },
  { value: "retrieve", label: "retrieve" },
  { value: "retrieve:report", label: "retrieve:report" },
];

export const org = [
  { value: "clone", label: "clone" },
  { value: "create", label: "create" },
  { value: "delete", label: "delete" },
  { value: "display", label: "display" },
  { value: "list", label: "list" },
  { value: "open", label: "open" },
  { value: "shape:create", label: "shape:create (Beta)" },
  { value: "shape:delete", label: "shape:delete (Beta)" },
  { value: "shape:list", label: "shape:list (Beta)" },
  { value: "snapshot:create", label: "snapshot:create (Pilot)" },
  { value: "snapshot:delete", label: "snapshot:delete (Pilot)" },
  { value: "snapshot:delete", label: "snapshot:delete (Pilot)" },
  { value: "snapshot:get", label: "snapshot:get (Pilot)" },
  { value: "snapshot:list", label: "snapshot:list (Pilot)" },
  { value: "status", label: "status" },
];

export const lPackage = [
  { value: "create", label: "create" },
  { value: "delete", label: "delete" },
  { value: "install", label: "install" },
  { value: "install:report", label: "install:report" },
  { value: "installed:list", label: "installed:list" },
  { value: "list", label: "list" },
  { value: "uninstall", label: "uninstall" },
  { value: "uninstall:report", label: "uninstall:report" },
  { value: "update", label: "update" },
  { value: "version:create", label: "version:create" },
  { value: "version:create:list", label: "version:create:list" },
  { value: "version:create:report", label: "version:create:report" },
  { value: "version:delete", label: "version:delete" },
  { value: "version:displayancestry", label: "version:displayancestry" },
  { value: "version:list", label: "version:list" },
  { value: "version:promote", label: "version:promote" },
  { value: "version:report", label: "version:report" },
  { value: "version:update", label: "version:update" },
];

export const package1 = [
  { value: "version:create", label: "version:create" },
  // { value: "version:create:get", label: "version:create:get" },
  // { value: "version:display", label: "version:display" },
  // { value: "version:list", label: "version:list" },
];

export const source = [
  { value: "beta:pull", label: "beta:pull" },
  { value: "beta:push", label: "beta:push" },
  { value: "beta:status", label: "beta:status" },
  { value: "beta:tracking:clear", label: "beta:tracking:clear" },
  { value: "beta:tracking:reset", label: "beta:tracking:reset" },
  { value: "convert", label: "convert" },
  { value: "delete", label: "delete" },
  { value: "deploy", label: "deploy" },
  { value: "deploy:cancel", label: "deploy:cancel" },
  { value: "deploy:report", label: "deploy:report" },
  { value: "ignored:list", label: "ignored:list" },
  { value: "manifest:create", label: "manifest:create" },
  { value: "open", label: "open" },
  { value: "pull", label: "pull" },
  { value: "push", label: "push" },
  { value: "retrieve", label: "retrieve" },
  { value: "status", label: "status" },
  { value: "tracking:clear", label: "tracking:clear" },
  { value: "tracking:reset", label: "tracking:reset" },
];

export const staticresource = [
  { value: "create", label: "create" },
];

export const user = [
  { value: "create", label: "create" },
  { value: "display", label: "display" },
  { value: "list", label: "list" },
  { value: "password:generate", label: "password:generate" },
  { value: "permset:assign", label: "permset:assign" },
  { value: "permsetlicense:assign", label: "permsetlicense:assign" },
];

export const visualforce = [
  { value: "component:create", label: "component:create" },
  { value: "page:create", label: "page:create" },
];

export const lLOGLEVEL = [
  { value: "trace", label: "trace" },
  { value: "debug", label: "debug" },
  { value: "info", label: "info" },
  { value: "warn", label: "warn" },
  { value: "error", label: "error" },
  { value: "fatal", label: "fatal" },
  { value: "TRACE", label: "TRACE" },
  { value: "DEBUG", label: "DEBUG" },
  { value: "INFO", label: "INFO" },
  { value: "WARN", label: "WARN" },
  { value: "ERROR", label: "ERROR" },
  { value: "FATAL", label: "FATAL" },
];

export const lTEMPLATE = [
  { value: "ApexException", label: "ApexException" },
  { value: "ApexUnitTest", label: "ApexUnitTest" },
  { value: "DefaultApexClass", label: "DefaultApexClass" },
  { value: "InboundEmailService", label: "InboundEmailService" },
];

export const lDEBUGLEVEL = [
  { value: "error", label: "error" },
  { value: "warn", label: "warn" },
  { value: "info", label: "info" },
  { value: "debug", label: "debug" },
  { value: "trace", label: "trace" },
  { value: "fatal", label: "fatal" },
];

export const lRESULTFORMAT = [
  { value: "human", label: "human" },
  { value: "tap", label: "tap" },
  { value: "junit", label: "junit" },
  { value: "json", label: "json" },
];

export const lTRIGGEREVENTS = [
  { value: "before insert", label: "before insert" },
  { value: "before update", label: "before update" },
  { value: "before delete", label: "before delete" },
  { value: "before merge", label: "before merge" },
  { value: "before upsert", label: "before upsert" },
  { value: "before undelete", label: "before undelete" },
  { value: "after insert", label: "after insert" },
  { value: "after update", label: "after update" },
  { value: "after delete", label: "after delete" },
  { value: "after merge", label: "after merge" },
  { value: "after upsert", label: "after upsert" },
  { value: "after undelete", label: "after undelete" },
];

export const lVISIBILITY = [
  { value: "PackageProtected", label: "PackageProtected" },
  { value: "Protected", label: "Protected" },
  { value: "Public", label: "Public" },
];

export const lFIELDTYPE = [
  { value: "Checkbox", label: "Checkbox" },
  { value: "Date", label: "Date" },
  { value: "DateTime", label: "DateTime" },
  { value: "Email", label: "Email" },
  { value: "Number", label: "Number" },
  { value: "Percent", label: "Percent" },
  { value: "Phone", label: "Phone" },
  { value: "Picklist", label: "Picklist" },
  { value: "Text", label: "Text" },
  { value: "TextArea", label: "TextArea" },
  { value: "LongTextArea", label: "LongTextArea" },
  { value: "Url", label: "Url" },
];

export const lBoolean = [
  { value: "true", label: "true" },
  { value: "false", label: "false" },
];

export let lTemplate = {
  lightning: {
    app_create: [
      { value: "DefaultLightningApp", label: "DefaultLightningApp" },
    ],
    component_create: [
      { value: "default", label: "default" },
      { value: "analyticsDashboard", label: "analyticsDashboard" },
      {
        value: "analyticsDashboardWithStep",
        label: "analyticsDashboardWithStep",
      },
    ],
    event_create: [
      { value: "DefaultLightningEvt", label: "DefaultLightningEvt" },
    ],
    interface_create: [
      { value: "DefaultLightningIntf", label: "DefaultLightningIntf" },
    ],
    test_create: [
      { value: "DefaultLightningTest", label: "DefaultLightningTest" },
    ],
  },
};

export const lTYPE = {
  lightning: {
    component_create: [
      { value: "aura", label: "aura" },
      { value: "lwc", label: "lwc" },
    ],
  },
  org: {
    clone: [{ value: "sandbox", label: "sandbox" }],
    create: [
      { value: "scratch", label: "scratch" },
      { value: "sandbox", label: "sandbox" },
    ],
  },
};

export const lTESTLEVEL = {
  apex: {
    test_run: [
      { value: "NoTestRun", label: "NoTestRun" },
      { value: "RunLocalTests", label: "RunLocalTests" },
      { value: "RunAllTestsInOrg", label: "RunAllTestsInOrg" },
    ],
  },
  mdapi: {
    deploy: [
      { value: "NoTestRun", label: "NoTestRun" },
      { value: "RunSpecifiedTests", label: "RunSpecifiedTests" },
      { value: "RunLocalTests", label: "RunLocalTests" },
      { value: "RunAllTestsInOrg", label: "RunAllTestsInOrg" },
    ],
  },
  source: {
    delete: [
      { value: "NoTestRun", label: "NoTestRun" },
      { value: "RunLocalTests", label: "RunLocalTests" },
      { value: "RunAllTestsInOrg", label: "RunAllTestsInOrg" },
    ],
    deploy: [
      { value: "NoTestRun", label: "NoTestRun" },
      { value: "RunSpecifiedTests", label: "RunSpecifiedTests" },
      { value: "RunLocalTests", label: "RunLocalTests" },
      { value: "RunAllTestsInOrg", label: "RunAllTestsInOrg" },
    ],
  },
};

export const lMANIFESTTYPE = [
  { value: "pre", label: "pre" },
  { value: "post", label: "post" },
  { value: "destroy", label: "destroy" },
  { value: "package", label: "package" },
];

export const lPACKAGETYPE = [
  { value: "Managed", label: "Managed" },
  { value: "Unlocked", label: "Unlocked" },
];

export const lAPEXCOMPILE = [
  { value: "all", label: "all" },
  { value: "package", label: "package" },
];

export const lSECURITYTYPE = [
  { value: "AllUsers", label: "AllUsers" },
  { value: "AdminsOnly", label: "AdminsOnly" },
];

export const lUPGRADETYPE = [
  { value: "DeprecateOnly", label: "DeprecateOnly" },
  { value: "Mixed", label: "Mixed" },
  { value: "Delete", label: "Delete" },
];

export const lSTATUS = [
  { value: "Queued", label: "Queued" },
  { value: "InProgress", label: "InProgress" },
  { value: "Success", label: "Success" },
  { value: "Error", label: "Error" },
];

export const lCONTENTTYPE = [
  { value: "audio/aac", label: "audio/aac" },
  { value: "application/x-abiword", label: "application/x-abiword" },
  { value: "application/octet-stream", label: "application/octet-stream" },
  { value: "video/x-msvideo", label: "video/x-msvideo" },
  { value: "application/vnd.amazon.ebook", label: "application/vnd.amazon.ebook" },
  { value: "application/octet-stream", label: "application/octet-stream" },
  { value: "application/x-bzip", label: "application/x-bzip" },
  { value: "application/x-bzip2", label: "application/x-bzip2" },
  { value: "application/x-csh", label: "application/x-csh" },
  { value: "text/css", label: "text/css" },
  { value: "text/csv", label: "text/csv" },
  { value: "application/msword", label: "application/msword" },
  { value: "application/vnd.ms-fontobject", label: "application/vnd.ms-fontobject" },
  { value: "application/epub+zip", label: "application/epub+zip" },
  { value: "image/gif", label: "image/gif" },
  { value: "text/html", label: "text/html" },
  { value: "image/x-icon", label: "image/x-icon" },
  { value: "text/calendar", label: "text/calendar" },
  { value: "application/java-archive", label: "application/java-archive" },
  { value: "image/jpeg", label: "image/jpeg" },
  { value: "application/javascript", label: "application/javascript" },
  { value: "application/json", label: "application/json" },
  { value: "audio/midi", label: "audio/midi" },
  { value: "video/mpeg", label: "video/mpeg" },
  { value: "application/vnd.apple.installer+xml", label: "application/vnd.apple.installer+xml" },
  { value: "application/vnd.oasis.opendocument.presentation", label: "application/vnd.oasis.opendocument.presentation" },
  { value: "application/vnd.oasis.opendocument.spreadsheet", label: "application/vnd.oasis.opendocument.spreadsheet" },
  { value: "application/vnd.oasis.opendocument.text", label: "application/vnd.oasis.opendocument.text" },
  { value: "audio/ogg", label: "audio/ogg" },
  { value: "video/ogg", label: "video/ogg" },
  { value: "application/ogg", label: "application/ogg" },
  { value: "font/otf", label: "font/otf" },
  { value: "image/png", label: "image/png" },
  { value: "application/pdf", label: "application/pdf" },
  { value: "application/vnd.ms-powerpoint", label: "application/vnd.ms-powerpoint" },
  { value: "application/x-rar-compressed", label: "application/x-rar-compressed" },
  { value: "application/rtf", label: "application/rtf" },
  { value: "application/x-sh", label: "application/x-sh" },
  { value: "image/svg+xml", label: "image/svg+xml" },
  { value: "application/x-shockwave-flash", label: "application/x-shockwave-flash" },
  { value: "application/x-tar", label: "application/x-tar" },
  { value: "image/tiff", label: "image/tiff" },
  { value: "application/typescript", label: "application/typescript" },
  { value: "font/ttf", label: "font/ttf" },
  { value: "application/vnd.visio", label: "application/vnd.visio" },
  { value: "audio/x-wav", label: "audio/x-wav" },
  { value: "audio/webm", label: "audio/webm" },
  { value: "video/webm", label: "video/webm" },
  { value: "image/webp", label: "image/webp" },
  { value: "font/woff", label: "font/woff" },
  { value: "font/woff2", label: "font/woff2" },
  { value: "application/xhtml+xml", label: "application/xhtml+xml" },
  { value: "application/vnd.ms-excel", label: "application/vnd.ms-excel" },
  { value: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", label: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" },
  { value: "application/xml", label: "application/xml" },
  { value: "application/vnd.mozilla.xul+xml", label: "application/vnd.mozilla.xul+xml" },
  { value: "application/zip", label: "application/zip" },
  { value: "video/3gpp", label: "video/3gpp" },
  { value: "audio/3gpp", label: "audio/3gpp" },
  { value: "video/3gpp2", label: "video/3gpp2" },
  { value: "audio/3gpp2", label: "audio/3gpp2" },
  { value: "application/x-7z-compressed", label: "application/x-7z-compressed" },
];

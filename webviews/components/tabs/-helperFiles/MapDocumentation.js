export let mapDoc = {
    loglevel: {
        type: `<b><i>Optional</i></b>`,
        body: `
            <br/><br/>            
            The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log.
            <br/><br/>
            Type: enum<br/>
            Permissible values are: trace, debug, info, warn, error, fatal, TRACE, DEBUG, INFO, WARN, ERROR, FATAL<br/>
            Default value: warn
        `
    },
    classname: {
        type: `<b>Required</b>`,
        body: `
            <br/><br/>
            The name of the new Apex class. The name can be up to 40 characters and must start with a letter.<br/><br/>
            Type: string
        `
    },
    templateClass: {
        type: `<b><i>Optional</i></b>`,
        body: `
            <br/><br/>
            The template to use to create the file. Supplied parameter values or default values are filled into a copy of the template.
            <br/><br/>
            Type: string
            <br/>
            Permissible values are: ApexException, ApexUnitTest, DefaultApexClass, InboundEmailService<br/>
            Default value: DefaultApexClass
        `
    },
    templateTrigger: {
        type: `<b><i>Optional</i></b>`,
        body: `
            <br/><br/>
            The template to use to create the file. Supplied parameter values or default values are filled into a copy of the template.
            <br/><br/>
            Type: string
            <br/>
            Permissible values are: ApexTrigger<br/>
            Default value: ApexTrigger
        `
    },
    outputdir: {
        type: `<b><i>Optional</i></b>`,
        body: `
            <br/><br/>
            A source directory other than the default package to convert.
            <br/><br/>
            Type: directory
        `
    },
    targetusername: {
        type: `<b><i>Optional</i></b>`,
        body: `
            <br/><br/>            
            A username or alias for the target org. Overrides the default target org.
            <br/><br/> 
            Type: string
        `
    },
    apiversion: {
        type: `<b><i>Optional</i></b>`,
        body: `
            <br/><br/>
            Override the API version used for API requests made by this command.
            <br/><br/>
            Type: string
        `
    },
    apexcodefile: {
        type: `<b><i>Optional</i></b>`,
        body: `
            <br/><br/>
            Path to a local file that contains Apex code.
            <br/><br/>
            Type: filepath
        `
    },
    number: {
        type: `<b><i>Optional</i></b>`,
        body: `
            <br/><br/>
            Number of most recent logs to display.
            <br/><br/>
            Type: number
        `
    },
    logid: {
        type: `<b><i>Optional</i></b>`,
        body: `
            <br/><br/>
            Id of the log to display.<br/><br/>
            Type: id
        `
    },
    color: {
        type: `<b><i>Optional</i></b>`,
        body: `
            <br/><br/>
            Applies default colors to noteworthy log lines.<br/><br/>
            Type: boolean
        `
    },
    skiptraceflag: {
        type: `<b><i>Optional</i></b>`,
        body: `
            <br/><br/>
            Skips trace flag setup. Assumes that a trace flag and debug level are fully set up.<br/><br/>
            Type: boolean
        `
    },
    debuglevel: {
        type: `<b><i>Optional</i></b>`,
        body: `
            <br/><br/>
            Debug level to set on the DEVELOPER_LOG trace flag for your user.<br/><br/>
            Type: string
        `
    },
    json: {
        type: `<b><i>Optional</i></b>`,
        body: `
            <br/><br/>
            Format output as JSON.<br/><br/>
            Type: boolean
        `
    },
    advanced: {
        type: `<b><i>Optional</i></b>`,
        body: `
            <br/><br/>
            Here you can insert any extra or manual tags.<br/><br/>
            Type: string
        `
    },
    wait: {
        type: `<b><i>Optional</i></b>`,
        body: `
            <br/><br/>
            Sets the streaming client socket timeout in minutes; specify a longer wait time if timeouts occur frequently.<br/><br/>
            Type: string
        `
    },
    verbose: {
        type: `<b><i>Optional</i></b>`,
        body: `
            <br/><br/>
            Emit additional command output to stdout.<br/><br/>
            Type: boolean
        `
    },
    codecoverage: {
        type: `<b><i>Optional</i></b>`,
        body: `
            <br/><br/>
            Retrieves code coverage results.<br/><br/>
            Type: boolean
        `
    },
    resultformat: {
        type: `<b><i>Optional</i></b>`,
        body: `
            <br/><br/>
            Permissible values are: human, tap, junit, json.<br/><br/>
            Type: enum
        `
    },
    testrunid: {
        type: `<b>Required</b>`,
        body: `
            <br/><br/>
            The ID of the test run.<br/><br/>
            Type: string
        `
    },
    classnames: {
        type: `<b>Required 1/3</b>`,
        body: `
            <br/><br/>
            Comma-separated list of Apex test class names to run; if you select --classnames, you can't specify --suitenames or --tests.<br/><br/>
            Type: string
        `
    },
    testlevel: {
        type: `<b><i>Optional</i></b>`,
        body: `
            <br/><br/>
            Specifies which tests to run, using one of these TestLevel enum values:.<br/><br/>
            Type: enum<br/>
            Permissible values are: RunLocalTests, RunAllTestsInOrg, RunSpecifiedTests
        `
    },
    suitenames: {
        type: `<b>Required 1/3</b>`,
        body: `
            <br/><br/>
            Comma-separated list of Apex test suite names to run; if you select --suitenames, you can't specify --classnames or --tests.<br/><br/>
            Type: string
        `
    },
    tests: {
        type: `<b>Required 1/3</b>`,
        body: `
            <br/><br/>
            Comma-separated list of Apex test class names or IDs and, if applicable, test methods to run; if you specify --tests, you can't specify --classnames or --suitenames.<br/><br/>
            Type: string
        `
    },
    synchronous: {
        type: `<b><i>Optional</i></b>`,
        body: `
            <br/><br/>
            Runs test methods from a single Apex class synchronously; if not specified, tests are run ansynchronously.<br/><br/>
            Type: boolean
        `
    },
    detailedcoverage: {
        type: `<b><i>Optional</i></b>`,
        body: `
            <br/><br/>
            Display detailed code coverage per test.<br/><br/>
            Type: boolean
        `
    },
    sobject: {
        type: `<b><i>Optional</i></b>`,
        body: `
            <br/><br/>
            The sObject to create an Apex trigger on.<br/><br/>
            Type: string
        `
    },
    triggerevents: {
        type: `<b><i>Optional</i></b>`,
        body: `
            <br/><br/>
            The events that cause the trigger to fire.<br/><br/>
            Type: array<br/>
            Default value: before insert
        `
    },
    triggername: {
        type: `<b>Required</b>`,
        body: `
            <br/><br/>
            The name of the new Apex trigger. The name can be up to 40 characters and must start with a letter.<br/><br/>
            Type: string
        `
    },
    templatename: {
        type: `<b>Required</b>`,
        body: `
            <br/><br/>
            The name of the Analytics template.<br/><br/>
            Type: string
        `
    },
    typename: {
        type: `<b>Required</b>`,
        body: `
            <br/><br/>
            The unique name of the object in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores.<br/><br/>
            Type: string
        `
    },
    label: {
        type: `<b><i>Optional</i></b>`,
        body: `
            <br/><br/>
            A label for the custom metadata type.<br/><br/>
            Type: string
        `
    },
    plurallabel: {
        type: `<b><i>Optional</i></b>`,
        body: `
            <br/><br/>
            The plural version of the label value. If this flag is missing or blank, the singular label is used as the plural label.<br/><br/>
            Type: string
        `
    },
    visibility: {
        type: `<b><i>Optional</i></b>`,
        body: `
            <br/><br/>
            The visibility of the custom metadata type.<br/><br/>
            Type: enum<br/>
            Permissible values are: PackageProtected, Protected, Public<br/>
            Default value: Public
        `
    },
    fieldname: {
        type: `<b>Required</b>`,
        body: `
            <br/><br/>
            The unique name for the field.<br/><br/>
            Type: string
        `
    },
    fieldtype: {
        type: `<b><i>Optional</i></b>`,
        body: `
            <br/><br/>
            The unique name for the field.<br/><br/>
            Type: enum<br/>
            Permissible values are: Checkbox, Date, DateTime, Email, Number, Percent, Phone, Picklist, Text, TextArea, LongTextArea, Url
        `
    },
    picklistvalues: {
        type: `<b><i>Optional</i></b>`,
        body: `
            <br/><br/>
            A comma-separated list of picklist values. These values are required when creating a Picklist field.<br/><br/>
            Type: array
        `
    },
    decimalplaces: {
        type: `<b><i>Optional</i></b>`,
        body: `
            <br/><br/>
            The number of decimal places to use for Number or Percent fields. The value must be greater than or equal to zero.<br/><br/>
            Type: number
        `
    },
    devname: {
        type: `<b>Required</b>`,
        body: `
            <br/><br/>
            The name of the custom metadata type.<br/><br/>
            Type: string
        `
    },
    sobjectname: {
        type: `<b>Required</b>`,
        body: `
            <br/><br/>
            The API name of the sObject source for custom metadata generation.<br/><br/>
            Type: string
        `
    },
    ignoreunsupported: {
        type: `<b><i>Optional</i></b>`,
        body: `
            <br/><br/>
            Ignore unsupported field types (these fields will not be created). The default is to create Text fields and convert the source value to text.<br/><br/>
            Type: boolean
        `
    },
    typeoutputdir: {
        type: `<b><i>Optional</i></b>`,
        body: `
            <br/><br/>
            The directory to store newly-created custom metadata type files.<br/><br/>
            Type: directory<br/>
            Default value: force-app/main/default/objects/
        `
    },
    recordsoutputdir: {
        type: `<b><i>Optional</i></b>`,
        body: `
            <br/><br/>
            The directory to store newly-created custom metadata record files.<br/><br/>
            Type: directory<br/>
            Default value: force-app/main/default/customMetadata/
        `
    },
};
let required = `<b>Required</b>`;
let optional = `<b><i>Optional</i></b>`;

export let mapDoc = {
    analytics: {
        template_create: {
            json: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    Format output as JSON.<br/><br/>
                    Type: boolean
                `,
                title: `Format output as JSON.`
            },
            loglevel: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>            
                    The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log.
                    <br/><br/>
                    Type: enum<br/>
                    Permissible values are: trace, debug, info, warn, error, fatal, TRACE, DEBUG, INFO, WARN, ERROR, FATAL<br/>
                    Default value: warn
                `,
                title: `The logging level for this command invocation.`
            },
            outputdir: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    The directory to store the newly created files. The location can be an absolute path or relative to the current working directory. The default is the current directory.
                    <br/><br/>
                    Type: string
                `,
                title: `The directory to store the newly created files.`
            },
            apiversion: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    Override the API version used for API requests made by this command.<br/><br/>
                    Type: string
                `,
                title: `Override the API version used for API requests made by this command.`
            },
            templatename: {
                type: `<b>Required</b>`,
                body: `
                    <br/><br/>
                    The name of the Analytics template.<br/><br/>
                    Type: string
                `,
                title: `The name of the Analytics template.`
            },
        },
    },
    apex: {
        class_create: {
            json: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    Format output as JSON.<br/><br/>
                    Type: boolean
                `,
                title: `Format output as JSON.`
            },
            loglevel: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>            
                    The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log.
                    <br/><br/>
                    Type: enum<br/>
                    Permissible values are: trace, debug, info, warn, error, fatal, TRACE, DEBUG, INFO, WARN, ERROR, FATAL<br/>
                    Default value: warn
                `,
                title: `The logging level for this command invocation.`
            },
            classname: {
                type: `<b>Required</b>`,
                body: `
                    <br/><br/>
                    The name of the new Apex class. The name can be up to 40 characters and must start with a letter.<br/><br/>
                    Type: string
                `,
                title: `The name of the new Apex class.`
            },
            template: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    The template to use to create the file. Supplied parameter values or default values are filled into a copy of the template.
                    <br/><br/>
                    Type: string<br/>
                    Permissible values are: ApexException, ApexUnitTest, DefaultApexClass, InboundEmailService<br/>
                    Default value: DefaultApexClass
                `,
                title: `The template to use to create the file.`
            },
            outputdir: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    The directory to store the newly created files. The location can be an absolute path or relative to the current working directory. The default is the current directory.<br/><br/>
                    Type: string<br/>
                    Default value: .
                `,
                title: `The directory to store the newly created files.`
            },
            apiversion: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    Override the API version used for API requests made by this command.
                    <br/><br/>
                    Type: string
                `,
                title: `Override the API version used for API requests made by this command.`
            },
        },
        execute: {
            json: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    Format output as JSON.<br/><br/>
                    Type: boolean
                `,
                title: `Format output as JSON.`
            },
            loglevel: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>            
                    The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log.<br/><br/>
                    Type: enum<br/>
                    Permissible values are: trace, debug, info, warn, error, fatal, TRACE, DEBUG, INFO, WARN, ERROR, FATAL<br/>
                    Default value: warn
                `,
                title: `The logging level for this command invocation.`
            },
            targetusername: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>            
                    A username or alias for the target org. Overrides the default target org.<br/><br/>
                    Type: string
                `,
                title: `A username or alias for the target org. Overrides the default target org.`
            },
            apiversion: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    Override the API version used for API requests made by this command.
                    <br/><br/>
                    Type: string
                `,
                title: `Override the API version used for API requests made by this command.`
            },
            apexcodefile: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    Path to a local file that contains Apex code.<br/><br/>
                    Type: filepath
                `,
                title: `Path to a local file that contains Apex code.`
            },
        },
        log_get: {
            json: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    Format output as JSON.<br/><br/>
                    Type: boolean
                `,
                title: `Format output as JSON.`
            },
            loglevel: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>            
                    The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log.<br/><br/>
                    Type: enum<br/>
                    Permissible values are: trace, debug, info, warn, error, fatal, TRACE, DEBUG, INFO, WARN, ERROR, FATAL<br/>
                    Default value: warn
                `,
                title: `The logging level for this command invocation.`
            },
            targetusername: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>            
                    A username or alias for the target org. Overrides the default target org.<br/><br/>
                    Type: string
                `,
                title: `A username or alias for the target org. Overrides the default target org.`
            },
            apiversion: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    Override the API version used for API requests made by this command.
                    <br/><br/>
                    Type: string
                `,
                title: `Override the API version used for API requests made by this command.`
            },
            logid: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    Id of the log to display.<br/><br/>
                    Type: id
                `,
                title: `Id of the log to display.`
            },
            number: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    Number of most recent logs to display.<br/><br/>
                    Type: number
                `,
                title: `Number of most recent logs to display.`
            },
            outputdir: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    The location can be an absolute path or relative to the current working directory. The default is the current directory.<br/><br/>
                    Type: string<br/>
                `,
                title: `The directory to store the newly created files.`
            },
        },
        log_list: {
            json: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    Format output as JSON.<br/><br/>
                    Type: boolean
                `,
                title: `Format output as JSON.`
            },
            loglevel: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>            
                    The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log.<br/><br/>
                    Type: enum<br/>
                    Permissible values are: trace, debug, info, warn, error, fatal, TRACE, DEBUG, INFO, WARN, ERROR, FATAL<br/>
                    Default value: warn
                `,
                title: `The logging level for this command invocation.`
            },
            targetusername: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>            
                    A username or alias for the target org. Overrides the default target org.<br/><br/>
                    Type: string
                `,
                title: `A username or alias for the target org. Overrides the default target org.`
            },
            apiversion: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    Override the API version used for API requests made by this command.
                    <br/><br/>
                    Type: string
                `,
                title: `Override the API version used for API requests made by this command.`
            },
        },
        log_tail: {
            json: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    Format output as JSON.<br/><br/>
                    Type: boolean
                `,
                title: `Format output as JSON.`
            },
            loglevel: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>            
                    The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log.<br/><br/>
                    Type: enum<br/>
                    Permissible values are: trace, debug, info, warn, error, fatal, TRACE, DEBUG, INFO, WARN, ERROR, FATAL<br/>
                    Default value: warn
                `,
                title: `The logging level for this command invocation.`
            },
            targetusername: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>            
                    A username or alias for the target org. Overrides the default target org.<br/><br/>
                    Type: string
                `,
                title: `A username or alias for the target org. Overrides the default target org.`
            },
            apiversion: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    Override the API version used for API requests made by this command.
                    <br/><br/>
                    Type: string
                `,
                title: `Override the API version used for API requests made by this command.`
            },
            color: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    Applies default colors to noteworthy log lines.<br/><br/>
                    Type: boolean
                `,
                title: `Applies default colors to noteworthy log lines.`
            },
            debuglevel: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    Debug level to set on the DEVELOPER_LOG trace flag for your user.<br/><br/>
                    Type: string
                `,
                title: `Debug level to set on the DEVELOPER_LOG trace flag for your user.`
            },
            skiptraceflag: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    Skips trace flag setup. Assumes that a trace flag and debug level are fully set up.<br/><br/>
                    Type: boolean
                `,
                title: `Skips trace flag setup. Assumes that a trace flag and debug level are fully set up.`
            },
        },
        test_report: {
            json: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    Format output as JSON.<br/><br/>
                    Type: boolean
                `,
                title: `Format output as JSON.`
            },
            loglevel: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>            
                    The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log.<br/><br/>
                    Type: enum<br/>
                    Permissible values are: trace, debug, info, warn, error, fatal, TRACE, DEBUG, INFO, WARN, ERROR, FATAL<br/>
                    Default value: warn
                `,
                title: `The logging level for this command invocation.`
            },
            targetusername: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>            
                    A username or alias for the target org. Overrides the default target org.<br/><br/>
                    Type: string
                `,
                title: `A username or alias for the target org. Overrides the default target org.`
            },
            apiversion: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    Override the API version used for API requests made by this command.
                    <br/><br/>
                    Type: string
                `,
                title: `Override the API version used for API requests made by this command.`
            },
            testrunid: {
                type: `<b>Required</b>`,
                body: `
                    <br/><br/>
                    The ID of the test run.<br/><br/>
                    Type: string
                `,
                title: `The ID of the test run.`
            },
            codecoverage: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    Retrieves code coverage results.<br/><br/>
                    Type: boolean
                `,
                title: `Retrieves code coverage results.`
            },
            outputdir: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    Directory to store test result files.<br/><br/>
                    Type: string<br/>
                `,
                title: `Directory to store test result files.`
            },
            resultformat: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    Permissible values are: human, tap, junit, json.<br/><br/>
                    Type: enum
                `,
                title: `Permissible values are: human, tap, junit, json.`
            },
            wait: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    Sets the streaming client socket timeout in minutes; specify a longer wait time if timeouts occur frequently.<br/><br/>
                    Type: string
                `,
                title: `Sets the streaming client socket timeout in minutes.`
            },
            verbose: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    Emit additional command output to stdout.<br/><br/>
                    Type: boolean
                `,
                title: `Emit additional command output to stdout.`
            },
        },
        test_run: {
            json: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    Format output as JSON.<br/><br/>
                    Type: boolean
                `,
                title: `Format output as JSON.`
            },
            loglevel: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>            
                    The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log.<br/><br/>
                    Type: enum<br/>
                    Permissible values are: trace, debug, info, warn, error, fatal, TRACE, DEBUG, INFO, WARN, ERROR, FATAL<br/>
                    Default value: warn
                `,
                title: `The logging level for this command invocation.`
            },
            targetusername: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>            
                    A username or alias for the target org. Overrides the default target org.<br/><br/>
                    Type: string
                `,
                title: `A username or alias for the target org. Overrides the default target org.`
            },
            apiversion: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    Override the API version used for API requests made by this command.
                    <br/><br/>
                    Type: string
                `,
                title: `Override the API version used for API requests made by this command.`
            },
            codecoverage: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    Retrieves code coverage results.<br/><br/>
                    Type: boolean
                `,
                title: `Retrieves code coverage results.`
            },
            outputdir: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    Directory to store test run files.<br/><br/>
                    Type: string<br/>
                `,
                title: `Directory to store test run files.`
            },
            testlevel: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    Specifies which tests to run, using one of these TestLevel enum values:.<br/><br/>
                    Type: enum<br/>
                    Permissible values are: RunLocalTests, RunAllTestsInOrg, RunSpecifiedTests
                `,
                title: `Specifies which tests to run.`
            },
            classnames: {
                type: `<b>Required 1/3</b>`,
                body: `
                    <br/><br/>
                    Comma-separated list of Apex test class names to run; if you select --classnames, you can't specify --suitenames or --tests.<br/><br/>
                    Type: string
                `,
                title: `Comma-separated list of Apex test class names to run.`
            },
            resultformat: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    Permissible values are: human, tap, junit, json.<br/><br/>
                    Type: enum
                `,
                title: `Permissible values are: human, tap, junit, json.`
            },
            suitenames: {
                type: `<b>Required 1/3</b>`,
                body: `
                    <br/><br/>
                    Comma-separated list of Apex test suite names to run; if you select --suitenames, you can't specify --classnames or --tests.<br/><br/>
                    Type: string
                `,
                title: `Comma-separated list of Apex test suite names to run.`
            },
            tests: {
                type: `<b>Required 1/3</b>`,
                body: `
                    <br/><br/>
                    Comma-separated list of Apex test class names or IDs and, if applicable, test methods to run; if you specify --tests, you can't specify --classnames or --suitenames.<br/><br/>
                    Type: string
                `,
                title: `Comma-separated list of Apex test class names or IDs and, if applicable, test methods to run.`
            },
            wait: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    Sets the streaming client socket timeout in minutes; specify a longer wait time if timeouts occur frequently.<br/><br/>
                    Type: string
                `,
                title: `Sets the streaming client socket timeout in minutes.`
            },
            synchronous: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    Runs test methods from a single Apex class synchronously; if not specified, tests are run ansynchronously.<br/><br/>
                    Type: boolean
                `,
                title: `Runs test methods from a single Apex class synchronously.`
            },
            verbose: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    Emit additional command output to stdout.<br/><br/>
                    Type: boolean
                `,
                title: `Emit additional command output to stdout.`
            },
            detailedcoverage: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    Display detailed code coverage per test.<br/><br/>
                    Type: boolean
                `,
                title: `Display detailed code coverage per test.`
            },
        },
        trigger_create: {
            json: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    Format output as JSON.<br/><br/>
                    Type: boolean
                `,
                title: `Format output as JSON.`
            },
            loglevel: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>            
                    The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log.<br/><br/>
                    Type: enum<br/>
                    Permissible values are: trace, debug, info, warn, error, fatal, TRACE, DEBUG, INFO, WARN, ERROR, FATAL<br/>
                    Default value: warn
                `,
                title: `The logging level for this command invocation.`
            },
            triggername: {
                type: `<b>Required</b>`,
                body: `
                    <br/><br/>
                    The name of the new Apex trigger. The name can be up to 40 characters and must start with a letter.<br/><br/>
                    Type: string
                `,
                title: `The name of the new Apex trigger.`
            },
            template: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    The template to use to create the file. Supplied parameter values or default values are filled into a copy of the template.
                    <br/><br/>
                    Type: string
                    <br/>
                    Permissible values are: ApexTrigger<br/>
                    Default value: ApexTrigger
                `,
                title: `The template to use to create the file.`
            },
            outputdir: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    The directory to store the newly created files. The location can be an absolute path or relative to the current working directory. The default is the current directory.<br/><br/>
                    Type: string<br/>
                    Default value: .
                `,
                title: `The directory to store the newly created files.`
            },
            apiversion: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    Override the API version used for API requests made by this command.
                    <br/><br/>
                    Type: string
                `,
                title: `Override the API version used for API requests made by this command.`
            },
            sobject: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    The sObject to create an Apex trigger on.<br/><br/>
                    Type: string
                `,
                title: `The sObject to create an Apex trigger on.`
            },
            triggerevents: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    The events that cause the trigger to fire.<br/><br/>
                    Type: array<br/>
                    Default value: before insert
                `,
                title: `The events that cause the trigger to fire.`
            },
        },
    },
    cmdt: {
        create: {
            json: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    Format output as JSON.<br/><br/>
                    Type: boolean
                `,
                title: `Format output as JSON.`
            },
            loglevel: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>            
                    The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log.<br/><br/>
                    Type: enum<br/>
                    Permissible values are: trace, debug, info, warn, error, fatal, TRACE, DEBUG, INFO, WARN, ERROR, FATAL<br/>
                    Default value: warn
                `,
                title: `The logging level for this command invocation.`
            },
            typename: {
                type: `<b>Required</b>`,
                body: `
                    <br/><br/>
                    The unique name of the object in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores.<br/><br/>
                    Type: string
                `,
                title: `The unique name of the object in the API.`
            },
            label: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    A label for the custom metadata type.<br/><br/>
                    Type: string
                `,
                title: `A label for the custom metadata type.`
            },
            plurallabel: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    The plural version of the label value. If this flag is missing or blank, the singular label is used as the plural label.<br/><br/>
                    Type: string
                `,
                title: `The plural version of the label value.`
            },
            visibility: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    The visibility of the custom metadata type.<br/><br/>
                    Type: enum<br/>
                    Permissible values are: PackageProtected, Protected, Public<br/>
                    Default value: Public
                `,
                title: `The visibility of the custom metadata type.`
            },
            outputdir: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    The directory to store the newly-created custom metadata type files. The location can be an absolute path or relative to the current working directory. The default is the current directory.<br/><br/>
                    Type: string
                `,
                title: `The directory to store the newly-created custom metadata type files.`
            },
        },
        field_create: {
            json: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    Format output as JSON.<br/><br/>
                    Type: boolean
                `,
                title: `Format output as JSON.`
            },
            loglevel: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>            
                    The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log.<br/><br/>
                    Type: enum<br/>
                    Permissible values are: trace, debug, info, warn, error, fatal, TRACE, DEBUG, INFO, WARN, ERROR, FATAL<br/>
                    Default value: warn
                `,
                title: `The logging level for this command invocation.`
            },
            fieldname: {
                type: `<b>Required</b>`,
                body: `
                    <br/><br/>
                    The unique name for the field.<br/><br/>
                    Type: string
                `,
                title: `The unique name for the field.`
            },
            fieldtype: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    The unique name for the field.<br/><br/>
                    Type: enum<br/>
                    Permissible values are: Checkbox, Date, DateTime, Email, Number, Percent, Phone, Picklist, Text, TextArea, LongTextArea, Url
                `,
                title: `The unique name for the field.`
            },
            picklistvalues: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    A comma-separated list of picklist values. These values are required when creating a Picklist field.<br/><br/>
                    Type: array
                `,
                title: `A comma-separated list of picklist values.`
            },
            decimalplaces: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    The number of decimal places to use for Number or Percent fields. The value must be greater than or equal to zero.<br/><br/>
                    Type: number
                `,
                title: `The number of decimal places to use for Number or Percent fields.`
            },
            label: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    The label for the field.<br/><br/>
                    Type: string
                `,
                title: `The label for the field.`
            },
            outputdir: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    The directory to store the newly-created field definition files. The location can be an absolute path or relative to the current working directory. The default is the current directory.<br/><br/>
                    Type: string
                `,
                title: `The directory to store the newly-created field definition files.`
            },
        },
        generate: {
            json: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    Format output as JSON.<br/><br/>
                    Type: boolean
                `,
                title: `Format output as JSON.`
            },
            loglevel: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>            
                    The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log.<br/><br/>
                    Type: enum<br/>
                    Permissible values are: trace, debug, info, warn, error, fatal, TRACE, DEBUG, INFO, WARN, ERROR, FATAL<br/>
                    Default value: warn
                `,
                title: `The logging level for this command invocation.`
            },
            targetusername: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>            
                    A username or alias for the target org. Overrides the default target org.<br/><br/>
                    Type: string
                `,
                title: `A username or alias for the target org. Overrides the default target org.`
            },
            apiversion: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    Override the API version used for API requests made by this command.<br/><br/>
                    Type: string
                `,
                title: `Override the API version used for API requests made by this command.`
            },
            devname: {
                type: `<b>Required</b>`,
                body: `
                    <br/><br/>
                    The name of the custom metadata type.<br/><br/>
                    Type: string
                `,
                title: `The name of the custom metadata type.`
            },
            label: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    The label for the custom metadata type.<br/><br/>
                    Type: string
                `,
                title: `The label for the custom metadata type.`
            },
            plurallabel: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    The plural version of the label value. If this flag is missing or blank, the singular label is used as the plural label.<br/><br/>
                    Type: string
                `,
                title: `The plural version of the label value.`
            },
            visibility: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    The visibility of the custom metadata type.<br/><br/>
                    Type: enum<br/>
                    Permissible values are: PackageProtected, Protected, Public<br/>
                    Default value: Public
                `,
                title: `The visibility of the custom metadata type.`
            },
            sobjectname: {
                type: `<b>Required</b>`,
                body: `
                    <br/><br/>
                    The API name of the sObject source for custom metadata generation.<br/><br/>
                    Type: string
                `,
                title: `The API name of the sObject source for custom metadata generation.`
            },
            ignoreunsupported: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    Ignore unsupported field types (these fields will not be created). The default is to create Text fields and convert the source value to text.<br/><br/>
                    Type: boolean
                `,
                title: `Ignore unsupported field types.`
            },
            typeoutputdir: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    The directory to store newly-created custom metadata type files.<br/><br/>
                    Type: directory<br/>
                    Default value: force-app/main/default/objects/
                `,
                title: `The directory to store newly-created custom metadata type files.`
            },
            recordsoutputdir: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    The directory to store newly-created custom metadata record files.<br/><br/>
                    Type: directory<br/>
                    Default value: force-app/main/default/customMetadata/
                `,
                title: `The directory to store newly-created custom metadata record files.`
            },
        },
        record_create: {
            json: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    Format output as JSON.<br/><br/>
                    Type: boolean
                `,
                title: `Format output as JSON.`
            },
            loglevel: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>            
                    The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log.<br/><br/>
                    Type: enum<br/>
                    Permissible values are: trace, debug, info, warn, error, fatal, TRACE, DEBUG, INFO, WARN, ERROR, FATAL<br/>
                    Default value: warn
                `,
                title: `The logging level for this command invocation.`
            },
            typename: {
                type: `<b>Required</b>`,
                body: `
                    <br/><br/>
                    The API name of the custom metadata type to create a record for.<br/><br/>
                    Type: string
                `,
                title: `The API name of the custom metadata type to create a record for.`
            },
            recordname: {
                type: `<b>Required</b>`,
                body: `
                    <br/><br/>
                    The name for the new record.<br/><br/>
                    Type: string
                `,
                title: `The name for the new record.`
            },
            label: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    The label for the new record.<br/><br/>
                    Type: string
                `,
                title: `The label for the new record.`
            },
            protected: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    Protect the record when it is in a managed package. Protected records can only be accessed by code in the same managed package namespace.<br/><br/>
                    Type: string<br/>
                    Permissible values are: true, false<br/>
                    Default value: false
                `,
                title: `Protect the record when it is in a managed package.`
            },
            inputdir: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    The directory to pull the custom metadata type definition from.<br/><br/>
                    Type: directory<br/>
                    Default value: force-app/main/default/objects
                `,
                title: `The directory to pull the custom metadata type definition from.`
            },
            outputdir: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    The directory to store newly-created custom metadata record files.<br/><br/>
                    Type: directory<br/>
                    Default value: force-app/main/default/customMetadata
                `,
                title: `The directory to store newly-created custom metadata record files.`
            },
        },
        record_insert: {
            json: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    Format output as JSON.<br/><br/>
                    Type: boolean
                `,
                title: `Format output as JSON.`
            },
            loglevel: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>            
                    The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log.<br/><br/>
                    Type: enum<br/>
                    Permissible values are: trace, debug, info, warn, error, fatal, TRACE, DEBUG, INFO, WARN, ERROR, FATAL<br/>
                    Default value: warn
                `,
                title: `The logging level for this command invocation.`
            },
            filepath: {
                type: `<b>Required</b>`,
                body: `
                    <br/><br/>
                    The path to the CSV file.<br/><br/>
                    Type: string
                `,
                title: `The path to the CSV file.`
            },
            typename: {
                type: `<b>Required</b>`,
                body: `
                    <br/><br/>
                    The API Name of the custom metadata type. The '__mdt' suffix will be appended to the end of the name if it is omitted.<br/><br/>
                    Type: string
                `,
                title: `The API Name of the custom metadata type.`
            },
            inputdir: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    The directory to pull the custom metadata type definition from.<br/><br/>
                    Type: directory<br/>
                    Default value: force-app/main/default/objects
                `,
                title: `The directory to pull the custom metadata type definition from.`
            },
            outputdir: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    The directory to store newly-created custom metadata record files.<br/><br/>
                    Type: directory<br/>
                    Default value: force-app/main/default/customMetadata
                `,
                title: `The directory to store newly-created custom metadata record files.`
            },
            namecolumn: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    The column that is used to determine the name of the record.<br/><br/>
                    Type: string
                `,
                title:`The column that is used to determine the name of the record.`
            },
        },
    },
    community: {
        create: {
            json: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    Format output as JSON.<br/><br/>
                    Type: boolean
                `,
                title: `Format output as JSON.`
            },
            loglevel: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>            
                    The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log.<br/><br/>
                    Type: enum<br/>
                    Permissible values are: trace, debug, info, warn, error, fatal, TRACE, DEBUG, INFO, WARN, ERROR, FATAL<br/>
                    Default value: warn
                `,
                title: `The logging level for this command invocation.`
            },
            targetusername: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>            
                    A username or alias for the target org. Overrides the default target org.<br/><br/>
                    Type: string
                `,
                title: `A username or alias for the target org. Overrides the default target org.`
            },
            apiversion: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    Override the API version used for API requests made by this command.
                    <br/><br/>
                    Type: string
                `,
                title: `Override the API version used for API requests made by this command.`
            },
            name: {
                type: `<b>Required</b>`,
                body: `
                    <br/><br/>
                    The name of the site to create.<br/><br/>
                    Type: string
                `,
                title: `The name of the site to create.`
            },
            templatename: {
                type: `<b>Required</b>`,
                body: `
                    <br/><br/>
                    The template to use to create the site, such as the Customer Service template. Run force:community:template:list to see which templates are available in your org.<br/><br/>
                    Type: string
                `,
                title: `The template to use to create the site, such as the Customer Service template. Run force:community:template:list to see which templates are available in your org.`
            },
            urlpathprefix: {
                type: `<b>Required</b>`,
                body: `
                    <br/><br/>
                    The URL to append to the domain that you created when you enabled Digital Experiences for this org. For example, if your domain name is https://MyDomainName.my.site.com and you’re creating a customer site, enter "customers" to create the unique URL<br/><br/>
                    https://MyDomainName.my.site.com/customers.<br/><br/>
                    Type: string
                `,
                title: `The URL to append to the domain that you created when you enabled Digital Experiences for this org.`
            },
            description: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    The description of the site. The description displays in Digital Experiences - All Sites in Setup and helps with site identification.<br/><br/>
                    Type: string
                `,
                title: `The description of the site.`
            },
        },
        publish: {
            json: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    Format output as JSON.<br/><br/>
                    Type: boolean
                `,
                title: `Format output as JSON.`
            },
            loglevel: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>            
                    The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log.<br/><br/>
                    Type: enum<br/>
                    Permissible values are: trace, debug, info, warn, error, fatal, TRACE, DEBUG, INFO, WARN, ERROR, FATAL<br/>
                    Default value: warn
                `,
                title: `The logging level for this command invocation.`
            },
            targetusername: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>            
                    A username or alias for the target org. Overrides the default target org.<br/><br/>
                    Type: string
                `,
                title: `A username or alias for the target org. Overrides the default target org.`
            },
            apiversion: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    Override the API version used for API requests made by this command.
                    <br/><br/>
                    Type: string
                `,
                title: `Override the API version used for API requests made by this command.`
            },
            name: {
                type: `<b>Required</b>`,
                body: `
                    <br/><br/>
                    The name of the Experience Builder site that you want to publish.<br/><br/>
                    Type: string
                `,
                title: `The name of the Experience Builder site that you want to publish.`
            },
        },
        template_list: {
            json: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    Format output as JSON.<br/><br/>
                    Type: boolean
                `,
                title: `Format output as JSON.`
            },
            loglevel: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>            
                    The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log.<br/><br/>
                    Type: enum<br/>
                    Permissible values are: trace, debug, info, warn, error, fatal, TRACE, DEBUG, INFO, WARN, ERROR, FATAL<br/>
                    Default value: warn
                `,
                title: `The logging level for this command invocation.`
            },
            targetusername: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>            
                    A username or alias for the target org. Overrides the default target org.<br/><br/>
                    Type: string
                `,
                title: `A username or alias for the target org. Overrides the default target org.`
            },
            apiversion: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    Override the API version used for API requests made by this command.
                    <br/><br/>
                    Type: string
                `,
                title: `Override the API version used for API requests made by this command.`
            },
        },
    },
    data: {
        bulk_delete: {
            json: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    Format output as JSON.<br/><br/>
                    Type: boolean
                `,
                title: `Format output as JSON.`
            },
            loglevel: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>            
                    The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log.<br/><br/>
                    Type: enum<br/>
                    Permissible values are: trace, debug, info, warn, error, fatal, TRACE, DEBUG, INFO, WARN, ERROR, FATAL<br/>
                    Default value: warn
                `,
                title: `The logging level for this command invocation.`
            },
            targetusername: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>            
                    A username or alias for the target org. Overrides the default target org.<br/><br/>
                    Type: string
                `,
                title: `A username or alias for the target org. Overrides the default target org.`
            },
            apiversion: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    Override the API version used for API requests made by this command.
                    <br/><br/>
                    Type: string
                `,
                title: `Override the API version used for API requests made by this command.`
            },
            csvfile: {
                type: `<b>Required</b>`,
                body: `
                    <br/><br/>
                    The path to the CSV file containing the ids of the records to delete.<br/><br/>
                    Type: filepath
                `,
                title: `The path to the CSV file containing the ids of the records to delete.`
            },
            sobjecttype: {
                type: `<b>Required</b>`,
                body: `
                    <br/><br/>
                    The sObject type of the records you’re deleting.<br/><br/>
                    Type: string
                `,
                title: `The sObject type of the records you’re deleting.`
            },
            wait: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    The number of minutes to wait for the command to complete before displaying the results.<br/><br/>
                    Type: string
                `,
                title: `The number of minutes to wait for the command to complete before displaying the results.`
            },
        },
        bulk_status: {
            json: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    Format output as JSON.<br/><br/>
                    Type: boolean
                `,
                title: `Format output as JSON.`
            },
            loglevel: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>            
                    The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log.<br/><br/>
                    Type: enum<br/>
                    Permissible values are: trace, debug, info, warn, error, fatal, TRACE, DEBUG, INFO, WARN, ERROR, FATAL<br/>
                    Default value: warn
                `,
                title: `The logging level for this command invocation.`
            },
            targetusername: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>            
                    A username or alias for the target org. Overrides the default target org.<br/><br/>
                    Type: string
                `,
                title: `A username or alias for the target org. Overrides the default target org.`
            },
            apiversion: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    Override the API version used for API requests made by this command.
                    <br/><br/>
                    Type: string
                `,
                title: `Override the API version used for API requests made by this command.`
            },
            batchid: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    The ID of the batch whose status you want to view.<br/><br/>
                    Type: string
                `,
                title: `The ID of the batch whose status you want to view.`
            },
            jobid: {
                type: `<b>Required</b>`,
                body: `
                    <br/><br/>
                    The ID of the job you want to view or of the job whose batch you want to view.<br/><br/>
                    Type: string
                `,
                title: `The ID of the job you want to view or of the job whose batch you want to view.`
            },
        },
        bulk_upsert: {
            json: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    Format output as JSON.<br/><br/>
                    Type: boolean
                `,
                title: `Format output as JSON.`
            },
            loglevel: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>            
                    The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log.<br/><br/>
                    Type: enum<br/>
                    Permissible values are: trace, debug, info, warn, error, fatal, TRACE, DEBUG, INFO, WARN, ERROR, FATAL<br/>
                    Default value: warn
                `,
                title: `The logging level for this command invocation.`
            },
            targetusername: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>            
                    A username or alias for the target org. Overrides the default target org.<br/><br/>
                    Type: string
                `,
                title: `A username or alias for the target org. Overrides the default target org.`
            },
            apiversion: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    Override the API version used for API requests made by this command.
                    <br/><br/>
                    Type: string
                `,
                title: `Override the API version used for API requests made by this command.`
            },
            externalid: {
                type: `<b>Required</b>`,
                body: `
                    <br/><br/>
                    The column name of the external ID.<br/><br/>
                    Type: string
                `,
                title: `The column name of the external ID.`
            },
            csvfile: {
                type: `<b>Required</b>`,
                body: `
                    <br/><br/>
                    The path to the CSV file that defines the records to upsert.<br/><br/>
                    Type: filepath
                `,
                title: `The path to the CSV file that defines the records to upsert.`
            },
            sobjecttype: {
                type: `<b>Required</b>`,
                body: `
                    <br/><br/>
                    The sObject type of the records you want to upsert.<br/><br/>
                    Type: string
                `,
                title: `The sObject type of the records you want to upsert.`
            },
            wait: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    The number of minutes to wait for the command to complete before displaying the results.<br/><br/>
                    Type: string
                `,
                title: `The number of minutes to wait for the command to complete before displaying the results.`
            },
            serial: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    Run batches in serial mode.<br/><br/>
                    Type: boolean
                `,
                title: `Run batches in serial mode.`
            },
        },
        record_create: {
            json: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    Format output as JSON.<br/><br/>
                    Type: boolean
                `,
                title: `Format output as JSON.`
            },
            loglevel: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>            
                    The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log.<br/><br/>
                    Type: enum<br/>
                    Permissible values are: trace, debug, info, warn, error, fatal, TRACE, DEBUG, INFO, WARN, ERROR, FATAL<br/>
                    Default value: warn
                `,
                title: `The logging level for this command invocation.`
            },
            targetusername: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>            
                    A username or alias for the target org. Overrides the default target org.<br/><br/>
                    Type: string
                `,
                title: `A username or alias for the target org. Overrides the default target org.`
            },
            apiversion: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    Override the API version used for API requests made by this command.
                    <br/><br/>
                    Type: string
                `,
                title: `Override the API version used for API requests made by this command.`
            },
            sobjecttype: {
                type: `<b>Required</b>`,
                body: `
                    <br/><br/>
                    The sObject type of the records you want to upsert.<br/><br/>
                    Type: string
                `,
                title: `The sObject type of the records you want to upsert.`
            },
            values: {
                type: `<b>Required</b>`,
                body: `
                    <br/><br/>
                    The <fieldName>=<value> pairs you’re creating.<br/><br/>
                    Type: string
                `,
                title: `The <fieldName>=<value> pairs you’re creating.`
            },
            usetoolingapi: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    Create the record with tooling api.<br/><br/>
                    Type: boolean
                `,
                title: `Create the record with tooling api.`
            },
            perflog: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    Get API performance data.<br/><br/>
                    Type: boolean
                `,
                title: `Get API performance data.`
            },
        },
        record_delete: {
            json: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    Format output as JSON.<br/><br/>
                    Type: boolean
                `,
                title: `Format output as JSON.`
            },
            loglevel: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>            
                    The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log.<br/><br/>
                    Type: enum<br/>
                    Permissible values are: trace, debug, info, warn, error, fatal, TRACE, DEBUG, INFO, WARN, ERROR, FATAL<br/>
                    Default value: warn
                `,
                title: `The logging level for this command invocation.`
            },
            targetusername: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>            
                    A username or alias for the target org. Overrides the default target org.<br/><br/>
                    Type: string
                `,
                title: `A username or alias for the target org. Overrides the default target org.`
            },
            apiversion: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    Override the API version used for API requests made by this command.
                    <br/><br/>
                    Type: string
                `,
                title: `Override the API version used for API requests made by this command.`
            },
            sobjecttype: {
                type: `<b>Required</b>`,
                body: `
                    <br/><br/>
                    The sObject type of the records you want to upsert.<br/><br/>
                    Type: string
                `,
                title: `The sObject type of the records you want to upsert.`
            },
            sobjectid: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    The ID of the record you’re deleting.<br/><br/>
                    Type: id
                `,
                title: `The ID of the record you’re deleting.`
            },
            where: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    A list of <fieldName>=<value> pairs to search for.<br/><br/>
                    Type: string
                `,
                title: `A list of <fieldName>=<value> pairs to search for.`
            },
            usetoolingapi: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    Create the record with tooling api.<br/><br/>
                    Type: boolean
                `,
                title: `Create the record with tooling api.`
            },
            perflog: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    Get API performance data.<br/><br/>
                    Type: boolean
                `,
                title: `Get API performance data.`
            },
        },
        record_get: {
            json: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    Format output as JSON.<br/><br/>
                    Type: boolean
                `,
                title: `Format output as JSON.`
            },
            loglevel: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>            
                    The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log.<br/><br/>
                    Type: enum<br/>
                    Permissible values are: trace, debug, info, warn, error, fatal, TRACE, DEBUG, INFO, WARN, ERROR, FATAL<br/>
                    Default value: warn
                `,
                title: `The logging level for this command invocation.`
            },
            targetusername: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>            
                    A username or alias for the target org. Overrides the default target org.<br/><br/>
                    Type: string
                `,
                title: `A username or alias for the target org. Overrides the default target org.`
            },
            apiversion: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    Override the API version used for API requests made by this command.
                    <br/><br/>
                    Type: string
                `,
                title: `Override the API version used for API requests made by this command.`
            },
            sobjecttype: {
                type: `<b>Required</b>`,
                body: `
                    <br/><br/>
                    The sObject type of the records you want to upsert.<br/><br/>
                    Type: string
                `,
                title: `The sObject type of the records you want to upsert.`
            },
            sobjectid: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    The ID of the record you’re deleting.<br/><br/>
                    Type: id
                `,
                title: `The ID of the record you’re deleting.`
            },
            where: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    A list of <fieldName>=<value> pairs to search for.<br/><br/>
                    Type: string
                `,
                title: `A list of <fieldName>=<value> pairs to search for.`
            },
            usetoolingapi: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    Create the record with tooling api.<br/><br/>
                    Type: boolean
                `,
                title: `Create the record with tooling api.`
            },
            perflog: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    Get API performance data.<br/><br/>
                    Type: boolean
                `,
                title: `Get API performance data.`
            },
        },
        record_update: {
            json: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    Format output as JSON.<br/><br/>
                    Type: boolean
                `,
                title: `Format output as JSON.`
            },
            loglevel: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>            
                    The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log.<br/><br/>
                    Type: enum<br/>
                    Permissible values are: trace, debug, info, warn, error, fatal, TRACE, DEBUG, INFO, WARN, ERROR, FATAL<br/>
                    Default value: warn
                `,
                title: `The logging level for this command invocation.`
            },
            targetusername: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>            
                    A username or alias for the target org. Overrides the default target org.<br/><br/>
                    Type: string
                `,
                title: `A username or alias for the target org. Overrides the default target org.`
            },
            apiversion: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    Override the API version used for API requests made by this command.
                    <br/><br/>
                    Type: string
                `,
                title: `Override the API version used for API requests made by this command.`
            },
            sobjecttype: {
                type: `<b>Required</b>`,
                body: `
                    <br/><br/>
                    The sObject type of the records you want to upsert.<br/><br/>
                    Type: string
                `,
                title: `The sObject type of the records you want to upsert.`
            },
            sobjectid: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    The ID of the record you’re deleting.<br/><br/>
                    Type: id
                `,
                title: `The ID of the record you’re deleting.`
            },
            where: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    A list of <fieldName>=<value> pairs to search for.<br/><br/>
                    Type: string
                `,
                title: `A list of <fieldName>=<value> pairs to search for.`
            },
            values: {
                type: `<b>Required</b>`,
                body: `
                    <br/><br/>
                    The <fieldName>=<value> pairs you’re updating.<br/><br/>
                    Type: string
                `,
                title: `The <fieldName>=<value> pairs you’re updating.`
            },
            usetoolingapi: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    Create the record with tooling api.<br/><br/>
                    Type: boolean
                `,
                title: `Create the record with tooling api.`
            },
            perflog: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    Get API performance data.<br/><br/>
                    Type: boolean
                `,
                title: `Get API performance data.`
            },
        },
        soql_query: {
            json: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    Format output as JSON.<br/><br/>
                    Type: boolean
                `,
                title: `Format output as JSON.`
            },
            loglevel: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>            
                    The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log.<br/><br/>
                    Type: enum<br/>
                    Permissible values are: trace, debug, info, warn, error, fatal, TRACE, DEBUG, INFO, WARN, ERROR, FATAL<br/>
                    Default value: warn
                `,
                title: `The logging level for this command invocation.`
            },
            targetusername: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>            
                    A username or alias for the target org. Overrides the default target org.<br/><br/>
                    Type: string
                `,
                title: `A username or alias for the target org. Overrides the default target org.`
            },
            apiversion: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    Override the API version used for API requests made by this command.
                    <br/><br/>
                    Type: string
                `,
                title: `Override the API version used for API requests made by this command.`
            },
            query: {
                type: `<b>Required</b>`,
                body: `
                    <br/><br/>
                    SOQL query to execute.<br/><br/>
                    Type: string
                `,
                title: `SOQL query to execute.`
            },
            usetoolingapi: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    Create the record with tooling api.<br/><br/>
                    Type: boolean
                `,
                title: `Create the record with tooling api.`
            },
            resultformat: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    Result format emitted to stdout; --json flag overrides this parameter.<br/><br/>
                    Type: enum<br/>
                    Permissible values are: human, csv, json<br/>
                    Default value: human
                `,
                title: `Result format emitted to stdout; --json flag overrides this parameter.`
            },
            perflog: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    Get API performance data.<br/><br/>
                    Type: boolean
                `,
                title: `Get API performance data.`
            },
        },
        tree_export: {
            json: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    Format output as JSON.<br/><br/>
                    Type: boolean
                `,
                title: `Format output as JSON.`
            },
            loglevel: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>            
                    The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log.<br/><br/>
                    Type: enum<br/>
                    Permissible values are: trace, debug, info, warn, error, fatal, TRACE, DEBUG, INFO, WARN, ERROR, FATAL<br/>
                    Default value: warn
                `,
                title: `The logging level for this command invocation.`
            },
            targetusername: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>            
                    A username or alias for the target org. Overrides the default target org.<br/><br/>
                    Type: string
                `,
                title: `A username or alias for the target org. Overrides the default target org.`
            },
            apiversion: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    Override the API version used for API requests made by this command.
                    <br/><br/>
                    Type: string
                `,
                title: `Override the API version used for API requests made by this command.`
            },
            query: {
                type: `<b>Required</b>`,
                body: `
                    <br/><br/>
                    Soql query, or filepath of file containing a soql query, to retrieve records.<br/><br/>
                    Type: string
                `,
                title: `Soql query, or filepath of file containing a soql query, to retrieve records.`
            },
            plan: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    Generate multitple sobject tree files and a plan definition file for aggregated import.<br/><br/>
                    Type: boolean
                `,
                title: `Generate mulitple sobject tree files and a plan definition file for aggregated import.`
            },
            prefix: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    Prefix of generated files.<br/><br/>
                    Type: string
                `,
                title: `Prefix of generated files.`
            },
            outputdir: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    Directory to store files'.<br/><br/>
                    Type: directory
                `,
                title: `Directory to store files'.`
            },
        },
        tree_import: {
            json: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    Format output as JSON.<br/><br/>
                    Type: boolean
                `,
                title: `Format output as JSON.`
            },
            loglevel: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>            
                    The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log.<br/><br/>
                    Type: enum<br/>
                    Permissible values are: trace, debug, info, warn, error, fatal, TRACE, DEBUG, INFO, WARN, ERROR, FATAL<br/>
                    Default value: warn
                `,
                title: `The logging level for this command invocation.`
            },
            targetusername: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>            
                    A username or alias for the target org. Overrides the default target org.<br/><br/>
                    Type: string
                `,
                title: `A username or alias for the target org. Overrides the default target org.`
            },
            apiversion: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    Override the API version used for API requests made by this command.
                    <br/><br/>
                    Type: string
                `,
                title: `Override the API version used for API requests made by this command.`
            },
            sobjecttreefiles: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    Comma-delimited, ordered paths of json files containing collection of record trees to insert.<br/><br/>
                    Type: array
                `,
                title: `Comma-delimited, ordered paths of json files containing collection of record trees to insert.`
            },
            plan: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    Path to plan to insert multiple data files that have master-detail relationships.<br/><br/>
                    Type: filepath
                `,
                title: `Path to plan to insert multiple data files that have master-detail relationships.`
            },
            confighelp: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    Display schema information for the --plan configuration file to stdout; if you use this option, all other options except --json are ignored.<br/><br/>
                    Type: boolean
                `,
                title: `Display schema information for the --plan configuration file to stdout`
            },
        }, 
    },
    lightning: {
        app_create: {
            json: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    Format output as JSON.<br/><br/>
                    Type: boolean
                `,
                title: `Format output as JSON.`
            },
            loglevel: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>            
                    The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log.<br/><br/>
                    Type: enum<br/>
                    Permissible values are: trace, debug, info, warn, error, fatal, TRACE, DEBUG, INFO, WARN, ERROR, FATAL<br/>
                    Default value: warn
                `,
                title: `The logging level for this command invocation.`
            },
            appname: {
                type: `<b>Required</b>`,
                body: `
                    <br/><br/>
                    The Lightning app name. The name can be up to 40 characters and must start with a letter.<br/><br/>
                    Type: string
                `,
                title: `The Lightning app name. The name can be up to 40 characters and must start with a letter.`
            },
            template: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    The template to use to create the file. Supplied parameter values or default values are filled into a copy of the template.<br/><br/>
                    Type: string<br/>
                    Permissible values are: DefaultLightningApp<br/>
                    Default value: DefaultLightningApp
                `,
                title: `The template to use to create the file.`
            },
            outputdir: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    The directory to store the newly created files. The location can be an absolute path or relative to the current working directory. The default is the current directory.<br/><br/>
                    Type: string<br/>
                    Default value: .
                `,
                title: `The directory to store the newly created files.`
            },
            apiversion: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    Override the API version used for API requests made by this command.
                    <br/><br/>
                    Type: string
                `,
                title: `Override the API version used for API requests made by this command.`
            },
        },
        component_create: {
            json: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    Format output as JSON.<br/><br/>
                    Type: boolean
                `,
                title: `Format output as JSON.`
            },
            loglevel: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>            
                    The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log.<br/><br/>
                    Type: enum<br/>
                    Permissible values are: trace, debug, info, warn, error, fatal, TRACE, DEBUG, INFO, WARN, ERROR, FATAL<br/>
                    Default value: warn
                `,
                title: `The logging level for this command invocation.`
            },
            componentname: {
                type: `<b>Required</b>`,
                body: `
                    <br/><br/>
                    The Lightning component name. The name can be up to 40 characters and must start with a letter.<br/><br/>
                    Type: string
                `,
                title: `The Lightning component name.`
            },
            template: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    The template to use to create the file. Supplied parameter values or default values are filled into a copy of the template.<br/><br/>
                    Type: string<br/>
                    Permissible values are: default, analyticsDashboard, analyticsDashboardWithStep<br/>
                    Default value: default
                `,
                title: `The template to use to create the file.`
            },
            outputdir: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    The directory to store the newly created files. The location can be an absolute path or relative to the current working directory. The default is the current directory.<br/><br/>
                    Type: string<br/>
                    Default value: .
                `,
                title: `The directory to store the newly created files.`
            },
            apiversion: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    Override the API version used for API requests made by this command.
                    <br/><br/>
                    Type: string
                `,
                title: `Override the API version used for API requests made by this command.`
            },
            type: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    The type of the new Lightning component.<br/><br/>
                    Type: string<br/>
                    Permissible values are: aura, lwc<br/>
                    Default value: aura
                `,
                title: `The type of the new Lightning component.`
            },
        },
        event_create: {
            json: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    Format output as JSON.<br/><br/>
                    Type: boolean
                `,
                title: `Format output as JSON.`
            },
            loglevel: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>            
                    The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log.<br/><br/>
                    Type: enum<br/>
                    Permissible values are: trace, debug, info, warn, error, fatal, TRACE, DEBUG, INFO, WARN, ERROR, FATAL<br/>
                    Default value: warn
                `,
                title: `The logging level for this command invocation.`
            },
            eventname: {
                type: `<b>Required</b>`,
                body: `
                    <br/><br/>
                    The Lightning event name. The name can be up to 40 characters and must start with a letter.<br/><br/>
                    Type: string
                `,
                title: `The Lightning event name.`
            },
            template: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    The template to use to create the file. Supplied parameter values or default values are filled into a copy of the template.<br/><br/>
                    Type: string<br/>
                    Permissible values are: DefaultLightningEvt<br/>
                    Default value: DefaultLightningEvt
                `,
                title: `The template to use to create the file.`
            },
            outputdir: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    The directory to store the newly created files. The location can be an absolute path or relative to the current working directory. The default is the current directory.<br/><br/>
                    Type: string<br/>
                    Default value: .
                `,
                title: `The directory to store the newly created files.`
            },
            apiversion: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    Override the API version used for API requests made by this command.
                    <br/><br/>
                    Type: string
                `,
                title: `Override the API version used for API requests made by this command.`
            },
        },
        interface_create: {
            json: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    Format output as JSON.<br/><br/>
                    Type: boolean
                `,
                title: `Format output as JSON.`
            },
            loglevel: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>            
                    The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log.<br/><br/>
                    Type: enum<br/>
                    Permissible values are: trace, debug, info, warn, error, fatal, TRACE, DEBUG, INFO, WARN, ERROR, FATAL<br/>
                    Default value: warn
                `,
                title: `The logging level for this command invocation.`
            },
            interfacename: {
                type: `<b>Required</b>`,
                body: `
                    <br/><br/>
                    The Lightning interface name. The name can be up to 40 characters and must start with a letter.<br/><br/>
                    Type: string
                `,
                title: `The Lightning interface name.`
            },
            template: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    The template to use to create the file. Supplied parameter values or default values are filled into a copy of the template.<br/><br/>
                    Type: string<br/>
                    Permissible values are: DefaultLightningIntf<br/>
                    Default value: DefaultLightningIntf
                `,
                title: `The template to use to create the file.`
            },
            outputdir: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    The directory to store the newly created files. The location can be an absolute path or relative to the current working directory. The default is the current directory.<br/><br/>
                    Type: string<br/>
                    Default value: .
                `,
                title: `The directory to store the newly created files.`
            },
            apiversion: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    Override the API version used for API requests made by this command.
                    <br/><br/>
                    Type: string
                `,
                title: `Override the API version used for API requests made by this command.`
            },
        },
        lwc_test_create: {
            json: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    Format output as JSON.<br/><br/>
                    Type: boolean
                `,
                title: `Format output as JSON.`
            },
            loglevel: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>            
                    The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log.<br/><br/>
                    Type: enum<br/>
                    Permissible values are: trace, debug, info, warn, error, fatal, TRACE, DEBUG, INFO, WARN, ERROR, FATAL<br/>
                    Default value: warn
                `,
                title: `The logging level for this command invocation.`
            },
            filepath: {
                type: `<b>Required</b>`,
                body: `
                    <br/><br/>
                    Path to Lightning web component .js file to create a test for.<br/><br/>
                    Type: string
                `,
                title: `Path to Lightning web component .js file to create a test for.`
            },
        },
        lwc_test_run: {
            json: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    Format output as JSON.<br/><br/>
                    Type: boolean
                `,
                title: `Format output as JSON.`
            },
            loglevel: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>            
                    The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log.<br/><br/>
                    Type: enum<br/>
                    Permissible values are: trace, debug, info, warn, error, fatal, TRACE, DEBUG, INFO, WARN, ERROR, FATAL<br/>
                    Default value: warn
                `,
                title: `The logging level for this command invocation.`
            },
            debug: {
                type: `<b><i>Optional</i><</b>`,
                body: `
                    <br/><br/>
                    Runs tests in a Node process that an external debugger can connect to. The run pauses until the debugger is connected. For more information, see: https://jestjs.io/docs/en/troubleshooting<br/><br/>
                    Type: boolean
                `,
                title: `Runs tests in a Node process that an external debugger can connect to.`
            },
            watch: {
                type: `<b><i>Optional</i><</b>`,
                body: `
                    <br/><br/>
                    Runs tests when a watched file changes. Watched files include the component under test and any files it references.<br/><br/>
                    Type: boolean
                `,
                title: `Runs tests when a watched file changes.`
            },
        },
        lwc_test_setup: {
            json: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    Format output as JSON.<br/><br/>
                    Type: boolean
                `,
                title: `Format output as JSON.`
            },
            loglevel: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>            
                    The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log.<br/><br/>
                    Type: enum<br/>
                    Permissible values are: trace, debug, info, warn, error, fatal, TRACE, DEBUG, INFO, WARN, ERROR, FATAL<br/>
                    Default value: warn
                `,
                title: `The logging level for this command invocation.`
            },
        },
        test_create: {
            json: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    Format output as JSON.<br/><br/>
                    Type: boolean
                `,
                title: `Format output as JSON.`
            },
            loglevel: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>            
                    The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log.<br/><br/>
                    Type: enum<br/>
                    Permissible values are: trace, debug, info, warn, error, fatal, TRACE, DEBUG, INFO, WARN, ERROR, FATAL<br/>
                    Default value: warn
                `,
                title: `The logging level for this command invocation.`
            },
            testname: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>            
                    The name of the new Lightning test. Logs are stored in $HOME/.sfdx/sfdx.log.<br/><br/>
                    Type: enum<br/>
                    Permissible values are: trace, debug, info, warn, error, fatal, TRACE, DEBUG, INFO, WARN, ERROR, FATAL<br/>
                    Default value: warn
                `,
                title: `The name of the new Lightning test.`
            },
            template: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    The template to use to create the file. Supplied parameter values or default values are filled into a copy of the template.<br/><br/>
                    Type: string<br/>
                    Permissible values are: DefaultLightningTest<br/>
                    Default value: DefaultLightningTest
                `,
                title: `The template to use to create the file.`
            },
            outputdir: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    The directory to store the newly created files. The location can be an absolute path or relative to the current working directory. The default is the current directory.<br/><br/>
                    Type: string<br/>
                    Default value: .
                `,
                title: `The directory to store the newly created files.`
            },
        },
    },
    limits: {
        api_display: {
            json: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    Format output as JSON.<br/><br/>
                    Type: boolean
                `,
                title: `Format output as JSON.`
            },
            loglevel: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>            
                    The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log.
                    <br/><br/>
                    Type: enum<br/>
                    Permissible values are: trace, debug, info, warn, error, fatal, TRACE, DEBUG, INFO, WARN, ERROR, FATAL<br/>
                    Default value: warn
                `,
                title: `The logging level for this command invocation.`
            },
            targetusername: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>            
                    A username or alias for the target org. Overrides the default target org.<br/><br/>
                    Type: string
                `,
                title: `A username or alias for the target org. Overrides the default target org.`
            },
            apiversion: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    Override the API version used for API requests made by this command.
                    <br/><br/>
                    Type: string
                `,
                title: `Override the API version used for API requests made by this command.`
            },
        },
        recordcounts_display: {
            json: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    Format output as JSON.<br/><br/>
                    Type: boolean
                `,
                title: `Format output as JSON.`
            },
            loglevel: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>            
                    The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log.
                    <br/><br/>
                    Type: enum<br/>
                    Permissible values are: trace, debug, info, warn, error, fatal, TRACE, DEBUG, INFO, WARN, ERROR, FATAL<br/>
                    Default value: warn
                `,
                title: `The logging level for this command invocation.`
            },
            targetusername: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>            
                    A username or alias for the target org. Overrides the default target org.<br/><br/>
                    Type: string
                `,
                title: `A username or alias for the target org. Overrides the default target org.`
            },
            apiversion: {
                type: `<b><i>Optional</i></b>`,
                body: `
                    <br/><br/>
                    Override the API version used for API requests made by this command.
                    <br/><br/>
                    Type: string
                `,
                title: `Override the API version used for API requests made by this command.`
            },
            sobjecttype: {
                type: `<b>Required</b>`,
                body: `
                    <br/><br/>
                    Comma-separated list of API names of standard or custom objects for which to display record counts.<br/><br/>
                    Type: string
                `,
                title: `Comma-separated list of API names of standard or custom objects for which to display record counts.`
            },
        }
    },
    advanced: {
        type: `<b><i>Optional</i></b>`,
        body: `
            <br/><br/>
            Here you can insert any extra or manual tags.<br/><br/>
            Type: string
        `,
        title: `Here you can insert any extra or manual tags.`
    },
};
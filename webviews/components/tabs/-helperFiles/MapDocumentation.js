export let mapDoc = {
  force:{
    analytics: {
      template_create: {
        json: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Format output as JSON.<br/><br/>
                      Type: boolean
                  `,
          title: `Format output as JSON.`,
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
          title: `The logging level for this command invocation.`,
        },
        outputdir: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      The directory to store the newly created files. The location can be an absolute path or relative to the current working directory. The default is the current directory.
                      <br/><br/>
                      Type: string
                  `,
          title: `The directory to store the newly created files.`,
        },
        apiversion: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Override the API version used for API requests made by this command.<br/><br/>
                      Type: string
                  `,
          title: `Override the API version used for API requests made by this command.`,
        },
        templatename: {
          type: `<b>Required</b>`,
          body: `
                      <br/><br/>
                      The name of the Analytics template.<br/><br/>
                      Type: string
                  `,
          title: `The name of the Analytics template.`,
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
          title: `Format output as JSON.`,
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
          title: `The logging level for this command invocation.`,
        },
        classname: {
          type: `<b>Required</b>`,
          body: `
                      <br/><br/>
                      The name of the new Apex class. The name can be up to 40 characters and must start with a letter.<br/><br/>
                      Type: string
                  `,
          title: `The name of the new Apex class.`,
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
          title: `The template to use to create the file.`,
        },
        outputdir: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      The directory to store the newly created files. The location can be an absolute path or relative to the current working directory. The default is the current directory.<br/><br/>
                      Type: string<br/>
                      Default value: .
                  `,
          title: `The directory to store the newly created files.`,
        },
        apiversion: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Override the API version used for API requests made by this command.
                      <br/><br/>
                      Type: string
                  `,
          title: `Override the API version used for API requests made by this command.`,
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
          title: `Format output as JSON.`,
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
          title: `The logging level for this command invocation.`,
        },
        targetusername: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>            
                      A username or alias for the target org. Overrides the default target org.<br/><br/>
                      Type: string
                  `,
          title: `A username or alias for the target org. Overrides the default target org.`,
        },
        apiversion: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Override the API version used for API requests made by this command.
                      <br/><br/>
                      Type: string
                  `,
          title: `Override the API version used for API requests made by this command.`,
        },
        apexcodefile: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Path to a local file that contains Apex code.<br/><br/>
                      Type: filepath
                  `,
          title: `Path to a local file that contains Apex code.`,
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
          title: `Format output as JSON.`,
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
          title: `The logging level for this command invocation.`,
        },
        targetusername: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>            
                      A username or alias for the target org. Overrides the default target org.<br/><br/>
                      Type: string
                  `,
          title: `A username or alias for the target org. Overrides the default target org.`,
        },
        apiversion: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Override the API version used for API requests made by this command.
                      <br/><br/>
                      Type: string
                  `,
          title: `Override the API version used for API requests made by this command.`,
        },
        logid: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Id of the log to display.<br/><br/>
                      Type: id
                  `,
          title: `Id of the log to display.`,
        },
        number: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Number of most recent logs to display.<br/><br/>
                      Type: number
                  `,
          title: `Number of most recent logs to display.`,
        },
        outputdir: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      The location can be an absolute path or relative to the current working directory. The default is the current directory.<br/><br/>
                      Type: string<br/>
                  `,
          title: `The directory to store the newly created files.`,
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
          title: `Format output as JSON.`,
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
          title: `The logging level for this command invocation.`,
        },
        targetusername: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>            
                      A username or alias for the target org. Overrides the default target org.<br/><br/>
                      Type: string
                  `,
          title: `A username or alias for the target org. Overrides the default target org.`,
        },
        apiversion: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Override the API version used for API requests made by this command.
                      <br/><br/>
                      Type: string
                  `,
          title: `Override the API version used for API requests made by this command.`,
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
          title: `Format output as JSON.`,
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
          title: `The logging level for this command invocation.`,
        },
        targetusername: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>            
                      A username or alias for the target org. Overrides the default target org.<br/><br/>
                      Type: string
                  `,
          title: `A username or alias for the target org. Overrides the default target org.`,
        },
        apiversion: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Override the API version used for API requests made by this command.
                      <br/><br/>
                      Type: string
                  `,
          title: `Override the API version used for API requests made by this command.`,
        },
        color: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Applies default colors to noteworthy log lines.<br/><br/>
                      Type: boolean
                  `,
          title: `Applies default colors to noteworthy log lines.`,
        },
        debuglevel: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Debug level to set on the DEVELOPER_LOG trace flag for your user.<br/><br/>
                      Type: string
                  `,
          title: `Debug level to set on the DEVELOPER_LOG trace flag for your user.`,
        },
        skiptraceflag: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Skips trace flag setup. Assumes that a trace flag and debug level are fully set up.<br/><br/>
                      Type: boolean
                  `,
          title: `Skips trace flag setup. Assumes that a trace flag and debug level are fully set up.`,
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
          title: `Format output as JSON.`,
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
          title: `The logging level for this command invocation.`,
        },
        targetusername: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>            
                      A username or alias for the target org. Overrides the default target org.<br/><br/>
                      Type: string
                  `,
          title: `A username or alias for the target org. Overrides the default target org.`,
        },
        apiversion: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Override the API version used for API requests made by this command.
                      <br/><br/>
                      Type: string
                  `,
          title: `Override the API version used for API requests made by this command.`,
        },
        testrunid: {
          type: `<b>Required</b>`,
          body: `
                      <br/><br/>
                      The ID of the test run.<br/><br/>
                      Type: string
                  `,
          title: `The ID of the test run.`,
        },
        codecoverage: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Retrieves code coverage results.<br/><br/>
                      Type: boolean
                  `,
          title: `Retrieves code coverage results.`,
        },
        outputdir: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Directory to store test result files.<br/><br/>
                      Type: string<br/>
                  `,
          title: `Directory to store test result files.`,
        },
        resultformat: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Permissible values are: human, tap, junit, json.<br/><br/>
                      Type: enum
                  `,
          title: `Permissible values are: human, tap, junit, json.`,
        },
        wait: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Sets the streaming client socket timeout in minutes; specify a longer wait time if timeouts occur frequently.<br/><br/>
                      Type: string
                  `,
          title: `Sets the streaming client socket timeout in minutes.`,
        },
        verbose: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Emit additional command output to stdout.<br/><br/>
                      Type: boolean
                  `,
          title: `Emit additional command output to stdout.`,
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
          title: `Format output as JSON.`,
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
          title: `The logging level for this command invocation.`,
        },
        targetusername: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>            
                      A username or alias for the target org. Overrides the default target org.<br/><br/>
                      Type: string
                  `,
          title: `A username or alias for the target org. Overrides the default target org.`,
        },
        apiversion: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Override the API version used for API requests made by this command.
                      <br/><br/>
                      Type: string
                  `,
          title: `Override the API version used for API requests made by this command.`,
        },
        codecoverage: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Retrieves code coverage results.<br/><br/>
                      Type: boolean
                  `,
          title: `Retrieves code coverage results.`,
        },
        outputdir: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Directory to store test run files.<br/><br/>
                      Type: string<br/>
                  `,
          title: `Directory to store test run files.`,
        },
        testlevel: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Specifies which tests to run, using one of these TestLevel enum values:.<br/><br/>
                      Type: enum<br/>
                      Permissible values are: RunLocalTests, RunAllTestsInOrg, RunSpecifiedTests
                  `,
          title: `Specifies which tests to run.`,
        },
        classnames: {
          type: `<b>Required 1/3</b>`,
          body: `
                      <br/><br/>
                      Comma-separated list of Apex test class names to run; if you select --classnames, you can't specify --suitenames or --tests.<br/><br/>
                      Type: string
                  `,
          title: `Comma-separated list of Apex test class names to run.`,
        },
        resultformat: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Permissible values are: human, tap, junit, json.<br/><br/>
                      Type: enum
                  `,
          title: `Permissible values are: human, tap, junit, json.`,
        },
        suitenames: {
          type: `<b>Required 1/3</b>`,
          body: `
                      <br/><br/>
                      Comma-separated list of Apex test suite names to run; if you select --suitenames, you can't specify --classnames or --tests.<br/><br/>
                      Type: string
                  `,
          title: `Comma-separated list of Apex test suite names to run.`,
        },
        tests: {
          type: `<b>Required 1/3</b>`,
          body: `
                      <br/><br/>
                      Comma-separated list of Apex test class names or IDs and, if applicable, test methods to run; if you specify --tests, you can't specify --classnames or --suitenames.<br/><br/>
                      Type: string
                  `,
          title: `Comma-separated list of Apex test class names or IDs and, if applicable, test methods to run.`,
        },
        wait: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Sets the streaming client socket timeout in minutes; specify a longer wait time if timeouts occur frequently.<br/><br/>
                      Type: string
                  `,
          title: `Sets the streaming client socket timeout in minutes.`,
        },
        synchronous: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Runs test methods from a single Apex class synchronously; if not specified, tests are run ansynchronously.<br/><br/>
                      Type: boolean
                  `,
          title: `Runs test methods from a single Apex class synchronously.`,
        },
        verbose: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Emit additional command output to stdout.<br/><br/>
                      Type: boolean
                  `,
          title: `Emit additional command output to stdout.`,
        },
        detailedcoverage: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Display detailed code coverage per test.<br/><br/>
                      Type: boolean
                  `,
          title: `Display detailed code coverage per test.`,
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
          title: `Format output as JSON.`,
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
          title: `The logging level for this command invocation.`,
        },
        triggername: {
          type: `<b>Required</b>`,
          body: `
                      <br/><br/>
                      The name of the new Apex trigger. The name can be up to 40 characters and must start with a letter.<br/><br/>
                      Type: string
                  `,
          title: `The name of the new Apex trigger.`,
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
          title: `The template to use to create the file.`,
        },
        outputdir: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      The directory to store the newly created files. The location can be an absolute path or relative to the current working directory. The default is the current directory.<br/><br/>
                      Type: string<br/>
                      Default value: .
                  `,
          title: `The directory to store the newly created files.`,
        },
        apiversion: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Override the API version used for API requests made by this command.
                      <br/><br/>
                      Type: string
                  `,
          title: `Override the API version used for API requests made by this command.`,
        },
        sobject: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      The sObject to create an Apex trigger on.<br/><br/>
                      Type: string
                  `,
          title: `The sObject to create an Apex trigger on.`,
        },
        triggerevents: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      The events that cause the trigger to fire.<br/><br/>
                      Type: array<br/>
                      Default value: before insert
                  `,
          title: `The events that cause the trigger to fire.`,
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
          title: `Format output as JSON.`,
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
          title: `The logging level for this command invocation.`,
        },
        typename: {
          type: `<b>Required</b>`,
          body: `
                      <br/><br/>
                      The unique name of the object in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores.<br/><br/>
                      Type: string
                  `,
          title: `The unique name of the object in the API.`,
        },
        label: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      A label for the custom metadata type.<br/><br/>
                      Type: string
                  `,
          title: `A label for the custom metadata type.`,
        },
        plurallabel: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      The plural version of the label value. If this flag is missing or blank, the singular label is used as the plural label.<br/><br/>
                      Type: string
                  `,
          title: `The plural version of the label value.`,
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
          title: `The visibility of the custom metadata type.`,
        },
        outputdir: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      The directory to store the newly-created custom metadata type files. The location can be an absolute path or relative to the current working directory. The default is the current directory.<br/><br/>
                      Type: string
                  `,
          title: `The directory to store the newly-created custom metadata type files.`,
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
          title: `Format output as JSON.`,
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
          title: `The logging level for this command invocation.`,
        },
        fieldname: {
          type: `<b>Required</b>`,
          body: `
                      <br/><br/>
                      The unique name for the field.<br/><br/>
                      Type: string
                  `,
          title: `The unique name for the field.`,
        },
        fieldtype: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      The unique name for the field.<br/><br/>
                      Type: enum<br/>
                      Permissible values are: Checkbox, Date, DateTime, Email, Number, Percent, Phone, Picklist, Text, TextArea, LongTextArea, Url
                  `,
          title: `The unique name for the field.`,
        },
        picklistvalues: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      A comma-separated list of picklist values. These values are required when creating a Picklist field.<br/><br/>
                      Type: array
                  `,
          title: `A comma-separated list of picklist values.`,
        },
        decimalplaces: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      The number of decimal places to use for Number or Percent fields. The value must be greater than or equal to zero.<br/><br/>
                      Type: number
                  `,
          title: `The number of decimal places to use for Number or Percent fields.`,
        },
        label: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      The label for the field.<br/><br/>
                      Type: string
                  `,
          title: `The label for the field.`,
        },
        outputdir: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      The directory to store the newly-created field definition files. The location can be an absolute path or relative to the current working directory. The default is the current directory.<br/><br/>
                      Type: string
                  `,
          title: `The directory to store the newly-created field definition files.`,
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
          title: `Format output as JSON.`,
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
          title: `The logging level for this command invocation.`,
        },
        targetusername: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>            
                      A username or alias for the target org. Overrides the default target org.<br/><br/>
                      Type: string
                  `,
          title: `A username or alias for the target org. Overrides the default target org.`,
        },
        apiversion: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Override the API version used for API requests made by this command.<br/><br/>
                      Type: string
                  `,
          title: `Override the API version used for API requests made by this command.`,
        },
        devname: {
          type: `<b>Required</b>`,
          body: `
                      <br/><br/>
                      The name of the custom metadata type.<br/><br/>
                      Type: string
                  `,
          title: `The name of the custom metadata type.`,
        },
        label: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      The label for the custom metadata type.<br/><br/>
                      Type: string
                  `,
          title: `The label for the custom metadata type.`,
        },
        plurallabel: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      The plural version of the label value. If this flag is missing or blank, the singular label is used as the plural label.<br/><br/>
                      Type: string
                  `,
          title: `The plural version of the label value.`,
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
          title: `The visibility of the custom metadata type.`,
        },
        sobjectname: {
          type: `<b>Required</b>`,
          body: `
                      <br/><br/>
                      The API name of the sObject source for custom metadata generation.<br/><br/>
                      Type: string
                  `,
          title: `The API name of the sObject source for custom metadata generation.`,
        },
        ignoreunsupported: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Ignore unsupported field types (these fields will not be created). The default is to create Text fields and convert the source value to text.<br/><br/>
                      Type: boolean
                  `,
          title: `Ignore unsupported field types.`,
        },
        typeoutputdir: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      The directory to store newly-created custom metadata type files.<br/><br/>
                      Type: directory<br/>
                      Default value: force-app/main/default/objects/
                  `,
          title: `The directory to store newly-created custom metadata type files.`,
        },
        recordsoutputdir: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      The directory to store newly-created custom metadata record files.<br/><br/>
                      Type: directory<br/>
                      Default value: force-app/main/default/customMetadata/
                  `,
          title: `The directory to store newly-created custom metadata record files.`,
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
          title: `Format output as JSON.`,
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
          title: `The logging level for this command invocation.`,
        },
        typename: {
          type: `<b>Required</b>`,
          body: `
                      <br/><br/>
                      The API name of the custom metadata type to create a record for.<br/><br/>
                      Type: string
                  `,
          title: `The API name of the custom metadata type to create a record for.`,
        },
        recordname: {
          type: `<b>Required</b>`,
          body: `
                      <br/><br/>
                      The name for the new record.<br/><br/>
                      Type: string
                  `,
          title: `The name for the new record.`,
        },
        label: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      The label for the new record.<br/><br/>
                      Type: string
                  `,
          title: `The label for the new record.`,
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
          title: `Protect the record when it is in a managed package.`,
        },
        inputdir: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      The directory to pull the custom metadata type definition from.<br/><br/>
                      Type: directory<br/>
                      Default value: force-app/main/default/objects
                  `,
          title: `The directory to pull the custom metadata type definition from.`,
        },
        outputdir: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      The directory to store newly-created custom metadata record files.<br/><br/>
                      Type: directory<br/>
                      Default value: force-app/main/default/customMetadata
                  `,
          title: `The directory to store newly-created custom metadata record files.`,
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
          title: `Format output as JSON.`,
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
          title: `The logging level for this command invocation.`,
        },
        filepath: {
          type: `<b>Required</b>`,
          body: `
                      <br/><br/>
                      The path to the CSV file.<br/><br/>
                      Type: string
                  `,
          title: `The path to the CSV file.`,
        },
        typename: {
          type: `<b>Required</b>`,
          body: `
                      <br/><br/>
                      The API Name of the custom metadata type. The '__mdt' suffix will be appended to the end of the name if it is omitted.<br/><br/>
                      Type: string
                  `,
          title: `The API Name of the custom metadata type.`,
        },
        inputdir: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      The directory to pull the custom metadata type definition from.<br/><br/>
                      Type: directory<br/>
                      Default value: force-app/main/default/objects
                  `,
          title: `The directory to pull the custom metadata type definition from.`,
        },
        outputdir: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      The directory to store newly-created custom metadata record files.<br/><br/>
                      Type: directory<br/>
                      Default value: force-app/main/default/customMetadata
                  `,
          title: `The directory to store newly-created custom metadata record files.`,
        },
        namecolumn: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      The column that is used to determine the name of the record.<br/><br/>
                      Type: string
                  `,
          title: `The column that is used to determine the name of the record.`,
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
          title: `Format output as JSON.`,
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
          title: `The logging level for this command invocation.`,
        },
        targetusername: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>            
                      A username or alias for the target org. Overrides the default target org.<br/><br/>
                      Type: string
                  `,
          title: `A username or alias for the target org. Overrides the default target org.`,
        },
        apiversion: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Override the API version used for API requests made by this command.
                      <br/><br/>
                      Type: string
                  `,
          title: `Override the API version used for API requests made by this command.`,
        },
        name: {
          type: `<b>Required</b>`,
          body: `
                      <br/><br/>
                      The name of the site to create.<br/><br/>
                      Type: string
                  `,
          title: `The name of the site to create.`,
        },
        templatename: {
          type: `<b>Required</b>`,
          body: `
                      <br/><br/>
                      The template to use to create the site, such as the Customer Service template. Run force:community:template:list to see which templates are available in your org.<br/><br/>
                      Type: string
                  `,
          title: `The template to use to create the site, such as the Customer Service template. Run force:community:template:list to see which templates are available in your org.`,
        },
        urlpathprefix: {
          type: `<b>Required</b>`,
          body: `
                      <br/><br/>
                      The URL to append to the domain that you created when you enabled Digital Experiences for this org. For example, if your domain name is https://MyDomainName.my.site.com and you???re creating a customer site, enter "customers" to create the unique URL<br/><br/>
                      https://MyDomainName.my.site.com/customers.<br/><br/>
                      Type: string
                  `,
          title: `The URL to append to the domain that you created when you enabled Digital Experiences for this org.`,
        },
        description: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      The description of the site. The description displays in Digital Experiences - All Sites in Setup and helps with site identification.<br/><br/>
                      Type: string
                  `,
          title: `The description of the site.`,
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
          title: `Format output as JSON.`,
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
          title: `The logging level for this command invocation.`,
        },
        targetusername: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>            
                      A username or alias for the target org. Overrides the default target org.<br/><br/>
                      Type: string
                  `,
          title: `A username or alias for the target org. Overrides the default target org.`,
        },
        apiversion: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Override the API version used for API requests made by this command.
                      <br/><br/>
                      Type: string
                  `,
          title: `Override the API version used for API requests made by this command.`,
        },
        name: {
          type: `<b>Required</b>`,
          body: `
                      <br/><br/>
                      The name of the Experience Builder site that you want to publish.<br/><br/>
                      Type: string
                  `,
          title: `The name of the Experience Builder site that you want to publish.`,
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
          title: `Format output as JSON.`,
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
          title: `The logging level for this command invocation.`,
        },
        targetusername: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>            
                      A username or alias for the target org. Overrides the default target org.<br/><br/>
                      Type: string
                  `,
          title: `A username or alias for the target org. Overrides the default target org.`,
        },
        apiversion: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Override the API version used for API requests made by this command.
                      <br/><br/>
                      Type: string
                  `,
          title: `Override the API version used for API requests made by this command.`,
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
          title: `Format output as JSON.`,
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
          title: `The logging level for this command invocation.`,
        },
        targetusername: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>            
                      A username or alias for the target org. Overrides the default target org.<br/><br/>
                      Type: string
                  `,
          title: `A username or alias for the target org. Overrides the default target org.`,
        },
        apiversion: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Override the API version used for API requests made by this command.
                      <br/><br/>
                      Type: string
                  `,
          title: `Override the API version used for API requests made by this command.`,
        },
        csvfile: {
          type: `<b>Required</b>`,
          body: `
                      <br/><br/>
                      The path to the CSV file containing the ids of the records to delete.<br/><br/>
                      Type: filepath
                  `,
          title: `The path to the CSV file containing the ids of the records to delete.`,
        },
        sobjecttype: {
          type: `<b>Required</b>`,
          body: `
                      <br/><br/>
                      The sObject type of the records you???re deleting.<br/><br/>
                      Type: string
                  `,
          title: `The sObject type of the records you???re deleting.`,
        },
        wait: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      The number of minutes to wait for the command to complete before displaying the results.<br/><br/>
                      Type: string
                  `,
          title: `The number of minutes to wait for the command to complete before displaying the results.`,
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
          title: `Format output as JSON.`,
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
          title: `The logging level for this command invocation.`,
        },
        targetusername: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>            
                      A username or alias for the target org. Overrides the default target org.<br/><br/>
                      Type: string
                  `,
          title: `A username or alias for the target org. Overrides the default target org.`,
        },
        apiversion: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Override the API version used for API requests made by this command.
                      <br/><br/>
                      Type: string
                  `,
          title: `Override the API version used for API requests made by this command.`,
        },
        batchid: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      The ID of the batch whose status you want to view.<br/><br/>
                      Type: string
                  `,
          title: `The ID of the batch whose status you want to view.`,
        },
        jobid: {
          type: `<b>Required</b>`,
          body: `
                      <br/><br/>
                      The ID of the job you want to view or of the job whose batch you want to view.<br/><br/>
                      Type: string
                  `,
          title: `The ID of the job you want to view or of the job whose batch you want to view.`,
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
          title: `Format output as JSON.`,
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
          title: `The logging level for this command invocation.`,
        },
        targetusername: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>            
                      A username or alias for the target org. Overrides the default target org.<br/><br/>
                      Type: string
                  `,
          title: `A username or alias for the target org. Overrides the default target org.`,
        },
        apiversion: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Override the API version used for API requests made by this command.
                      <br/><br/>
                      Type: string
                  `,
          title: `Override the API version used for API requests made by this command.`,
        },
        externalid: {
          type: `<b>Required</b>`,
          body: `
                      <br/><br/>
                      The column name of the external ID.<br/><br/>
                      Type: string
                  `,
          title: `The column name of the external ID.`,
        },
        csvfile: {
          type: `<b>Required</b>`,
          body: `
                      <br/><br/>
                      The path to the CSV file that defines the records to upsert.<br/><br/>
                      Type: filepath
                  `,
          title: `The path to the CSV file that defines the records to upsert.`,
        },
        sobjecttype: {
          type: `<b>Required</b>`,
          body: `
                      <br/><br/>
                      The sObject type of the records you want to upsert.<br/><br/>
                      Type: string
                  `,
          title: `The sObject type of the records you want to upsert.`,
        },
        wait: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      The number of minutes to wait for the command to complete before displaying the results.<br/><br/>
                      Type: string
                  `,
          title: `The number of minutes to wait for the command to complete before displaying the results.`,
        },
        serial: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Run batches in serial mode.<br/><br/>
                      Type: boolean
                  `,
          title: `Run batches in serial mode.`,
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
          title: `Format output as JSON.`,
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
          title: `The logging level for this command invocation.`,
        },
        targetusername: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>            
                      A username or alias for the target org. Overrides the default target org.<br/><br/>
                      Type: string
                  `,
          title: `A username or alias for the target org. Overrides the default target org.`,
        },
        apiversion: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Override the API version used for API requests made by this command.
                      <br/><br/>
                      Type: string
                  `,
          title: `Override the API version used for API requests made by this command.`,
        },
        sobjecttype: {
          type: `<b>Required</b>`,
          body: `
                      <br/><br/>
                      The sObject type of the records you want to upsert.<br/><br/>
                      Type: string
                  `,
          title: `The sObject type of the records you want to upsert.`,
        },
        values: {
          type: `<b>Required</b>`,
          body: `
                      <br/><br/>
                      The <fieldName>=<value> pairs you???re creating.<br/><br/>
                      Type: string
                  `,
          title: `The <fieldName>=<value> pairs you???re creating.`,
        },
        usetoolingapi: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Create the record with tooling api.<br/><br/>
                      Type: boolean
                  `,
          title: `Create the record with tooling api.`,
        },
        perflog: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Get API performance data.<br/><br/>
                      Type: boolean
                  `,
          title: `Get API performance data.`,
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
          title: `Format output as JSON.`,
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
          title: `The logging level for this command invocation.`,
        },
        targetusername: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>            
                      A username or alias for the target org. Overrides the default target org.<br/><br/>
                      Type: string
                  `,
          title: `A username or alias for the target org. Overrides the default target org.`,
        },
        apiversion: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Override the API version used for API requests made by this command.
                      <br/><br/>
                      Type: string
                  `,
          title: `Override the API version used for API requests made by this command.`,
        },
        sobjecttype: {
          type: `<b>Required</b>`,
          body: `
                      <br/><br/>
                      The sObject type of the records you want to upsert.<br/><br/>
                      Type: string
                  `,
          title: `The sObject type of the records you want to upsert.`,
        },
        sobjectid: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      The ID of the record you???re deleting.<br/><br/>
                      Type: id
                  `,
          title: `The ID of the record you???re deleting.`,
        },
        where: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      A list of <fieldName>=<value> pairs to search for.<br/><br/>
                      Type: string
                  `,
          title: `A list of <fieldName>=<value> pairs to search for.`,
        },
        usetoolingapi: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Create the record with tooling api.<br/><br/>
                      Type: boolean
                  `,
          title: `Create the record with tooling api.`,
        },
        perflog: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Get API performance data.<br/><br/>
                      Type: boolean
                  `,
          title: `Get API performance data.`,
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
          title: `Format output as JSON.`,
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
          title: `The logging level for this command invocation.`,
        },
        targetusername: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>            
                      A username or alias for the target org. Overrides the default target org.<br/><br/>
                      Type: string
                  `,
          title: `A username or alias for the target org. Overrides the default target org.`,
        },
        apiversion: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Override the API version used for API requests made by this command.
                      <br/><br/>
                      Type: string
                  `,
          title: `Override the API version used for API requests made by this command.`,
        },
        sobjecttype: {
          type: `<b>Required</b>`,
          body: `
                      <br/><br/>
                      The sObject type of the records you want to upsert.<br/><br/>
                      Type: string
                  `,
          title: `The sObject type of the records you want to upsert.`,
        },
        sobjectid: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      The ID of the record you???re deleting.<br/><br/>
                      Type: id
                  `,
          title: `The ID of the record you???re deleting.`,
        },
        where: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      A list of <fieldName>=<value> pairs to search for.<br/><br/>
                      Type: string
                  `,
          title: `A list of <fieldName>=<value> pairs to search for.`,
        },
        usetoolingapi: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Create the record with tooling api.<br/><br/>
                      Type: boolean
                  `,
          title: `Create the record with tooling api.`,
        },
        perflog: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Get API performance data.<br/><br/>
                      Type: boolean
                  `,
          title: `Get API performance data.`,
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
          title: `Format output as JSON.`,
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
          title: `The logging level for this command invocation.`,
        },
        targetusername: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>            
                      A username or alias for the target org. Overrides the default target org.<br/><br/>
                      Type: string
                  `,
          title: `A username or alias for the target org. Overrides the default target org.`,
        },
        apiversion: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Override the API version used for API requests made by this command.
                      <br/><br/>
                      Type: string
                  `,
          title: `Override the API version used for API requests made by this command.`,
        },
        sobjecttype: {
          type: `<b>Required</b>`,
          body: `
                      <br/><br/>
                      The sObject type of the records you want to upsert.<br/><br/>
                      Type: string
                  `,
          title: `The sObject type of the records you want to upsert.`,
        },
        sobjectid: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      The ID of the record you???re deleting.<br/><br/>
                      Type: id
                  `,
          title: `The ID of the record you???re deleting.`,
        },
        where: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      A list of <fieldName>=<value> pairs to search for.<br/><br/>
                      Type: string
                  `,
          title: `A list of <fieldName>=<value> pairs to search for.`,
        },
        values: {
          type: `<b>Required</b>`,
          body: `
                      <br/><br/>
                      The <fieldName>=<value> pairs you???re updating.<br/><br/>
                      Type: string
                  `,
          title: `The <fieldName>=<value> pairs you???re updating.`,
        },
        usetoolingapi: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Create the record with tooling api.<br/><br/>
                      Type: boolean
                  `,
          title: `Create the record with tooling api.`,
        },
        perflog: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Get API performance data.<br/><br/>
                      Type: boolean
                  `,
          title: `Get API performance data.`,
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
          title: `Format output as JSON.`,
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
          title: `The logging level for this command invocation.`,
        },
        targetusername: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>            
                      A username or alias for the target org. Overrides the default target org.<br/><br/>
                      Type: string
                  `,
          title: `A username or alias for the target org. Overrides the default target org.`,
        },
        apiversion: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Override the API version used for API requests made by this command.
                      <br/><br/>
                      Type: string
                  `,
          title: `Override the API version used for API requests made by this command.`,
        },
        query: {
          type: `<b>Required</b>`,
          body: `
                      <br/><br/>
                      SOQL query to execute.<br/><br/>
                      Type: string
                  `,
          title: `SOQL query to execute.`,
        },
        usetoolingapi: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Create the record with tooling api.<br/><br/>
                      Type: boolean
                  `,
          title: `Create the record with tooling api.`,
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
          title: `Result format emitted to stdout; --json flag overrides this parameter.`,
        },
        perflog: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Get API performance data.<br/><br/>
                      Type: boolean
                  `,
          title: `Get API performance data.`,
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
          title: `Format output as JSON.`,
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
          title: `The logging level for this command invocation.`,
        },
        targetusername: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>            
                      A username or alias for the target org. Overrides the default target org.<br/><br/>
                      Type: string
                  `,
          title: `A username or alias for the target org. Overrides the default target org.`,
        },
        apiversion: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Override the API version used for API requests made by this command.
                      <br/><br/>
                      Type: string
                  `,
          title: `Override the API version used for API requests made by this command.`,
        },
        query: {
          type: `<b>Required</b>`,
          body: `
                      <br/><br/>
                      Soql query, or filepath of file containing a soql query, to retrieve records.<br/><br/>
                      Type: string
                  `,
          title: `Soql query, or filepath of file containing a soql query, to retrieve records.`,
        },
        plan: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Generate multitple sobject tree files and a plan definition file for aggregated import.<br/><br/>
                      Type: boolean
                  `,
          title: `Generate mulitple sobject tree files and a plan definition file for aggregated import.`,
        },
        prefix: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Prefix of generated files.<br/><br/>
                      Type: string
                  `,
          title: `Prefix of generated files.`,
        },
        outputdir: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Directory to store files'.<br/><br/>
                      Type: directory
                  `,
          title: `Directory to store files'.`,
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
          title: `Format output as JSON.`,
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
          title: `The logging level for this command invocation.`,
        },
        targetusername: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>            
                      A username or alias for the target org. Overrides the default target org.<br/><br/>
                      Type: string
                  `,
          title: `A username or alias for the target org. Overrides the default target org.`,
        },
        apiversion: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Override the API version used for API requests made by this command.
                      <br/><br/>
                      Type: string
                  `,
          title: `Override the API version used for API requests made by this command.`,
        },
        sobjecttreefiles: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Comma-delimited, ordered paths of json files containing collection of record trees to insert.<br/><br/>
                      Type: array
                  `,
          title: `Comma-delimited, ordered paths of json files containing collection of record trees to insert.`,
        },
        plan: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Path to plan to insert multiple data files that have master-detail relationships.<br/><br/>
                      Type: filepath
                  `,
          title: `Path to plan to insert multiple data files that have master-detail relationships.`,
        },
        confighelp: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Display schema information for the --plan configuration file to stdout; if you use this option, all other options except --json are ignored.<br/><br/>
                      Type: boolean
                  `,
          title: `Display schema information for the --plan configuration file to stdout`,
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
          title: `Format output as JSON.`,
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
          title: `The logging level for this command invocation.`,
        },
        appname: {
          type: `<b>Required</b>`,
          body: `
                      <br/><br/>
                      The Lightning app name. The name can be up to 40 characters and must start with a letter.<br/><br/>
                      Type: string
                  `,
          title: `The Lightning app name. The name can be up to 40 characters and must start with a letter.`,
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
          title: `The template to use to create the file.`,
        },
        outputdir: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      The directory to store the newly created files. The location can be an absolute path or relative to the current working directory. The default is the current directory.<br/><br/>
                      Type: string<br/>
                      Default value: .
                  `,
          title: `The directory to store the newly created files.`,
        },
        apiversion: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Override the API version used for API requests made by this command.
                      <br/><br/>
                      Type: string
                  `,
          title: `Override the API version used for API requests made by this command.`,
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
          title: `Format output as JSON.`,
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
          title: `The logging level for this command invocation.`,
        },
        componentname: {
          type: `<b>Required</b>`,
          body: `
                      <br/><br/>
                      The Lightning component name. The name can be up to 40 characters and must start with a letter.<br/><br/>
                      Type: string
                  `,
          title: `The Lightning component name.`,
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
          title: `The template to use to create the file.`,
        },
        outputdir: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      The directory to store the newly created files. The location can be an absolute path or relative to the current working directory. The default is the current directory.<br/><br/>
                      Type: string<br/>
                      Default value: .
                  `,
          title: `The directory to store the newly created files.`,
        },
        apiversion: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Override the API version used for API requests made by this command.
                      <br/><br/>
                      Type: string
                  `,
          title: `Override the API version used for API requests made by this command.`,
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
          title: `The type of the new Lightning component.`,
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
          title: `Format output as JSON.`,
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
          title: `The logging level for this command invocation.`,
        },
        eventname: {
          type: `<b>Required</b>`,
          body: `
                      <br/><br/>
                      The Lightning event name. The name can be up to 40 characters and must start with a letter.<br/><br/>
                      Type: string
                  `,
          title: `The Lightning event name.`,
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
          title: `The template to use to create the file.`,
        },
        outputdir: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      The directory to store the newly created files. The location can be an absolute path or relative to the current working directory. The default is the current directory.<br/><br/>
                      Type: string<br/>
                      Default value: .
                  `,
          title: `The directory to store the newly created files.`,
        },
        apiversion: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Override the API version used for API requests made by this command.
                      <br/><br/>
                      Type: string
                  `,
          title: `Override the API version used for API requests made by this command.`,
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
          title: `Format output as JSON.`,
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
          title: `The logging level for this command invocation.`,
        },
        interfacename: {
          type: `<b>Required</b>`,
          body: `
                      <br/><br/>
                      The Lightning interface name. The name can be up to 40 characters and must start with a letter.<br/><br/>
                      Type: string
                  `,
          title: `The Lightning interface name.`,
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
          title: `The template to use to create the file.`,
        },
        outputdir: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      The directory to store the newly created files. The location can be an absolute path or relative to the current working directory. The default is the current directory.<br/><br/>
                      Type: string<br/>
                      Default value: .
                  `,
          title: `The directory to store the newly created files.`,
        },
        apiversion: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Override the API version used for API requests made by this command.
                      <br/><br/>
                      Type: string
                  `,
          title: `Override the API version used for API requests made by this command.`,
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
          title: `Format output as JSON.`,
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
          title: `The logging level for this command invocation.`,
        },
        filepath: {
          type: `<b>Required</b>`,
          body: `
                      <br/><br/>
                      Path to Lightning web component .js file to create a test for.<br/><br/>
                      Type: string
                  `,
          title: `Path to Lightning web component .js file to create a test for.`,
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
          title: `Format output as JSON.`,
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
          title: `The logging level for this command invocation.`,
        },
        debug: {
          type: `<b><i>Optional</i><</b>`,
          body: `
                      <br/><br/>
                      Runs tests in a Node process that an external debugger can connect to. The run pauses until the debugger is connected. For more information, see: https://jestjs.io/docs/en/troubleshooting<br/><br/>
                      Type: boolean
                  `,
          title: `Runs tests in a Node process that an external debugger can connect to.`,
        },
        watch: {
          type: `<b><i>Optional</i><</b>`,
          body: `
                      <br/><br/>
                      Runs tests when a watched file changes. Watched files include the component under test and any files it references.<br/><br/>
                      Type: boolean
                  `,
          title: `Runs tests when a watched file changes.`,
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
          title: `Format output as JSON.`,
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
          title: `The logging level for this command invocation.`,
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
          title: `Format output as JSON.`,
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
          title: `The logging level for this command invocation.`,
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
          title: `The name of the new Lightning test.`,
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
          title: `The template to use to create the file.`,
        },
        outputdir: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      The directory to store the newly created files. The location can be an absolute path or relative to the current working directory. The default is the current directory.<br/><br/>
                      Type: string<br/>
                      Default value: .
                  `,
          title: `The directory to store the newly created files.`,
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
          title: `Format output as JSON.`,
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
          title: `The logging level for this command invocation.`,
        },
        targetusername: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>            
                      A username or alias for the target org. Overrides the default target org.<br/><br/>
                      Type: string
                  `,
          title: `A username or alias for the target org. Overrides the default target org.`,
        },
        apiversion: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Override the API version used for API requests made by this command.
                      <br/><br/>
                      Type: string
                  `,
          title: `Override the API version used for API requests made by this command.`,
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
          title: `Format output as JSON.`,
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
          title: `The logging level for this command invocation.`,
        },
        targetusername: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>            
                      A username or alias for the target org. Overrides the default target org.<br/><br/>
                      Type: string
                  `,
          title: `A username or alias for the target org. Overrides the default target org.`,
        },
        apiversion: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Override the API version used for API requests made by this command.
                      <br/><br/>
                      Type: string
                  `,
          title: `Override the API version used for API requests made by this command.`,
        },
        sobjecttype: {
          type: `<b>Required</b>`,
          body: `
                      <br/><br/>
                      Comma-separated list of API names of standard or custom objects for which to display record counts.<br/><br/>
                      Type: string
                  `,
          title: `Comma-separated list of API names of standard or custom objects for which to display record counts.`,
        },
      },
    },
    mdapi: {
      beta_convert: {
        json: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Format output as JSON.<br/><br/>
                      Type: boolean
                  `,
          title: `Format output as JSON.`,
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
          title: `The logging level for this command invocation.`,
        },
        rootdir: {
          type: `<b>Required</b>`,
          body: `
                      <br/><br/>            
                      The root directory that contains the metadata you retrieved using Metadata API.<br/><br/>
                      Type: directory
                  `,
          title: `The root directory that contains the metadata you retrieved using Metadata API.`,
        },
        outputdir: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      The directory to store your files in after they???re converted to the source format. Can be an absolute or relative path.<br/><br/>
                      Type: directory
                  `,
          title: `The directory to store your files in after they???re converted to the source format.`,
        },
        manifest: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      The complete path to the manifest (package.xml) file that specifies the metadata types to convert.<br/><br/>
                      If you specify this parameter, don???t specify --metadata or --sourcepath.<br/><br/>
                      Type: string
                  `,
          title: `The complete path to the manifest (package.xml) file that specifies the metadata types to convert.`,
        },
        metadatapath: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      A comma-separated list of paths to the local metadata files to convert. The supplied paths can be to a single file (in which case the operation is applied to only one file) or to a folder (in which case the operation is applied to all metadata types in the directory and its sub-directories).<br/><br/>
                      If you specify this parameter, don???t specify --manifest or --metadata. If the comma-separated list you???re supplying contains spaces, enclose the entire comma-separated list in one set of double quotes.<br/><br/>
                      Type: array
                  `,
          title: `A comma-separated list of paths to the local metadata files to convert.`,
        },
        metadata: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      A comma-separated list of metadata component names to convert.<br/><br/>
                      Type: array
                  `,
          title: `A comma-separated list of metadata component names to convert.`,
        },
      },
      convert: {
        json: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Format output as JSON.<br/><br/>
                      Type: boolean
                  `,
          title: `Format output as JSON.`,
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
          title: `The logging level for this command invocation.`,
        },
        rootdir: {
          type: `<b>Required</b>`,
          body: `
                      <br/><br/>            
                      The root directory that contains the metadata you retrieved using Metadata API.<br/><br/>
                      Type: directory
                  `,
          title: `The root directory that contains the metadata you retrieved using Metadata API.`,
        },
        outputdir: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      The directory to store your files in after they???re converted to the source format. Can be an absolute or relative path.<br/><br/>
                      Type: directory
                  `,
          title: `The directory to store your files in after they???re converted to the source format.`,
        },
        manifest: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      The complete path to the manifest (package.xml) file that specifies the metadata types to convert.<br/><br/>
                      If you specify this parameter, don???t specify --metadata or --sourcepath.<br/><br/>
                      Type: string
                  `,
          title: `The complete path to the manifest (package.xml) file that specifies the metadata types to convert.`,
        },
        metadatapath: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      A comma-separated list of paths to the local metadata files to convert. The supplied paths can be to a single file (in which case the operation is applied to only one file) or to a folder (in which case the operation is applied to all metadata types in the directory and its sub-directories).<br/><br/>
                      If you specify this parameter, don???t specify --manifest or --metadata. If the comma-separated list you???re supplying contains spaces, enclose the entire comma-separated list in one set of double quotes.<br/><br/>
                      Type: array
                  `,
          title: `A comma-separated list of paths to the local metadata files to convert.`,
        },
        metadata: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      A comma-separated list of metadata component names to convert.<br/><br/>
                      Type: array
                  `,
          title: `A comma-separated list of metadata component names to convert.`,
        },
      },
      deploy: {
        json: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Format output as JSON.<br/><br/>
                      Type: boolean
                  `,
          title: `Format output as JSON.`,
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
          title: `The logging level for this command invocation.`,
        },
        targetusername: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>            
                      A username or alias for the target org. Overrides the default target org.<br/><br/>
                      Type: string
                  `,
          title: `A username or alias for the target org. Overrides the default target org.`,
        },
        apiversion: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Override the API version used for API requests made by this command.<br/><br/>
                      Type: string
                  `,
          title: `Override the API version used for API requests made by this command.`,
        },
        checkonly: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Validates the deployed metadata and runs all Apex tests, but prevents the deployment from being saved to the org.<br/><br/>
                      If you change a field type from Master-Detail to Lookup or vice versa, that change isn???t supported when using the --checkonly parameter to test a deployment (validation). This kind of change isn???t supported for test deployments to avoid the risk of data loss or corruption. If a change that isn???t supported for test deployments is included in a deployment package, the test deployment fails and issues an error.<br/><br/>
                      If your deployment package changes a field type from Master-Detail to Lookup or vice versa, you can still validate the changes prior to deploying to Production by performing a full deployment to another test Sandbox. A full deployment includes a validation of the changes as part of the deployment process.<br/><br/>
                      Note: A Metadata API deployment that includes Master-Detail relationships deletes all detail records in the Recycle Bin in the following cases.<br/><br/>
                      1. For a deployment with a new Master-Detail field, soft delete (send to the Recycle Bin) all detail records before proceeding to deploy the Master-Detail field, or the deployment fails. During the deployment, detail records are permanently deleted from the Recycle Bin and cannot be recovered.<br/><br/>
                      2. For a deployment that converts a Lookup field relationship to a Master-Detail relationship, detail records must reference a master record or be soft-deleted (sent to the Recycle Bin) for the deployment to succeed. However, a successful deployment permanently deletes any detail records in the Recycle Bin.<br/><br/>
                      Type: boolean
                  `,
          title: `Validates the deployed metadata and runs all Apex tests, but prevents the deployment from being saved to the org.`,
        },
        deploydir: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      The root of the directory tree that contains the files to deploy. The root must contain a valid package.xml file describing the entities in the directory structure. Required to initiate a deployment if you don???t use --zipfile. If you specify both --zipfile and --deploydir, a zip file of the contents of the --deploydir directory is written to the location specified by --zipfile.<br/><br/>
                      Type: directory
                  `,
          title: `The root of the directory tree that contains the files to deploy.`,
        },
        wait: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      The number of minutes to wait for the command to complete. The default is ???1 (no limit). 0<br/><br/>
                      Type: directory
                  `,
          title: `The number of minutes to wait for the command to complete.`,
        },
        testlevel: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Specifies which level of deployment tests to run. Valid values are:<br/><br/>
                      NoTestRun???No tests are run. This test level applies only to deployments to development environments, such as sandbox, Developer Edition, or trial orgs. This test level is the default for development environments.<br/><br/>
                      RunSpecifiedTests???Runs only the tests that you specify in the --runtests option. Code coverage requirements differ from the default coverage requirements when using this test level. Executed tests must comprise a minimum of 75% code coverage for each class and trigger in the deployment package. This coverage is computed for each class and trigger individually and is different than the overall coverage percentage.<br/><br/>
                      RunLocalTests???All tests in your org are run, except the ones that originate from installed managed packages. This test level is the default for production deployments that include Apex classes or triggers.<br/><br/>
                      RunAllTestsInOrg???All tests in your org are run, including tests of managed packages.<br/><br/>
                      If you don???t specify a test level, the default behavior depends on the contents of your deployment package. For more information, see ???Running Tests in a Deployment??? in the Metadata API Developer Guide.<br/><br/>
                      Type: enum<br/>
                      Permissible values are: NoTestRun, RunSpecifiedTests, RunLocalTests, RunAllTestsInOrg
                  `,
          title: `The number of minutes to wait for the command to complete.`,
        },
        runtests: {
          type: `<b>Required</b>`,
          body: `
                      <br/><br/>
                      Lists the Apex classes containing the deployment tests to run. Use this parameter when you set --testlevel to RunSpecifiedTests.<br/><br/>
                      Type: array
                  `,
          title: `Lists the Apex classes containing the deployment tests to run.`,
        },
        ignoreerrors: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Ignores the deploy errors, and continues with the deploy operation. The default is false. Keep this parameter set to false when deploying to a production org. If set to true, components without errors are deployed, and components with errors are skipped.<br/><br/>
                      Type: boolean
                  `,
          title: `Ignores the deploy errors, and continues with the deploy operation.`,
        },
        ignorewarnings: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      If a warning occurs and ignoreWarnings is set to true, the success field in DeployMessage is true. When ignoreWarnings is set to false, success is set to false, and the warning is treated like an error.<br/><br/>
                      This field is available in API version 18.0 and later. Prior to version 18.0, there was no distinction between warnings and errors. All problems were treated as errors and prevented a successful deployment.<br/><br/>
                      Type: boolean
                  `,
          title: `If a warning occurs and ignoreWarnings is set to true, the success field in DeployMessage is true.`,
        },
        validateddeployrequestid: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Specifies the ID of a package with recently validated components to run a Quick Deploy. Deploying a validation helps you shorten your deployment time because tests aren???t rerun. If you have a recent successful validation, you can deploy the validated components without running tests. A validation doesn???t save any components in the org. You use a validation only to check the success or failure messages that you would receive with an actual deployment. To validate your components, add the -c | --checkonly flag when you run "sfdx force:mdapi:deploy". This flag sets the checkOnly="true" parameter for your deployment. Before deploying a recent validation, ensure that the following requirements are met:<br/><br/>
                      1. The components have been validated successfully for the target environment within the last 10 days.<br/><br/>
                      2. As part of the validation, Apex tests in the target org have passed.<br/><br/>
                      3. Code coverage requirements are met.<br/><br/>
                      - If all tests in the org or all local tests are run, overall code coverage is at least 75%, and Apex triggers have some coverage.<br/><br/>
                      - If specific tests are run with the RunSpecifiedTests test level, each class and trigger that was deployed is covered by at least 75% individually.<br/><br/>
                      Type: Id
                  `,
          title: `Specifies the ID of a package with recently validated components to run a Quick Deploy.`,
        },
        verbose: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Indicates that you want verbose output from the deploy operation.<br/><br/>
                      Type: boolean
                  `,
          title: `Indicates that you want verbose output from the deploy operation.`,
        },
        zipfile: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      The path to the .zip file of metadata files to deploy. You must indicate this option or --deploydir.If you specify both --zipfile and --deploydir, a .zip file of the contents of the deploy directory is created at the path specified for the .zip file.<br/><br/>
                      Type: filepath
                  `,
          title: `The path to the .zip file of metadata files to deploy.`,
        },
        singlepackage: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Indicates that the specified .zip file points to a directory structure for a single package. By default, the CLI assumes the directory is structured for a set of packages.<br/><br/>
                      Type: boolean
                  `,
          title: `Indicates that the specified .zip file points to a directory structure for a single package.`,
        },
        soapdeploy: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Deploy metadata with SOAP API instead of the default REST API. Because SOAP API has a lower .ZIP file size limit (400 MB uncompressed, 39 MB compressed), Salesforce recommends REST API deployment. This flag provides backwards compatibility with API version 50.0 and earlier when deploy used SOAP API by default.<br/><br/>
                      Type: boolean
                  `,
          title: `Deploy metadata with SOAP API instead of the default REST API.`,
        },
      },
      deploy_cancel: {
        json: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Format output as JSON.<br/><br/>
                      Type: boolean
                  `,
          title: `Format output as JSON.`,
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
          title: `The logging level for this command invocation.`,
        },
        targetusername: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>            
                      A username or alias for the target org. Overrides the default target org.<br/><br/>
                      Type: string
                  `,
          title: `A username or alias for the target org. Overrides the default target org.`,
        },
        apiversion: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Override the API version used for API requests made by this command.<br/><br/>
                      Type: string
                  `,
          title: `Override the API version used for API requests made by this command.`,
        },
        wait: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      The number of minutes to wait for the command to complete. The default is ???1 (no limit). 0<br/><br/>
                      Type: directory
                  `,
          title: `The number of minutes to wait for the command to complete.`,
        },
        jobid: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Job ID of the deployment you want to cancel; defaults to your most recent CLI deployment if not specified.<br/><br/>
                      Type: id
                  `,
          title: `Job ID of the deployment you want to cancel.`,
        },
      },
      deploy_report: {
        json: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Format output as JSON.<br/><br/>
                      Type: boolean
                  `,
          title: `Format output as JSON.`,
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
          title: `The logging level for this command invocation.`,
        },
        targetusername: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>            
                      A username or alias for the target org. Overrides the default target org.<br/><br/>
                      Type: string
                  `,
          title: `A username or alias for the target org. Overrides the default target org.`,
        },
        apiversion: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Override the API version used for API requests made by this command.<br/><br/>
                      Type: string
                  `,
          title: `Override the API version used for API requests made by this command.`,
        },
        wait: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      The number of minutes to wait for the command to complete. The default is ???1 (no limit). 0<br/><br/>
                      Type: directory
                  `,
          title: `The number of minutes to wait for the command to complete.`,
        },
        jobid: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Job ID of the deployment you want to cancel; defaults to your most recent CLI deployment if not specified.<br/><br/>
                      Type: id
                  `,
          title: `Job ID of the deployment you want to cancel.`,
        },
        verbose: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Indicates that you want verbose output for deploy results.<br/><br/>
                      Type: boolean
                  `,
          title: `Indicates that you want verbose output for deploy results.`,
        },
      },
      describemetadata: {
        json: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Format output as JSON.<br/><br/>
                      Type: boolean
                  `,
          title: `Format output as JSON.`,
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
          title: `The logging level for this command invocation.`,
        },
        targetusername: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>            
                      A username or alias for the target org. Overrides the default target org.<br/><br/>
                      Type: string
                  `,
          title: `A username or alias for the target org. Overrides the default target org.`,
        },
        apiversion: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Override the API version used for API requests made by this command.<br/><br/>
                      Type: string
                  `,
          title: `Override the API version used for API requests made by this command.`,
        },
        resultfile: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      The path to the file where the results of the command are stored. Directing the output to a file makes it easier to extract relevant information for your package.xml manifest file. The default output destination is the console.<br/><br/>
                      Type: filepath
                  `,
          title: `The path to the file where the results of the command are stored.`,
        },
      },
      listmetadata: {
        json: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Format output as JSON.<br/><br/>
                      Type: boolean
                  `,
          title: `Format output as JSON.`,
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
          title: `The logging level for this command invocation.`,
        },
        targetusername: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>            
                      A username or alias for the target org. Overrides the default target org.<br/><br/>
                      Type: string
                  `,
          title: `A username or alias for the target org. Overrides the default target org.`,
        },
        apiversion: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Override the API version used for API requests made by this command.<br/><br/>
                      Type: string
                  `,
          title: `Override the API version used for API requests made by this command.`,
        },
        resultfile: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      The path to the file where the results of the command are stored. Directing the output to a file makes it easier to extract relevant information for your package.xml manifest file. The default output destination is the console.<br/><br/>
                      Type: filepath
                  `,
          title: `The path to the file where the results of the command are stored.`,
        },
        metadatatype: {
          type: `<b>Required</b>`,
          body: `
                      <br/><br/>
                      The metadata type to be retrieved, such as CustomObject or Report. The metadata type value is case-sensitive.<br/><br/>
                      Type: string
                  `,
          title: `The metadata type to be retrieved, such as CustomObject or Report.`,
        },
        folder: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      The folder associated with the component. This parameter is required for components that use folders, such as Dashboard, Document, EmailTemplate, or Report. The folder name value is case-sensitive.<br/><br/>
                      Type: string
                  `,
          title: `The folder associated with the component.`,
        },
      },
      retrieve: {
        json: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Format output as JSON.<br/><br/>
                      Type: boolean
                  `,
          title: `Format output as JSON.`,
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
          title: `The logging level for this command invocation.`,
        },
        targetusername: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>            
                      A username or alias for the target org. Overrides the default target org.<br/><br/>
                      Type: string
                  `,
          title: `A username or alias for the target org. Overrides the default target org.`,
        },
        apiversion: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Override the API version used for API requests made by this command.<br/><br/>
                      Type: string
                  `,
          title: `Override the API version used for API requests made by this command.`,
        },
        wait: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      The number of minutes to wait for the command to complete.<br/><br/>
                      Type: minutes
                  `,
          title: `The number of minutes to wait for the command to complete.`,
        },
        retrievetargetdir: {
          type: `<b>Required</b>`,
          body: `
                      <br/><br/>
                      The root of the directory structure where the retrieved .zip or metadata files are put.<br/><br/>
                      Type: directory
                  `,
          title: `The root of the directory structure where the retrieved .zip or metadata files are put.`,
        },
        unpackaged: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      The complete path for the manifest file that specifies the components to retrieve.<br/><br/>
                      Type: filepath
                  `,
          title: `The complete path for the manifest file that specifies the components to retrieve.`,
        },
        verbose: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Indicates that you want verbose output from the retrieve operation.<br/><br/>
                      Type: boolean
                  `,
          title: `Indicates that you want verbose output from the retrieve operation.`,
        },
        sourcedir: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      The source directory to use instead of the default package directory specified in sfdx-project.json.<br/><br/>
                      Type: directory
                  `,
          title: `The source directory to use instead of the default package directory specified in sfdx-project.json.`,
        },
        packagenames: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      A comma-separated list of package names to retrieve.<br/><br/>
                      Type: array
                  `,
          title: `A comma-separated list of package names to retrieve.`,
        },
        singlepackage: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Indicates that the specified .zip file points to a directory structure for a single package. By default, the CLI assumes the directory is structured for a set of packages.<br/><br/>
                      Type: boolean
                  `,
          title: `Indicates that the specified .zip file points to a directory structure for a single package.`,
        },
      },
      retrieve_report: {
        json: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Format output as JSON.<br/><br/>
                      Type: boolean
                  `,
          title: `Format output as JSON.`,
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
          title: `The logging level for this command invocation.`,
        },
        targetusername: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>            
                      A username or alias for the target org. Overrides the default target org.<br/><br/>
                      Type: string
                  `,
          title: `A username or alias for the target org. Overrides the default target org.`,
        },
        apiversion: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Override the API version used for API requests made by this command.<br/><br/>
                      Type: string
                  `,
          title: `Override the API version used for API requests made by this command.`,
        },
        wait: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      The number of minutes to wait for the command to complete.<br/><br/>
                      Type: minutes
                  `,
          title: `The number of minutes to wait for the command to complete.`,
        },
        retrievetargetdir: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      The root of the directory structure where the retrieved .zip or metadata files are put.<br/><br/>
                      Type: directory
                  `,
          title: `The root of the directory structure where the retrieved .zip or metadata files are put.`,
        },
        verbose: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Indicates that you want verbose output from the retrieve operation.<br/><br/>
                      Type: boolean
                  `,
          title: `Indicates that you want verbose output from the retrieve operation.`,
        },
        jobid: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      The job ID (asyncId) of the retrieve you want to check. If not specified, the default value is the ID of the most recent metadata retrieval you ran using Salesforce CLI. You must specify a --retrievetargetdir. Use with --wait to resume waiting.<br/><br/>
                      Type: id
                  `,
          title: `The job ID (asyncId) of the retrieve you want to check.`,
        },
      },
    },
    org: {
      clone: {
        json: {
          type: `<b><i>Optional</i></b>`,
          body: `
                <br/><br/>
                Format output as JSON.<br/><br/>
                Type: boolean
            `,
          title: `Format output as JSON.`,
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
          title: `The logging level for this command invocation.`,
        },
        targetusername: {
          type: `<b><i>Optional</i></b>`,
          body: `
                <br/><br/>            
                A username or alias for the target org. Overrides the default target org.<br/><br/>
                Type: string
            `,
          title: `A username or alias for the target org. Overrides the default target org.`,
        },
        apiversion: {
          type: `<b><i>Optional</i></b>`,
          body: `
                <br/><br/>
                Override the API version used for API requests made by this command.<br/><br/>
                Type: string
            `,
          title: `Override the API version used for API requests made by this command.`,
        },
        type: {
          type: `<b>Required</b>`,
          body: `
                <br/><br/>
                The type of org to create. Only "sandbox" is supported.<br/><br/>
                Type: enum<br/>
                Permissible values are: sandbox
            `,
          title: `The type of org to create. Only "sandbox" is supported.`,
        },
        definitionfile: {
          type: `<b><i>Optional</i></b>`,
          body: `
                <br/><br/>
                The path to an org definition file. Either --definitionfile or a vararg value for edition (for example, edition=Developer) is required. Varargs override the values in the scratch org definition file.<br/><br/>
                Type: filepath
            `,
          title: `The path to an org definition file.`,
        },
        setdefaultusername: {
          type: `<b><i>Optional</i></b>`,
          body: `
                <br/><br/>
                Sets the created org as the default username.<br/><br/>
                Type: boolean
            `,
          title: `Sets the created org as the default username.`,
        },
        setalias: {
          type: `<b><i>Optional</i></b>`,
          body: `
                <br/><br/>
                An alias for the created org.<br/><br/>
                Type: string
            `,
          title: `An alias for the created org.`,
        },
        wait: {
          type: `<b><i>Optional</i></b>`,
          body: `
                <br/><br/>
                Sets the streaming client socket timeout, in minutes. If the streaming client socket has no contact from the server for a number of minutes, the client exits. Specify a longer wait time if timeouts occur frequently.<br/><br/>
                Type: minutes<br/>
                Default value: 6 minutes
            `,
          title: `Sets the streaming client socket timeout, in minutes .`,
        },
      },
      create: {
        json: {
          type: `<b><i>Optional</i></b>`,
          body: `
                <br/><br/>
                Format output as JSON.<br/><br/>
                Type: boolean
            `,
          title: `Format output as JSON.`,
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
          title: `The logging level for this command invocation.`,
        },
        targetdevhubusername: {
          type: `<b><i>Optional</i></b>`,
          body: `
                <br/><br/>            
                A username or alias for the target Dev Hub org. Overrides the default Dev Hub org.<br/><br/> 
                Type: string
            `,
          title: `A username or alias for the target Dev Hub org.`,
        },
        targetusername: {
          type: `<b><i>Optional</i></b>`,
          body: `
                <br/><br/>            
                A username or alias for the target org. Overrides the default target org.<br/><br/>
                Type: string
            `,
          title: `A username or alias for the target org. Overrides the default target org.`,
        },
        apiversion: {
          type: `<b><i>Optional</i></b>`,
          body: `
                <br/><br/>
                Override the API version used for API requests made by this command.<br/><br/>
                Type: string
            `,
          title: `Override the API version used for API requests made by this command.`,
        },
        type: {
          type: `<b><i>Optional</i></b>`,
          body: `
                <br/><br/>
                Type of org to create.<br/><br/>
                Type: enum<br/>
                Permissible values are: scratch, sandbox<br/>
                Default value: scratch
            `,
          title: `Type of org to create.`,
        },
        definitionfile: {
          type: `<b><i>Optional</i></b>`,
          body: `
                <br/><br/>
                Path to an org definition file.<br/><br/>
                Type: filepath
            `,
          title: `Path to an org definition file.`,
        },
        nonamespace: {
          type: `<b><i>Optional</i></b>`,
          body: `
                <br/><br/>
                Create the scratch org with no namespace.<br/><br/>
                Type: boolean
            `,
          title: `Create the scratch org with no namespace.`,
        },
        noancestors: {
          type: `<b><i>Optional</i></b>`,
          body: `
                <br/><br/>
                Do not include second-generation package ancestors in the scratch org.<br/><br/>
                Type: boolean
            `,
          title: `Do not include second-generation package ancestors in the scratch org.`,
        },
        clientid: {
          type: `<b><i>Optional</i></b>`,
          body: `
                <br/><br/>
                Connected app consumer key; not supported for sandbox org creation.<br/><br/>
                Type: string
            `,
          title: `Connected app consumer key.`,
        },
        setdefaultusername: {
          type: `<b><i>Optional</i></b>`,
          body: `
                <br/><br/>
                Set the created org as the default username.<br/><br/>
                Type: boolean
            `,
          title: `Set the created org as the default username.`,
        },
        setalias: {
          type: `<b><i>Optional</i></b>`,
          body: `
                <br/><br/>
                Alias for the created org.<br/><br/>
                Type: string
            `,
          title: `Alias for the created org.`,
        },
        wait: {
          type: `<b><i>Optional</i></b>`,
          body: `
                <br/><br/>
                The streaming client socket timeout (in minutes).<br/><br/>
                Type: minutes<br/>
                Default value: 6 minutes
            `,
          title: `The streaming client socket timeout (in minutes).`,
        },
        durationdays: {
          type: `<b><i>Optional</i></b>`,
          body: `
                <br/><br/>
                Duration of the scratch org (in days) (default:7, min:1, max:30).<br/><br/>
                Type: integer
            `,
          title: `Duration of the scratch org (in days) (default:7, min:1, max:30).`,
        },
      },
      delete: {
        json: {
          type: `<b><i>Optional</i></b>`,
          body: `
                <br/><br/>
                Format output as JSON.<br/><br/>
                Type: boolean
            `,
          title: `Format output as JSON.`,
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
          title: `The logging level for this command invocation.`,
        },
        targetdevhubusername: {
          type: `<b><i>Optional</i></b>`,
          body: `
                <br/><br/>            
                A username or alias for the target Dev Hub org. Overrides the default Dev Hub org.<br/><br/> 
                Type: string
            `,
          title: `A username or alias for the target Dev Hub org.`,
        },
        targetusername: {
          type: `<b><i>Optional</i></b>`,
          body: `
                <br/><br/>            
                A username or alias for the target org. Overrides the default target org.<br/><br/>
                Type: string
            `,
          title: `A username or alias for the target org. Overrides the default target org.`,
        },
        apiversion: {
          type: `<b><i>Optional</i></b>`,
          body: `
                <br/><br/>
                Override the API version used for API requests made by this command.<br/><br/>
                Type: string
            `,
          title: `Override the API version used for API requests made by this command.`,
        },
        noprompt: {
          type: `<b><i>Optional</i></b>`,
          body: `
                <br/><br/>
                No prompt to confirm deletion.<br/><br/>
                Type: boolean
            `,
          title: `No prompt to confirm deletion.`,
        },
      },
      display: {
        json: {
          type: `<b><i>Optional</i></b>`,
          body: `
                <br/><br/>
                Format output as JSON.<br/><br/>
                Type: boolean
            `,
          title: `Format output as JSON.`,
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
          title: `The logging level for this command invocation.`,
        },
        targetusername: {
          type: `<b><i>Optional</i></b>`,
          body: `
                <br/><br/>            
                A username or alias for the target org. Overrides the default target org.<br/><br/>
                Type: string
            `,
          title: `A username or alias for the target org. Overrides the default target org.`,
        },
        apiversion: {
          type: `<b><i>Optional</i></b>`,
          body: `
                <br/><br/>
                Override the API version used for API requests made by this command.<br/><br/>
                Type: string
            `,
          title: `Override the API version used for API requests made by this command.`,
        },
        verbose: {
          type: `<b><i>Optional</i></b>`,
          body: `
                <br/><br/>
                Emit additional command output to stdout.<br/><br/>
                Type: boolean
            `,
          title: `Emit additional command output to stdout.`,
        },
      },
    },
    package:{
      create: {
        json: {
          type: `<b><i>Optional</i></b>`,
          body: `
                <br/><br/>
                Format output as JSON.<br/><br/>
                Type: boolean
                `,
          title: `Format output as JSON.`,
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
          title: `The logging level for this command invocation.`,
        },
        targetdevhubusername: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      A username or alias for the target Dev Hub org. Overrides the default Dev Hub org.<br/><br/>
                      Type: string
                  `,
          title: `A username or alias for the target Dev Hub org.`,
        },
        apiversion: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Override the API version used for API requests made by this command.
                      <br/><br/>
                      Type: string
                  `,
          title: `Override the API version used for API requests made by this command.`,
        },
        name: {
          type: `<b>Required</b>`,
          body: `
                      <br/><br/>
                      Name of the package to create.
                      <br/><br/>
                      Type: string
                  `,
          title: `Name of the package to create.`,
        },
        packagetype: {
          type: `<b>Required</b>`,
          body: `
                      <br/><br/>
                      Package type for the package.<br/><br/>
                      The options for package type are Managed and Unlocked (Managed=DeveloperManagedSubscriberManaged, Unlocked=DeveloperControlledSubscriberEditable).<br/><br/>
                      These options determine upgrade and editability rules.<br/><br/>
                      Type: enum<br/><br/>
                      Permissible values are: Managed, Unlocked
                  `,
          title: `Package type for the package.`,
        },
        description: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Description of the package.<br/><br/>
                      Type: string
                  `,
          title: `Description of the package.`,
        },
        nonamespace: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Creates the package with no namespace. Available only for unlocked packages. Useful when you???re migrating an existing org to packages. But, use a namespaced package for new metadata.<br/><br/>
                      Type: boolean
                  `,
          title: `Creates the package with no namespace.`,
        },
        path: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      The path to the directory that contains the contents of the package.<br/><br/>
                      Type: directory
                  `,
          title: `The path to the directory that contains the contents of the package.`,
        },
        orgdependent: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Package depends on unpackaged metadata in the installation org. Applies to unlocked packages only.<br/><br/>
                      Use Source Tracking in Sandboxes to develop your org-dependent unlocked package.<br/><br/>
                      For more information, see "Create Org-Dependent Unlocked Packages" in the Salesforce DX Developer Guide.<br/><br/>
                      Type: boolean
                  `,
          title: `Package depends on unpackaged metadata in the installation org.`,
        },
        errornotificationusername: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      An active Dev Hub org user designated to receive email notifications for unhandled Apex exceptions, and install, upgrade, or uninstall failures associated with your package.<br/><br/>
                      Type: string
                  `,
          title: `An active Dev Hub org user designated to receive email notifications for unhandled Apex exceptions, and install, upgrade, or uninstall failures associated with your package.`,
        },
      },
      delete: {
        json: {
          type: `<b><i>Optional</i></b>`,
          body: `
                <br/><br/>
                Format output as JSON.<br/><br/>
                Type: boolean
                `,
          title: `Format output as JSON.`,
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
          title: `The logging level for this command invocation.`,
        },
        targetdevhubusername: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      A username or alias for the target Dev Hub org. Overrides the default Dev Hub org.<br/><br/>
                      Type: string
                  `,
          title: `A username or alias for the target Dev Hub org.`,
        },
        apiversion: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Override the API version used for API requests made by this command.
                      <br/><br/>
                      Type: string
                  `,
          title: `Override the API version used for API requests made by this command.`,
        },
        noprompt: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      don???t prompt before deleting the package.<br/><br/>
                      Type: boolean
                  `,
          title: `don???t prompt before deleting the package.`,
        },
        package: {
          type: `<b>Required</b>`,
          body: `
                      <br/><br/>
                      The ID (starts with 0Ho) or alias of the package to delete.<br/><br/>
                      Type: string
                  `,
          title: `The ID (starts with 0Ho) or alias of the package to delete.`,
        },
      },
      install: {
        json: {
          type: `<b><i>Optional</i></b>`,
          body: `
                <br/><br/>
                Format output as JSON.<br/><br/>
                Type: boolean
                `,
          title: `Format output as JSON.`,
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
          title: `The logging level for this command invocation.`,
        },
        targetdevhubusername: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      A username or alias for the target org. Overrides the default target org.<br/><br/>
                      Type: string
                  `,
          title: `A username or alias for the target org.`,
        },
        apiversion: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Override the API version used for API requests made by this command.
                      <br/><br/>
                      Type: string
                  `,
          title: `Override the API version used for API requests made by this command.`,
        },
        wait: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Maximum number of minutes to wait for installation status. The default is 0.<br/><br/>
                      Type: minutes
                  `,
          title: `Maximum number of minutes to wait for installation status.`,
        },
        installationkey: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Installation key for installing a key-protected package. The default is null.<br/><br/>
                      Type: string
                  `,
          title: `Installation key for installing a key-protected package.`,
        },
        publishwait: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Maximum number of minutes to wait for the Subscriber Package Version ID to become available in the target org before canceling the install request. The default is 0.<br/><br/>
                      Type: minutes
                  `,
          title: `Maximum number of minutes to wait for the Subscriber Package Version ID to become available in the target org before canceling the install request.`,
        },
        noprompt: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Allows the following without an explicit confirmation response: 1) Remote Site Settings and Content Security Policy websites to send or receive data, and 2) --upgradetype Delete to proceed.<br/><br/>
                      Type: boolean
                  `,
          title: `Allows the following without an explicit confirmation response: 1) Remote Site Settings and Content Security Policy websites to send or receive data, and 2) --upgradetype Delete to proceed.`,
        },
        package: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      The ID (starts with 04t) or alias of the package version to install.<br/><br/>
                      Type: string
                  `,
          title: `The ID (starts with 04t) or alias of the package version to install.`,
        },
        apexcompile: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Applies to unlocked packages only. Specifies whether to compile all Apex in the org and package, or only the Apex in the package.<br/><br/>
                      Type: enum<br/><br/>
                      Permissible values are: all, package<br/><br/>
                      Default value: all
                  `,
          title: `Applies to unlocked packages only.`,
        },
        securitytype: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Security access type for the installed package.<br/><br/>
                      Deprecation notice: The --securitytype parameter's default value will change from AllUsers to AdminsOnly in an upcoming release (v47.0 or later).<br/><br/>
                      Type: enum<br/><br/>
                      Permissible values are: AllUsers, AdminsOnly<br/><br/>
                      Default value: AdminsOnly
                  `,
          title: `Security access type for the installed package.`,
        },
        upgradetype: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      For package upgrades, specifies whether to mark all removed components as deprecated (DeprecateOnly), to delete removed components that can be safely deleted and deprecate the others (Mixed), or to delete all removed components, except for custom objects and custom fields, that don't have dependencies (Delete). The default is Mixed. Can specify DeprecateOnly or Delete only for unlocked package upgrades.<br/><br/>
                      Type: enum<br/><br/>
                      Permissible values are: DeprecateOnly, Mixed, Delete<br/><br/>
                      Default value: Mixed
                  `,
          title: `For package upgrades, specifies whether to mark all removed components as deprecated (DeprecateOnly), to delete removed components that can be safely deleted and deprecate the others (Mixed), or to delete all removed components, except for custom objects and custom fields, that don't have dependencies (Delete).`,
        },
      },
      install_report: {
        json: {
          type: `<b><i>Optional</i></b>`,
          body: `
                <br/><br/>
                Format output as JSON.<br/><br/>
                Type: boolean
                `,
          title: `Format output as JSON.`,
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
          title: `The logging level for this command invocation.`,
        },
        targetusername: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      A username or alias for the target org. Overrides the default target org.<br/><br/>
                      Type: string
                  `,
          title: `A username or alias for the target org.`,
        },
        apiversion: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Override the API version used for API requests made by this command.
                      <br/><br/>
                      Type: string
                  `,
          title: `Override the API version used for API requests made by this command.`,
        },
        requestid: {
          type: `<b>Required</b>`,
          body: `
                      <br/><br/>
                      The ID of the package install request you want to check.<br/><br/>
                      Type: id
                  `,
          title: `The ID of the package install request you want to check.`,
        },
      },
      installed_list: {
        json: {
          type: `<b><i>Optional</i></b>`,
          body: `
                <br/><br/>
                Format output as JSON.<br/><br/>
                Type: boolean
                `,
          title: `Format output as JSON.`,
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
          title: `The logging level for this command invocation.`,
        },
        targetusername: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      A username or alias for the target org. Overrides the default target org.<br/><br/>
                      Type: string
                  `,
          title: `A username or alias for the target org.`,
        },
        apiversion: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Override the API version used for API requests made by this command.
                      <br/><br/>
                      Type: string
                  `,
          title: `Override the API version used for API requests made by this command.`,
        },
      },
      list: {
        json: {
          type: `<b><i>Optional</i></b>`,
          body: `
                <br/><br/>
                Format output as JSON.<br/><br/>
                Type: boolean
                `,
          title: `Format output as JSON.`,
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
          title: `The logging level for this command invocation.`,
        },
        targetdevhubusername: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      A username or alias for the target Dev Hub org. Overrides the default Dev Hub org.<br/><br/>
                      Type: string
                  `,
          title: `A username or alias for the target Dev Hub org.`,
        },
        apiversion: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Override the API version used for API requests made by this command.
                      <br/><br/>
                      Type: string
                  `,
          title: `Override the API version used for API requests made by this command.`,
        },
        verbose: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Displays extended package details.
                      <br/><br/>
                      Type: boolean
                  `,
          title: `Displays extended package details.`,
        },
      },
      uninstall: {
        json: {
          type: `<b><i>Optional</i></b>`,
          body: `
                <br/><br/>
                Format output as JSON.<br/><br/>
                Type: boolean
                `,
          title: `Format output as JSON.`,
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
          title: `The logging level for this command invocation.`,
        },
        targetusername: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      A username or alias for the target org. Overrides the default target org.<br/><br/>
                      Type: string
                  `,
          title: `A username or alias for the target org.`,
        },
        apiversion: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Override the API version used for API requests made by this command.
                      <br/><br/>
                      Type: string
                  `,
          title: `Override the API version used for API requests made by this command.`,
        },
        wait: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Maximum number of minutes to wait for installation status. The default is 0.<br/><br/>
                      Type: minutes
                  `,
          title: `Maximum number of minutes to wait for installation status.`,
        },
        package: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      The ID (starts with 04t) or alias of the package version to uninstall.<br/><br/>
                      Type: string
                  `,
          title: `The ID (starts with 04t) or alias of the package version to uninstall.`,
        },
      },
      uninstall_report: {
        json: {
          type: `<b><i>Optional</i></b>`,
          body: `
                <br/><br/>
                Format output as JSON.<br/><br/>
                Type: boolean
                `,
          title: `Format output as JSON.`,
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
          title: `The logging level for this command invocation.`,
        },
        targetusername: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      A username or alias for the target org. Overrides the default target org.<br/><br/>
                      Type: string
                  `,
          title: `A username or alias for the target org.`,
        },
        apiversion: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Override the API version used for API requests made by this command.
                      <br/><br/>
                      Type: string
                  `,
          title: `Override the API version used for API requests made by this command.`,
        },
        requestid: {
          type: `<b>Required</b>`,
          body: `
                      <br/><br/>
                      The ID of the package install request you want to check.<br/><br/>
                      Type: id
                  `,
          title: `The ID of the package install request you want to check.`,
        },
      },
      update: {
        json: {
          type: `<b><i>Optional</i></b>`,
          body: `
                <br/><br/>
                Format output as JSON.<br/><br/>
                Type: boolean
                `,
          title: `Format output as JSON.`,
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
          title: `The logging level for this command invocation.`,
        },
        targetdevhubusername: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      A username or alias for the target Dev Hub org. Overrides the default Dev Hub org.<br/><br/>
                      Type: string
                  `,
          title: `A username or alias for the target Dev Hub org.`,
        },
        apiversion: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Override the API version used for API requests made by this command.
                      <br/><br/>
                      Type: string
                  `,
          title: `Override the API version used for API requests made by this command.`,
        },
        package: {
          type: `<b>Required</b>`,
          body: `
                      <br/><br/>
                      The ID (starts with 0Ho) or alias of the package to update.<br/><br/>
                      Type: string
                  `,
          title: `The ID (starts with 0Ho) or alias of the package to update.`,
        },
        name: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      New name of the package.
                      <br/><br/>
                      Type: string
                  `,
          title: `New name of the package.`,
        },
        description: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Description of the package.<br/><br/>
                      Type: string
                  `,
          title: `Description of the package.`,
        },
        errornotificationusername: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      An active Dev Hub org user designated to receive email notifications for unhandled Apex exceptions, and install, upgrade, or uninstall failures associated with your package.<br/><br/>
                      Type: string
                  `,
          title: `An active Dev Hub org user designated to receive email notifications for unhandled Apex exceptions, and install, upgrade, or uninstall failures associated with your package.`,
        },
      },
      version_create: {
        json: {
          type: `<b><i>Optional</i></b>`,
          body: `
                <br/><br/>
                Format output as JSON.<br/><br/>
                Type: boolean
                `,
          title: `Format output as JSON.`,
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
          title: `The logging level for this command invocation.`,
        },
        targetdevhubusername: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      A username or alias for the target Dev Hub org. Overrides the default Dev Hub org.<br/><br/>
                      Type: string
                  `,
          title: `A username or alias for the target Dev Hub org.`,
        },
        apiversion: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Override the API version used for API requests made by this command.
                      <br/><br/>
                      Type: string
                  `,
          title: `Override the API version used for API requests made by this command.`,
        },
        package: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      The ID (starts with 0Ho) or alias of the package to create a version of.<br/><br/>
                      Type: string
                  `,
          title: `The ID (starts with 0Ho) or alias of the package to create a version of.`,
        },
        path: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      The path to the directory that contains the contents of the package.<br/><br/>
                      Type: directory
                  `,
          title: `The path to the directory that contains the contents of the package.`,
        },
        definitionfile: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      The path to a definition file similar to scratch org definition file that contains the list of features and org preferences that the metadata of the package version depends on.<br/><br/>
                      Type: filepath
                  `,
          title: `The path to a definition file similar to scratch org definition file that contains the list of features and org preferences that the metadata of the package version depends on.`,
        },
        branch: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Name of the branch in your source control system that the package version is based on.<br/><br/>
                      Type: string
                  `,
          title: `Name of the branch in your source control system that the package version is based on.`,
        },
        tag: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      The package version???s tag.<br/><br/>
                      Type: string
                  `,
          title: `The package version???s tag.`,
        },
        installationkey: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Installation key for creating the key-protected package. Either an --installationkey value or the --installationkeybypass flag is required.<br/><br/>
                      Type: string
                  `,
          title: `Installation key for creating the key-protected package.`,
        },
        installationkeybypass: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Bypasses the installation key requirement. If you bypass this requirement, anyone can install your package. Either an --installationkey value or the --installationkeybypass flag is required.<br/><br/>
                      Type: boolean
                  `,
          title: `Bypasses the installation key requirement.`,
        },
        wait: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      The number of minutes to wait for the package version to be created.<br/><br/>
                      Type: minutes<br/><br/>
                      Default value: 0 minutes
                  `,
          title: `The number of minutes to wait for the package version to be created.`,
        },
        versionname: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      The name of the package version to be created. Overrides the sfdx-project.json value.<br/><br/>
                      Type: string
                  `,
          title: `The name of the package version to be created.`,
        },
        versionnumber: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      The version number of the package version to be created. Overrides the sfdx-project.json value.<br/><br/>
                      Type: string
                  `,
          title: `The version number of the package version to be created.`,
        },
        versiondescription: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      The description of the package version to be created. Overrides the sfdx-project.json value.<br/><br/>
                      Type: string
                  `,
          title: `The description of the package version to be created.`,
        },
        codecoverage: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Calculate and store the code coverage percentage by running the Apex tests included in this package version. Before you can promote and release a managed or unlocked package version, the Apex code must meet a minimum 75% code coverage requirement. We don???t calculate code coverage for org-dependent unlocked packages or for package versions that specify --skipvalidation.<br/><br/>
                      Type: boolean
                  `,
          title: `Calculate and store the code coverage percentage by running the Apex tests included in this package version.`,
        },
        releasenotesurl: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      The release notes URL. This link is displayed in the package installation UI to provide release notes for this package version to subscribers.<br/><br/>
                      Type: url
                  `,
          title: `The release notes URL.`,
        },
        postinstallurl: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      The post-install instructions URL. The contents of the post-installation instructions URL are displayed in the UI after installation of the package version.<br/><br/>
                      Type: url
                  `,
          title: `The post-install instructions URL.`,
        },
        postinstallscript: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Applies to managed packages only. The post-install script name. The post-install script is an Apex class within this package that is run in the installing org after installations or upgrades of this package version.<br/><br/>
                      Type: string
                  `,
          title: `Applies to managed packages only.`,
        },
        uninstallscript: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Applies to managed packages only. The uninstall script name. The uninstall script is an Apex class within this package that is run in the installing org after uninstallations of this package.<br/><br/>
                      Type: string
                  `,
          title: `Applies to managed packages only.`,
        },
        skipvalidation: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Skips validation of dependencies, package ancestors, and metadata during package version creation. Skipping validation reduces the time it takes to create a new package version, but you can promote only validated package versions. Skipping validation can suppress important errors that can surface at a later stage. You can specify skip validation or code coverage, but not both. Code coverage is calculated during validation.<br/><br/>
                      Type: boolean
                  `,
          title: `Skips validation of dependencies, package ancestors, and metadata during package version creation.`,
        },
        skipancestorcheck: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Override ancestry requirements, which allows you to specify a package ancestor that isn???t the highest released package version.<br/><br/>
                      Type: boolean
                  `,
          title: `Override ancestry requirements, which allows you to specify a package ancestor that isn???t the highest released package version.`,
        },
      },
      version_create_list: {
        json: {
          type: `<b><i>Optional</i></b>`,
          body: `
                <br/><br/>
                Format output as JSON.<br/><br/>
                Type: boolean
                `,
          title: `Format output as JSON.`,
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
          title: `The logging level for this command invocation.`,
        },
        targetdevhubusername: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      A username or alias for the target Dev Hub org. Overrides the default Dev Hub org.<br/><br/>
                      Type: string
                  `,
          title: `A username or alias for the target Dev Hub org.`,
        },
        apiversion: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Override the API version used for API requests made by this command.
                      <br/><br/>
                      Type: string
                  `,
          title: `Override the API version used for API requests made by this command.`,
        },
        createdlastdays: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Filters the list based on the specified maximum number of days since the request was created (starting at 00:00:00 of first day to now; 0 for today).
                      <br/><br/>
                      Type: number
                  `,
          title: `Filters the list based on the specified maximum number of days since the request was created (starting at 00:00:00 of first day to now; 0 for today).`,
        },
        status: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Filters the list based on the status of version creation requests.<br/><br/>
                      Type: enum<br/><br/>
                      Permissible values are: Queued, InProgress, Success, Error
                  `,
          title: `Filters the list based on the status of version creation requests.`,
        },
      },
      version_create_report: {
        json: {
          type: `<b><i>Optional</i></b>`,
          body: `
                <br/><br/>
                Format output as JSON.<br/><br/>
                Type: boolean
                `,
          title: `Format output as JSON.`,
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
          title: `The logging level for this command invocation.`,
        },
        targetdevhubusername: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      A username or alias for the target Dev Hub org. Overrides the default Dev Hub org.<br/><br/>
                      Type: string
                  `,
          title: `A username or alias for the target Dev Hub org.`,
        },
        apiversion: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Override the API version used for API requests made by this command.
                      <br/><br/>
                      Type: string
                  `,
          title: `Override the API version used for API requests made by this command.`,
        },
        packagecreaterequestid: {
          type: `<b>Required</b>`,
          body: `
                      <br/><br/>
                      The ID (starts with 08c) of the package version creation request you want to display.
                      <br/><br/>
                      Type: number
                  `,
          title: `The ID (starts with 08c) of the package version creation request you want to display.`,
        },
      },
      version_delete: {
        json: {
          type: `<b><i>Optional</i></b>`,
          body: `
                <br/><br/>
                Format output as JSON.<br/><br/>
                Type: boolean
                `,
          title: `Format output as JSON.`,
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
          title: `The logging level for this command invocation.`,
        },
        targetdevhubusername: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      A username or alias for the target Dev Hub org. Overrides the default Dev Hub org.<br/><br/>
                      Type: string
                  `,
          title: `A username or alias for the target Dev Hub org.`,
        },
        apiversion: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Override the API version used for API requests made by this command.
                      <br/><br/>
                      Type: string
                  `,
          title: `Override the API version used for API requests made by this command.`,
        },
        noprompt: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      don???t prompt before deleting the package version
                      <br/><br/>
                      Type: boolean
                  `,
          title: `don???t prompt before deleting the package version`,
        },
        package: {
          type: `<b>Required</b>`,
          body: `
                      <br/><br/>
                      The ID (starts with 04t) or alias of the package version to delete.
                      <br/><br/>
                      Type: number
                  `,
          title: `The ID (starts with 04t) or alias of the package version to delete.`,
        },
      },
      version_displayancestry: {
        json: {
          type: `<b><i>Optional</i></b>`,
          body: `
                <br/><br/>
                Format output as JSON.<br/><br/>
                Type: boolean
                `,
          title: `Format output as JSON.`,
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
          title: `The logging level for this command invocation.`,
        },
        targetdevhubusername: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      A username or alias for the target Dev Hub org. Overrides the default Dev Hub org.<br/><br/>
                      Type: string
                  `,
          title: `A username or alias for the target Dev Hub org.`,
        },
        apiversion: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Override the API version used for API requests made by this command.
                      <br/><br/>
                      Type: string
                  `,
          title: `Override the API version used for API requests made by this command.`,
        },
        package: {
          type: `<b>Required</b>`,
          body: `
                      <br/><br/>
                      The ID (starts with 04t) or alias of the package version to delete.
                      <br/><br/>
                      Type: number
                  `,
          title: `The ID (starts with 04t) or alias of the package version to delete.`,
        },
        dotcode: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Displays the ancestry tree in DOT code. You can use the DOT code output in graph visualization software to create tree visualizations.
                      <br/><br/>
                      Type: boolean
                  `,
          title: `Displays the ancestry tree in DOT code.`,
        },
        verbose: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Displays both the package version ID (starts with 04t) and the version number (major.minor.patch.build) in the ancestry tree.
                      <br/><br/>
                      Type: boolean
                  `,
          title: `Displays both the package version ID (starts with 04t) and the version number (major.minor.patch.build) in the ancestry tree.`,
        },
      },
      version_list: {
        json: {
          type: `<b><i>Optional</i></b>`,
          body: `
                <br/><br/>
                Format output as JSON.<br/><br/>
                Type: boolean
                `,
          title: `Format output as JSON.`,
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
          title: `The logging level for this command invocation.`,
        },
        targetdevhubusername: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      A username or alias for the target Dev Hub org. Overrides the default Dev Hub org.<br/><br/>
                      Type: string
                  `,
          title: `A username or alias for the target Dev Hub org.`,
        },
        apiversion: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Override the API version used for API requests made by this command.
                      <br/><br/>
                      Type: string
                  `,
          title: `Override the API version used for API requests made by this command.`,
        },
        createdlastdays: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Filters the list based on the specified maximum number of days since the request was created (starting at 00:00:00 of first day to now; 0 for today).
                      <br/><br/>
                      Type: number
                  `,
          title: `Filters the list based on the specified maximum number of days since the request was created (starting at 00:00:00 of first day to now; 0 for today).`,
        },
        concise: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Displays limited package version details.
                      <br/><br/>
                      Type: boolean
                  `,
          title: `Displays limited package version details.`,
        },
        modifiedlastdays: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Lists the items modified in the specified last number of days, starting at 00:00:00 of first day to now. Use 0 for today.
                      <br/><br/>
                      Type: number
                  `,
          title: `Lists the items modified in the specified last number of days, starting at 00:00:00 of first day to now.`,
        },
        packages: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Filters results on the specified comma-delimited packages (aliases or 0Ho IDs).
                      <br/><br/>
                      Type: array
                  `,
          title: `Filters results on the specified comma-delimited packages (aliases or 0Ho IDs).`,
        },
        released: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Displays released versions only (IsReleased=true).
                      <br/><br/>
                      Type: boolean
                  `,
          title: `Displays released versions only (IsReleased=true).`,
        },
        orderby: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Orders the list by the specified package version fields.
                      <br/><br/>
                      Type: array
                  `,
          title: `Orders the list by the specified package version fields.`,
        },
        verbose: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Displays extended package version details.
                      <br/><br/>
                      Type: boolean
                  `,
          title: `Displays extended package version details.`,
        },
      },
      version_delete: {
        json: {
          type: `<b><i>Optional</i></b>`,
          body: `
                <br/><br/>
                Format output as JSON.<br/><br/>
                Type: boolean
                `,
          title: `Format output as JSON.`,
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
          title: `The logging level for this command invocation.`,
        },
        targetdevhubusername: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      A username or alias for the target Dev Hub org. Overrides the default Dev Hub org.<br/><br/>
                      Type: string
                  `,
          title: `A username or alias for the target Dev Hub org.`,
        },
        apiversion: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Override the API version used for API requests made by this command.
                      <br/><br/>
                      Type: string
                  `,
          title: `Override the API version used for API requests made by this command.`,
        },
        package: {
          type: `<b>Required</b>`,
          body: `
                      <br/><br/>
                      The ID (starts with 04t) or alias of the package version to promote.
                      <br/><br/>
                      Type: number
                  `,
          title: `The ID (starts with 04t) or alias of the package version to promote.`,
        },
        noprompt: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Do not prompt to confirm setting the package version as released.
                      <br/><br/>
                      Type: boolean
                  `,
          title: `Do not prompt to confirm setting the package version as released.`,
        },
      },
      version_report: {
        json: {
          type: `<b><i>Optional</i></b>`,
          body: `
                <br/><br/>
                Format output as JSON.<br/><br/>
                Type: boolean
                `,
          title: `Format output as JSON.`,
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
          title: `The logging level for this command invocation.`,
        },
        targetdevhubusername: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      A username or alias for the target Dev Hub org. Overrides the default Dev Hub org.<br/><br/>
                      Type: string
                  `,
          title: `A username or alias for the target Dev Hub org.`,
        },
        apiversion: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Override the API version used for API requests made by this command.
                      <br/><br/>
                      Type: string
                  `,
          title: `Override the API version used for API requests made by this command.`,
        },
        package: {
          type: `<b>Required</b>`,
          body: `
                      <br/><br/>
                      The ID (starts with 04t) or alias of the package version to promote.
                      <br/><br/>
                      Type: number
                  `,
          title: `The ID (starts with 04t) or alias of the package version to promote.`,
        },
        verbose: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Displays extended package version details.
                      <br/><br/>
                      Type: boolean
                  `,
          title: `Displays extended package version details.`,
        },
      },
      version_update: {
        json: {
          type: `<b><i>Optional</i></b>`,
          body: `
                <br/><br/>
                Format output as JSON.<br/><br/>
                Type: boolean
                `,
          title: `Format output as JSON.`,
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
          title: `The logging level for this command invocation.`,
        },
        targetdevhubusername: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      A username or alias for the target Dev Hub org. Overrides the default Dev Hub org.<br/><br/>
                      Type: string
                  `,
          title: `A username or alias for the target Dev Hub org.`,
        },
        apiversion: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Override the API version used for API requests made by this command.
                      <br/><br/>
                      Type: string
                  `,
          title: `Override the API version used for API requests made by this command.`,
        },
        package: {
          type: `<b>Required</b>`,
          body: `
                      <br/><br/>
                      The ID (starts with 04t) or alias of the package to update a version of.
                      <br/><br/>
                      Type: number
                  `,
          title: `The ID (starts with 04t) or alias of the package to update a version of.`,
        },
        versionname: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      The new package version name.
                      <br/><br/>
                      Type: string
                  `,
          title: `The new package version name.`,
        },
        versiondescription: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      The new package version description.
                      <br/><br/>
                      Type: string
                  `,
          title: `The new package version description.`,
        },
        branch: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      The new package version branch.
                      <br/><br/>
                      Type: string
                  `,
          title: `The new package version branch.`,
        },
        tag: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      The new package version tag.
                      <br/><br/>
                      Type: string
                  `,
          title: `The new package version tag.`,
        },
        installationkey: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      The new installation key for the key-protected package. The default is null.
                      <br/><br/>
                      Type: string
                  `,
          title: `The new installation key for the key-protected package.`,
        },
      },
    },
    package1:{
      version_create: {
        json: {
          type: `<b><i>Optional</i></b>`,
          body: `
                <br/><br/>
                Format output as JSON.<br/><br/>
                Type: boolean
                `,
          title: `Format output as JSON.`,
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
          title: `The logging level for this command invocation.`,
        },
        targetdevhubusername: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      A username or alias for the target Dev Hub org. Overrides the default Dev Hub org.<br/><br/>
                      Type: string
                  `,
          title: `A username or alias for the target Dev Hub org.`,
        },
        apiversion: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Override the API version used for API requests made by this command.
                      <br/><br/>
                      Type: string
                  `,
          title: `Override the API version used for API requests made by this command.`,
        },
        packageid: {
          type: `<b>Required</b>`,
          body: `
                      <br/><br/>
                      ID of the metadata package (starts with 033) of which you???re creating a new version.
                      <br/><br/>
                      Type: id
                  `,
          title: `ID of the metadata package (starts with 033) of which you???re creating a new version.`,
        },
        name: {
          type: `<b>Required</b>`,
          body: `
                      <br/><br/>
                      Package version name.<br/><br/>
                      Type: string
                  `,
          title: `Package version name.`,
        },
        description: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Package version description.<br/><br/>
                      Type: string
                  `,
          title: `Package version description.`,
        },
        version: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Package version in major.minor format, for example, 3.2.<br/><br/>
                      Type: string
                  `,
          title: `Package version in major.minor format, for example, 3.2.`,
        },
        managedreleased: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Creates a managed package version. To create a beta version, don???t include this parameter.<br/><br/>
                      Type: boolean
                  `,
          title: `Creates a managed package version.`,
        },
        releasenotesurl: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      The release notes URL. This link is displayed in the package installation UI to provide release notes for this package version to subscribers.<br/><br/>
                      Type: url
                  `,
          title: `The release notes URL.`,
        },
        postinstallurl: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      The post-install instructions URL. The contents of the post-installation instructions URL are displayed in the UI after installation of the package version.<br/><br/>
                      Type: url
                  `,
          title: `The post-install instructions URL.`,
        },
        installationkey: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Installation key for creating the key-protected package. The default is null.<br/><br/>
                      Type: string
                  `,
          title: `Installation key for creating the key-protected package.`,
        },
        wait: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Minutes to wait for the package version to be created. The default is 2 minutes.<br/><br/>
                      Type: number
                  `,
          title: `Minutes to wait for the package version to be created.`,
        },
      },
      version_create_get: {
        json: {
          type: `<b><i>Optional</i></b>`,
          body: `
                <br/><br/>
                Format output as JSON.<br/><br/>
                Type: boolean
                `,
          title: `Format output as JSON.`,
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
          title: `The logging level for this command invocation.`,
        },
        targetdevhubusername: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      A username or alias for the target Dev Hub org. Overrides the default Dev Hub org.<br/><br/>
                      Type: string
                  `,
          title: `A username or alias for the target Dev Hub org.`,
        },
        apiversion: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Override the API version used for API requests made by this command.
                      <br/><br/>
                      Type: string
                  `,
          title: `Override the API version used for API requests made by this command.`,
        },
        requestid: {
          type: `<b>Required</b>`,
          body: `
                      <br/><br/>
                      The ID of the PackageUploadRequest.
                      <br/><br/>
                      Type: id
                  `,
          title: `The ID of the PackageUploadRequest.`,
        },
      },
      version_display: {
        json: {
          type: `<b><i>Optional</i></b>`,
          body: `
                <br/><br/>
                Format output as JSON.<br/><br/>
                Type: boolean
                `,
          title: `Format output as JSON.`,
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
          title: `The logging level for this command invocation.`,
        },
        targetdevhubusername: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      A username or alias for the target Dev Hub org. Overrides the default Dev Hub org.<br/><br/>
                      Type: string
                  `,
          title: `A username or alias for the target Dev Hub org.`,
        },
        apiversion: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Override the API version used for API requests made by this command.
                      <br/><br/>
                      Type: string
                  `,
          title: `Override the API version used for API requests made by this command.`,
        },
        packageversionid: {
          type: `<b>Required</b>`,
          body: `
                      <br/><br/>
                      ID (starts with 04t) of the metadata package version whose details you want to display.
                      <br/><br/>
                      Type: id
                  `,
          title: `ID (starts with 04t) of the metadata package version whose details you want to display.`,
        },
      },
      version_list: {
        json: {
          type: `<b><i>Optional</i></b>`,
          body: `
                <br/><br/>
                Format output as JSON.<br/><br/>
                Type: boolean
                `,
          title: `Format output as JSON.`,
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
          title: `The logging level for this command invocation.`,
        },
        targetdevhubusername: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      A username or alias for the target Dev Hub org. Overrides the default Dev Hub org.<br/><br/>
                      Type: string
                  `,
          title: `A username or alias for the target Dev Hub org.`,
        },
        apiversion: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Override the API version used for API requests made by this command.
                      <br/><br/>
                      Type: string
                  `,
          title: `Override the API version used for API requests made by this command.`,
        },
        packageid: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Metadata package ID (starts with 033) whose package versions you want to list. If not specified, shows all versions for all packages (managed and unmanaged) in the org.
                      <br/><br/>
                      Type: id
                  `,
          title: `Metadata package ID (starts with 033) whose package versions you want to list.`,
        },
      },
    },
    project:{
      create: {
        json: {
          type: `<b><i>Optional</i></b>`,
          body: `
                <br/><br/>
                Format output as JSON.<br/><br/>
                Type: boolean
                `,
          title: `Format output as JSON.`,
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
          title: `The logging level for this command invocation.`,
        },
        projectname: {
          type: `<b>Required</b>`,
          body: `
                      <br/><br/>
                      The name for the new project. Any valid folder name is accepted.
                      <br/><br/>
                      Type: id
                  `,
          title: `The name for the new project.`,
        },
        template: {
          type: `<b>Required</b>`,
          body: `
                      <br/><br/>
                      The template to use to create the project. Supplied parameter values or default values are filled into a copy of the template.<br/><br/>
                      Type: string<br/><br/>
                      Permissible values are: standard, empty, analytics<br/><br/>
                      Default value: standard
                  `,
          title: `The template to use to create the project.`,
        },
        outputdir: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      The directory to store the newly created files. The location can be an absolute path or relative to the current working directory. The default is the current directory.<br/><br/>
                      Type: string<br/><br/>
                      Default value: .
                  `,
          title: `The directory to store the newly created files.`,
        },
        namespace: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      The namespace associated with this project and any connected scratch orgs.<br/><br/>
                      Type: string
                  `,
          title: `The namespace associated with this project and any connected scratch orgs.`,
        },
        defaultpackagedir: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      The default package directory name. Metadata items such as classes and Lightning bundles are placed inside this folder.<br/><br/>
                      Type: string<br/><br/>
                      Default value: force-app
                  `,
          title: `The default package directory name.`,
        },
        manifest: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Generates a default manifest (package.xml) for fetching Apex, Visualforce, Lightning components, and static resources.<br/><br/>
                      Type: boolean
                  `,
          title: `Generates a default manifest (package.xml) for fetching Apex, Visualforce, Lightning components, and static resources.`,
        },
      },
    },
    schema:{
      sobject_describe: {
        json: {
          type: `<b><i>Optional</i></b>`,
          body: `
                <br/><br/>
                Format output as JSON.<br/><br/>
                Type: boolean
                `,
          title: `Format output as JSON.`,
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
          title: `The logging level for this command invocation.`,
        },
        targetusername: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>            
                      A username or alias for the target org. Overrides the default target org.<br/><br/>
                      Type: string
                  `,
          title: `A username or alias for the target org. Overrides the default target org.`,
        },
        apiversion: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Override the API version used for API requests made by this command.<br/><br/>
                      Type: string
                  `,
          title: `Override the API version used for API requests made by this command.`,
        },
        sobjecttype: {
          type: `<b>Required</b>`,
          body: `
                      <br/><br/>
                      The API name of the object to describe.<br/><br/>
                      Type: string
                  `,
          title: `The API name of the object to describe.`,
        },
        usetoolingapi: {
          type: `<b>Required</b>`,
          body: `
                      <br/><br/>
                      Execute with Tooling API.<br/><br/>
                      Type: boolean
                  `,
          title: `Execute with Tooling API.`,
        },
      },
      sobject_list: {
        json: {
          type: `<b><i>Optional</i></b>`,
          body: `
                <br/><br/>
                Format output as JSON.<br/><br/>
                Type: boolean
                `,
          title: `Format output as JSON.`,
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
          title: `The logging level for this command invocation.`,
        },
        targetusername: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>            
                      A username or alias for the target org. Overrides the default target org.<br/><br/>
                      Type: string
                  `,
          title: `A username or alias for the target org. Overrides the default target org.`,
        },
        apiversion: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Override the API version used for API requests made by this command.<br/><br/>
                      Type: string
                  `,
          title: `Override the API version used for API requests made by this command.`,
        },
        sobjecttypecategory: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      The type of objects to list (all|custom|standard).<br/><br/>
                      Type: string<br/><br/>
                      Default value: ALL
                  `,
          title: `The type of objects to list (all|custom|standard).`,
        },
      },
    },
    source: {
      beta_pull: {
        json: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Format output as JSON.<br/><br/>
                      Type: boolean
                  `,
          title: `Format output as JSON.`,
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
          title: `The logging level for this command invocation.`,
        },
        targetusername: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>            
                      A username or alias for the target org. Overrides the default target org.<br/><br/>
                      Type: string
                  `,
          title: `A username or alias for the target org. Overrides the default target org.`,
        },
        apiversion: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Override the API version used for API requests made by this command.<br/><br/>
                      Type: string
                  `,
          title: `Override the API version used for API requests made by this command.`,
        },
        forceoverwrite: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Ignore conflict warnings and overwrite changes to the project.<br/><br/>
                      Type: boolean
                  `,
          title: `Ignore conflict warnings and overwrite changes to the project.`,
        },
        wait: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      The number of minutes to wait for the command to complete and display results to the terminal window. If the command continues to run after the wait period, the CLI returns control of the terminal window to you. The default is 33 minutes.<br/><br/>
                      Type: minutes<br/>
                      Default value: 33 minutes
                  `,
          title: `The number of minutes to wait for the command to complete and display results to the terminal window.`,
        },
      },
      beta_push: {
        json: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Format output as JSON.<br/><br/>
                      Type: boolean
                  `,
          title: `Format output as JSON.`,
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
          title: `The logging level for this command invocation.`,
        },
        targetusername: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>            
                      A username or alias for the target org. Overrides the default target org.<br/><br/>
                      Type: string
                  `,
          title: `A username or alias for the target org. Overrides the default target org.`,
        },
        apiversion: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Override the API version used for API requests made by this command.<br/><br/>
                      Type: string
                  `,
          title: `Override the API version used for API requests made by this command.`,
        },
        forceoverwrite: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Ignore conflict warnings and overwrite changes to the project.<br/><br/>
                      Type: boolean
                  `,
          title: `Ignore conflict warnings and overwrite changes to the project.`,
        },
        wait: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      The number of minutes to wait for the command to complete and display results to the terminal window. If the command continues to run after the wait period, the CLI returns control of the terminal window to you. The default is 33 minutes.<br/><br/>
                      Type: minutes<br/>
                      Default value: 33 minutes
                  `,
          title: `The number of minutes to wait for the command to complete and display results to the terminal window.`,
        },
        ignorewarnings: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Completes the deployment even if warnings are generated.<br/><br/>
                      Type: boolean
                  `,
          title: `Completes the deployment even if warnings are generated.`,
        },
        quiet: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Command does not output to stdout.<br/><br/>
                      Type: boolean
                  `,
          title: `Command does not output to stdout.`,
        },
      },
      beta_status: {
        json: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Format output as JSON.<br/><br/>
                      Type: boolean
                  `,
          title: `Format output as JSON.`,
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
          title: `The logging level for this command invocation.`,
        },
        targetusername: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>            
                      A username or alias for the target org. Overrides the default target org.<br/><br/>
                      Type: string
                  `,
          title: `A username or alias for the target org. Overrides the default target org.`,
        },
        apiversion: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Override the API version used for API requests made by this command.<br/><br/>
                      Type: string
                  `,
          title: `Override the API version used for API requests made by this command.`,
        },
        local: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Lists the changes that have been made locally.<br/><br/>
                      Type: boolean
                  `,
          title: `Lists the changes that have been made locally.`,
        },
        remote: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Lists the changes that have been made in the scratch org.<br/><br/>
                      Type: boolean
                  `,
          title: `Lists the changes that have been made in the scratch org.`,
        },
      },
      beta_tracking_clear: {
        json: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Format output as JSON.<br/><br/>
                      Type: boolean
                  `,
          title: `Format output as JSON.`,
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
          title: `The logging level for this command invocation.`,
        },
        targetusername: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>            
                      A username or alias for the target org. Overrides the default target org.<br/><br/>
                      Type: string
                  `,
          title: `A username or alias for the target org. Overrides the default target org.`,
        },
        apiversion: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Override the API version used for API requests made by this command.<br/><br/>
                      Type: string
                  `,
          title: `Override the API version used for API requests made by this command.`,
        },
        noprompt: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Do not prompt for source tracking override confirmation.<br/><br/>
                      Type: boolean
                  `,
          title: `Do not prompt for source tracking override confirmation.`,
        },
      },
      beta_tracking_reset: {
        json: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Format output as JSON.<br/><br/>
                      Type: boolean
                  `,
          title: `Format output as JSON.`,
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
          title: `The logging level for this command invocation.`,
        },
        targetusername: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>            
                      A username or alias for the target org. Overrides the default target org.<br/><br/>
                      Type: string
                  `,
          title: `A username or alias for the target org. Overrides the default target org.`,
        },
        apiversion: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Override the API version used for API requests made by this command.<br/><br/>
                      Type: string
                  `,
          title: `Override the API version used for API requests made by this command.`,
        },
        revision: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Reset to a specific SourceMember revision counter number.<br/><br/>
                      Type: boolean
                  `,
          title: `Reset to a specific SourceMember revision counter number.`,
        },
        noprompt: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Do not prompt for source tracking override confirmation.<br/><br/>
                      Type: boolean
                  `,
          title: `Do not prompt for source tracking override confirmation.`,
        },
      },
      convert: {
        json: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Format output as JSON.<br/><br/>
                      Type: boolean
                  `,
          title: `Format output as JSON.`,
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
          title: `The logging level for this command invocation.`,
        },
        rootdir: {
          type: `<b>Required</b>`,
          body: `
                      <br/><br/>            
                      A source directory other than the default package to convert.<br/><br/>
                      Type: directory
                  `,
          title: `A source directory other than the default package to convert.`,
        },
        outputdir: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Output directory to store the Metadata API???formatted files in.<br/><br/>
                      Type: directory<br/>
                      Default value: metadataPackage_1638492694112
                  `,
          title: `Output directory to store the Metadata API???formatted files in.`,
        },
        packagename: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Name of the package to associate with the metadata-formatted files.<br/><br/>
                      Type: string
                  `,
          title: `Name of the package to associate with the metadata-formatted files.`,
        },
        manifest: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      The complete path to the manifest (package.xml) file that specifies the metadata types to convert.<br/><br/>
                      If you specify this parameter, don???t specify --metadata or --sourcepath.<br/><br/>
                      Type: string
                  `,
          title: `The complete path to the manifest (package.xml) file that specifies the metadata types to convert.`,
        },
        sourcepath: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      A comma-separated list of paths to the local source files to convert. The supplied paths can be to a single file (in which case the operation is applied to only one file) or to a folder (in which case the operation is applied to all metadata types in the directory and its sub-directories).<br/><br/>
                      If you specify this parameter, don???t specify --manifest or --metadata.<br/><br/>
                      Type: array
                  `,
          title: `A comma-separated list of paths to the local metadata files to convert.`,
        },
        metadata: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Comma-separated list of metadata component names to convert.<br/><br/>
                      Type: array
                  `,
          title: `Comma-separated list of metadata component names to convert.`,
        },
      },
      delete: {
        json: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Format output as JSON.<br/><br/>
                      Type: boolean
                  `,
          title: `Format output as JSON.`,
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
          title: `The logging level for this command invocation.`,
        },
        targetusername: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>            
                      A username or alias for the target org. Overrides the default target org.<br/><br/>
                      Type: string
                  `,
          title: `A username or alias for the target org. Overrides the default target org.`,
        },
        apiversion: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Override the API version used for API requests made by this command.<br/><br/>
                      Type: string
                  `,
          title: `Override the API version used for API requests made by this command.`,
        },
        checkonly: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Validates the deleted metadata and runs all Apex tests, but prevents the deletion from being saved to the org.<br/><br/>
                      If you change a field type from Master-Detail to Lookup or vice versa, that change isn???t supported when using the --checkonly parameter to test a deletion (validation). This kind of change isn???t supported for test deletions to avoid the risk of data loss or corruption. If a change that isn???t supported for test deletions is included in a deletion package, the test deletion fails and issues an error.<br/><br/>
                      If your deletion package changes a field type from Master-Detail to Lookup or vice versa, you can still validate the changes prior to deploying to Production by performing a full deletion to another test Sandbox. A full deletion includes a validation of the changes as part of the deletion process.<br/><br/>
                      Note: A Metadata API deletion that includes Master-Detail relationships deletes all detail records in the Recycle Bin in the following cases.<br/><br/>
                      1. For a deletion with a new Master-Detail field, soft delete (send to the Recycle Bin) all detail records before proceeding to delete the Master-Detail field, or the deletion fails. During the deletion, detail records are permanently deleted from the Recycle Bin and cannot be recovered.<br/><br/>
                      2. For a deletion that converts a Lookup field relationship to a Master-Detail relationship, detail records must reference a master record or be soft-deleted (sent to the Recycle Bin) for the deletion to succeed. However, a successful deletion permanently deletes any detail records in the Recycle Bin.<br/><br/>
                      Type: boolean
                  `,
          title: `Validates the deleted metadata and runs all Apex tests, but prevents the deletion from being saved to the org.`,
        },
        wait: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Number of minutes to wait for the command to complete and display results to the terminal window. If the command continues to run after the wait period, the CLI returns control of the terminal window to you.<br/><br/>
                      Type: minutes<br/>
                      Default value: 33 minutes
                  `,
          title: `Number of minutes to wait for the command to complete and display results to the terminal window.`,
        },
        testlevel: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Specifies which level of deployment tests to run. Valid values are:<br/><br/>
                      NoTestRun???No tests are run. This test level applies only to deployments to development environments, such as sandbox, Developer Edition, or trial orgs. This test level is the default for development environments.<br/><br/>
                      RunLocalTests???All tests in your org are run, except the ones that originate from installed managed packages. This test level is the default for production deployments that include Apex classes or triggers.<br/><br/>
                      RunAllTestsInOrg???All tests in your org are run, including tests of managed packages.<br/><br/>
                      If you don???t specify a test level, the default behavior depends on the contents of your deployment package. For more information, see ???Running Tests in a Deployment??? in the Metadata API Developer Guide.<br/><br/>
                      Type: enum<br/>
                      Permissible values are: NoTestRun, RunLocalTests, RunAllTestsInOrg<br/>
                      Default value: NoTestRun
                  `,
          title: `Specifies which level of deployment tests to run.`,
        },
        noprompt: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Do not prompt for delete confirmation.<br/><br/>
                      Type: boolean
                  `,
          title: `Do not prompt for delete confirmation.`,
        },
        metadata: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      A comma-separated list of names of metadata components to delete from your project and your org.<br/><br/>
                      If you specify this parameter, don???t specify --sourcepath.<br/><br/>
                      Type: array
                  `,
          title: `A comma-separated list of names of metadata components to delete from your project and your org.`,
        },
        sourcepath: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      A comma-separated list of paths to the local metadata to delete. The supplied paths can be a single file (in which case the operation is applied to only one file) or a folder (in which case the operation is applied to all metadata types in the directory and its sub-directories).<br/><br/>
                      If you specify this parameter, don???t specify --metadata.<br/><br/>
                      Type: array
                  `,
          title: `A comma-separated list of paths to the local metadata to delete.`,
        },
        verbose: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Emit additional command output to stdout.<br/><br/>
                      Type: boolean
                  `,
          title: `Emit additional command output to stdout.`,
        },
      },
      deploy: {
        json: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Format output as JSON.<br/><br/>
                      Type: boolean
                  `,
          title: `Format output as JSON.`,
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
          title: `The logging level for this command invocation.`,
        },
        targetusername: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>            
                      A username or alias for the target org. Overrides the default target org.<br/><br/>
                      Type: string
                  `,
          title: `A username or alias for the target org. Overrides the default target org.`,
        },
        apiversion: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Override the API version used for API requests made by this command.<br/><br/>
                      Type: string
                  `,
          title: `Override the API version used for API requests made by this command.`,
        },
        checkonly: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Validates the deployed metadata and runs all Apex tests, but prevents the deployment from being saved to the org.<br/><br/>
                      If you change a field type from Master-Detail to Lookup or vice versa, that change isn???t supported when using the --checkonly parameter to test a deployment (validation). This kind of change isn???t supported for test deployments to avoid the risk of data loss or corruption. If a change that isn???t supported for test deployments is included in a deployment package, the test deployment fails and issues an error.<br/><br/>
                      If your deployment package changes a field type from Master-Detail to Lookup or vice versa, you can still validate the changes prior to deploying to Production by performing a full deployment to another test Sandbox. A full deployment includes a validation of the changes as part of the deployment process.<br/><br/>
                      Note: A Metadata API deployment that includes Master-Detail relationships deletes all detail records in the Recycle Bin in the following cases.<br/><br/>
                      1. For a deployment with a new Master-Detail field, soft delete (send to the Recycle Bin) all detail records before proceeding to deploy the Master-Detail field, or the deployment fails. During the deployment, detail records are permanently deleted from the Recycle Bin and cannot be recovered.<br/><br/>
                      2. For a deployment that converts a Lookup field relationship to a Master-Detail relationship, detail records must reference a master record or be soft-deleted (sent to the Recycle Bin) for the deployment to succeed. However, a successful deployment permanently deletes any detail records in the Recycle Bin.<br/><br/>
                      Type: boolean
                  `,
          title: `Validates the deleted metadata and runs all Apex tests, but prevents the deletion from being saved to the org.`,
        },
        soapdeploy: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Deploy metadata with SOAP API instead of REST API.<br/><br/>
                      Type: boolean
                  `,
          title: `Deploy metadata with SOAP API instead of REST API.`,
        },
        wait: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Number of minutes to wait for the command to complete and display results to the terminal window. If the command continues to run after the wait period, the CLI returns control of the terminal window to you.<br/><br/>
                      Type: minutes<br/>
                      Default value: 33 minutes
                  `,
          title: `Number of minutes to wait for the command to complete and display results to the terminal window.`,
        },
        testlevel: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Specifies which level of deployment tests to run. Valid values are:<br/><br/>
                      NoTestRun???No tests are run. This test level applies only to deployments to development environments, such as sandbox, Developer Edition, or trial orgs. This test level is the default for development environments.<br/><br/>
                      RunSpecifiedTests???Runs only the tests that you specify in the --runtests option. Code coverage requirements differ from the default coverage requirements when using this test level. Executed tests must comprise a minimum of 75% code coverage for each class and trigger in the deployment package. This coverage is computed for each class and trigger individually and is different than the overall coverage percentage.<br/><br/>
                      RunLocalTests???All tests in your org are run, except the ones that originate from installed managed packages. This test level is the default for production deployments that include Apex classes or triggers.<br/><br/>
                      RunAllTestsInOrg???All tests in your org are run, including tests of managed packages.<br/><br/>
                      If you don???t specify a test level, the default behavior depends on the contents of your deployment package. For more information, see ???Running Tests in a Deployment??? in the Metadata API Developer Guide.<br/><br/>
                      Type: enum<br/>
                      Permissible values are: NoTestRun, RunSpecifiedTests, RunLocalTests, RunAllTestsInOrg<br/>
                      Default value: NoTestRun
                  `,
          title: `Number of minutes to wait for the command to complete and display results to the terminal window.`,
        },
        runtests: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Lists the Apex classes containing the deployment tests to run. Use this parameter when you set --testlevel to RunSpecifiedTests.<br/><br/>
                      Type: array
                  `,
          title: `Lists the Apex classes containing the deployment tests to run.`,
        },
        ignoreerrors: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Ignores the deploy errors, and continues with the deploy operation. The default is false. Keep this parameter set to false when deploying to a production org. If set to true, components without errors are deployed, and components with errors are skipped.<br/><br/>
                      Type: boolean
                  `,
          title: `Ignores the deploy errors, and continues with the deploy operation.`,
        },
        ignorewarnings: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      If a warning occurs and ignoreWarnings is set to true, the success field in DeployMessage is true. When ignoreWarnings is set to false, success is set to false, and the warning is treated like an error.<br/><br/>
                      Type: boolean
                  `,
          title: `If a warning occurs and ignoreWarnings is set to true, the success field in DeployMessage is true.`,
        },
        validateddeployrequestid: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Specifies the ID of a package with recently validated components to run a Quick Deploy. Deploying a validation helps you shorten your deployment time because tests aren???t rerun. If you have a recent successful validation, you can deploy the validated components without running tests. A validation doesn???t save any components in the org. You use a validation only to check the success or failure messages that you would receive with an actual deployment. To validate your components, add the -c | --checkonly flag when you run "sfdx force:mdapi:deploy". This flag sets the checkOnly="true" parameter for your deployment. Before deploying a recent validation, ensure that the following requirements are met:<br/><br/>
                      1. The components have been validated successfully for the target environment within the last 10 days.<br/><br/>
                      2. As part of the validation, Apex tests in the target org have passed.<br/><br/>
                      3. Code coverage requirements are met.<br/><br/>
                      - If all tests in the org or all local tests are run, overall code coverage is at least 75%, and Apex triggers have some coverage.<br/><br/>
                      - If specific tests are run with the RunSpecifiedTests test level, each class and trigger that was deployed is covered by at least 75% individually.<br/><br/>
                      Type: id
                  `,
          title: `Specifies the ID of a package with recently validated components to run a Quick Deploy.`,
        },
        verbose: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Emit additional command output to stdout.<br/><br/>
                      Type: boolean
                  `,
          title: `Emit additional command output to stdout.`,
        },
        metadata: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      A comma-separated list of names of metadata components to deploy to the org.<br/><br/>
                      If you specify this parameter, don???t specify --manifest or --sourcepath.<br/><br/>
                      Type: array
                  `,
          title: `A comma-separated list of names of metadata components to deploy to the org.`,
        },
        sourcepath: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      A comma-separated list of paths to the local source files to deploy. The supplied paths can be to a single file (in which case the operation is applied to only one file) or to a folder (in which case the operation is applied to all metadata types in the directory and its sub-directories).<br/><br/>
                      If you specify this parameter, don???t specify --manifest or --metadata.<br/><br/>
                      Type: array
                  `,
          title: `A comma-separated list of paths to the local source files to deploy.`,
        },
        manifest: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      The complete path for the manifest (package.xml) file that specifies the components to deploy. All child components are included.<br/><br/>
                      If you specify this parameter, don???t specify --metadata or --sourcepath.<br/><br/>
                      Type: filepath
                  `,
          title: `The complete path for the manifest (package.xml) file that specifies the components to deploy.`,
        },
        predestructivechanges: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      File path for a manifest (destructiveChangesPre.xml) of components to delete before the deploy.<br/><br/>
                      Type: filepath
                  `,
          title: `File path for a manifest (destructiveChangesPre.xml) of components to delete before the deploy.`,
        },
        postdestructivechanges: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      File path for a manifest (destructiveChangesPost.xml) of components to delete after the deploy.<br/><br/>
                      Type: filepath
                  `,
          title: `File path for a manifest (destructiveChangesPost.xml) of components to delete after the deploy.`,
        },
      },
      deploy_cancel: {
        json: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Format output as JSON.<br/><br/>
                      Type: boolean
                  `,
          title: `Format output as JSON.`,
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
          title: `The logging level for this command invocation.`,
        },
        targetusername: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>            
                      A username or alias for the target org. Overrides the default target org.<br/><br/>
                      Type: string
                  `,
          title: `A username or alias for the target org. Overrides the default target org.`,
        },
        apiversion: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Override the API version used for API requests made by this command.<br/><br/>
                      Type: string
                  `,
          title: `Override the API version used for API requests made by this command.`,
        },
        wait: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Number of minutes to wait for the command to complete and display results to the terminal window. If the command continues to run after the wait period, the CLI returns control of the terminal window to you.<br/><br/>
                      Type: minutes<br/>
                      Default value: 33 minutes
                  `,
          title: `Number of minutes to wait for the command to complete and display results to the terminal window.`,
        },
        jobid: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Job ID of the deployment you want to cancel; defaults to your most recent CLI deployment if not specified.<br/><br/>
                      Type: id
                  `,
          title: `Job ID of the deployment you want to cancel.`,
        },
      },
      deploy_report: {
        json: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Format output as JSON.<br/><br/>
                      Type: boolean
                  `,
          title: `Format output as JSON.`,
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
          title: `The logging level for this command invocation.`,
        },
        targetusername: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>            
                      A username or alias for the target org. Overrides the default target org.<br/><br/>
                      Type: string
                  `,
          title: `A username or alias for the target org. Overrides the default target org.`,
        },
        apiversion: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Override the API version used for API requests made by this command.<br/><br/>
                      Type: string
                  `,
          title: `Override the API version used for API requests made by this command.`,
        },
        wait: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Number of minutes to wait for the command to complete and display results to the terminal window. If the command continues to run after the wait period, the CLI returns control of the terminal window to you.<br/><br/>
                      Type: minutes<br/>
                      Default value: 33 minutes
                  `,
          title: `Number of minutes to wait for the command to complete and display results to the terminal window.`,
        },
        jobid: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Job ID of the deployment you want to cancel; defaults to your most recent CLI deployment if not specified.<br/><br/>
                      Type: id
                  `,
          title: `Job ID of the deployment you want to cancel.`,
        },
        verbose: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Emit additional command output to stdout.<br/><br/>
                      Type: boolean
                  `,
          title: `Emit additional command output to stdout.`,
        },
      },
      ignored_list: {
        json: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Format output as JSON.<br/><br/>
                      Type: boolean
                  `,
          title: `Format output as JSON.`,
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
          title: `The logging level for this command invocation.`,
        },
        sourcepath: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>            
                      File or directory of files that the command checks for foreceignored files.<br/><br/>
                      Type: filepath
                  `,
          title: `File or directory of files that the command checks for foreceignored files.`,
        },
      },
      manifest_create: {
        json: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Format output as JSON.<br/><br/>
                      Type: boolean
                  `,
          title: `Format output as JSON.`,
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
          title: `The logging level for this command invocation.`,
        },
        apiversion: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>            
                      Override the API version used for API requests made by this command.<br/><br/> 
                      Type: string
                  `,
          title: `Override the API version used for API requests made by this command.`,
        },
        metadata: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>            
                      Comma-separated list of names of metadata components to include in the manifest.<br/><br/> 
                      Type: array
                  `,
          title: `Comma-separated list of names of metadata components to include in the manifest.`,
        },
        sourcepath: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>            
                      Comma-separated list of paths to the local source files to include in the manifest.<br/><br/> 
                      Type: array
                  `,
          title: `Comma-separated list of paths to the local source files to include in the manifest.`,
        },
        manifestname: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>            
                      Name of a custom manifest file to create.<br/><br/>
                      Type: string
                  `,
          title: `Name of a custom manifest file to create.`,
        },
        manifesttype: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>            
                      Type of manifest to create; the type determines the name of the created file.<br/><br/>
                      Type: enum<br/>
                      Permissible values are: pre, post, destroy, package
                  `,
          title: `Type of manifest to create.`,
        },
        outputdir: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>            
                      Directory to save the created manifest.<br/><br/>
                      Type: string
                  `,
          title: `Directory to save the created manifest.`,
        },
      },
      open: {
        json: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Format output as JSON.<br/><br/>
                      Type: boolean
                  `,
          title: `Format output as JSON.`,
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
          title: `The logging level for this command invocation.`,
        },
        targetusername: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>            
                      A username or alias for the target org. Overrides the default target org.<br/><br/>
                      Type: string
                  `,
          title: `A username or alias for the target org. Overrides the default target org.`,
        },
        apiversion: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Override the API version used for API requests made by this command.<br/><br/>
                      Type: string
                  `,
          title: `Override the API version used for API requests made by this command.`,
        },
        sourcefile: {
          type: `<b>Required</b>`,
          body: `
                      <br/><br/>
                      File to edit.<br/><br/>
                      Type: filepath
                  `,
          title: `File to edit.`,
        },
        urlonly: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Generate a navigation URL; don???t launch the editor.<br/><br/>
                      Type: boolean
                  `,
          title: `Generate a navigation URL.`,
        },
      },
      pull: {
        json: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Format output as JSON.<br/><br/>
                      Type: boolean
                  `,
          title: `Format output as JSON.`,
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
          title: `The logging level for this command invocation.`,
        },
        targetusername: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>            
                      A username or alias for the target org. Overrides the default target org.<br/><br/>
                      Type: string
                  `,
          title: `A username or alias for the target org. Overrides the default target org.`,
        },
        apiversion: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Override the API version used for API requests made by this command.<br/><br/>
                      Type: string
                  `,
          title: `Override the API version used for API requests made by this command.`,
        },
        wait: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      The number of minutes to wait for the command to complete and display results to the terminal window. If the command continues to run after the wait period, the CLI returns control of the terminal window to you. The default is 33 minutes.<br/><br/>
                      Type: minutes<br/>
                      Default value: 33 minutes
                  `,
          title: `The number of minutes to wait for the command to complete and display results to the terminal window.`,
        },
        forceoverwrite: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Runs the pull command even if conflicts exist. Changes in the scratch org overwrite changes in the project.<br/><br/>
                      Type: boolean
                  `,
          title: `Runs the pull command even if conflicts exist.`,
        },
      },
      push: {
        json: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Format output as JSON.<br/><br/>
                      Type: boolean
                  `,
          title: `Format output as JSON.`,
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
          title: `The logging level for this command invocation.`,
        },
        targetusername: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>            
                      A username or alias for the target org. Overrides the default target org.<br/><br/>
                      Type: string
                  `,
          title: `A username or alias for the target org. Overrides the default target org.`,
        },
        apiversion: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Override the API version used for API requests made by this command.<br/><br/>
                      Type: string
                  `,
          title: `Override the API version used for API requests made by this command.`,
        },
        forceoverwrite: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Runs the pull command even if conflicts exist. Changes in the scratch org overwrite changes in the project.<br/><br/>
                      Type: boolean
                  `,
          title: `Runs the pull command even if conflicts exist.`,
        },
        ignorewarnings: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Completes the deployment even if warnings are generated.<br/><br/>
                      Type: boolean
                  `,
          title: `Completes the deployment even if warnings are generated.`,
        },
        wait: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      The number of minutes to wait for the command to complete and display results to the terminal window. If the command continues to run after the wait period, the CLI returns control of the terminal window to you. The default is 33 minutes.<br/><br/>
                      Type: minutes<br/>
                      Default value: 33 minutes
                  `,
          title: `The number of minutes to wait for the command to complete and display results to the terminal window.`,
        },
      },
      retrieve: {
        json: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Format output as JSON.<br/><br/>
                      Type: boolean
                  `,
          title: `Format output as JSON.`,
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
          title: `The logging level for this command invocation.`,
        },
        targetusername: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>            
                      A username or alias for the target org. Overrides the default target org.<br/><br/>
                      Type: string
                  `,
          title: `A username or alias for the target org. Overrides the default target org.`,
        },
        apiversion: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Override the API version used for API requests made by this command.<br/><br/>
                      Type: string
                  `,
          title: `Override the API version used for API requests made by this command.`,
        },
        sourcepath: {
          type: `<b><i>Optional</i></b>`,
          body: `
                  <br/><br/>
                  A comma-separated list of file paths for source to retrieve from the org. The supplied paths can be to a single file (in which case the operation is applied to only one file) or to a folder (in which case the operation is applied to all source files in the directory and its sub-directories).<br/><br/>
                  If you specify this parameter, don???t specify --manifest or --metadata.<br/><br/>
                  Type: array
              `,
          title: `A comma-separated list of file paths for source to retrieve from the org.`,
        },
        wait: {
          type: `<b><i>Optional</i></b>`,
          body: `
                  <br/><br/>
                  The number of minutes to wait for the command to complete and display results to the terminal window. If the command continues to run after the wait period, the CLI returns control of the terminal window to you. The default is 33 minutes.<br/><br/>
                  Type: minutes<br/>
                  Default value: 33 minutes
              `,
          title: `The number of minutes to wait for the command to complete and display results to the terminal window.`,
        },
        manifest: {
          type: `<b><i>Optional</i></b>`,
          body: `
                  <br/><br/>
                  The complete path for the manifest (package.xml) file that specifies the components to retrieve.<br/><br/>
                  If you specify this parameter, don???t specify --metadata or --sourcepath.<br/><br/>
                  Type: filepath
              `,
          title: `The complete path for the manifest (package.xml) file that specifies the components to retrieve.`,
        },
        metadata: {
          type: `<b><i>Optional</i></b>`,
          body: `
                  <br/><br/>
                  A comma-separated list of names of metadata components to retrieve from the org.<br/><br/>
                  If you specify this parameter, don???t specify --manifest or --sourcepath.<br/><br/>
                  Type: array
              `,
          title: `A comma-separated list of names of metadata components to retrieve from the org.`,
        },
        packagenames: {
          type: `<b><i>Optional</i></b>`,
          body: `
                  <br/><br/>
                  A comma-separated list of packages to retrieve.<br/><br/>
                  Type: array
              `,
          title: `A comma-separated list of packages to retrieve.`,
        },
        verbose: {
          type: `<b><i>Optional</i></b>`,
          body: `
                  <br/><br/>
                  Emit additional command output to stdout.<br/><br/>
                  Type: boolean
              `,
          title: `Emit additional command output to stdout.`,
        },
      },
      status: {
        json: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Format output as JSON.<br/><br/>
                      Type: boolean
                  `,
          title: `Format output as JSON.`,
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
          title: `The logging level for this command invocation.`,
        },
        targetusername: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>            
                      A username or alias for the target org. Overrides the default target org.<br/><br/>
                      Type: string
                  `,
          title: `A username or alias for the target org. Overrides the default target org.`,
        },
        apiversion: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Override the API version used for API requests made by this command.<br/><br/>
                      Type: string
                  `,
          title: `Override the API version used for API requests made by this command.`,
        },
        local: {
          type: `<b><i>Optional</i></b>`,
          body: `
                  <br/><br/>
                  Lists the changes that have been made locally.<br/><br/>
                  Type: boolean
              `,
          title: `Lists the changes that have been made locally.`,
        },
        remote: {
          type: `<b><i>Optional</i></b>`,
          body: `
                  <br/><br/>
                  Lists the changes that have been made in the scratch org.<br/><br/>
                  Type: boolean
              `,
          title: `Lists the changes that have been made in the scratch org.`,
        },
      },
      tracking_clear: {
        json: {
          type: `<b><i>Optional</i></b>`,
          body: `
                  <br/><br/>
                  Format output as JSON.<br/><br/>
                  Type: boolean
              `,
          title: `Format output as JSON.`,
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
          title: `The logging level for this command invocation.`,
        },
        targetusername: {
          type: `<b><i>Optional</i></b>`,
          body: `
                  <br/><br/>            
                  A username or alias for the target org. Overrides the default target org.<br/><br/>
                  Type: string
              `,
          title: `A username or alias for the target org. Overrides the default target org.`,
        },
        apiversion: {
          type: `<b><i>Optional</i></b>`,
          body: `
                  <br/><br/>
                  Override the API version used for API requests made by this command.<br/><br/>
                  Type: string
              `,
          title: `Override the API version used for API requests made by this command.`,
        },
        noprompt: {
          type: `<b><i>Optional</i></b>`,
          body: `
                  <br/><br/>
                  Do not prompt for source tracking override confirmation.<br/><br/>
                  Type: boolean
              `,
          title: `Do not prompt for source tracking override confirmation.`,
        },
      },
      tracking_reset: {
        json: {
          type: `<b><i>Optional</i></b>`,
          body: `
                  <br/><br/>
                  Format output as JSON.<br/><br/>
                  Type: boolean
              `,
          title: `Format output as JSON.`,
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
          title: `The logging level for this command invocation.`,
        },
        targetusername: {
          type: `<b><i>Optional</i></b>`,
          body: `
                  <br/><br/>            
                  A username or alias for the target org. Overrides the default target org.<br/><br/>
                  Type: string
              `,
          title: `A username or alias for the target org. Overrides the default target org.`,
        },
        apiversion: {
          type: `<b><i>Optional</i></b>`,
          body: `
                  <br/><br/>
                  Override the API version used for API requests made by this command.<br/><br/>
                  Type: string
              `,
          title: `Override the API version used for API requests made by this command.`,
        },
        revision: {
          type: `<b><i>Optional</i></b>`,
          body: `
                  <br/><br/>
                  Reset to a specific SourceMember revision counter number.<br/><br/>
                  Type: integer
              `,
          title: `Reset to a specific SourceMember revision counter number.`,
        },
        noprompt: {
          type: `<b><i>Optional</i></b>`,
          body: `
                  <br/><br/>
                  Do not prompt for source tracking override confirmation.<br/><br/>
                  Type: boolean
              `,
          title: `Do not prompt for source tracking override confirmation.`,
        },
      },
    },
    staticresource:{
      create: {
        json: {
          type: `<b><i>Optional</i></b>`,
          body: `
                  <br/><br/>
                  Format output as JSON.<br/><br/>
                  Type: boolean
              `,
          title: `Format output as JSON.`,
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
          title: `The logging level for this command invocation.`,
        },
        resourcename: {
          type: `<b>Required</b>`,
          body: `
                  <br/><br/>            
                  The name of the new static resource. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores.<br/><br/>
                  Type: string
              `,
          title: `The name of the new static resource.`,
        },
        contenttype: {
          type: `<b><i>Optional</i></b>`,
          body: `
                  <br/><br/>
                  The content type of the generated static resource. This must be a valid MIME type such as application/json, application/javascript, application/zip, text/plain, text/css, etc.<br/><br/>
                  Type: string<br/><br/>
                  Default value: application/zip
              `,
          title: `The content type of the generated static resource.`,
        },
        outputdir: {
          type: `<b><i>Optional</i></b>`,
          body: `
                  <br/><br/>
                  The directory to store the newly created files. The location can be an absolute path or relative to the current working directory. The default is the current directory.<br/><br/>
                  Type: string<br/><br/>
                  Default value: .
              `,
          title: `The directory to store the newly created files.`,
        },
        apiversion: {
          type: `<b><i>Optional</i></b>`,
          body: `
                  <br/><br/>
                  Override the API version used for API requests made by this command.<br/><br/>
                  Type: string
              `,
          title: `Override the API version used for API requests made by this command.`,
        },
      },
    },
    user:{
      create: {
        json: {
          type: `<b><i>Optional</i></b>`,
          body: `
                  <br/><br/>
                  Format output as JSON.<br/><br/>
                  Type: boolean
              `,
          title: `Format output as JSON.`,
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
          title: `The logging level for this command invocation.`,
        },
        targetdevhubusername: {
          type: `<b><i>Optional</i></b>`,
          body: `
                  <br/><br/>            
                  A username or alias for the target Dev Hub org. Overrides the default Dev Hub org.<br/><br/>
                  Type: string
              `,
          title: `A username or alias for the target Dev Hub org.`,
        },
        targetusername: {
          type: `<b><i>Optional</i></b>`,
          body: `
                  <br/><br/>
                  A username or alias for the target org. Overrides the default target org.<br/><br/>
                  Type: string
              `,
          title: `A username or alias for the target org.`,
        },
        apiversion: {
          type: `<b><i>Optional</i></b>`,
          body: `
                  <br/><br/>
                  Override the API version used for API requests made by this command.<br/><br/>
                  Type: string
              `,
          title: `Override the API version used for API requests made by this command.`,
        },
        setalias: {
          type: `<b><i>Optional</i></b>`,
          body: `
                  <br/><br/>
                  Set an alias for the created username to reference within the CLI.<br/><br/>
                  Type: string
              `,
          title: `Set an alias for the created username to reference within the CLI.`,
        },
        definitionfile: {
          type: `<b><i>Optional</i></b>`,
          body: `
                  <br/><br/>
                  File path to a user definition.<br/><br/>
                  Type: string
              `,
          title: `File path to a user definition.`,
        },
        setuniqueusername: {
          type: `<b><i>Optional</i></b>`,
          body: `
                  <br/><br/>
                  Force the username, if specified in the definition file or at the command line, to be unique by appending the org ID.<br/><br/>
                  Type: boolean
              `,
          title: `Force the username, if specified in the definition file or at the command line, to be unique by appending the org ID.`,
        },
      },
      display: {
        json: {
          type: `<b><i>Optional</i></b>`,
          body: `
                  <br/><br/>
                  Format output as JSON.<br/><br/>
                  Type: boolean
              `,
          title: `Format output as JSON.`,
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
          title: `The logging level for this command invocation.`,
        },
        targetdevhubusername: {
          type: `<b><i>Optional</i></b>`,
          body: `
                  <br/><br/>            
                  A username or alias for the target Dev Hub org. Overrides the default Dev Hub org.<br/><br/>
                  Type: string
              `,
          title: `A username or alias for the target Dev Hub org.`,
        },
        targetusername: {
          type: `<b><i>Optional</i></b>`,
          body: `
                  <br/><br/>
                  A username or alias for the target org. Overrides the default target org.<br/><br/>
                  Type: string
              `,
          title: `A username or alias for the target org.`,
        },
        apiversion: {
          type: `<b><i>Optional</i></b>`,
          body: `
                  <br/><br/>
                  Override the API version used for API requests made by this command.<br/><br/>
                  Type: string
              `,
          title: `Override the API version used for API requests made by this command.`,
        },
      },
      list: {
        json: {
          type: `<b><i>Optional</i></b>`,
          body: `
                  <br/><br/>
                  Format output as JSON.<br/><br/>
                  Type: boolean
              `,
          title: `Format output as JSON.`,
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
          title: `The logging level for this command invocation.`,
        },
        targetdevhubusername: {
          type: `<b><i>Optional</i></b>`,
          body: `
                  <br/><br/>            
                  A username or alias for the target Dev Hub org. Overrides the default Dev Hub org.<br/><br/>
                  Type: string
              `,
          title: `A username or alias for the target Dev Hub org.`,
        },
        targetusername: {
          type: `<b><i>Optional</i></b>`,
          body: `
                  <br/><br/>
                  A username or alias for the target org. Overrides the default target org.<br/><br/>
                  Type: string
              `,
          title: `A username or alias for the target org.`,
        },
        apiversion: {
          type: `<b><i>Optional</i></b>`,
          body: `
                  <br/><br/>
                  Override the API version used for API requests made by this command.<br/><br/>
                  Type: string
              `,
          title: `Override the API version used for API requests made by this command.`,
        },
      },
      password_generate: {
        json: {
          type: `<b><i>Optional</i></b>`,
          body: `
                  <br/><br/>
                  Format output as JSON.<br/><br/>
                  Type: boolean
              `,
          title: `Format output as JSON.`,
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
          title: `The logging level for this command invocation.`,
        },
        targetdevhubusername: {
          type: `<b><i>Optional</i></b>`,
          body: `
                  <br/><br/>            
                  A username or alias for the target Dev Hub org. Overrides the default Dev Hub org.<br/><br/>
                  Type: string
              `,
          title: `A username or alias for the target Dev Hub org.`,
        },
        targetusername: {
          type: `<b><i>Optional</i></b>`,
          body: `
                  <br/><br/>
                  A username or alias for the target org. Overrides the default target org.<br/><br/>
                  Type: string
              `,
          title: `A username or alias for the target org.`,
        },
        apiversion: {
          type: `<b><i>Optional</i></b>`,
          body: `
                  <br/><br/>
                  Override the API version used for API requests made by this command.<br/><br/>
                  Type: string
              `,
          title: `Override the API version used for API requests made by this command.`,
        },
        onbehalfof: {
          type: `<b><i>Optional</i></b>`,
          body: `
                  <br/><br/>
                  Comma-separated list of usernames or aliases to assign the password to.<br/><br/>
                  Type: array
              `,
          title: `Comma-separated list of usernames or aliases to assign the password to.`,
        },
        length: {
          type: `<b><i>Optional</i></b>`,
          body: `
                  <br/><br/>
                  Number of characters in the generated password; valid values are between 8 and 1000.<br/><br/>
                  Type: integer<br/><br/>
                  Default value: 13
              `,
          title: `Number of characters in the generated password.`,
        },
        complexity: {
          type: `<b><i>Optional</i></b>`,
          body: `
                  <br/><br/>
                  Level of password complexity or strength; the higher the value, the stronger the password.<br/><br/>
                  Type: integer<br/><br/>
                  Default value: 5
              `,
          title: `Level of password complexity or strength; the higher the value, the stronger the password.`,
        },
      },
      permset_assign: {
        json: {
          type: `<b><i>Optional</i></b>`,
          body: `
                  <br/><br/>
                  Format output as JSON.<br/><br/>
                  Type: boolean
              `,
          title: `Format output as JSON.`,
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
          title: `The logging level for this command invocation.`,
        },
        targetusername: {
          type: `<b><i>Optional</i></b>`,
          body: `
                  <br/><br/>
                  A username or alias for the target org. Overrides the default target org.<br/><br/>
                  Type: string
              `,
          title: `A username or alias for the target org.`,
        },
        apiversion: {
          type: `<b><i>Optional</i></b>`,
          body: `
                  <br/><br/>
                  Override the API version used for API requests made by this command.<br/><br/>
                  Type: string
              `,
          title: `Override the API version used for API requests made by this command.`,
        },
        permsetname: {
          type: `<b>Required</b>`,
          body: `
                  <br/><br/>
                  Comma-separated list of permission sets to assign.<br/><br/>
                  Type: array
              `,
          title: `Comma-separated list of permission sets to assign.`,
        },
        onbehalfof: {
          type: `<b><i>Optional</i></b>`,
          body: `
                  <br/><br/>
                  Comma-separated list of usernames or aliases to assign the password to.<br/><br/>
                  Type: array
              `,
          title: `Comma-separated list of usernames or aliases to assign the password to.`,
        },
      },
      permsetlicense_assign: {
        json: {
          type: `<b><i>Optional</i></b>`,
          body: `
                  <br/><br/>
                  Format output as JSON.<br/><br/>
                  Type: boolean
              `,
          title: `Format output as JSON.`,
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
          title: `The logging level for this command invocation.`,
        },
        targetusername: {
          type: `<b><i>Optional</i></b>`,
          body: `
                  <br/><br/>
                  A username or alias for the target org. Overrides the default target org.<br/><br/>
                  Type: string
              `,
          title: `A username or alias for the target org.`,
        },
        apiversion: {
          type: `<b><i>Optional</i></b>`,
          body: `
                  <br/><br/>
                  Override the API version used for API requests made by this command.<br/><br/>
                  Type: string
              `,
          title: `Override the API version used for API requests made by this command.`,
        },
        name: {
          type: `<b>Required</b>`,
          body: `
                  <br/><br/>
                  The name of the permission set license to assign.<br/><br/>
                  Type: array
              `,
          title: `The name of the permission set license to assign.`,
        },
        onbehalfof: {
          type: `<b><i>Optional</i></b>`,
          body: `
                  <br/><br/>
                  Comma-separated list of usernames or aliases to assign the password to.<br/><br/>
                  Type: array
              `,
          title: `Comma-separated list of usernames or aliases to assign the password to.`,
        },
      },
    },
    visualforce:{
      component_create: {
        json: {
          type: `<b><i>Optional</i></b>`,
          body: `
                <br/><br/>
                Format output as JSON.<br/><br/>
                Type: boolean
                `,
          title: `Format output as JSON.`,
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
          title: `The logging level for this command invocation.`,
        },
        componentname: {
          type: `<b>Required</b>`,
          body: `
                      <br/><br/>
                      The Visualforce component name. The name can be up to 40 characters and must start with a letter.<br/><br/>
                      Type: string
                  `,
          title: `The Visualforce component name.`,
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
          title: `The template to use to create the file.`,
        },
        outputdir: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      The directory to store the newly created files. The location can be an absolute path or relative to the current working directory. The default is the current directory.<br/><br/>
                      Type: string<br/>
                      Default value: .
                  `,
          title: `The directory to store the newly created files.`,
        },
        apiversion: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Override the API version used for API requests made by this command.
                      <br/><br/>
                      Type: string
                  `,
          title: `Override the API version used for API requests made by this command.`,
        },
        label: {
          type: `<b>Required</b>`,
          body: `
                      <br/><br/>
                      The label saved in the metadata for the Visualforce component.
                      <br/><br/>
                      Type: string
                  `,
          title: `The label saved in the metadata for the Visualforce component.`,
        },
      },
      page_create: {
        json: {
          type: `<b><i>Optional</i></b>`,
          body: `
                <br/><br/>
                Format output as JSON.<br/><br/>
                Type: boolean
                `,
          title: `Format output as JSON.`,
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
          title: `The logging level for this command invocation.`,
        },
        pagename: {
          type: `<b>Required</b>`,
          body: `
                      <br/><br/>
                      The Visualforce page name. The name can be up to 40 characters and must start with a letter.<br/><br/>
                      Type: string
                  `,
          title: `The Visualforce page name.`,
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
          title: `The template to use to create the file.`,
        },
        outputdir: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      The directory to store the newly created files. The location can be an absolute path or relative to the current working directory. The default is the current directory.<br/><br/>
                      Type: string<br/>
                      Default value: .
                  `,
          title: `The directory to store the newly created files.`,
        },
        apiversion: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Override the API version used for API requests made by this command.
                      <br/><br/>
                      Type: string
                  `,
          title: `Override the API version used for API requests made by this command.`,
        },
        label: {
          type: `<b>Required</b>`,
          body: `
                      <br/><br/>
                      The label saved in the metadata for the Visualforce component.
                      <br/><br/>
                      Type: string
                  `,
          title: `The label saved in the metadata for the Visualforce component.`,
        },
      },
    },
  },
  alias:{
    alias: {
      list: {
        json: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Format output as JSON.<br/><br/>
                      Type: boolean
                  `,
          title: `Format output as JSON.`,
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
          title: `The logging level for this command invocation.`,
        },
      },
      set: {
        json: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Format output as JSON.<br/><br/>
                      Type: boolean
                  `,
          title: `Format output as JSON.`,
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
          title: `The logging level for this command invocation.`,
        },
      },
      unset: {
        json: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Format output as JSON.<br/><br/>
                      Type: boolean
                  `,
          title: `Format output as JSON.`,
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
          title: `The logging level for this command invocation.`,
        },
      },
    },
  },
  auth:{
    auth: {
      list: {
        json: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Format output as JSON.<br/><br/>
                      Type: boolean
                  `,
          title: `Format output as JSON.`,
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
          title: `The logging level for this command invocation.`,
        },
      },
      logout: {
        json: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Format output as JSON.<br/><br/>
                      Type: boolean
                  `,
          title: `Format output as JSON.`,
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
          title: `The logging level for this command invocation.`,
        },
        targetusername: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>            
                      A username or alias for the target org. Overrides the default target org.<br/><br/>
                      Type: string
                  `,
          title: `A username or alias for the target org.`,
        },
        apiversion: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>            
                      Override the API version used for API requests made by this command.<br/><br/>
                      Type: string
                  `,
          title: `Override the API version used for API requests made by this command.`,
        },
        all: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>            
                      Includes all authenticated orgs: for example, Dev Hubs, sandboxes, DE orgs, and expired, deleted, and unknown-status scratch orgs.<br/><br/>
                      Type: boolean
                  `,
          title: `Includes all authenticated orgs: for example, Dev Hubs, sandboxes, DE orgs, and expired, deleted, and unknown-status scratch orgs.`,
        },
        noprompt: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>            
                      Do not prompt for confirmation.<br/><br/>
                      Type: boolean
                  `,
          title: `Do not prompt for confirmation.`,
        },
      },
    },
    accesstoken: {
      store: {
        json: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Format output as JSON.<br/><br/>
                      Type: boolean
                  `,
          title: `Format output as JSON.`,
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
          title: `The logging level for this command invocation.`,
        },
        instanceurl: {
          type: `<b>Required</b>`,
          body: `
                      <br/><br/>            
                      The login URL of the instance the org lives on.<br/><br/>
                      Type: url
                  `,
          title: `The login URL of the instance the org lives on.`,
        },
        setdefaultdevhubusername: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>            
                      Set the authenticated org as the default dev hub org for scratch org creation.<br/><br/>
                      Type: boolean
                  `,
          title: `Set the authenticated org as the default dev hub org for scratch org creation.`,
        },
        setdefaultusername: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>            
                      Set the authenticated org as the default username that all commands run against.<br/><br/>
                      Type: boolean
                  `,
          title: `Set the authenticated org as the default username that all commands run against.`,
        },
        setalias: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>            
                      Set an alias for the authenticated org.<br/><br/>
                      Type: string
                  `,
          title: `Set an alias for the authenticated org.`,
        },
        noprompt: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>            
                      Do not prompt for confirmation.<br/><br/>
                      Type: boolean
                  `,
          title: `Do not prompt for confirmation.`,
        },
      },
    },
    device: {
      login: {
        json: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Format output as JSON.<br/><br/>
                      Type: boolean
                  `,
          title: `Format output as JSON.`,
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
          title: `The logging level for this command invocation.`,
        },
        clientid: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>            
                      OAuth client ID (sometimes called the consumer key).<br/><br/>
                      Type: string
                  `,
          title: `OAuth client ID (sometimes called the consumer key).`,
        },
        instanceurl: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>            
                      The login URL of the instance the org lives on.<br/><br/>
                      Type: url
                  `,
          title: `The login URL of the instance the org lives on.`,
        },
        setdefaultdevhubusername: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>            
                      Set the authenticated org as the default dev hub org for scratch org creation.<br/><br/>
                      Type: boolean
                  `,
          title: `Set the authenticated org as the default dev hub org for scratch org creation.`,
        },
        setdefaultusername: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>            
                      Set the authenticated org as the default username that all commands run against.<br/><br/>
                      Type: boolean
                  `,
          title: `Set the authenticated org as the default username that all commands run against.`,
        },
        setalias: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>            
                      Set an alias for the authenticated org.<br/><br/>
                      Type: string
                  `,
          title: `Set an alias for the authenticated org.`,
        },
      },
    },
    jwt: {
      grant: {
        json: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Format output as JSON.<br/><br/>
                      Type: boolean
                  `,
          title: `Format output as JSON.`,
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
          title: `The logging level for this command invocation.`,
        },
        username: {
          type: `<b>Required</b>`,
          body: `
                      <br/><br/>            
                      Authentication username.<br/><br/>
                      Type: string
                  `,
          title: `Authentication username.`,
        },
        jwtkeyfile: {
          type: `<b>Required</b>`,
          body: `
                      <br/><br/>            
                      Path to a file containing the private key.<br/><br/>
                      Type: filepath
                  `,
          title: `Path to a file containing the private key.`,
        },
        clientid: {
          type: `<b>Required</b>`,
          body: `
                      <br/><br/>            
                      OAuth client ID (sometimes called the consumer key).<br/><br/>
                      Type: string
                  `,
          title: `OAuth client ID (sometimes called the consumer key).`,
        },
        instanceurl: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>            
                      The login URL of the instance the org lives on.<br/><br/>
                      Type: url
                  `,
          title: `The login URL of the instance the org lives on.`,
        },
        setdefaultdevhubusername: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>            
                      Set the authenticated org as the default dev hub org for scratch org creation.<br/><br/>
                      Type: boolean
                  `,
          title: `Set the authenticated org as the default dev hub org for scratch org creation.`,
        },
        setdefaultusername: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>            
                      Set the authenticated org as the default username that all commands run against.<br/><br/>
                      Type: boolean
                  `,
          title: `Set the authenticated org as the default username that all commands run against.`,
        },
        setalias: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>            
                      Set an alias for the authenticated org.<br/><br/>
                      Type: string
                  `,
          title: `Set an alias for the authenticated org.`,
        },
      },
    },
    sfdxurl: {
      store: {
        json: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Format output as JSON.<br/><br/>
                      Type: boolean
                  `,
          title: `Format output as JSON.`,
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
          title: `The logging level for this command invocation.`,
        },
        sfdxurlfile: {
          type: `<b>Required</b>`,
          body: `
                      <br/><br/>            
                      Path to a file containing the sfdx url.<br/><br/>
                      Type: filepath
                  `,
          title: `Path to a file containing the sfdx url.`,
        },
        setdefaultdevhubusername: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>            
                      Set the authenticated org as the default dev hub org for scratch org creation.<br/><br/>
                      Type: boolean
                  `,
          title: `Set the authenticated org as the default dev hub org for scratch org creation.`,
        },
        setdefaultusername: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>            
                      Set the authenticated org as the default username that all commands run against.<br/><br/>
                      Type: boolean
                  `,
          title: `Set the authenticated org as the default username that all commands run against.`,
        },
        setalias: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>            
                      Set an alias for the authenticated org.<br/><br/>
                      Type: string
                  `,
          title: `Set an alias for the authenticated org.`,
        },
      },
    },
    web: {
      login: {
        json: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Format output as JSON.<br/><br/>
                      Type: boolean
                  `,
          title: `Format output as JSON.`,
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
          title: `The logging level for this command invocation.`,
        },
        clientid: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>            
                      OAuth client ID (sometimes called the consumer key).<br/><br/>
                      Type: string
                  `,
          title: `OAuth client ID (sometimes called the consumer key).`,
        },
        instanceurl: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>            
                      The login URL of the instance the org lives on.<br/><br/>
                      Type: url
                  `,
          title: `The login URL of the instance the org lives on.`,
        },
        setdefaultdevhubusername: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>            
                      Set the authenticated org as the default dev hub org for scratch org creation.<br/><br/>
                      Type: boolean
                  `,
          title: `Set the authenticated org as the default dev hub org for scratch org creation.`,
        },
        setdefaultusername: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>            
                      Set the authenticated org as the default username that all commands run against.<br/><br/>
                      Type: boolean
                  `,
          title: `Set the authenticated org as the default username that all commands run against.`,
        },
        setalias: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>            
                      Set an alias for the authenticated org.<br/><br/>
                      Type: string
                  `,
          title: `Set an alias for the authenticated org.`,
        },
      },
    },
  },
  config:{
    config: {
      get: {
        json: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Format output as JSON.<br/><br/>
                      Type: boolean
                  `,
          title: `Format output as JSON.`,
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
          title: `The logging level for this command invocation.`,
        },
        verbose: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>            
                      Emit additional command output to stdout.
                      Type: boolean
                  `,
          title: `Emit additional command output to stdout.`,
        },
      },
      list: {
        json: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Format output as JSON.<br/><br/>
                      Type: boolean
                  `,
          title: `Format output as JSON.`,
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
          title: `The logging level for this command invocation.`,
        },
      },
      set: {
        json: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Format output as JSON.<br/><br/>
                      Type: boolean
                  `,
          title: `Format output as JSON.`,
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
          title: `The logging level for this command invocation.`,
        },
        global: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>            
                      Sets the configuration variables globally, so they can be used from any directory.<br/><br/>
                      Type: boolean
                  `,
          title: `Sets the configuration variables globally, so they can be used from any directory.`,
        },
      },
      unset: {
        json: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>
                      Format output as JSON.<br/><br/>
                      Type: boolean
                  `,
          title: `Format output as JSON.`,
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
          title: `The logging level for this command invocation.`,
        },
        global: {
          type: `<b><i>Optional</i></b>`,
          body: `
                      <br/><br/>            
                      Sets the configuration variables globally, so they can be used from any directory.<br/><br/>
                      Type: boolean
                  `,
          title: `Sets the configuration variables globally, so they can be used from any directory.`,
        },
      },
    },
  },
  advanced: {
    type: `<b><i>Optional</i></b>`,
    body: `
            <br/><br/>
            Here you can insert any extra or manual tags.<br/><br/>
            Type: string
        `,
    title: `Here you can insert any extra or manual tags.`,
  },
};

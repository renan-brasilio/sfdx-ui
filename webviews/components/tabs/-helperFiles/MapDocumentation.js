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
    template: {
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
};
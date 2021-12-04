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
};
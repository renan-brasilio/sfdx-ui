<script>
  // Helper Files
  import * as js from "../../-helperFiles/GlobalJS";
  import CSS from "../../-helperFiles/GlobalCSS.svelte";
  import { Circle2 } from "svelte-loading-spinners";
  import {} from "os";
  import WebviewListener from "../../-commonPages/WebviewListener.svelte";
  import RefreshIcon from "svelte-bootstrap-icons/lib/ArrowClockwise";
  import { mapDoc } from "../../-helperFiles/MapDocumentation";
  import * as gLists from "../../-helperFiles/Lists";

  // Store
  import {
    lTARGETUSERNAME,
    lastAPIVersion,
    mapErrors,
    mapInformation,
    mapInputVariables,
    mapShowSections,
    mapSpinner,
    objSFDX,
  } from "../../-helperFiles/GlobalStore";

  // Sections
  import JSONs from "../../-commonSections/JSONSection.svelte";
  import LOGLEVELs from "../../-commonSections/SelectSFDX.svelte";
  import TARGETDEVHUBUSERNAMEs from "../../-commonSections/SelectSFDX.svelte";
  import TARGETUSERNAMEs from "../../-commonSections/SelectSFDX.svelte";
  import APIVERSIONs from "../../-commonSections/SelectSFDX.svelte";
  import TYPEs from "../../-commonSections/SelectSFDX.svelte";
  import DEFINITIONFILEs from "../../-commonSections/FilepathSFDX.svelte";
  import NONAMESPACEs from "../../-commonSections/BooleanSFDX.svelte";
  import NOANCESTORSs from "../../-commonSections/BooleanSFDX.svelte";
  import CLIENTIDs from "../../-commonSections/StringSFDX.svelte";
  import SETDEFAULTUSERNAMEs from "../../-commonSections/BooleanSFDX.svelte";
  import SETALIASs from "../../-commonSections/StringSFDX.svelte";
  import WAITs from "../../-commonSections/MinuteSFDX.svelte";
  import DURATIONDAYSs from "../../-commonSections/IntegerSFDX.svelte";
  import ADVANCEDs from "../../-commonSections/ADVANCEDSection.svelte";

  // Component Validations
  let JSONv,
    LOGLEVELv,
    TARGETDEVHUBUSERNAMEv,
    TARGETUSERNAMEv,
    APIVERSIONv,
    TYPEv,
    DEFINITIONFILEv,
    NONAMESPACEv,
    NOANCESTORSv,
    CLIENTIDv,
    SETDEFAULTUSERNAMEv,
    SETALIASv,
    WAITv,
    DURATIONDAYSv,
    ADVANCEDv;

  // Documentation
  let fileName = "create";
  let showFileName = fileName.replaceAll("_", ":");
  let showFileNameUpper = "Create";
  let commandType = "org";
  let linkDocumentation = `https://developer.salesforce.com/docs/atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_force_${commandType}.htm#cli_reference_force_${commandType}_${fileName}`;

  // Initial loading
  if (!$mapSpinner.force) {
    $mapSpinner.force = {};
  }

  $mapSpinner.force[fileName] = true;

  setTimeout(() => {
    $mapSpinner.force[fileName] = false;
  }, 1000);

  function startSFDX() {
    $objSFDX.terminal = "";
    $objSFDX.terminal = `force:${commandType}:${showFileName}`;

    Promise.all([
      JSONv.validate(),
      LOGLEVELv.validate(),
      TARGETDEVHUBUSERNAMEv.validate(),
      TARGETUSERNAMEv.validate(),
      APIVERSIONv.validate(),
      TYPEv.validate(),
      DEFINITIONFILEv.validate(),
      NONAMESPACEv.validate(),
      NOANCESTORSv.validate(),
      CLIENTIDv.validate(),
      SETDEFAULTUSERNAMEv.validate(),
      SETALIASv.validate(),
      WAITv.validate(),
      DURATIONDAYSv.validate(),
      ADVANCEDv.validate(),
    ]).then((values) => {
      if (values) {
        if (!values.includes(false)) {
          for (let key in $mapErrors) {
            $mapErrors[key] = "";
          }

          $mapSpinner.main = true;
          $mapInformation.main = true;

          js.globalContinue();
        }
      }
    });
  }

  function reset() {
    $mapInputVariables = {};

    for (let key in $mapShowSections) {
      $mapShowSections[key] = false;
    }
  }

  // TARGETUSERNAME
  tsvscode.postMessage({
    type: "onGetAliasUsers",
  });

  // APIVERSION
  let dAPIVERSION = "";
  const lAPIVERSION = [];

  for (let i = 8; i < ($lastAPIVersion + 1); i++) {
    if (i === ($lastAPIVersion - 1)) {
      dAPIVERSION = i.toFixed(1);
    }

    lAPIVERSION.push({ value: i.toFixed(1), label: i.toFixed(1) });

    if (i === 11) {
      let j = i + 0.1;
      lAPIVERSION.push({ value: j.toFixed(1), label: j.toFixed(1) });
    }
  }

  lAPIVERSION.reverse();

  $mapInputVariables[fileName] = dAPIVERSION;
</script>

<WebviewListener {fileName} {commandType} showCommand={showFileNameUpper} />

{#if $mapSpinner.force[fileName]}
  <div class="sfdxet-spinner">
    <Circle2 size="60" colorOuter="#034efc" unit="px" />
  </div>
{:else}
  <div class="sfdxet-absolute-center">
    <h3>sfdx force:{commandType}:{showFileName}</h3>
    <br />
    <br />
    <button class="sfdxet-buttons" on:click={startSFDX}
      >{showFileNameUpper}</button
    >
    <br />
    <br />
    <h3>Options:</h3>
    <h4>
      <a target="_blank" href={linkDocumentation}>Official Documentation</a>
    </h4>
    <br />

    <!-- [--json] -->
    <svelte:component
      this={JSONs}
      bind:this={JSONv}
      pMapDoc={mapDoc["force"][commandType][fileName].json}
      pShowSectionName={false}
    />

    <!-- [--loglevel LOGLEVEL] -->
    <svelte:component
      this={LOGLEVELs}
      bind:this={LOGLEVELv}
      pSectionName="loglevel"
      pMapDoc={mapDoc["force"][commandType][fileName].loglevel}
      pSFDXParameter="--loglevel"
      pList={gLists.lLOGLEVEL}
      pDefaultValue="warn"
    />

    <!-- [-v TARGETDEVHUBUSERNAME] -->
    <svelte:component
      this={TARGETDEVHUBUSERNAMEs}
      bind:this={TARGETDEVHUBUSERNAMEv}
      pSectionName="targetdevhubusername"
      pMapDoc={mapDoc["force"][commandType][fileName].targetdevhubusername}
      pSFDXParameter="-v"
      pList={$lTARGETUSERNAME}
    />

    <!-- [-u TARGETUSERNAME] -->
    <svelte:component
      this={TARGETUSERNAMEs}
      bind:this={TARGETUSERNAMEv}
      pSectionName="targetusername"
      pMapDoc={mapDoc["force"][commandType][fileName].targetusername}
      pSFDXParameter="-u"
      pList={$lTARGETUSERNAME}
    />

    <!-- [--apiversion APIVERSION] -->
    <svelte:component
      this={APIVERSIONs}
      bind:this={APIVERSIONv}
      pSectionName="apiversion"
      pMapDoc={mapDoc["force"][commandType][fileName].apiversion}
      pSFDXParameter="--apiversion"
      pList={lAPIVERSION}
      pDefaultValue={dAPIVERSION}
    />

    <!-- [-t TYPE] -->
    <svelte:component
      this={TYPEs}
      bind:this={TYPEv}
      pSectionName="type"
      pMapDoc={mapDoc["force"][commandType][fileName].type}
      pSFDXParameter="-t"
      pList={gLists.lTYPE[commandType][fileName]}
      pDefaultValue="scratch"
    />

    <!-- [-f DEFINITIONFILE] -->
    <svelte:component
      this={DEFINITIONFILEs}
      bind:this={DEFINITIONFILEv}
      pSectionName="definitionfile"
      pMapDoc={mapDoc["force"][commandType][fileName].definitionfile}
      pSFDXParameter="-f"
    />

    <!-- [-n] -->
    <svelte:component
      this={NONAMESPACEs}
      bind:this={NONAMESPACEv}
      pSectionName="nonamespace"
      pMapDoc={mapDoc["force"][commandType][fileName].nonamespace}
      pSFDXParameter="-n"
      pShowSectionName={false}
    />

    <!-- [-c] -->
    <svelte:component
      this={NOANCESTORSs}
      bind:this={NOANCESTORSv}
      pSectionName="noancestors"
      pMapDoc={mapDoc["force"][commandType][fileName].noancestors}
      pSFDXParameter="-c"
      pShowSectionName={false}
    />

    <!-- [-i CLIENTID] -->
    <svelte:component
      this={CLIENTIDs}
      bind:this={CLIENTIDv}
      pSectionName="clientid"
      pMapDoc={mapDoc["force"][commandType][fileName].clientid}
      pSFDXParameter="-i"
      pSectionTitle="Client Id"
      pTitle={mapDoc["force"][commandType][fileName].clientid.title}
      pPlaceholder="Insert..."
    />

    <!-- [-s] -->
    <svelte:component
      this={SETDEFAULTUSERNAMEs}
      bind:this={SETDEFAULTUSERNAMEv}
      pSectionName="setdefaultusername"
      pMapDoc={mapDoc["force"][commandType][fileName].setdefaultusername}
      pSFDXParameter="-s"
      pShowSectionName={false}
    />

    <!-- [-a SETALIAS] -->
    <svelte:component
      this={SETALIASs}
      bind:this={SETALIASv}
      pSectionName="setalias"
      pMapDoc={mapDoc["force"][commandType][fileName].setalias}
      pSFDXParameter="-a"
      pSectionTitle="Set Alias"
      pTitle={mapDoc["force"][commandType][fileName].setalias.title}
      pPlaceholder="Insert..."
    />

    <!-- [-w WAIT] -->
    <svelte:component
      this={WAITs}
      bind:this={WAITv}
      pSectionName="wait"
      pMapDoc={mapDoc["force"][commandType][fileName].wait}
      pSFDXParameter="-w"
      pDefaultValue="6"
    />

    <!-- [-d DURATIONDAYS] -->
    <svelte:component
      this={DURATIONDAYSs}
      bind:this={DURATIONDAYSv}
      pSectionName="durationdays"
      pMapDoc={mapDoc["force"][commandType][fileName].durationdays}
      pSFDXParameter="-d"
      pSectionTitle="durationdays"
      pTitle={mapDoc["force"][commandType][fileName].durationdays}
      pPlaceholder="7"
      pDefaultValue="7"
    />

    <!-- [ADVANCED] -->
    <svelte:component
      this={ADVANCEDs}
      bind:this={ADVANCEDv}
      pMapDoc={mapDoc.advanced}
    />
    <br />
    <br />
    <button class="sfdxet-buttons-icon" on:click={reset} title="Reset Options"
      ><RefreshIcon /></button
    >
  </div>
{/if}

<CSS />

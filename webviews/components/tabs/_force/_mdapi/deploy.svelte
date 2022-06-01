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
  import TARGETUSERNAMEs from "../../-commonSections/SelectSFDX.svelte";
  import APIVERSIONs from "../../-commonSections/SelectSFDX.svelte";
  import CHECKONLYs from "../../-commonSections/BooleanSFDX.svelte";
  import DEPLOYDIRs from "../../-commonSections/FolderpathSFDX.svelte";
  import WAITs from "../../-commonSections/MinuteSFDX.svelte";
  import TESTLEVELs from "../../-commonSections/SelectSFDX.svelte";
  import RUNTESTSs from "../../-commonSections/StringSFDX.svelte";
  import IGNOREERRORSs from "../../-commonSections/BooleanSFDX.svelte";
  import IGNOREWARNINGSs from "../../-commonSections/BooleanSFDX.svelte";
  import VALIDATEDDEPLOYREQUESTIDs from "../../-commonSections/StringSFDX.svelte";
  import VERBOSEs from "../../-commonSections/BooleanSFDX.svelte";
  import ZIPFILEs from "../../-commonSections/FilepathSFDX.svelte";
  import SINGLEPACKAGEs from "../../-commonSections/BooleanSFDX.svelte";
  import SOAPDEPLOYs from "../../-commonSections/BooleanSFDX.svelte";
  import ADVANCEDs from "../../-commonSections/ADVANCEDSection.svelte";

  // Component Validations
  let JSONv,
    LOGLEVELv,
    TARGETUSERNAMEv,
    APIVERSIONv,
    CHECKONLYv,
    DEPLOYDIRv,
    WAITv,
    TESTLEVELv,
    RUNTESTSv,
    IGNOREERRORSv,
    IGNOREWARNINGSv,
    VALIDATEDDEPLOYREQUESTIDv,
    VERBOSEv,
    ZIPFILEv,
    SINGLEPACKAGEv,
    SOAPDEPLOYv,
    ADVANCEDv;

  // Documentation
  let fileName = "deploy";
  let showFileName = fileName.replaceAll("_", ":");
  let showFileNameUpper = "Deploy";
  let commandType = "mdapi";
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
      TARGETUSERNAMEv.validate(),
      APIVERSIONv.validate(),
      CHECKONLYv.validate(),
      DEPLOYDIRv.validate(),
      WAITv.validate(),
      TESTLEVELv.validate(),
      RUNTESTSv.validate(),
      IGNOREERRORSv.validate(),
      IGNOREWARNINGSv.validate(),
      VALIDATEDDEPLOYREQUESTIDv.validate(),
      VERBOSEv.validate(),
      ZIPFILEv.validate(),
      SINGLEPACKAGEv.validate(),
      SOAPDEPLOYv.validate(),
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

  let testValidation;

  $: if ($mapInputVariables) {
    testValidation = $mapInputVariables.testlevel === "RunSpecifiedTests";

    if (testValidation === true) {
      $mapShowSections.runtests = true;
    }
  }
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
      pMapDoc={mapDoc[commandType][fileName].json}
      pShowSectionName={false}
    />

    <!-- [--loglevel LOGLEVEL] -->
    <svelte:component
      this={LOGLEVELs}
      bind:this={LOGLEVELv}
      pSectionName="loglevel"
      pMapDoc={mapDoc[commandType][fileName].loglevel}
      pSFDXParameter="--loglevel"
      pList={gLists.lLOGLEVEL}
      pDefaultValue="warn"
    />

    <!-- [-u TARGETUSERNAME] -->
    <svelte:component
      this={TARGETUSERNAMEs}
      bind:this={TARGETUSERNAMEv}
      pSectionName="targetusername"
      pMapDoc={mapDoc[commandType][fileName].targetusername}
      pSFDXParameter="-u"
      pList={$lTARGETUSERNAME}
    />

    <!-- [--apiversion APIVERSION] -->
    <svelte:component
      this={APIVERSIONs}
      bind:this={APIVERSIONv}
      pSectionName="apiversion"
      pMapDoc={mapDoc[commandType][fileName].apiversion}
      pSFDXParameter="--apiversion"
      pList={lAPIVERSION}
      pDefaultValue={dAPIVERSION}
    />

    <!-- [-c] -->
    <svelte:component
      this={CHECKONLYs}
      bind:this={CHECKONLYv}
      pSectionName="checkonly"
      pMapDoc={mapDoc[commandType][fileName].checkonly}
      pSFDXParameter="-c"
      pShowSectionName={false}
    />

    <!-- [-d DEPLOYDIR] -->
    <svelte:component
      this={DEPLOYDIRs}
      bind:this={DEPLOYDIRv}
      pSectionName="deploydir"
      pMapDoc={mapDoc[commandType][fileName].deploydir}
      pSFDXParameter="-d"
    />

    <!-- [-w WAIT] -->
    <svelte:component
      this={WAITs}
      bind:this={WAITv}
      pSectionName="wait"
      pMapDoc={mapDoc[commandType][fileName].wait}
      pSFDXParameter="-w"
      pDefaultValue="-1"
    />

    <!-- [-l TESTLEVEL] -->
    <svelte:component
      this={TESTLEVELs}
      bind:this={TESTLEVELv}
      pSectionName="testlevel"
      pMapDoc={mapDoc[commandType][fileName].testlevel}
      pSFDXParameter="-l"
      pList={gLists.lTESTLEVEL[commandType][fileName]}
    />

    <!-- [-r RUNTESTS] -->
    {#if testValidation === true}
      <svelte:component
        this={RUNTESTSs}
        bind:this={RUNTESTSv}
        pSectionName="runtests"
        pMapDoc={mapDoc[commandType][fileName].runtests}
        pSFDXParameter="-r"
        pSectionTitle="Run Tests"
        pTitle={mapDoc[commandType][fileName].runtests.title}
        pPlaceholder="Insert..."
        pChecked={true}
        pRequired={true}
        pDisabled={true}
      />
    {/if}

    <!-- [-o] -->
    <svelte:component
      this={IGNOREERRORSs}
      bind:this={IGNOREERRORSv}
      pSectionName="ignoreerrors"
      pMapDoc={mapDoc[commandType][fileName].ignoreerrors}
      pSFDXParameter="-o"
      pShowSectionName={false}
    />

    <!-- [-g] -->
    <svelte:component
      this={IGNOREWARNINGSs}
      bind:this={IGNOREWARNINGSv}
      pSectionName="ignorewarnings"
      pMapDoc={mapDoc[commandType][fileName].ignorewarnings}
      pSFDXParameter="-g"
      pShowSectionName={false}
    />

    <!-- [-q VALIDATEDDEPLOYREQUESTID] -->
    <svelte:component
      this={VALIDATEDDEPLOYREQUESTIDs}
      bind:this={VALIDATEDDEPLOYREQUESTIDv}
      pSectionName="validateddeployrequestid"
      pMapDoc={mapDoc[commandType][fileName].validateddeployrequestid}
      pSFDXParameter="-q"
      pSectionTitle="Validated Deploy Request Id"
      pTitle={mapDoc[commandType][fileName].validateddeployrequestid.title}
      pPlaceholder="Insert..."
    />

    <!-- [--verbose] -->
    <svelte:component
      this={VERBOSEs}
      bind:this={VERBOSEv}
      pSectionName="verbose"
      pMapDoc={mapDoc[commandType][fileName].verbose}
      pSFDXParameter="--verbose"
      pShowSectionName={false}
    />

    <!-- [-f ZIPFILE] -->
    <svelte:component
      this={ZIPFILEs}
      bind:this={ZIPFILEv}
      pSectionName="zipfile"
      pMapDoc={mapDoc[commandType][fileName].zipfile}
      pSFDXParameter="-f"
      pPlaceholder="Insert..."
      pButtonText="Select Zip File"
    />

    <!-- [-s] -->
    <svelte:component
      this={SINGLEPACKAGEs}
      bind:this={SINGLEPACKAGEv}
      pSectionName="singlepackage"
      pMapDoc={mapDoc[commandType][fileName].singlepackage}
      pSFDXParameter="-s"
      pShowSectionName={false}
    />

    <!-- [--soapdeploy] -->
    <svelte:component
      this={SOAPDEPLOYs}
      bind:this={SOAPDEPLOYv}
      pSectionName="soapdeploy"
      pMapDoc={mapDoc[commandType][fileName].soapdeploy}
      pSFDXParameter="--soapdeploy"
      pShowSectionName={false}
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

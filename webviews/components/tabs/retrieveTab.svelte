<script>
    function retrieve() {
        tsvscode.postMessage({
            type: 'onInfo',
            value: 'Starting the Terminal + Script: Retrieve' 
        });

        tsvscode.postMessage({
            type: 'onTerminal',
            value: './retrieve' 
        });
    }
</script>

<style>
    .buttons-sfdxet {
        max-width: 100px;
        border-radius: 5px;
    }

    .sfdxet-absolute-center  {
        position: absolute;
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
        text-align: center;
    }
</style>

<div class="sfdxet-absolute-center ">
    <button class="buttons-sfdxet" on:click={retrieve}>Retrieve</button>
</div>
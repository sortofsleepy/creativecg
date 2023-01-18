<section class="houdini-blueprint container mx-auto">
    <iframe src="{blueprint_source}" class="blueprint"></iframe>
</section>


<script>

    /**
     * This is a simple component meant to iframe in a Houdini setup from https://hdbp.io
     * Should pass in the source url.
     */
    export let blueprint_source
</script>

<style lang="scss">
    .blueprint {
      width:100%;
      min-height: 50vh;
    }
</style>
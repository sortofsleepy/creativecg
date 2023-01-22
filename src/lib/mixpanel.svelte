<script>
    import mixpanel from "mixpanel-browser"
    import {beforeUpdate, onMount} from "svelte";

    beforeUpdate(() => {
        mixpanel.init("102d78168a79b50305bd37fe28090277")
    })

    /**
     * Basic setup - just wanna know who vists what page.
     */
    onMount(() => {
        const p = window.location.pathname === "/" ? "home" : window.location.pathname
        mixpanel.track("Entered Page", {
            path: p
        })
    })
</script>
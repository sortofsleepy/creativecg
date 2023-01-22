<script>
    import mixpanel from "mixpanel-browser"
    import {beforeUpdate, onMount} from "svelte";
    import env from "../env.ts";

    beforeUpdate(() => {
        mixpanel.init(env.mixpanel_id)
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
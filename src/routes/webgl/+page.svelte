<script>
    import HoudiniBlueprint from "$lib/houdini_blueprint.svelte"
    import MixPanel from "$lib/mixpanel.svelte"
    import Image from "$lib/image.svelte"
    import Link from "$lib/link.svelte"
    import Contents from "$lib/content.svelte"
    import Header from "$lib/header.svelte"
</script>

<MixPanel/>
<Header/>
<section class="mx-auto py-10">

    <h1 class="lg:text-8xl sm:text-5xl">WebGL</h1>
    <Contents/>
</section>

<section id="schmidt" class="pt-20 content_section" data-link-title="Karsten Schmidt">
    <h2>Karsten Schmidt</h2>
    <p>
        Karsten Schmidt is well known in the creative coding arena and has produced a number of notable works over the years. These days he focuses on creating
        thi.ng, his main set of tools for making work that seems to largely focus on the web with some smaller focuses on a few other areas.
    </p>
    <Link url="https://thi.ng/" text="thi.ng website"/>
</section>

<section id="spite" class="pt-20 content_section" data-link-title="@Spite">
    <h2>@spite</h2>
    <p>
        I've learned a lot by looking at the work of Jaume Sanchez over the years. He usually is constantly experimenting, doing interesting things and usually open sources a lot of
        the work he does.
    </p>

    <Link url="https://www.clicktorelease.com/" />
</section>


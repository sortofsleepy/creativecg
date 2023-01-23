<script>
    import HoudiniBlueprint from "$lib/houdini_blueprint.svelte"
    import MixPanel from "$lib/mixpanel.svelte"
    import Image from "$lib/image.svelte"
    import Contents from "$lib/content.svelte"
</script>

<MixPanel/>


<section class="mx-auto py-10">
    <h1 class="lg:text-8xl sm:text-5xl">Houdini</h1>
    <Contents/>

</section>


<section id="vex-ref" class="pt-20 content_section" data-link-title="Common Vex attributes">
    <h2>Common Vex attribute and type reference</h2>
    <p class="py-4">
        John Kunz has taken the time to to construct a handy reference guide to common Vex related types and attributes you might run into.
        It contains a number of helpful things like available global variables as well as things like Vellum attributes </p>
    <a href="https://www.johnkunz.com/vex" target="_blank" rel="noreferrer">
        Link</a>

</section>

<section id="cgwiki" class="pt-20 content_section" data-link-title="CGWiki">
    <h2>CGWiki</h2>
    <p class="py-4">A site by @tokeru that contains a bunch of little tutorials on different techniques in Houdini.</p>
    <Image url="/images/cgwiki.png" width="70%"/>
    <a href="https://www.tokeru.com/cgwiki/?title=Houdini" target="_blank" rel="noreferrer">
        Link
    </a>
</section>

<section id="junichiro" class="pt-20 content_section" data-link-title="Junichiro Horikawa">
    <h2>Junichiro Horikawa</h2>
    <p class="py-4"> Junichiro Horikawa is a Japanese designer that produces mostly English tutorials on Youtube. Primarily focused on Houdini, he does also give tutorials on other
        topics like Blender and Grasshopepr.</p>
    <br/>
    <a href="https://www.youtube.com/@JunichiroHorikawa" target="_blank" rel="noreferrer">
        Youtube Channel
    </a>
</section>




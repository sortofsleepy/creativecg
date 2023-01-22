<script>
    import HoudiniBlueprint from "$lib/houdini_blueprint.svelte"
    import MixPanel from "$lib/mixpanel.svelte"
</script>

<MixPanel/>
<section class="container mx-auto px-72">
    <h1 class="lg:text-8xl sm:text-5xl">Houdini</h1>


    <div class="py-10">
        <h3>Contents</h3>
        <ul class="page-list">
            <li>
                <a href="#vex-ref">Vex reference</a>
            </li>

            <li>
                <a href="#cgwiki">CGWiki</a>
            </li>
        </ul>
    </div>

</section>

<section id="vex-ref" class="container mx-auto px-72 py-20">
    <h2>Common Vex attribute and type reference</h2>
    <a href="https://www.johnkunz.com/vex" target="_blank" rel="noreferrer">
        John Kunz has taken the time to to construct a handy reference guide to common Vex related types and attributes you might run into.</a>
    <p>It contains a number of helpful things like available global variables as well as things like Vellum attributes </p>
</section>


<section id="cgwiki" class="container mx-auto px-72 py-20">
    <h2>CGWiki</h2>
    <a href="https://www.tokeru.com/cgwiki/?title=Houdini" target="_blank" rel="noreferrer">
        A giant resource of Houdini related techniques often with project files as well.
    </a>
</section>


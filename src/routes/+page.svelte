<script>
    import external_sources from "../external_sources";
</script>

<section class="container mx-auto px-72">
    <h1 class="lg:text-8xl sm:text-5xl">CreativeCG</h1>

    <p class="py-4 intro">
        Hello! If you've landed here then welcome. This is just a personal site of notes and snippets of things I've come across over the years on a variety of topics
        mostly related to creative coding, all arranged into one place for easy reference. While mostly for personal use, hopefully it can prove useful to you as well.

        Styled in the format of @tokeru's CGWiki, there are pages of topics + examples where possible.
    </p>

    <h1 class="mt-8">
        Some of the topics will include
    </h1>
    <ul>
        <li>WebGL</li>
        <li>WebGPU</li>
        <li>openFrameworks</li>
        <li>Vulkan</li>
        <li><a href="/houdini">Houdini</a></li>
        <li>UnrealEngine</li>
    </ul>
</section>

<section class="container mx-auto px-72">

    <h1 class="mt-8">
        Other Resources
    </h1>
    <ul>
        {#each external_sources as ext_source}
            <li><a rel="noreferrer" href="{ext_source.url}" target="_blank">{ext_source.name}</a> </li>
        {/each}
    </ul>
</section>

<style lang="scss">

</style>
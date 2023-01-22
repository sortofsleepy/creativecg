<script>
    import external_sources from "../external_sources";
    import MixPanel from "$lib/mixpanel.svelte"
</script>

<MixPanel/>
<section class="container mx-auto px-72">
    <h1 class="lg:text-8xl sm:text-5xl">CreativeCG</h1>

    <p class="py-4 intro">
        Hello! If you've landed here then welcome. This is just a personal site of small notes and snippets of things I've come across over the years on a variety of topics
        mostly related to creative coding and programming, all arranged into one place for easy reference. Think of it as a very messy, possibly rarely updated blog.

        While mostly for personal use, hopefully it can prove useful to you as well.
    </p>

    <h1 class="mt-8">
        Some of the topics will include
    </h1>
    <ul>
        <li><a href="/webgl">WebGL</a></li>
        <li><a href="/webgpu">WebGPU</a> </li>
        <li><a href="/openframeworks">openFrameworks</a></li>
        <li><a href="/vulkan">Vulkan</a></li>
        <li><a href="/houdini">Houdini</a></li>
        <li><a href="/unreal">UnrealEngine</a></li>
    </ul>
</section>

<section class="container mx-auto px-72">

    <h1 class="mt-8">
        Some other great reading around the web
    </h1>
    <ul>
        {#each external_sources as ext_source}
            <li><a rel="noreferrer" href="{ext_source.url}" target="_blank">{ext_source.name}</a> </li>
        {/each}
    </ul>
</section>

<style lang="scss">

</style>
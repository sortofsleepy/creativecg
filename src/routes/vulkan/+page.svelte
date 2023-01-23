<script>
    import HoudiniBlueprint from "$lib/houdini_blueprint.svelte"
    import MixPanel from "$lib/mixpanel.svelte"
    import Image from "$lib/image.svelte"
    import Contents from "$lib/content.svelte"
</script>

<MixPanel/>

<section class="mx-auto py-10">
    <h1 class="lg:text-8xl sm:text-5xl">Vulkan</h1>

    <Contents/>

</section>


<section id="willems" class="pt-20 content_section" data-link-title="Sascha Willems">
    <h2>Sascha Willems Vulkan Samples</h2>
    <a href="https://github.com/SaschaWillems/Vulkan" target="_blank" rel="noreferrer">
        Sascha Willems maintains a list of various Vulkan examples using C++.
    </a>
</section>

<section id="ash-vulkan" class="pt-20 content_section" data-link-title="Ash, A Rust based framework">
    <h2>Ash - A Rust Based Vulkan Framework</h2>
    <a href="https://github.com/SaschaWillems/Vulkan" target="_blank" rel="noreferrer">
        Ash is a Rust based "framework"
    </a>
    <p>It's extremely low level and more of a light wrapper around the Vulkan SDK.</p>
    <div class="version">
        <a href="https://github.com/ash-rs/ash" rel="noreferrer">
            <img src="https://img.shields.io/crates/v/ash.svg" alt="version badge"/>
        </a>
    </div>
</section>

<section id="vulkan-guide" class="pt-20 content_section" data-link-title="Vulkan Guide">
    <h2>Vulkan Guide</h2>
    <a href="https://vkguide.dev/" target="_blank" rel="noreferrer">
        An alternate Vulkan beginner tutorial.
    </a>
</section>




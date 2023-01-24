<script>
    import Image from "$lib/image.svelte"
    import Link from "$lib/link.svelte"
    import Contents from "$lib/content.svelte"
    import Header from "$lib/header.svelte"
</script>

<Header/>

<section class="mx-auto py-10">
    <h1 class="lg:text-8xl sm:text-5xl">WebGPU</h1>
    <Contents/>
</section>

<section id="wgpu" class="pt-20 content_section" data-link-title="wgpu">
    <h2>wgpu</h2>
    <p>
        wgpu is a Rust based framework for working with WebGPU. One of the nicest features about this is that it can compile
        to WASM as well for browser functionality.
    </p>
    <Link url="https://github.com/gfx-rs/wgpu" text="wgpu github page"/>
</section>



<section id="hexops-mach" class="pt-20 content_section" data-link-title="Hexops - Mach">
    <h2>Hexops - Mach </h2>
    <p class="pb-4">
        Mach is a Zig based framework for working with WebGPU
    </p>
    <Image width="50%" url="https://user-images.githubusercontent.com/3173176/173177664-2ac9e90b-9429-4b09-aaf9-b80b53fee49f.gif"/>
    <Link url="https://github.com/hexops/mach"/>
</section>
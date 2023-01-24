

<script>
    import Link from "$lib/link.svelte"
    import Contents from "$lib/content.svelte"
    import Header from "$lib/header.svelte"
</script>

<Header/>
<section class="mx-auto py-10">

    <h1 class="lg:text-8xl sm:text-5xl">Misc</h1>
    <Contents/>
</section>

<section id="dustin" class="pt-20 content_section" data-link-title="Quick RenderDoc Tutotial">
    <h2>Quick RenderDoc Tutorial </h2>
    <p>
        Dustin H Land wrote up a brief tutorial on how to step through RenderDoc when it comes to Vulkan.
    </p>
    <Link url="https://www.fasterthan.life/blog/2017/7/11/i-am-graphics-and-so-can-you-part-2-intuition"/>
</section>

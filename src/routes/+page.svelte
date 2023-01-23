<script>
    import MixPanel from "$lib/mixpanel.svelte"
    import {page_links} from "../links";
</script>

<MixPanel/>

<section class="mx-auto py-10">
    <h1 class="lg:text-8xl sm:text-5xl">CreativeCG</h1>

    <p class="py-4 intro">
        Hello! If you've landed here then welcome. This is just a personal site of small notes and snippets of things I've come across over the years on a variety of topics
        mostly related to creative coding and programming, all arranged into one place for easy reference. Think of it as a very messy, possibly rarely updated blog.

        While mostly for personal use, hopefully it can prove useful to you as well.
    </p>

    <h2 class="mt-8">
        Some of the topics will include
    </h2>
    <ul>

        {#each page_links as link}
            <li>
                <a href="{link.href}">{link.title}</a>
            </li>
        {/each}

    </ul>

    <section class="pt-10">
        <h2 class="mt-8">
            Tech stack
        </h2>

        <p>
            This site is purposely kept fairly simple and straightforward and styled to be similar to CGWiki. Links will be at the top
            and will link to each section on the page.

            The tech stack is also relatively straightforward and
            uses <a href="https://kit.svelte.dev/" target="_blank" rel="noreferrer">SvelteKit</a>,
            <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">TailwindCSS</a> and server-side rendered using
            <a href="https://www.netlify.com/" target="_blank" rel="noreferrer">Netlify</a>
        </p>

    </section>

    <section class="pt-10">
        <h2 class="mt-8">
            About me
        </h2>

        <p>
           If you'd like to learn a little about me, you can find out more <a href="http://about.xoio.co" target="_blank" rel="noreferrer">here</a>
        </p>

    </section>
</section>





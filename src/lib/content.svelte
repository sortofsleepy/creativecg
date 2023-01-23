<script>

    /**
     * This component builds the content links to each section of a particular page.
     * Elements on the page should be tagged with the class "content_section" to get picked up; you can optionally pass
     * in your own class name.
     */

    import {onMount} from "svelte";

    export let el_name = "content_section"
    let elements = []
    onMount(() => {

        elements = Array.prototype.slice.call(document.querySelectorAll(`.${el_name}`))

        elements = elements.map(itm => {
            let title = itm.dataset.linkTitle

            return {
                title,
                path:`${window.location.pathname}/#${itm.id}`
            }
        })
    })

</script>


<div class="py-10">
    <h2>Contents</h2>
    <ul>
        {#each elements as el}
            <li>
                <a href="{el.path}">{el.title}</a>
            </li>
        {/each}

    </ul>
</div>
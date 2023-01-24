<script>

    import {onMount} from "svelte";

    export let url = "/images/placeholder.jpg"
    export let alt_text = "alt_text_not_filled"

    export let className = "image-component"
    export let width = "100%"

    let observer
    let ref

    onMount(() => {

        observer = new IntersectionObserver(entries => {
            entries.forEach(itm => {

                if(itm.isIntersecting){
                    ref.src = url
                    observer.unobserve(ref)
                }
            })
        })

        observer.observe(ref)
    })

</script>


<img class="py-5 {className}" width="{width}" src="{url}" alt="{alt_text}" bind:this={ref}/>
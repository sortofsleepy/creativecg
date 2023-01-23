<script>
    import {page_links} from "../links";
    import {beforeUpdate, onMount} from "svelte";

    let links = []
    let submenu

    beforeUpdate(()=>{
        page_links.forEach(itm => {
            if(itm.href !== window.location.pathname){
                links.push(itm)
            }
        })
    })
    onMount(()=>{

    })
</script>

<header>
    <a href="/">Home</a>
    <nav>
        <p>Topics</p>
        <div class="subtopics" bind:this={submenu}>
            {#each links as link}
                <ul>
                    <li>
                        <a href="{link.href}">{link.title}</a>
                    </li>
                </ul>
            {/each}
        </div>
    </nav>
</header>

<style lang="scss">
    header {
      display: flex;
    }

    .subtopics {
      position: absolute;
      z-index: 2;
      background:rgba(0,0,0,0.8);
      opacity:0;
      overflow: hidden;
      height:0;
      transition: all 0.5s ease;
    }

    nav{
      margin-left:20px;
    }

    nav:hover {
      cursor: pointer;
      .subtopics {
        opacity: 1;
        padding:20px;
        height:auto;
        transition: all 0.5s ease;
      }
    }

</style>
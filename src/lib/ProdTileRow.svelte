<script>
    // export const ssr = false; // Disable SSR for this component

// const colorArray = [
//     {Orange: "#234234"}, 
//     {Blue: "#0000FF"},
//     {Black: "#000000"}];

import { goto } from '$app/navigation';
import ProdTile from './ProdTile.svelte';

export let products = [];


</script>
<div class="display3"> 
{#each products as product}

<ProdTile {product}/>
<!-- </a> -->

{/each}
</div>
<style>
    .display3 {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 4em;
        width: calc(100% - .5rem);
        margin: 5em 0 5em .5em;
        justify-content: space-between;
    }
       
    @media screen and (max-width: 1080px) { 

        .display3 { 
          justify-content: space-between;
          font-size: 16px;
    }
    }

    @media screen and (max-width: 850px) { 

        .display3 { 
         justify-content: center;
    }
    }


</style>
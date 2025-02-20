<script>
	import ProdTile from "./ProdTile.svelte";
    export let products = [];
</script>

<div class="shopContainer">
    {#if [products.length > 0]}
        {#each products as product}
            <ProdTile {product}/>
        {/each}
    {:else}
    <p> No products found</p>
    {/if}
</div>

<style>
.shopContainer {
    display: flex;
    gap: 6.5%;
    row-gap: 4em;
    flex-direction: row;
    flex-wrap: wrap;
    width: calc(100% - .5rem);
    /* justify-content: space-between; */
    align-items: center;
    /* margin-left: .5em; */
    margin: 5em 0 5em .5em;
}
@media screen and (max-width: 1080px) { 
    .shopContainer { 
          justify-content: space-between;
          font-size: 16px;
          /* gap: 4em; */
    }
    }

    @media screen and (max-width: 850px) { 
    .shopContainer { 
         justify-content: center;
    }
    }

</style>
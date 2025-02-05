<script>
	import ProdTile from "./ProdTile.svelte";

</script>

<div class="shopContainer">
<ProdTile></ProdTile>
<ProdTile></ProdTile>
<ProdTile></ProdTile>
<ProdTile></ProdTile>
<ProdTile></ProdTile>
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
    margin-left: .5em;
}

</style>
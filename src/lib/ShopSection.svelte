<script>
	import ProdTile from "./ProdTile.svelte";

</script>

<div class="shopContainer">
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
    /* margin-left: .5em; */
    margin: 5em 0 5em .5em;
}

</style>
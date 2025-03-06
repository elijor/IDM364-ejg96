<script lang="js">
    // import Shopdivider from "$lib/Shopdivider.svelte";
    // import ProdTileRow from "$lib/ProdTileRow.svelte";
    // import ShopButton from "$lib/ShopButton.svelte";
	// import { cart } from "$lib/data/cart";
    import CartPage from "$lib/CartPage.svelte";
    export let data;
</script>
<CartPage products={data.products}/>

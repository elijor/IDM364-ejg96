<script lang="js">
    import Shopdivider from "$lib/Shopdivider.svelte";
    import ProdTileRow from "$lib/ProdTileRow.svelte";
    import ShopButton from "$lib/ShopButton.svelte";
	// import { cart } from "$lib/data/cart";
    import CartPage from "$lib/CartPage.svelte";
</script>
<CartPage/>
<Shopdivider textCta="See More"></Shopdivider>

<!-- {#if $cart.length === 0}
  <p>Cart is empty</p>
{:else}
  {#each $cart as item}
    <p>{item.title} - Quantity: {item.quantity}</p>
  {/each}
{/if} -->
<!-- {#if data.randomProducts && data.randomProducts.length > 0} -->
    <!-- <ProdTileRow products={["happytears", "soupcans", "doubleluck"]} /> -->
<!-- {/if} -->

<!-- <ProdTileRow products={randomProducts}/> -->
<ShopButton TextCTA="Shop All"></ShopButton>
<script lang="js">
    import Hero from '$lib/Hero.svelte';
    import Shopdivider from '$lib/Shopdivider.svelte';
	import ShopSection from '$lib/ShopSection.svelte';
    import { cart } from '$lib/data/cart';

    const { data } = $props();
    const { products } = data;
    $inspect(data);

</script>
<Hero></Hero>
<Shopdivider textCta="Shop Boards"></Shopdivider>
<ShopSection products={data.products}></ShopSection>
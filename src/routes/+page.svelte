<script lang="js">
	// import { products } from '$lib/data/store.js';
    import Hero from '$lib/Hero.svelte';
    import Shopdivider from '$lib/Shopdivider.svelte';
	import ShopSection from '$lib/ShopSection.svelte';
    
    const { data } = $props();
    const { products } = data;
    $inspect(data);


</script>




<Hero></Hero>

<Shopdivider textCta="Shop Boards"></Shopdivider>
<ShopSection products={data.products}></ShopSection>
<!-- <p>Content <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
<p> testing</p> -->


<!-- <div>{@html html_string}</div> -->
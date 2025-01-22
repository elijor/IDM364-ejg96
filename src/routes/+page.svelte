<script lang="js">
  
    let html_string = '<h2> h2 html rip</h2>';
    import Hero from '$lib/Hero.svelte';
	import Shopdivider from '$lib/ShopDivider.svelte';
    import ShopDivider from '$lib/Shopdivider.svelte';
</script>
<Hero></Hero>
<Shopdivider></Shopdivider>

<p>Content <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
<p> testing</p>
<div>{@html html_string}</div>
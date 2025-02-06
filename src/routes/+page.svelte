<script lang="js">
  
    let html_string = '<h2> h2 html rip</h2>';
    import Hero from '$lib/Hero.svelte';
    import Shopdivider from '$lib/Shopdivider.svelte';
	import ShopSection from '$lib/ShopSection.svelte';

    // import Test1 from '$lib/test.svelte';
    // import Test2 from '$lib/test2.svelte';

</script>
<Hero></Hero>

<Shopdivider></Shopdivider>
<ShopSection></ShopSection>
<!-- <p>Content <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
<p> testing</p> -->


<div>{@html html_string}</div>
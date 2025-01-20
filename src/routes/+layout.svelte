<script lang="js">
    let { children } = $props();
    import Header from '$lib/Header.svelte';
    import Footer from '$lib/Footer.svelte';
</script>
<Header></Header>
<main>
{@render children()};
</main>
<Footer></Footer>
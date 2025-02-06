<script>
    import { products } from '$lib/data/store';
    import { page } from '$app/stores'; // Import the page store to access route parameters

$: slug = $page.params.slug;
$: product = products.find((p) => p.id === (slug));
</script>

{#if product}
<h1>{product.title}</h1>
<p>Price: ${product.price}</p>
{:else}
<p>Product not found.</p>
{/if}


<!-- <p> check it  </p> -->


<style>
    p {
        color: white;
    }
</style>
<!-- <h1> 
    {title}
</h1> -->

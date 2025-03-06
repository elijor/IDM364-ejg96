<script lang="js">
	import { page } from '$app/stores';
	let errorimg = "/imgs/errorimg1.png";
	import ShopButton from '$lib/ShopButton.svelte';
</script>

<div class="errorcon">
    <div>
        <h1>
            {$page.status} Error
        </h1>
        <p>
            {$page.error.message}
        </p>
    </div> 
    <img 
        src="{errorimg}"
        alt="a broken skateboard and question mark"
    /> 

    <p>
        Seems like you're experiencing an error, but <br> no worries you can go back to our store here!
    </p>
    <ShopButton TextCTA="Back to Shop"></ShopButton>
</div>
<style>
    p, h1 {
        font-family: Verdana, Geneva, Tahoma, sans-serif ;
        color: white;
        text-align: center;
    }
    .errorcon {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1em;
        margin: 3em auto 0;
    }
    img {
        max-width: 70%;
    }
</style>

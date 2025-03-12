<script>
    import { onMount } from 'svelte';
    import ShopButton from '$lib/ShopButton.svelte';
    import ProdTileRow from '$lib/ProdTileRow.svelte';
    import Shopdivider from "$lib/Shopdivider.svelte";
    let orderConfirmed = "/imgs/order-confirmed.png";
    

    const orderNumber = Math.floor(100000 + Math.random() * 900000);

    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    
    // Function to get random products
    function getRandomProducts(productsArray, count) {
        const shuffled = [...productsArray];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled.slice(0, count);
    }

    
</script>

<div class="order-confirmed-page">
    <div class="confirmationContainer">
        <h1>Order Confirmed</h1>
        <div class="order-details">
            <p> Order Number <b>#{orderNumber}</b></p>
            <p>Date: <b>{formattedDate}</b></p>
        </div>
        
        <img src={orderConfirmed} alt="man with a skateboard smiling with his tongue sticking out"/>
        <p>Thank you for your purchase! Your order has been received and is being processed.You will receive an email confirmation shortly with order details and tracking information once your items ship.</p>
        
    </div>
</div>
    <ShopButton TextCTA="Back to Home"></ShopButton>

<style>
h1, p {
        color: white;
    }
    h1 {
        font-family: "notoSansItalic";
        text-transform: uppercase;
        font-size: 3em;
        text-align: center;
        margin-bottom: 0;
    }
    p {
        text-align: center;
    }

    .confirmationContainer {
        display: flex;
        max-width: 80%;
        flex-direction: column;
        gap: 2rem;
        margin: 0 auto;
    }

    .confirmationContainer img {
        width: 80%;
        max-width: 600px;
        text-align: center;
        display: block;
        margin: 0 auto;
    }

    @media screen and (max-width: 600px) { 
        .confirmationContainer img {
        width: 100%;
        max-width: 600px;
    }
    .confirmationContainer {
        max-width: calc(100% - 2rem);
    }
    }
</style>
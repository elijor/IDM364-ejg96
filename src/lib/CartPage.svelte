<script>
    	import { cart } from "$lib/data/cart";
      import ShopButton from "./ShopButton.svelte";
      import ProdTileRow from '$lib/ProdTileRow.svelte';
      import Shopdivider from "./Shopdivider.svelte";
      import { onMount } from 'svelte';
      import { error } from '@sveltejs/kit';
      import { goto } from '$app/navigation'; // Import goto for navigation

    // Function to update quantity in the cart
    function updateQuantity(product, newQuantity) {
      // Ensure quantity is within bounds (1-9)
      newQuantity = Math.max(1, Math.min(9, newQuantity));
      
      // Update the cart store
      cart.updateQuantity(product.id, newQuantity);
    }
    
    // Function to increase quantity
    function increaseQuantity(product) {
      if (product.quantity < 9) {
        updateQuantity(product, product.quantity + 1);
      }
    }
    
    // Function to decrease quantity
    function decreaseQuantity(product) {
      if (product.quantity > 1) {
        updateQuantity(product, product.quantity - 1);
      }
    }
    
    // Function to remove item from cart
    function removeFromCart(productId) {
      cart.removeItem(productId);
    }

    function handleCheckout() {
      // Clear the cart (this assumes your cart store has a clear() method)
      cart.clearCart();
      
      // Navigate to the order confirmed page
      goto('/order-confirmed');
    }
    
    // Calculate total price
    $: totalPrice = $cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    let deleteicon = "/deleteicon.svg";
    let arrowicon = "/arrow.svg";
    let emptycart = "/imgs/emptycart.png";

    export let products = [];
    let randomProducts = [];

    $: allProducts = products;

    async function fetchProducts() {
  // If products are already passed as props, just update randomProducts
  if (allProducts.length > 0) {
    updateRandomProducts();
  }
  // You could add fallback fetching logic here if needed
}


// Function to update random products based on cart contents
function updateRandomProducts() {
        if ($cart.length === 0) {
            // Scenario 1: Cart is empty, show any 3 random products
            randomProducts = getRandomProducts(allProducts, 3);
        } else {
            // Scenario 2: Filter out products that are in the cart
            const cartProductIds = $cart.map(item => item.id);
            const availableProducts = allProducts.filter(product => !cartProductIds.includes(product.id));
            randomProducts = getRandomProducts(availableProducts, 3);
        }
    }
    
    // Helper function to get n random products from an array
    function getRandomProducts(productsArray, count) {
        // Create a copy to avoid modifying the original array
        const shuffled = [...productsArray];
        
        // Fisher-Yates shuffle algorithm
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        
        // Return the first 'count' products
        return shuffled.slice(0, count);
    }
    
    // Reactive statement to update random products when cart changes
    $: {
        if (allProducts.length > 0) {
            updateRandomProducts();
        }
    }
    
    // Fetch products on component mount
    // onMount(fetchProducts);

    </script>

    
    {#if $cart.length === 0}
    <div class="cart-page">
      <h1>Your Cart</h1>
    <div class="emptyCartCon">
      <p>Your cart is currently empty</p>
      <img src="{emptycart}" alt=" cart with black transparent skateboard in it" />
       </div>
       </div>
      <Shopdivider textCta="Shop Boards"></Shopdivider>
      {#if randomProducts.length > 0}
        <ProdTileRow products={randomProducts} />
      {/if}
      <ShopButton TextCTA="Shop All"></ShopButton>
      
    {:else}
    <div class="cart-page">
      <h1>Your Cart</h1>
      <div class="cartCon">
      <div class="cart-items">
        {#each $cart as item}
          <div class="cart-item">
            <img src="/imgs/products/{item.img}" alt="{item.title} by {item.artist} Skateboard">
            <div class="item-details">
              <div class="namedetails">
                <h3>{item.title}</h3>
                <div>
                  <p>{item.artist} {item.year}</p>
                  <p> &nbsp; &#9679; &nbsp; </p>
                  <p>{item.size}</p>
                </div>
              </div>
              
              <div class="item-actions">
                <div class="buttonHolder">
                  <div class="quantity">
                    <div class="add">
                      <button 
                      on:click={() => decreaseQuantity(item)} 
                      disabled={item.quantity <= 1} 
                      class="quantity-btn"
                    >
                    <span> - </span>
                    <div></div>
                  </button>
                </div>  
                  <button>
                    <span class="quantity-display">{item.quantity}</span>
                    <div></div>
                  </button>
                <div class="add">
                    <button 
                    on:click={() => increaseQuantity(item)} 
                    disabled={item.quantity >= 9} 
                    class="quantity-btn">
                  <span>+</span>
                    <div></div>
                  </button>
                </div>
                  </div>
                  
                </div>
              </div>
            </div>
            
            <div class="leftside">
              <!-- <p class="price">${item.price}</p> -->
              <div class="item-total">
                ${(item.price * item.quantity).toFixed(2)}
              </div>
              <div class="add">
              <button 
              on:click={() => removeFromCart(item.id)} 
              class="remove-btn">
              <span>
                <img src={deleteicon} alt="delete from cart"/>
                Remove
              </span>
              
              <div></div>
              </button>
            </div>
              
            </div>
          </div>
        {/each}
      </div>
      <div class="cart-view">
        <div class="cart-summary">
          <h2>
            Order Summary
          </h2>
          <div class="subtotal">
            <h3>SubTotal:</h3>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <div class="tax">
            <h3>Tax:</h3>
            <span>${(totalPrice*(0.08)).toFixed(2)}</span>
          </div>
          <div class="total">
            <h3>Total:</h3>
            <span>${(totalPrice*(1.08)).toFixed(2)}</span>
          </div>

          <div class="add">
            <button class="checkout-btn" on:click={handleCheckout}>
              <span>
                Checkout
                <img src={arrowicon} alt="proceed to checkout"/>
              </span>
              <div></div>
              </button>
          </div>
        
        </div>
        </div>
      </div>
    </div>
    <Shopdivider textCta="More Boards"></Shopdivider>
      {#if randomProducts.length > 0}
        <ProdTileRow products={randomProducts} />
      {/if}
      <ShopButton TextCTA="Shop All"></ShopButton>
    {/if}

  

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
    h3 {
      font-family: "notoSansItalic";
        text-transform: uppercase;
        font-size: 2.5em;
        margin: 0;
    }

    .cartCon {
      display: flex;
      flex-direction: row;
      width: 100%;
      justify-content: space-between;

    }

    .cart-items {
      width: 70%;
      display: flex;
      flex-direction: column;
      gap: 2em;
    
    }

    .cart-items p,  .cart-items h3, .cart-items .item-total {
      color: white;
      margin: 0;
    }

    .cart-item {
      /* background-color: blue; */
      /* outline: .5em blue solid; */
      /* webkit-box-shadow: inset 0px 0px 0px .5em blue; */
      box-shadow: inset 0px 0px 0px .5em var(--mainBlue);
      padding: 1.5em 1.5em 1.5em 10em;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      /* width: calc(100% - 11em); */
      position: relative;
      margin: 4em 0;
      height: 275px;
      /* max-height: 350px; */
    }
    .cart-item > img {
      /* max-width: 12%; */
      height: 160%;
      max-height: 400px;
      position: absolute;
      top: -15%;
      left: 1.5em;
    }
    .item-details {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      /* gap: 4em; */

    }
    .item-details .namedetails {
      display: flex;
      flex-direction: column;
      gap: .5em
    }
    .item-details .namedetails > div {
      display: flex;
      flex-direction: row;
    }
    .item-details .namedetails p:first-of-type {
      text-transform: uppercase;
    }
    .item-details .namedetails p:nth-last-of-type(1) {
      color: var(--mainPink);
    }
    .cart-page {
      position: relative;
    }

    /* CART SUMMARY */
    .cart-view {
      width: calc(30% - 2em);
       margin-top: 4em;
       position: relative;
    }
    .cart-view h2 {
      margin: 1rem auto;
      font-family: "notoSansItalic";
      text-transform: uppercase;
      font-size: 2em;

    }

    .cart-view h3 {
      font-size: 1.15rem;
      font-weight: 300;
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      text-transform: capitalize;
      color: white;

    }

    .cart-summary {
      width: 100%;
      /* outline: 2px solid white; */
      -webkit-box-shadow: inset 0px 0px 0px 4px white ;
      box-shadow: inset 0px 0px 0px 4px white;
      /* background-color: pink; */
      position: sticky;
      top: calc(117px + 2em);
      height: max-content;
      display: flex;
      flex-direction: column;
    }

    .cart-summary > div:not(.add), .cart-summary > h2{
      display: flex;
      flex-direction: row;
      width: calc(100% - 2rem);
      align-items: baseline;
      justify-content: space-between;
      margin: .5em auto;
      color: white;
    }

    .cart-summary > h2 {
      text-align: center;
      justify-content: center;
    }

    .cart-summary > .add {
      width: calc(100% - 2em);
      margin: 1rem auto 1.5rem;
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 1rem;
      justify-content: center;
    }

    .cart-summary > div > span {
      font-family: "notoSansItalic";
      font-weight: 600;
      font-size: 1.25rem;
      color: #F5F5F5DD;
    }
    .cart-summary .subtotal h3, .cart-summary .tax h3 {
      font-size: 1rem;
    }
    .cart-summary .total span {
      font-size: 1.5rem;
      color: white;
      font-weight: bold;
    }
    .cart-summary .total h3 {
      font-size: 1.25rem;
      font-weight: bold;
    }

    /* QUANTITY BUTTONS */

    .buttonHolder {
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: space-between;
        align-items: end;
        height: fit-content;
    
    }

    button {
      /* width: calc(100% + .5em); */
      height: fit-content;
      /* margin: 0 .5em .5em 0; */
      padding: 0 .5em .5em 0;
      border: none;
      background-color: transparent;
      position: relative;
      transition: all .2s ;

    }
    button:disabled span {
      background-color: #FFFFFF80;
    }

    button span {
      background-color: white;
      font-size: 2em;
      font-family: "notoSansItalic";
      font-weight: bold;
      text-transform: uppercase;
      padding: .5em .5em;
      -webkit-box-shadow: inset 0px 0px 0px 4px var(--mainPink) ;
      box-shadow: inset 0px 0px 0px 4px var(--mainPink);
      border: unset;
      position: relative;
      height: fit-content;
      display: block;
      transition: all .2s ;
      animation: movedown .2s ease-in-out;
    }

    @keyframes movedown {
  from {
    right: .25em;
    bottom: .25em; 
  }

  to {
    right: 0;
    bottom: 0;
  }
      
    }

    .add button:not(:disabled) span { 
      right: unset;
      bottom: unset;
      transition: all .2s ;
    }

    .add button, .add button > div, .add button span {
      transition: all .2s ;
    }
    button > div {
        width: calc(100% - .5em);
        height: calc(100% - .5em);;
        background-color: var(--mainBlue);
        position: absolute;
        bottom: 0;
        right: 0;
        z-index: -2;
    }
    .quantity {
      display: flex;
      flex-direction: row;
      /* width: 35%; */
      gap: 1em;
      justify-content: space-between;
        align-items: end;
        height: fit-content;
    }
    .add {
      height: fit-content;
    }

    /* HOVER STATE */
    .add:hover {
      cursor: pointer;
      transition: all .2s ;
    }
    .add:hover button:not(:disabled){
      cursor: pointer;
      transition: all .2s ;
    }

    .add:hover button:not(:disabled) span { 
      right: .25em;
      bottom: .25em;
      
      animation: moveup .2s ease-in-out;
    }

    @keyframes moveup {
  from {
    right: 0;
    bottom: 0;
  }

  to {
    right: .25em;
    bottom: .25em;
  }
}

    .add:hover button:not(:disabled) > div, .add button:not(:disabled):hover > div {
      background-color: var(--mainPink);
      cursor: pointer;
      top: .5em;
      left: .5em;
      transition: all .2s ;
    }

    .quantity .add:hover button:not(:disabled){ 
      -webkit-box-shadow: none;
      box-shadow: none;
    }

   

    /* BUTTON PRESSED ACTIVE */
    .quantity .add button:active {
      cursor: pointer;
      transition: all .2s ;
    }

    .add button:not(:disabled):active span { 
      right: -.25em;
      bottom: -.25em;
      
      animation: pressdown .25s ease-in-out;
    }

    @keyframes pressdown {
  from {
    right: .25em;
    bottom: .25em;
  }

  to {
    right: -.25em;
    bottom: -.25em;
  }
}

    .remove-btn > span {
      width: max-content;
      display: flex;
      flex: row;
      justify-content: center;
      align-items: center;
      gap: .5rem;
      font-weight: 500;
      /* font-family: Verdana, Geneva, Tahoma, sans-serif; */
    
    }

    .remove-btn img {
      height: 100%;
    }

    .cart-item .item-total {
      font-size: 4em;
      font-family: "Barcode";
    }

    .cart-item .leftside {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: left;
    }

    /* EMPTY CART */
    .emptyCartCon {
      width: 100%;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1em;
    }
    .emptyCartCon img {
      width: 40%;
      margin: 0 auto;
    }


    @media screen and (max-width: 420px) { 
        button {
            font-size: 24px;
        }
        }

</style>
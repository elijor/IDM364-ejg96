<script>
    	import { cart } from "$lib/data/cart";
        import ShopButton from "./ShopButton.svelte";
    
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
    
    // Calculate total price
    $: totalPrice = $cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  let deleteicon = "/deleteicon.svg";
  let arrowicon = "/arrow.svg";
  </script>
  
  <div class="cart-page">
    <h1>Your Cart</h1>
    
    {#if $cart.length === 0}
      <p>Your cart is currently empty</p>
      <!-- <img src=""/> -->
      <ShopButton TextCTA="Shop All"></ShopButton>
      <p>

      </p>
    {:else}
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
                    <button 
                    on:click={() => decreaseQuantity(item)} 
                    disabled={item.quantity <= 1} 
                    class="quantity-btn"
                  >
                    -
                    <div></div>
                  </button>
                  <span class="quantity-display">{item.quantity}<div></div></span>
                    <button 
                    on:click={() => increaseQuantity(item)} 
                    disabled={item.quantity >= 9} 
                    class="quantity-btn"
                  >
                    +
                    <div></div>
                  </button>
                  </div>
                  
                </div>
              </div>
            </div>
            
            <div class="leftside">
              <!-- <p class="price">${item.price}</p> -->
              <div class="item-total">
                ${(item.price * item.quantity).toFixed(2)}
              </div>
              <button 
              on:click={() => removeFromCart(item.id)} 
              class="remove-btn">
              <img src={deleteicon} alt="delete from cart"/>
              Remove
              <div></div>
              </button>
              
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
          
          <!-- <button class="checkout-btn">
            Proceed to Checkout
          </button> -->

          <button class="checkout-btn">
          Checkout
          <img src={arrowicon} alt="proceed to checkout"/>

          <div></div>
          </button>
        </div>
        </div>
    
    </div>
    {/if}
  </div>
  

<style>
    h1, p {
        color: white;
    }
    h1 {
        font-family: "notoSansItalic";
        text-transform: uppercase;
        font-size: 3em;
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
    }
    .cart-item > img{
      /* max-width: 12%; */
      height: 150%;
      position: absolute;
      top: -25%;
      left: 1.5em;
    }
    .item-details {
      display: flex;
      flex-direction: column;
      gap: 4em;

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

    .cart-summary > div, .cart-summary > h2{
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

    .cart-summary > button {
      width: calc(100% - 2em);
      margin: 1rem auto 1.5rem;
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 1rem;
      justify-content: center;
    }

    .cart-summary span {
      font-family: "notoSansItalic";
      font-weight: 600;
      font-size: 1.25rem;
      color: #F5F5F5DD;
    }
    .cart-summary .total span {
      font-size: 1.5rem;
      color: white;
      font-weight: bold;
    }

    /* QUANTITY BUTTONS */
    .buttonHolder {
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: space-between;
    }
    .buttonHolder .quantity-btn, .buttonHolder .quantity-display, .leftside .remove-btn, .checkout-btn  {
        font-family: "notoSansItalic";
        font-size: 2em;
        font-weight: bold;
        text-transform: uppercase;
        
        -webkit-box-shadow: inset 0px 0px 0px 4px var(--mainPink) ;
        box-shadow: inset 0px 0px 0px 4px var(--mainPink);
        border: unset;
        position: relative;
        margin: 0 .25em .25em 0;
        padding: .5em .5em ;
        font-size: 1.5em;
    }
    .remove-btn {
      width: max-content;
      display: flex;
      flex: row;
      justify-content: center;
      align-items: center;
      gap: .5rem;
      /* font-family: Verdana, Geneva, Tahoma, sans-serif; */
      color: var(--mainPink);
    }

    .remove-btn img {
      height: 100%;
    }

    .quantity-display {
      background-color: white;
    }
    .quantity-btn {
        -webkit-box-shadow: unset;
        box-shadow: unset;
        padding: 0 .25em;
        height: calc(100% - .25em);
    }
    .quantity-btn > div, .quantity-display > div, .remove-btn div, .checkout-btn div {
        width: 100%;
        height: 100%;
        background-color: var(--mainBlue);
        position: absolute;
        top: .25em;
        left: .25em;
        z-index: -2;

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


    @media screen and (max-width: 420px) { 
        button {
            font-size: 24px;
        }
        }

</style>
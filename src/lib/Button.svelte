<script lang="js">
    import { cart } from '$lib/data/cart';
    import { goto } from '$app/navigation';

    export let product;

    let quantity = 1;

    // Increase quantity (with upper limit of 9)
  function increaseQuantity() {
    if (quantity < 9) {
      quantity++;
    }
  }
  
  // Decrease quantity (with lower limit of 1)
  function decreaseQuantity() {
    if (quantity > 1) {
      quantity--;
    }
  }
  
  // Add product with selected quantity to cart
  function addToCart() {
    // Get current product from database/props
    const productToAdd = {
      ...product,
      quantity: quantity
    };
    
    // Use the addItem method from cart store
    cart.addItem(productToAdd);
    
    // Reset quantity after adding to cart (optional)
    goto('/cart');
  }
</script>

<div class="buttonHolder">
    <div class="quantity">
        <button on:click={decreaseQuantity} 
        disabled={quantity <= 1} type="button">
            -
            <div>
            </div>
        </button>
        <button type="button">
            {quantity}
            <div>
            </div>
        </button>
        <button on:click={increaseQuantity} 
        disabled={quantity >= 9} type="button" >
            +
            <div>
            </div>
        </button>
    </div>
    <div class="add">
      <button on:click={addToCart} type="button">
        Add to Cart
        <div>
        </div>
    </button>
    </div>
    
</div>

<style>
    .buttonHolder {
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: space-between;
        align-items: end;
    }
    button {
        font-family: "notoSansItalic";
        font-size: 2em;
        font-weight: bold;
        text-transform: uppercase;
        padding: .25em .75em;
        -webkit-box-shadow: inset 0px 0px 0px 4px var(--mainPink) ;
        box-shadow: inset 0px 0px 0px 4px var(--mainPink);
        border: unset;
        position: relative;
        margin: 0 .125em .125em 0;
      
    }

    .add button, .add button > div {
      transition: all .2s ;
    }
    button > div {
        width: 100%;
        height: 100%;
        background-color: var(--mainBlue);
        position: absolute;
        top: .25em;
        left: .25em;
        z-index: -2;
   
    }
    .quantity {
      display: flex;
      flex-direction: row;
      gap: 1em;
    }
    .quantity button {
        -webkit-box-shadow: unset;
        box-shadow: unset;
        padding: .25em;
        /* height: calc(100% - .25em); */
    }

    /* HOVER STATE */
    .add:hover button {
      cursor: pointer;
      -webkit-box-shadow: inset 0px 0px 0px 4px var(--mainBlue) ;
      box-shadow: inset 0px 0px 0px 4px var(--mainBlue);
      margin: 0 .5em .5em 0;
      /* font-size: 2.25em; */
      /* background-color: black; */
      color: var(--mainBlue);
      transition: all .2s ;

    }
    .add:hover button > div, .add button:hover > div {
      background-color: var(--mainPink);
      cursor: pointer;
      top: .5em;
      left: .5em;
      transition: all .2s ;
    }

   

    /* BUTTON PRESSED ACTIVE */
    .add button:active {
      cursor: pointer;
      margin: 0 0 0 0;
      transition: all .2s ;
    }
    .add button:active > div, .add button > div:active { 
      top: 0;
      left: 0;
      transition: all .2s ;
    }

    @media screen and (max-width: 420px) { 
        button {
            font-size: 24px;
        }
        }
</style>
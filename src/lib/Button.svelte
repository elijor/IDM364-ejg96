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
      <div class="add">
        <button on:click={decreaseQuantity} 
        disabled={quantity <= 1} type="button" class="addless">
        <span>-</span>
            <div>
            </div>
        </button>
      </div>
        <button type="button">
            <span>{quantity}</span>
            <div>
            </div>
        </button>
        <div class="add">
          <button on:click={increaseQuantity} 
          disabled={quantity >= 9} type="button" class="addless">
              <span>+</span>
              <div>
              </div>
          </button>
      </div>
    </div>
    <div class="add">
      <button on:click={addToCart} type="button">
        <span>
        Add to Cart
      </span>
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
      width: 35%;
      /* gap: 2em; */
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

    @media screen and (max-width: 420px) { 
        button {
            font-size: 24px;
        }
        }
</style>
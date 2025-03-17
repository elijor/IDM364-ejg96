<script>
    // import { cart } from '../stores/cart.js';
    import { cart } from "$lib/data/cart";
    let carticon = "/carticon.svg";
    
    // Reactive variable to check if cart has items
    $: hasItems = $cart.length > 0;
  </script>
  
  <a href="/cart" class="cart-icon-container">
    <img src={carticon} alt="go to cart page"/>
    {#if hasItems}
      <span class="cart-notification-dot"></span>
    {/if}
  </a>
  
  <style>
    .cart-icon-container {
      position: absolute;
      top: 2em;
      right: 2em;
      display: block;
      margin: 0;
      height: calc(100% - 4em);
      transform: scale(1);
      transition: all .25s;

    }
    
    .cart-icon-container img {
      height: 100%;
    }
    
    .cart-notification-dot {
      position: absolute;
      top: -1px;
      right: -5px;
      width: 16px;
      height: 16px;
      background-color: var(--mainRed);
      border-radius: 50%;
      display: inline-block;
      mix-blend-mode:multiply;
      animation: pulse 0.25s ease-in-out;
  }
  
  @keyframes pulse {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.3);
    }
    100% {
      transform: scale(1.2);
    }
  }

  /* HOVER STATES */
  .cart-icon-container:hover {
    animation: hoverSimple 0.25s ease-in-out;
    transform: scale(1.2);
    transition: transform .25s;
  }

  /* BUTTON PRESS */
  .cart-icon-container:active {
    /* transform: scale(.8); */
    transition: all .25;
    animation: btnPress 0.25s ease-in-out;
  }

  @keyframes hoverSimple {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.45);
    }
    100% {
      transform: scale(1.25);
    }
  }

  @keyframes btnPress {
    0% {
      transform: scale(1.25);
    }
    50% {
      transform: scale(.75);
    }
    100% {
      transform: scale(1);
    }
  }
    
    @media screen and (max-width: 1080px) { 
      .cart-icon-container {
        top: 1.5em;
        height: calc(100% - 3em);
      }
    }
  </style>
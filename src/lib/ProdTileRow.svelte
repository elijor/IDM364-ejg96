<script>
    export const ssr = false; // Disable SSR for this component

const colorArray = [
    {Orange: "#234234"}, 
    {Blue: "#0000FF"},
    {Black: "#000000"}];

    import { onMount, afterUpdate } from 'svelte';
    import { products } from '$lib/data/store';
    import { page } from '$app/stores';


  // Reactively get the slug from the page store
  $: slug = $page.params.slug;

  // Find the current product based on the slug
  $: product = products.find((p) => p.id === (slug));

  // Reactively get the current product ID
  $: currentProductId = product ? product.id : null;

  // Function to get 3 random products excluding the current product
  function getRandomProducts(products, currentProductId) {
    if (!currentProductId) return []; // Guard clause if no current product ID

    // Filter out the current product
    const filteredProducts = products.filter(
      (product) => product.id !== currentProductId
    );

    // Shuffle the filtered array and pick the first 3 items
    const shuffled = filteredProducts.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
  }

  // Reactively calculate random products whenever the slug or product changes
  $: randomProducts = getRandomProducts(products, currentProductId);

  // Client-side only logic
  onMount(() => {
    // Add cache-busting query parameter to images
    randomProducts = randomProducts.map((product) => {
      return { ...product, img: `${product.img}?${Date.now()}` };
    });
  });

</script>
<div class="display3"> 
{#each randomProducts as product}

<a href="/products/{product.id}">
<div class="holder"> 
    <img class="prodImg" src="/imgs/products/{product.img}" alt="{product.title} by {product.artist} Skateboard"/>
    <!-- <img class="prodImg" src="/src/lib/assets/imgs/products/{`${product.img}?${Date.now()}`}" alt="{product.title} by {product.artist} Skateboard"/> -->

    <div class="infoPriceCon">
        <div class="infoCon">
            <h3> 
                {product.title}
            </h3>
            <p>
               <!-- ARTIST YEAR -->
               {product.artist} {product.year}
            </p>
            <p>
                <!-- SIZE -->
                {product.size}
            </p>
        </div>
        <p class="price">
            <!-- PRICE -->
             ${product.price}
        </p>
    </div>
    <div class="offset">

    </div>
</div>
</a>

{/each}
</div>
<style>
    .display3 {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 4em;
        width: calc(100% - .5rem);
        margin: 5em 0 5em .5em;
        justify-content: space-between;
    }
    .prodImg {
        height: 30em;
        position: absolute;
        z-index: 2;
        margin: .5em;
        isolation: isolate;
  
        /* z-index: 5; */
    }
   a {
        position: relative;
        width: 29%;
        min-height: 32em;
        background-color: var(--mainBlack);
        /* outline: 1em var(--mainRed) solid; */
        -webkit-box-shadow:inset 0px 0px 0px .5em var(--mainBlue);
        -moz-box-shadow:inset 0px 0px 0px .5em var(--mainBlue);
        box-shadow:inset 0px 0px 0px .5em var(--mainBlue);
    }
    /* .colorCon {
        background-color: var(--mainPink);
    } */

    .offset {
        width: 100%;
        position: absolute;
        bottom: .5em;
        right: .5em;
        background-color: var(--mainBlack);
        min-height: 32em;
        z-index: 1;
        -webkit-box-shadow:inset 0px 0px 0px .25em var(--secWhite);
        -moz-box-shadow:inset 0px 0px 0px .25em var(--secWhite);
        box-shadow:inset 0px 0px 0px .25em var(--secWhite);
    }

    .infoPriceCon {
        z-index: 3;
        position: relative;
        padding: 2em;
        /* width: 100%; */
        display: flex;
        flex-direction: column;
        height: 28em;
        justify-content: space-between;
    }
    .infoCon {
        z-index: 3;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: end;
        
    }
    .infoCon p, .infoPriceCon p {
        color: var(--mainWhite);
        text-align: right;
    }

    .infoCon p {
        margin: 1em 0 0 0;
        font-size: 1em;

    }

    .infoPriceCon > p {
        font-family: "Barcode";
        font-size: 4em;
        margin: .25em 0;
    }

    .infoPriceCon h3 {
        color: var(--mainBlack);
        /* background-color: var(--mainWhite); */
        /* background-color: lighten(white, 50%); */
        background: var(--secWhite);
        opacity: 90%;
        text-transform: uppercase;
        padding: .5em;
        font-size: 2em;
        font-family: "notoSansItalic";
        display: inline-block;
        margin: 0;
        text-align: right;
        width: fit-content;
        mix-blend-mode: screen;
        background-blend-mode: screen;
    }
    a {
        color: var(--secWhite);
        text-decoration: none;
    }

    @media screen and (max-width: 1080px) { 
        a {
            max-width: 420px;
            width: calc(50% - 2em);
            min-width: 350px;
        }
        p,  .infoCon p  {
            font-size: 125%;
        }
        .display3 { 
          justify-content: space-between;
          font-size: 16px;
    }
    }

    @media screen and (max-width: 850px) { 
        a {
            max-width: 420px;
            width: 90%;
        }
        .display3 { 
         justify-content: center;
    }
    }

    @media screen and (max-width: 550px) { 
        p,  .infoCon p  {
            font-size: 100%;
        }
        .infoPriceCon > p {
            font-size: 3.5em;
        }
      
    }
    @media screen and (max-width: 365px) { 
        a {
            min-width: 300px;
        }
      
    }

</style>
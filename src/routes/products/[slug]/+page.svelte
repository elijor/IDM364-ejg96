<script lang="js">
    // import { products } from '$lib/data/store';
    import Shopdivider from '$lib/Shopdivider.svelte';
    import { invalidate } from '$app/navigation';
    import { page } from '$app/stores'; // Import the page store to access route parameters
	import ProdTileRow from '$lib/ProdTileRow.svelte';
    import ShopButton from '$lib/ShopButton.svelte';

    export let data;
    const { product } = data;

    console.log("Product:", product);

</script>

{#if product} 
<div class="entireHolder">
    <div class="holderImgs">
        <img src="/imgs/products/{product.img}" alt="{product.title} by {product.artist} Skateboard">
        {#if product.moreimgs != null }
            {#each product.moreimgs as moreimg}
                <img src="/imgs/products/{moreimgs}" alt="{product.title} by {product.artist} Skateboard">
            {/each}
        {:else} 
            <!-- <p> Nothing else </p> -->
        {/if}
    </div>
    <div class="textHolder">
        <div class="infoHolder">
            <div>
                <h1>{product.title}</h1>
                <p class="price">${product.price}</p>
            </div>
            <p> {product.artist} {product.year}</p>
            <p> {product.size}</p>
            <p> {product.description}</p>    
        </div>
        <div class="buttonHolder">
            <div class="quantity">
                <button type="button">
                    -
                    <div>
                    </div>
                </button>
                <button type="button">
                    1
                    <div>
                    </div>
                </button>
                <button type="button">
                    +
                    <div>
                    </div>
                </button>
            </div>
            <button type="button">
                Add to Cart
                <div>
                </div>
            </button>
        </div>
    </div>
</div>

{:else}
<p> 404: Product not found.</p>
{/if}


<Shopdivider textCta="See More"></Shopdivider>

<!-- <p> check it  </p> -->

{#if data.randomProducts && data.randomProducts.length > 0}
    <ProdTileRow products={data.randomProducts} />
  {/if}

<!-- <ProdTileRow products={randomProducts}/> -->
<ShopButton TextCTA="Shop All"></ShopButton>

<style>


    .entireHolder {
        display: flex;
        width: 100%;
        flex-direction: row ;
        /* align-items: ; */
        gap: 3em;
        margin: 6.5em 0;
    }
    .entireHolder > div {
        width: 50%;
    }

    .holderImgs {
        -webkit-box-shadow: inset 0px 0px 0px .5em var(--mainBlue) ;
        box-shadow: inset 0px 0px 0px .5em var(--mainBlue);
        width: 50%;
        display: flex;
}

    .holderImgs img:first-child {
        max-width: 100%;
        max-height: 40em;
        margin: 2em auto;
    }

    .textHolder {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .infoHolder {
        display: flex;
        flex-direction: column;
        gap: 3em;
    }
    .infoHolder > div {
        width: 100%;
        display: flex;
        justify-content: space-between;
        gap: 1em;
    }

    p, h1 {
        color: var(--mainWhite);
        margin: 0;
    }
    .price {
        font-family: "Barcode";
        font-size: 4em;

    }

    h1 {
        font-family: "notoSansItalic" ;
        text-transform: uppercase;
        font-size: 3em;
        margin: 0;
        position: relative;
        top: -.25em;
    }
    .buttonHolder {
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: space-between;
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
        margin: 0 .25em .25em 0;
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
    .quantity button {
        -webkit-box-shadow: unset;
        box-shadow: unset;
        padding: 0 .25em;
        height: calc(100% - .25em);
    }

    @media screen and (max-width: 850px) { 
        .entireHolder {
            gap: 2em;
        }
        .entireHolder > div:first-child {
            width: 35%;
        }
        .entireHolder > div:last-child {
            width: 65%;
        }
    }
    @media screen and (max-width: 650px) { 
        
        .entireHolder {
            flex-direction: column;
            align-items: center;
           
        }
        .entireHolder > div:first-child, .entireHolder > div:last-child {
            width: 100%;
        }
        .holderImgs img:first-child {
            max-height: 30em;
        
        }
        .holderImgs {
            /* max-width: 420px; */
            width: 100%;
        }
        .textHolder {
            gap: 3em;
        }
        .infoHolder div {
            flex-direction: column;
            gap: 3em;
        }
        .infoHolder p, .infoHolder h1 {
            text-align: center;
           
        }
        .infoHolder >  p {
            font-size: 16px;
        }
        .infoHolder > p:last-of-type {
            text-align: left;
            font-size: 16px;
        }
        h1 {
            font-size: 32px;
        }
    }
    @media screen and (max-width: 420px) { 
        button {
            font-size: 24px;
        }
        .buttonHolder {
            flex-direction: column;
            gap: 2em;
            align-items: center;
        }
        .quantity {
            height: 44.5px;
        }
        .textHolder > div {
            gap: 2em;
        }
    }

</style>
<!-- <h1> 
    {title}
</h1> -->

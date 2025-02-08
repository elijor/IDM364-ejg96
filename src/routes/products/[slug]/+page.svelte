<script>
    import { products } from '$lib/data/store';
    import Shopdivider from '$lib/Shopdivider.svelte';
    import { page } from '$app/stores'; // Import the page store to access route parameters
	import ProdTileRow from '$lib/ProdTileRow.svelte';
    import ShopButton from '$lib/ShopButton.svelte';

$: slug = $page.params.slug;
$: product = products.find((p) => p.id === (slug));
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
            <p> Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ipsa sapiente dolorem explicabo voluptate nisi suscipit quam natus quibusdam, adipisci repellendus. Architecto officiis saepe tempora tenetur necessitatibus non numquam mollitia!</p>    
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

<Shopdivider textCta="Shop More Boards"></Shopdivider>

<!-- <p> check it  </p> -->
<ProdTileRow> </ProdTileRow>
<ShopButton TextCTA="Shop More"></ShopButton>

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

</style>
<!-- <h1> 
    {title}
</h1> -->

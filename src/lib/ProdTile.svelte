<script>

const colorArray = [
    {Orange: "#234234"}, 
    {Blue: "#0000FF"},
    {Black: "#000000"}];

import { products } from '$lib/data/store';

// {#if product.colorVar != null } 
//                 <div class="colorCon">
//                     {#each product.colorVar as color}
                        
//                         <p> {color} </p>
//                     {/each}
//                     <!-- {:else} -->
//                 </div>
//                 {/if}
</script>

	{#each products as product}
<a href="/products/{product.id}">
<div class="holder"> 
    <img class="prodImg" src="/imgs/products/{product.img}" alt="{product.title} by {product.artist} Skateboard"/>
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
<style>
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
</style>
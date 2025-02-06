<script>
     import HeroIMG from '$lib/assets/imgs/hero-img.jpg';
</script>
<div class="herocon">
    <span class="logo">
        ARTBOARD
    </span>
    <div class="imgcon">
        <p> Modern Art, Skating, and Consumerism</p>
        <img src={HeroIMG} alt="Skateboarder"/>
        <div> &nbsp;</div>
    </div>
</div>

<style>
    span.logo {
        font-size: 20em;
        color: var(--mainWhite);
        z-index: 1;
        mix-blend-mode: difference;
        height: max-content;
    }
    .herocon {
        width: 100%;
        display: flex;
        margin: 4em auto;
        position: relative;
        height: 30em;
        align-items: center;
    }
    .imgcon {
        position: absolute;
        right: 0;
        z-index: 0;
        width: 72%;
        height: max-content;
        bottom: 0;

 
    }
    .imgcon > * {
        width: 100%;
        
    }
    .imgcon > img { 
        position: relative;
        right: .5em;
        /* filter: blur(2px) ; */
        /* -webkit-mask-image: radial-gradient(circle at 50% 50%, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 100%);
        mask-image:  radial-gradient(circle at 50% 50%, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 100%);
 */

    }
    .imgcon > div {
        background-color: var(--mainRed);
        position: absolute;
        top: .5em;
        left: 0;
        z-index: -1;
        height: 100%;
        display: block;
    }
    .imgcon > p {
        position: absolute;
        bottom: 0;
        right: 0;
        text-align: right;
        color: var(--mainWhite);
        font-size: 2em;
        font-family: Verdana;
        font-style: italic;
        font-weight: 600;
        margin: 0;
        mix-blend-mode: difference;
        z-index: 3;
        right: .5em;
    }
    @media screen and (max-width: 75em) {


    }
</style>
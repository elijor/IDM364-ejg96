<script>
    import CartIcon from "./CartIcon.svelte";

</script>
<header>
    <a href="/" class="logo"> ARTBOARD </a>
    <CartIcon></CartIcon>
    <div>&nbsp;</div>

</header>

<style>
    header {
        position: fixed;
        background-color: var(--secWhite);
        width: 100%;
        display: block;
        padding: 1em 0;
        z-index: 5;
        mix-blend-mode: normal;
        top: 0;
        max-width: 100vw;
        /* border-bottom: .5em solid var(--mainRed); */
      
    }
    header a {
        color: var(--mainBlack);
        font-size: 82px;
        text-decoration: none;
        text-align: center;
        display: block;
        width: fit-content;
        margin: 0 auto;
    }
    header > div { 
        background-color: var(--mainRed);
        /* background-image: url("/src/lib/assets/imgs/BG1.png"); */
        position: absolute;
        bottom: -.5em;
        height: .5em;
        width: 100%;
        right: 0;

    }

    @media screen and (max-width: 1080px) { 
        header a {
        font-size: 4em;
    }
}
    @media screen and (max-width: 500px) { 
        header a {
            margin: 0 0 0 2rem;
            /* top: 1.5em;
            height: calc(100% - 3em); */
        }
        }


</style>
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
    transform: scale(1);
    transition: transform 0.2s ease-in-out;
    position: relative;
    overflow: hidden;
}

    header > div { 
        background-color: var(--mainRed);
        /* background-image: url("/src/lib/assets/imgs/BG1.png"); */
        position: absolute;
        bottom: -.5em;
        height: .5em;
        width: 100%;
        right: 0;
        transform: scale(1);
        transition: all .2s;


    }
    /* HOVER STATE */

    header a::before {
    content: "ARTBOARD"; /* Match your logo text */
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0.8) 50%,
        rgba(255, 255, 255, 0) 100%
    );
    background-size: 200% 100%;
    background-position: 200% 0;
    background-repeat: no-repeat;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    opacity: 0;
    transition: opacity 0.1s ease;
}

header a:hover {
    transform: scale(1.15);
}

header a:hover::before {
    opacity: 1;
    animation: shine 1.5s ease-in-out;
}

header > div { 
    background-color: var(--mainRed);
    position: absolute;
    bottom: -.5em;
    height: .5em;
    width: 100%;
    right: 0;
    transform: scale(1);
    transition: all .2s;
}

@keyframes shine {
    0% {
        background-position: 200% 0;
    }
    100% {
        background-position: -200% 0;
    }
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
<header>
    <a href="/" class="logo"> ARTBOARD </a>
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
    }
    header > div { 
        background-color: var(--mainRed);
        /* background-image: url("/src/lib/assets/imgs/BG1.png"); */
        position: absolute;
        bottom: -.5em;
        height: .5em;
        width: 100%;
        right: 0;
        /* opacity: 50%; */
        /* z-index: -4; */
    }
    /* @media screen and (max-width: 1080px) {
        header {
            top: 0;
            
        }
    } */
    @media screen and (max-width: 1080px) { 
        header a {
        font-size: 4em;
    }
}


</style>
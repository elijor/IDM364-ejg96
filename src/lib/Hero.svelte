
<div class="herocon">
    <span class="logo">
        ARTBOARD
    </span>
    <div class="imgcon">
        <p> Modern Art, Skating, and Consumerism</p>
        <img src="/imgs/hero-img.jpg" alt="Skateboarder"/>
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
        margin: 6.5em auto 8em;
        position: relative;
        height: 32em;
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
    @media screen and (max-width: 1080px) {
        
        .herocon {
            position: relative;
            top: calc(56px + 2em);
            left: -2em;
            width: calc( 100% + 4em );
            margin: 0 auto 5em;
            min-height:max-content;
            overflow:visible; 
            display: inline-block;

        }
        .imgcon {
            display: inline-block;
            /* width: calc( 100% + 4em ); */
            height: fit-content;
            width: 100%;
            top: 0;

            
            
        }
        span.logo {
            display: block;
            position: relative;
            font-size: 22em;
            /* font-size: 24em; */
            text-align: center;
            margin-top: 1.5em;
        }
      
        .imgcon > p { 
            position: absolute;
            font-size: 2em;
            mix-blend-mode: normal;
            opacity: 80%;
            margin: 0 auto;
            /* width: max-content; */
            top: .5em;
            width: 100%;
            text-align: center;
        }
        .imgcon > img, .imgcon > div  {
            /* width: calc(100% - .5em); */
            right: 0;
            background-color: unset;
        }

    }

    @media screen and (max-width: 850px) { 
        span.logo { 
            font-size: 16em;
        }
        .imgcon > p { 
            font-size: 1.5em;
        }
    }

    @media screen and (max-width: 600px) { 
        span.logo { 
            font-size: 12em;
        }
        .imgcon > p { 
            font-size: 1em;
        }
    }
    @media screen and (max-width: 450px) { 
        span.logo { 
            font-size: 10em;
        }
        .imgcon > p { 
            font-size: 1em;
        }
        .herocon {
            margin: 0 auto;
            min-height: unset;
        }
    }
    @media screen and (max-width: 380px) { 
        span.logo { 
            font-size: 8em;
        }
        .imgcon > p { 
            font-size: 1em;
        }
    }

</style>
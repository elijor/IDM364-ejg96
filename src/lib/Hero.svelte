
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
        font-size: 18em;
        color: var(--mainWhite);
        z-index: 1;
        mix-blend-mode: difference;
        height: max-content;
        position: absolute;
        left: 0;
        margin-left: calc((100% - 75rem) / 2);
        margin-bottom: 8rem;

    }
    .herocon {
        font-size: 16px;
        width: 100vw;
        display: flex;
        margin: 0 0 8em 0;
        margin-left: calc((75em - 100vw) / 2);
        /* position: relative; */
        height: fit-content;
        max-height: 65vh;
        align-items: end;
        justify-content: end;
        flex-direction: row;
        left: 0;
    }
    .imgcon {
        position: relative;
        width: 100%;
         right: 0;
    }
    .imgcon > * {
        width: 100%;
        
    }
    .imgcon > img { 
        position: relative;
        color: var(--mainBlue);

    }
    .imgcon > div {
        background-color: var(--mainBlue);
        position: absolute;
        top: .25em;
        left: 0;
        z-index: -1;
        height: 100%;
        display: block;
    }
    .imgcon > p {
        position: absolute;
        margin: 0;
        margin-right: calc((100vw - 75rem) / 2);
        /* top: calc(104px + 1rem + 30vh); */
        bottom: 0;
        right: 0;
        text-align: right;
        color: var(--mainWhite);
        font-size: 2em;
        font-family: Verdana;
        font-style: italic;
        font-weight: 600;
        mix-blend-mode: difference;
        z-index: 3;
        width: unset;
    }

    @media screen and (max-width: 78em) {
        .herocon {
            font-size: 14px;
        }
        .herocon span.logo {
            margin-left: calc((100% - 1050px) / 2);

        }
        .imgcon > p {
            margin-right: calc((100vw - 1050px) / 2);

        }
    }
    @media screen and (max-width: 1080px) {
 
        .herocon {
        font-size: 14px;
        
        margin-left: -3em;
        }
        .herocon span.logo {
            margin-left: 42px;
            font-size: 16em;
            mix-blend-mode: screen;
            opacity: 85%;
            color: var(--mainWhite);
        }
        .imgcon > p {
            margin-right: 42px;
        }
    }

    @media screen and (max-width: 850px) { 
        .herocon span.logo  { 
            font-size: 16em;
            display: block;
            left: calc((100% - 591.37px) / 2);
            margin-left: 0;
            right: unset;
        }
        .imgcon > p { 
            font-size: 1.75em;
            right: calc((100% - 539.06px) / 2);
            margin-right: 0;
        }
    }

    @media screen and (max-width: 675px) { 
        .herocon span.logo  { 
            font-size: 12em;
            left: calc((100% - 443.52px) / 2);
        }
        .imgcon > p { 
            font-size: 1.5em;
            right: calc((100% - 462.06px) / 2);
        }
    }

    @media screen and (max-width: 600px) { 
        .herocon span.logo  { 
            font-size: 12em;
            left: calc((100% - 443.523px) / 2);
            margin-bottom: 6rem;
        }
        .imgcon > p { 
            font-size: 1.25em;
            right: calc((100% - 385.05px) / 2);
        }
        .herocon {
            margin-bottom: 0;
        }
    }
    @media screen and (max-width: 500px) { 
       
        .herocon span.logo { 
            font-size: 10em;
            left: calc((100% - 369.6px) / 2);
            margin-bottom: 4rem;
        }
        .imgcon > p { 
            font-size: 1.25em;
            right: calc((100% - 385.05px) / 2);
        }
    }

    @media screen and (max-width: 425px) { 
        .herocon span.logo { 
            font-size: 8em;
            left: calc((100% - 295.69px) / 2);
        }
        .imgcon > p { 
            font-size: 1.15em;
            right: calc((100% - 354.24px) / 2);
        }
    }
    @media screen and (max-width: 380px) { 
        span.logo { 
            font-size: 8em;
        }
        .imgcon > p { 
            font-size: 1em;
            right: calc((100% - 308.04px) / 2);
        }
    }

</style>
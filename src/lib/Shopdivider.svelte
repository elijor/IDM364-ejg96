<script>
         import DividerIMG from '$lib/assets/imgs/divider.png';
         let props = $props();
</script>
<div class="entCon" id="shopSection">
<div class="holder">
    <div class="texthold">
        <h1>
            {props.textCta}
        </h1>
        <div>

        </div>
    </div>
    <div class="holder">
        <img src={DividerIMG} alt="divider"/>
    </div>
</div>
</div>
<style>
.entCon {
    width: 100%;
    height: 2em;
    margin: 8em 0;
}

    div.texthold {
        width: 75em;
        margin: auto;
        display: block;
        height: 2em;
        position: relative;
    }
    div.texthold div {
        position: absolute;
        right: 0;
        top: -1.5em;
        height: 3em;
        width: 18em;
        padding: 1em;
        /* background-color: var(--mainBlack); */
        opacity: 90%;
        z-index: 1;
        mix-blend-mode: multiply;
    }

    div.holder {
        /* background-color: #fff; */
        width: 100%;
        position: absolute;
        left: 0;
        display: flex;
        align-items: center;
        /* margin: 5em 0; */
    }
    div.texthold h1 {
        font-family: "notoSans";
        font-size: 2.25em;
        text-transform: uppercase;
        color: var(--mainRed);
        position: absolute;
        right: 0;
        /* width: 75em; */
        margin: 0 auto;
        z-index: 2;
        padding: .75em 1em;
        background-color: #000000df;
        top: -.9em;
        /* background-blend-mode: exclusion; */
        /* mix-blend-mode: difference; */
    }
    img {
        width: 100%;
    }
</style>
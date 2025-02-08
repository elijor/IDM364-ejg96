<script>
    import { goto } from '$app/navigation';
	let props = $props();
</script>

<div class="large">
    <div>
        <button onclick={() => goto('/#shopSection')}>
            {props.TextCTA}
            <div></div>
        </button>
    </div>
</div>

<style>

.large {
    margin: 4em 0 ;
}

div > div {
    width: 100%;
    display: flex ;
    justify-content: center;
    /* margin: 2em 0; */

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
</style>
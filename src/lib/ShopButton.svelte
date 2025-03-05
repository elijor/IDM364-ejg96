<script>
    import { goto } from '$app/navigation';
	let props = $props();
</script>

<div class="large">
    <div>
        <div class="btnhold">
            <button onclick={() => goto('/#shopSection')}>
                {props.TextCTA}
                <div></div>
            </button>
        </div>
    </div>
</div>

<style>



.large {
    margin: 4em 0 ;
}

div > div:not(.btnhold) {
    width: 100%;
    display: flex ;
    justify-content: center;
    align-items: start;
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
        transition: all .2s ;
    }
    button > div {
        width: 100%;
        height: 100%;
        background-color: var(--mainBlue);
        position: absolute;
        top: .25em;
        left: .25em;
        z-index: -2;
        transition: all .2s ;

    }
    /* HOVER */



    /* HOVER STATE */
    .btnhold:hover button {
      cursor: pointer;
      -webkit-box-shadow: inset 0px 0px 0px 4px var(--mainBlue) ;
      box-shadow: inset 0px 0px 0px 4px var(--mainBlue);
      margin: 0 .5em .5em 0;
      /* font-size: 2.25em; */
      /* background-color: black; */
      color: var(--mainBlue);
      transition: all .2s ;

    }
    .btnhold:hover button > div, .btnhold:hover button > div {
      background-color: var(--mainPink);
      cursor: pointer;
      top: .5em;
      left: .5em;
      transition: all .2s ;
    }

   

    /* BUTTON PRESSED ACTIVE */
    .btnhold button:active {
      cursor: pointer;
      margin: 0 0 0 0;
      transition: all .2s ;
    }
    .btnhold button:active > div, .btnhold button > div:active { 
      top: 0;
      left: 0;
      transition: all .2s ;
    }
</style>
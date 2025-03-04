<script>
    // import carticon from "/carticon.png";
    let carticon = "/carticon.png"
</script>
<a a href="/cart"> <img src={carticon} alt="go to cart page"/>
</a>
<style>
    a {
        position: absolute;
        top: 2em;
        right: 2em;
        display: block;
        margin: 0;
        height: calc(100% - 4em);
      
    }
    img {
        height: 100%;

    }
    @media screen and (max-width: 1080px) { 
        a {
            top: 1.5em;
            height: calc(100% - 3em);
        }
        }

</style>
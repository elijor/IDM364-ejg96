<script lang="js">
// let count = $state(1);
let count = $props();
let double = $derived(count * 2);
let triple = $derived(count * 3);

$effect(()=> {
    if (count >= 10) {
        console.log('Count is more than 10')
    }
});

</script>

<h1 style="color: red; z-index: 15">
    The count is {count} and double is {double} and triple is {triple}
    </h1>
    <button onclick ={() => count++}> 
        Click me to double
    </button>

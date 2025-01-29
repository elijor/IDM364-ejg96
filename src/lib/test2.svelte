<script lang="js">
    // let {name = "Phil", age = 40 }= $props();
let name = $state('');
let color = $state('');
// let agreed = $state(true);
$inspect(name);
$inspect(color);

</script>

<!-- <p> {name} is {age}</p> -->

<input type="text" bind:value={name}>
<p> {name}</p>
<!-- <input type="checkbox" bind:value={agreed} /> -->
<input type="radio" bind:group={color} value="red"  >
<input type="radio"  bind:group={color} value="green"  >
<select>
    <option value=""> Select 0</option>
    <option value="one"> One</option>
    <option value="two"> Two</option>
</select>
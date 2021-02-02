<script>
    import { onMount } from 'svelte';
    let logo;
    onMount(() => {
        logo = document.getElementById("logo");
        logo.innerHTML = "<a href='.' style='text-decoration:none'>Ganga View<a>";
    });
</script>

<div class="cform">

</div>

<style>
    .cform {
        width: 100vw;
        min-height: 100vh;
    }
</style>
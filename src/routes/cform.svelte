<script>
    import { onMount } from 'svelte';
    let logo;
    onMount(() => {
        logo = document.getElementById("logo");
        logo.innerHTML = "<a href='.' style='text-decoration:none'>Ganga View<a>";
    });
</script>

<div class="c-form">
    <p>
        <label>Surname <input type="text" name="lastname" /></label>
    </p>
    <p>
        <label>Given Name <input type="text" name="firstname" /></label>
    </p>
    <p>
        <label>Email <input type="email" name="email" /></label>
    </p>
    <p>
        <button type="submit">Send</button>
    </p>
</div>

<style>
    .c-form {
        width: 100vw;
        min-height: 100vh;
        flex-direction: column;
    }

    p {
        width: 100%;
    }
</style>
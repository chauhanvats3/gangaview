<script>
    import { onMount } from 'svelte';
    let logo, f_name, l_name, email;
    onMount(() => {
        logo = document.getElementById("logo");
        logo.innerHTML = "<a href='.' style='text-decoration:none'>Ganga View<a>";
    });


    async function api_send_c_form() {
        const url = `/api/hello?email=${email}`;
        try {
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
        } catch (err) {
            console.log(err);
        }
    }

</script>

<div class="c-form">
    <p>
        <label>Surname <input type="text" name="lastname" bind:value={f_name} /></label>
    </p>
    <p>
        <label>Given Name <input type="text" name="firstname" bind:value={l_name} /></label>
    </p>
    <p>
        <label>Email <input type="email" name="email" bind:value={email} /></label>
    </p>
    <p>
        <button class="btn" on:click={api_send_c_form}>Send</button>
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
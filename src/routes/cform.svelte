<script>
    import { onMount } from 'svelte';
    import Breadcrumb from '../components/breadcrumb.svelte';
    import InputText from '../components/input_text.svelte';
    import Footer from '../components/Footer.svelte';

    const path = [{ name: "C-Form", href: "./cform" }]

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
    <div class="form_wrapper">

        <Breadcrumb {path} />

        <InputText inputName="First Name" id="f_name" bind:val={f_name} />
        <InputText inputName="Last Name" id="l_name" />
        <InputText inputName="Email ID" id="email" bind:val={email} />
        <InputText inputName="Address" id="address" />

        <p>
            <button class="btn" on:click={api_send_c_form}>Submit</button>
        </p>
    </div>

    <Footer />

</div>
<style>
    .c-form,
    .form_wrapper {
        width: 100vw;
        flex-direction: column;
        padding: 20px;
        padding-bottom: 0;
    }

    .c-form {
        min-height: 100vh;
        justify-content: space-between;
    }

    p {
        width: 100%;
    }
</style>
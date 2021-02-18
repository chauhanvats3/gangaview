<script>
    import { onMount } from 'svelte';
    import Breadcrumb from '../components/breadcrumb.svelte';
    import InputText from '../components/input_text.svelte';
    import InputTextarea from '../components/input_textarea.svelte';
    import Footer from '../components/Footer.svelte';

    const path = [{ name: "C-Form", href: "./cform" }]
    let logo;
    let dataset = {
        photo: "",
        first_name: "",
        last_name: "",
        sex: "",
        date_of_birth: "",
        special_category: "",
        nationality: "",
        address: "",
        city: "",
        country: "",
        passport: {
            number: "",
            city: "",
            country: "",
            issue: "",
            expiry: "",
        },
        visa: {
            number: "",
            city: "",
            country: "",
            issue: "",
            expiry: "",
            type: "",
            sub_type: "",
        },
        arrived_from: {
            country: "",
            city: "",
            place: ""
        },
        india_arrival_date: "",
        intended_duration: "",
        employed_in_india: false,
        purpose_of_visit: "",
        next_destination: {
            inside_india: true,
            state: "",
            district: "",
            place: ""
        },
        contact_info: {
            email: "",
            indian_number: "",
            permanent_number: ""
        }

    }

    onMount(() => {
        logo = document.getElementById("logo");
        logo.innerHTML = "<a href='.' style='text-decoration:none'>Ganga View<a>";
    });


    async function api_send_c_form() {
        const url = `/api/hello?dataset=${JSON.stringify(dataset)}`;
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

        <InputText inputName="First Name" id="first_name" bind:val={dataset.first_name} />
        <InputText inputName="Last Name" id="last_name" bind:val={dataset.last_name} />
        <InputText inputName="Email ID" id="email" bind:val={dataset.email} />
        <InputTextarea inputName="Address" id="address" bind:val={dataset.address} />

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
    }

    .c-form {
        min-height: 100vh;
        justify-content: space-between;
        padding: 20px;
        padding-bottom: 0;
    }

    .form_wrapper {
        padding: 20px;
    }

    p {
        width: 100%;
    }
</style>
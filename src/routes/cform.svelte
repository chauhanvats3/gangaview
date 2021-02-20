<script>
    import { onMount } from 'svelte';
    import Datepicker from 'svelte-calendar';
    import Breadcrumb from '../components/breadcrumb.svelte';
    import InputText from '../components/input_text.svelte';
    import InputTextarea from '../components/input_textarea.svelte';
    import InputSelect from '../components/input_select.svelte';


    const path = [{ name: "C-Form", href: "./cform" }]
    let logo;
    const sex_options = ["Select Gender", "male", "female", "transgender"];
    const today = new Date();
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
        const url = `/api/send-c-form-email?dataset=${JSON.stringify(dataset)}`;
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
    <Breadcrumb {path} />

    <div class="form_wrapper">

        <h2>General Details</h2>

        <div class="group">
            <InputText inputName="First Name" id="first_name" bind:val={dataset.first_name} placeholder="John" />
            <InputText inputName="Last Name" id="last_name" bind:val={dataset.last_name} placeholder="Doe" />
        </div>
        <InputSelect inputName="Sex" id="sex" bind:val={dataset.sex} options={sex_options} />
        <Datepicker start={new Date("01/01/1900")} end={new Date()} selected={today} />
        <InputText inputName="Email ID" id="email" bind:val={dataset.email} placeholder="johndoe@email.com" />
        <InputTextarea inputName="Address" id="address" bind:val={dataset.address} />
    </div>

    <p>
        <button class="btn" on:click={api_send_c_form}>Submit</button>
    </p>
</div>
<style>
    .c-form,
    .form_wrapper {
        width: 100vw;
        flex-direction: column;
    }

    .c-form {
        min-height: 100vh;
        justify-content: flex-start;
        padding: 20px;
        padding-bottom: 0;
    }

    .form_wrapper {
        padding: 20px;
        max-width: 1200px;
    }

    h2 {
        align-self: flex-start;
        font-size: 2rem;
        color: rgb(94, 93, 93);
        font-family: 'Quicksand';
        letter-spacing: 0.6rem;
    }

    .group {
        flex-flow: row wrap;
        width: 100%;
    }

    p {
        width: 100%;
    }

    :global(.heading-section) {
        width: 100%;
    }

    :global(.datepicker) {
        margin: 10px auto !important;
    }

    :global(.calendar, .month-selector) {
        display: block;
    }

    :global(.month-container) {
        justify-content: initial;
    }
</style>
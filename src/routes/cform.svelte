<script>
    import { onMount } from 'svelte';
    import Breadcrumb from '../components/breadcrumb.svelte';
    import InputText from '../components/inputs/input_text.svelte';
    import InputTextarea from '../components/inputs/input_textarea.svelte';
    import InputSelect from '../components/inputs/input_select.svelte';
    import Metadata from '../components/metadata.svelte'
    const metadata = { url: "https://gangaview.com/cform", title: "CForm - Shri Ganga View Guest House", description: "Lets finalise your check in.", keywords: "guest house, budget, laxman jhula, ganga, view, hotel, rishikesh, room, sunset, terrace, ghat, cheap", thumb: "images/thumbnails/home.png" }

    const path = [{ name: "C-Form", href: "./cform" }];

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



    <p>
        <button class="btn" on:click={api_send_c_form}>Submit</button>
    </p>
</div>
<style>

</style>
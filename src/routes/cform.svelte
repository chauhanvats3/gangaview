<script>
    import { onMount } from 'svelte';
    import Hero from '../components/Hero.svelte';
    import Metadata from '../components/metadata.svelte'
    import Basic from '../components/cform/basic.svelte'
    import Passport from '../components/cform/passport.svelte'
    import Misc from '../components/cform/misc.svelte'
    import Success from '../components/cform/success.svelte'
    import Buttons from '../components/cform/buttons.svelte'

    const metadata = { url: "https://gangaview.com/cform", title: "CForm - Shri Ganga View Guest House", description: "Lets finalise your check in.", keywords: "guest house, budget, laxman jhula, ganga, view, hotel, rishikesh, room, sunset, terrace, ghat, cheap", thumb: "images/thumbnails/home.png" }

    const path = [{ name: "C-Form", href: "./cform" }];
    const heroImage = "images/cform.jpg"


    const today = new Date();

    let dataset = {
        basic: {
            photo: "",
            f_name: "",
            l_name: "",
            sex: "",
            date_of_birth: "",
            special_category: "",
            nationality: "",
            address: "",
            city: "",
            country: ""
        },
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
        misc: {
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


    };

    let showSubmit = false;
    let pages = ["basic", "passport", "misc", "success"];
    let currentPageIndex = 0;
    let currentPage = pages[currentPageIndex];

    $: {
        currentPage = pages[currentPageIndex];
    }

    let buttonPressed = (e) => {
        //e.detail.text
        let whichButton = e.detail.text;

        if (whichButton === 'next') {
            currentPageIndex == pages.length - 1 ? currentPageIndex : currentPageIndex++;
        } else if (whichButton == 'prev') {
            currentPageIndex == 0 ? currentPageIndex : currentPageIndex--;
        } else {
            //api_send_c_form();
        }

        if (currentPageIndex == pages.length - 2) {
            showSubmit = true
        } else {
            showSubmit = false;
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


<div class="cform">
    <Hero {path} {heroImage} />

    <div class="entrySection">
        {#if currentPage==='basic'}
        <Basic bind:data={dataset.basic} />
        {:else if currentPage==='passport'}
        <Passport bind:passport={dataset.passport} bind:visa={dataset.visa} />
        {:else if currentPage==='misc'}
        <Misc bind:data={dataset.misc} />
        {:else}
        <Success />
        {/if}

    </div>

    <Buttons on:buttonPressed={buttonPressed} {currentPageIndex} bind:showSubmit={showSubmit} />
    {dataset.basic.sex}
</div>
<style>
    .cform {
        flex-flow: column nowrap;
        width: 100%;
        min-height: 100vh;
        justify-content: flex-start;
        margin: 20px 0;
    }

    .entrySection {
        flex-grow: 1;
        width: 100%;
    }
</style>
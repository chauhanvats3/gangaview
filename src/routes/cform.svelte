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
    let entrySection, welcome;
    let dataset = {
        basic: {
            photo: "",
            f_name: "",
            l_name: "",
            sex: "",
            dob: "",
            sp_cat: "",
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
            arrival: {
                date: "",
                country: "",
                city: "",
                place: ""
            },
            intended_stay: "",
            employed: "",
            purpose: "",
            next_destination: {
                india: "",
                country: "",
                state: "",
                city: "",
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

    let scrollOptions = { behavior: "smooth", block: "start", inline: "start" };

    let buttonPressed = (e) => {

        let whichButton = e.detail.text;

        if (whichButton === 'next') {
            welcome.scrollIntoView(scrollOptions);
            currentPageIndex == pages.length - 1 ? currentPageIndex : currentPageIndex++;


        } else if (whichButton == 'prev') {
            welcome.scrollIntoView(scrollOptions);
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

<Metadata {metadata} />

<div class="cform">
    <Hero {path} {heroImage} />
    <div class="welcome" bind:this={welcome}>
        <p>Welcome to</p>
        <p class="brand gradient-text gradient-blue-pink">Shri Ganga View Guest House</p>
        <p>Please Fill out the C-Form to Finalise your Check-In.</p>
    </div>

    <p class="caution">Avoid Using Device's Back Button Until Submit Is Successful.</p>

    <div class="entrySection" bind:this={entrySection}>
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
</div>
<style>
    .cform {
        flex-flow: column nowrap;
        width: 100%;
        min-height: 100vh;
        justify-content: flex-start;
        margin: 0 0 20px 0;
        text-align: center;
    }

    .welcome {
        flex-flow: column nowrap;
        width: 100%;
        font-size: 1.5rem;
        margin: 20px auto;
        padding: 20px;
    }

    .welcome p,
    .caution {
        justify-content: center;
        text-align: center;
    }

    .welcome p:first-child {
        font-size: 2.5rem;
    }

    .brand {
        font-size: 3rem;
        font-family: 'julius sans one';
        margin: 20px auto;
    }

    .caution {
        width: 100%;
        font-size: 1.2rem;
        margin: 20px auto;
        color: #d10404;
    }

    .entrySection {
        flex-grow: 1;
        width: 100%;
    }

    :global(.invalid .form__field,
        .invalid .form__field:focus) {
        border-bottom: 2px solid #d10404 !important;
        border-image: linear-gradient(90deg, #d10404, #d10404) !important;
        border-image-slice: 1 !important;
    }

    :global(.invalid .form__label) {
        color: #d10404 !important;
    }
</style>
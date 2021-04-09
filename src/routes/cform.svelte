<script>
    import { onMount } from 'svelte';
    import Hero from '../components/Hero.svelte';
    import Metadata from '../components/metadata.svelte'
    import Basic from '../components/cform/basic.svelte'
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
            }
        },

        contact_info: {
            email: "",
            indian_number: "",
            permanent_number: ""
        }
    };

    let showSubmit = false;
    let pages = ["basic", "passport", "misc", "success"];
    let currentPageIndex = 0;
    $: currentPage = pages[currentPageIndex];

    let changePage = (e) => {
        //e.detail.text
        let whichPage = e.detail.text;

        if (whichPage === 'next') {
            currentPageIndex == pages.length - 1 ? currentPageIndex : currentPageIndex++;
        } else if (whichPage == 'prev') {
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
    <Basic bind:data={dataset.basic} />
    <Buttons on:buttonPressed={changePage} {currentPageIndex} bind:showSubmit={showSubmit} />
    {dataset.basic.sex}
</div>
<style>
    .cform {
        flex-flow: column nowrap;
        width: 100%;
        min-height: 100vh;
        justify-content: flex-start;
    }
</style>
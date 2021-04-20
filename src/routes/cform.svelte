<script>
    import { onMount } from 'svelte';
    import Hero from '../components/Hero.svelte';
    import Metadata from '../components/metadata.svelte'
    import Basic from '../components/cform/basic.svelte'
    import Passport from '../components/cform/passport.svelte'
    import Misc from '../components/cform/misc.svelte'
    import Success from '../components/cform/success.svelte'
    import Buttons from '../components/cform/buttons.svelte'
    import { dataset, datavalid } from '../stores/store.js'

    const metadata = { url: "https://gangaview.com/cform", title: "CForm - Shri Ganga View Guest House", description: "Lets finalise your check in.", keywords: "guest house, budget, laxman jhula, ganga, view, hotel, rishikesh, room, sunset, terrace, ghat, cheap", thumb: "images/thumbnails/home.png" }

    const path = [{ name: "C-Form", href: "./cform" }];
    const heroImage = "images/cform.jpg"

    const today = new Date();
    let entrySection, welcome;

    let showSubmit = false;
    let pages = ["basic", "passport", "misc", "success"];
    let currentPageIndex = 0;
    let currentPage = pages[currentPageIndex];
    let isDataValid = true;
    let skipCheckCounter = 0;
    let skipChecking = false;
    let toast;

    $: currentPage = pages[currentPageIndex];
    $: if (skipCheckCounter > 9) {
        skipChecking = true;
        toast.classList.add("show");
        setTimeout(_ => {
            toast.classList.remove("show");
            skipCheckCounter = 0;
        }, 3000);
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
            isDataValid = true;
            validateData();
            if (isDataValid) {
                console.log("Data Valid")
                //api_send_c_form();
            }
            else {
                alert("Please Recheck If All Information is Provided and is Correct!")
            }
        }

        if (currentPageIndex == pages.length - 2) {
            showSubmit = true
        } else {
            showSubmit = false;
        }

    }
    let validateData = () => {
        if (skipChecking) return;
        traverse($datavalid, validateNode, "validateNode");
        traverse($dataset, validateFill, "validateFill");
    }
    function traverse(o, func, funcName) {
        for (let i in o) {
            func.apply(this, [i, o[i]]); //validateNode
            if (!isDataValid) return;
            if (o[i] !== null && typeof (o[i]) == "object") {
                //going one step down in the object tree!!
                if (funcName === "validateFill" && i === "next_destination") {
                    let o2 = o[i];
                    console.log(o2)
                    if (o2.india.trim().toLowerCase() === "yes") {
                        if (!o2.state || !o2.district || !o2.place) {
                            isDataValid = false; return;
                        }
                    } else {
                        if (!o2.country || !o2.city || !o2.place) {
                            isDataValid = false; return;
                        }
                    }
                } else
                    traverse(o[i], func, funcName);
            }
        }
    }

    function validateNode(key, value) {
        if (typeof value === 'boolean' && !value) {
            console.log(key + " : " + value)
            isDataValid = false;
            return false;
        }
    }

    function validateFill(key, value) {

        if (typeof value == 'string' && !value) {
            console.log(key + " : " + value)
            isDataValid = false;
            return false;
        }
    }

    async function api_send_c_form() {
        const url = `/api/send-c-form-email?dataset=${JSON.stringify($dataset)}`;
        try {
            const response = await fetch(url);
            const data = await response.json();

            console.log("data", data);

            if (data.info.accepted) alert("Mail Sent Successfully")
            else alert("Mail wasn't sent!")
        } catch (err) {
            console.error(err);
            alert("There was some Error! Please Retry.")
        }
    }

</script>

<Metadata {metadata} />

<div class="cform">
    <Hero {path} {heroImage} />
    <div class="welcome" bind:this={welcome}>
        <p>Welcome to</p>
        <p class="brand gradient-text gradient-blue-pink noselect" on:click={()=>{skipCheckCounter++}}>Shri Ganga View
            Guest
            House</p>
        <p>Please Fill out the C-Form to Finalise your Check-In.</p>
    </div>


    <p class="caution">Avoid Using Device's Back Button Until Submit Is Successful.</p>

    <div class="entrySection" bind:this={entrySection}>
        {#if currentPage==='basic'}
        <Basic bind:data={$dataset.basic} bind:datavalid={$datavalid.basic} />
        {:else if currentPage==='passport'}
        <Passport bind:passport={$dataset.passport} bind:visa={$dataset.visa} bind:passdatavalid={$datavalid.passport}
            bind:visadatavalid={$datavalid.visa} />
        {:else if currentPage==='misc'}
        <Misc bind:data={$dataset.misc} bind:datavalid={$datavalid.misc} />
        {:else}
        <Success />
        {/if}

    </div>

    <Buttons on:buttonPressed={buttonPressed} {currentPageIndex} bind:showSubmit={showSubmit} />

    <div class="toast" bind:this={toast}>Data Validation Skip Enabled</div>
</div>
<style>
    .cform {
        flex-flow: column nowrap;
        width: 100%;
        min-height: 100vh;
        justify-content: flex-start;
        margin: 0 0 20px 0;
        text-align: center;
        position: relative;
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

    .toast {
        position: fixed;
        bottom: -90px;
        background-color: #000000c5;
        border-radius: 15px;
        z-index: 100;
        color: white;
        padding: 10px 25px;
        font-size: 1.7rem;
        letter-spacing: .1rem;
        transition: all 0.6s cubic-bezier(0.68, -0.6, 0.32, 1.6);
    }

    :global(.toast.show) {
        bottom: 25px !important;
    }
</style>
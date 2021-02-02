<script>
    import IntersectionObserver from "svelte-intersection-observer";
    import { onMount } from 'svelte';

    let element, intersecting, previous, logo;
    onMount(() => {
        logo = document.getElementById("logo");
        previous = "About Us";
    });

    function inView() {
        if (intersecting)
            logo.innerHTML = "Contact Us";
        else {
            if (window.dirn === "down") {
                logo.innerHTML = previous
            }
        }
    }
</script>

<style>
    .contact-us {
        height: 100vh;
        width: 100%;
        background: #B4D1DE;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
        overflow: hidden;
    }

    .map {
        height: 100%;
        width: 50%;
    }

    .contact {
        height: 100%;
        width: 50%;
        flex-direction: column;
    }

    p {
        width: 100%;
        font-size: larger;
        word-break: break-all;
        text-align: right;

    }

    a {
        font-size: 1.5rem;
        margin: 5px;
        word-break: break-all;
        text-align: right;
        width: 100%;
    }

    @media (max-width: 850px) {
        .contact-us {
            flex-direction: column;
        }

        .contact,
        .map {
            width: 100%;
            height: 50%;
        }

        p {
            text-align: center;
        }
    }
</style>

<IntersectionObserver {element} bind:intersecting threshold=0.9 on:observe={inView}>

    <div class="contact-us" id="contact-us" bind:this={element}>
        <div class="contact">
            <p>Shri Ganga View Guest House<br>In Front Of Rani Temple <br> Laxman Jhula
                <br>Rishikesh, Uttarakhand <br>249302
            </p> <br> <br>
            <a href="tel:+919148220111">+91-9148220111</a>
            <a href="tel:+917500497481">+91-7500497481</a>
            <a href="mailto:gangaviewguesthouse@gmail.com">gangaviewguesthouse@gmail.com</a>
        </div>
        <div class="map">
            <iframe title="map_embed"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13803.794981680101!2d78.3297814!3d30.1242801!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa6e60e6bcb16dcf8!2sShri%20Ganga%20View%20Guest%20House!5e0!3m2!1sen!2sin!4v1612277629324!5m2!1sen!2sin"
                width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false"
                tabindex="0"></iframe>
        </div>
    </div>
</IntersectionObserver>
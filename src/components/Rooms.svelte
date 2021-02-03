<script>
    import IntersectionObserver from "svelte-intersection-observer";
    import { Slidy } from 'svelte-slidy';
    import { onMount } from 'svelte';


    let element, intersecting, previous, logo, dirn, index;
    const images = [
        { id: 1, src: "images/room1.jpg" },
        { id: 2, src: "images/room2.jpg" },
        { id: 3, src: "images/room3.jpg" }
    ];
    $: slidy_default = { // any name you like
        slides: images, // new name "slides" for arr yours slides elements in 2.0
        wrap: {
            id: 'room-slidy-wrap', // customize this instance Slidy by #id
            width: '100%',
            height: '100%',
            padding: '0',
            align: 'middle',
            alignmargin: 50
        },
        slide: {
            gap: 10,
            class: 'room-slide', // classname for styling slide
            width: '100%',
            height: '100%',
            backimg: false, // if true image on background slidewrap & slot for content empty
            imgsrckey: 'src', // prop for ypurs image src key
            objectfit: 'cover', // new in 2.3.0
            overflow: 'hidden' // new in 2.4.1
        },
        controls: {
            dots: true,
            dotsnum: true,
            dotsarrow: false,
            dotspure: true, // dotnav like realy dots :)
            arrows: true,
            keys: true, // nav by arrow keys
            drag: true, // nav by mousedrag
            wheel: true, // nav by mousewheel (shift + wheel) or swipe on touch/trackpads
        },
        options: {
            axis: 'x', // new in 2.2.0 axis direction
            loop: true, // new in 2.3.0 loop/no options
            duration: 1050, // duration slides animation
        }
    } // slidy settings for current instance

    onMount(() => {
        logo = document.getElementById("logo");
        previous = "<a href='.' style='text-decoration:none'>Ganga View<a>";
    });

    function inView() {
        if (intersecting) {
            logo.innerHTML = "Our Rooms"
        }
        else {
            if (window.dirn === "down") {
                logo.innerHTML = previous
            }
        }
    }



</script>

<style>
    .rooms {
        height: 100vh;
        width: 100%;
        background: #F2FCFF;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        overflow: hidden;

        border-radius: 10px;
        border: 10px solid transparent;
    }

    :global(#room-slidy-wrap),
    :global(.room-slide img) {
        border-radius: 10px;
    }

    @media(max-width: 1024px) {
        :global(.room-slide img) {
            object-fit: contain !important;
            width: fit-content !important;
            height: fit-content !important;
        }

        :global(#room-slidy-wrap) {
            height: 60%;
        }
    }
</style>
<IntersectionObserver {element} bind:intersecting threshold=0.9 on:observe={inView}>

    <div class="rooms" id="rooms" bind:this={element}>

        <Slidy {...slidy_default} bind:index let:item />
    </div>
</IntersectionObserver>
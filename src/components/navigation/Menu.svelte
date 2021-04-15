<script>

    export let showMenu;

    import { onMount } from 'svelte';
    import { createEventDispatcher } from 'svelte';
    import { goto } from '@sapper/app';


    const dispatch = createEventDispatcher();

    function itemClicked() {

        dispatch('itemClick', {
            text: 'Clicked!'
        });
    }

    onMount(() => {
        window.delayOpen = url => {
            setTimeout(function () { goto(url); }, 500);
        }
    });

    let menuItems = [{
        name: "Rooms & Amenities",
        href: "./rooms"
    }, {
        name: "Gallery",
        href: "./gallery"
    }, {
        name: "Testimonials",
        href: "./testimonials"
    }, {
        name: "FAQs",
        href: "./faqs"
    }, {
        name: "Local Area",
        href: "./local"
    }, {
        name: "Contact Us",
        href: "./contact"
    }, {
        name: "CForm",
        href: "./cform"
    }, {
        name: "Home",
        href: "."
    }];

</script>

<style>
    h1 {
        margin: 0 10% 0 0;
        color: white;
    }

    a {
        text-decoration: none;
        width: 100%;
        color: white;
    }


    .menu {
        z-index: 1;
        position: fixed;
        left: -100%;
        top: 0%;
        height: 100vh;
        width: 100%;
        transition: all 0.6s cubic-bezier(0.68, -0.6, 0.32, 1.6);
        background: #252525d7;
        flex-direction: column;
    }

    :global(.menu.showMenu) {
        left: 0%;
        top: 0%;
    }

    .menu-items {
        flex-direction: column;
        height: 100%;
        width: 100%;
        padding-top: 100px;
        justify-content: flex-start;
        overflow-y: scroll;


        -ms-overflow-style: none;
        /* IE and Edge */
        scrollbar-width: none;
        /* Firefox */
    }

    .menu-items::-webkit-scrollbar {
        display: none;
    }

    .item {
        width: 100%;
        margin: 20px auto;
        justify-content: flex-end;
    }




    @supports (backdrop-filter: blur()) or (-webkit-backdrop-filter: blur()) {

        .menu {
            backdrop-filter: blur(4px);
            -webkit-backdrop-filter: blur(4px);
            background: #252525d7;
        }

    }
</style>

<div class="menu" class:showMenu>
    <div class="menu-items">

        {#each menuItems as menuItem}
        <a href="javascript:delayOpen('{menuItem.href}');" on:click={itemClicked}>
            <div class="item">
                <h1>{menuItem.name}</h1>
            </div>
        </a>
        {/each}

    </div>
</div>
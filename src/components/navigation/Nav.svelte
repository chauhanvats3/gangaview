<script>
    import Ham from './Hamburger.svelte';
    import Menu from './Menu.svelte';

    let showMenu = false;
    let ham;
    const body = document.body;
    let pageURL = "", pageTitle = "";
    let handlePop = (event) => { hamClicked(1) };

    function hamClicked(code) {

        if (pageURL === "") {
            console.log("initial")
            pageURL = window.location.href;
            pageTitle = document.title;
            showMenu = true;
            body.classList.toggle("noscroll");
            ham.classList.toggle('active');

            window.addEventListener('popstate', handlePop);

            const nextURL = pageURL + '?menu=true';
            const nextTitle = pageTitle + " - Menu";
            const nextState = { additionalInformation: 'Opened Menu Overlay' };
            window.history.pushState(nextState, nextTitle, nextURL);
            return;
        }

        if (code === 1) {
            console.log("back")

            //back pressed
            showMenu = false;
            body.classList.toggle("noscroll");
            ham.classList.toggle('active');
        }
        else if (code === 0) {
            //ham clicked
            console.log("ham")

            if (ham.classList.contains("active")) {
                //cross clicked
                console.log("ham > cross")
                window.history.back();
            } else {
                //hamburger clicked
                console.log("ham > burger")
                pageURL = window.location.href;
                pageTitle = document.title;
                showMenu = true;
                body.classList.toggle("noscroll");
                ham.classList.toggle('active');

                const nextURL = pageURL + '?menu=true';
                const nextTitle = pageTitle + " - Menu";
                const nextState = { additionalInformation: 'Opened Menu Overlay' };
                window.history.pushState(nextState, nextTitle, nextURL);
            }


        }

    }
</script>

<div class="navbar">
    <div id="logo" class="logo">
        <a href="." style='text-decoration:none'> <img src="images/Logo/Logo-Full.png" alt="Logo"> </a>
    </div>
    <div class="hamburger">
        <Ham on:hamClick={()=>hamClicked(0)} bind:ham />
    </div>
</div>
<Menu {showMenu} on:itemClick={()=>hamClicked(0)} />



    <style>
        .navbar {
            position: fixed;
            top: 0;
            z-index: 2;
            width: 100%;
            height: 70px;
            background: #252525;
            justify-content: space-between;
            padding: 5px 0;
        }


        .logo,
        .logo>a {
            height: 100%;
        }

        img {
            z-index: -1;
            height: 60px;
            width: 113.14px;
        }

        .logo {
            margin: 0 15px;
        }

        .hamburger {
            margin: 0;
        }
    </style>
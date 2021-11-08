<script>
  import Ham from "./Hamburger.svelte";
  import Menu from "./Menu.svelte";

  let showMenu = false;
  let ham;
  const body = document.body;
  let pageURL = "",
    pageTitle = "";
  let handlePopMenuOverlay = (event) => {
    hamClicked(1);
  };

  function logoClicked() {
    if (ham.classList.contains("active")) {
      //cross clicked
      window.history.back();
    }
  }

  function hamClicked(code) {
    if (pageURL === "") {
      pageURL = window.location.href;
      pageTitle = document.title;
      showMenu = true;
      body.classList.toggle("noscroll");
      ham.classList.toggle("active");
      const nextURL = pageURL + "?menu=true";
      const nextTitle = pageTitle + " - Menu";
      const nextState = { additionalInformation: "Opened Menu Overlay" };
      window.history.pushState(nextState, nextTitle, nextURL);
      return;
    }

    if (code === 1) {
      //back pressed
      /*     let isMenuOpen = window.location.href.includes("menu=true");
                if (!isMenuOpen) return; */

      if (ham.classList.contains("active")) {
        body.classList.toggle("noscroll");
        ham.classList.toggle("active");
      }
      showMenu = false;
    } else if (code === 0) {
      //ham clicked
      //register on pop function
      window.onpopstate = function (event) {
        handlePopMenuOverlay();
      };

      if (ham.classList.contains("active")) {
        //cross clicked
        window.history.back();
      } else {
        //hamburger clicked
        pageURL = window.location.href;
        pageTitle = document.title;
        showMenu = true;
        body.classList.toggle("noscroll");
        ham.classList.toggle("active");

        const nextURL = pageURL + "?menu=true";
        const nextTitle = pageTitle + " - Menu";
        const nextState = { additionalInformation: "Opened Menu Overlay" };
        window.history.pushState(nextState, nextTitle, nextURL);
      }
    }
  }
</script>

<div class="navbar">
  <div id="logo" class="logo" on:click={() => logoClicked()}>
    <a href="." style="text-decoration:none">
      <img src="images/Logo/logo-full.webp" alt="Logo" />
    </a>
  </div>
  <div class="hamburger">
    <Ham on:hamClick={() => hamClicked(0)} bind:ham />
  </div>
</div>
<Menu {showMenu} on:itemClick={() => hamClicked(0)} />

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
  .logo > a {
    height: 100%;
  }

  img {
    z-index: -1;
    height: 70px;
  }

  .logo {
    margin: 0 15px;
  }

  .hamburger {
    margin: 0;
  }
</style>

<script>
    export let category;
    export let index;
    let theme = parseInt(index) % 2;
</script>

<div class="category">
    <div class="title {theme === 0 ? 'theme1' : 'theme2'}">
        <p
            class=" {theme === 0
                ? 'gradient-text gradient-blue-green'
                : 'gradient-text gradient-blue-pink'}"
        >
            {category.name}
        </p>
    </div>
    <div
        class="content {theme === 0 ? 'theme1' : 'theme2'}"
        style="background-image: url('{category.image}');"
    >
        <div class="overlay">
            <div class="features">
                <div class="pro">
                    {#each category.features.pro as pro}
                        <p>
                            {pro}
                            <svg
                                width="25"
                                height="25"
                                viewBox="0 0 25 25"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M8.53125 18.75L2.625 11.7187L3.55294 10.6141L8.53125 16.5398L17.4471 5.92656L18.375 7.03125L8.53125 18.75Z"
                                    fill="black"
                                />
                            </svg>
                        </p>
                    {/each}
                </div>
                <div class="con">
                    {#each category.features.con as con}
                        <p>
                            {con}
                            <svg
                                width="25"
                                height="25"
                                viewBox="0 0 25 25"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M5.70786 3.86344L12.25 10.4053L18.7652 3.89036C18.8794 3.76883 19.0169 3.67162 19.1696 3.60454C19.3223 3.53746 19.4869 3.5019 19.6537 3.5C20.0107 3.5 20.3531 3.64182 20.6055 3.89426C20.858 4.14669 20.9998 4.48907 20.9998 4.84607C21.0029 5.0111 20.9723 5.17503 20.9098 5.32781C20.8473 5.48058 20.7542 5.61897 20.6363 5.73448L14.0538 12.2495L20.6363 18.8318C20.8582 19.0488 20.9883 19.3427 20.9998 19.6529C20.9998 20.0099 20.858 20.3522 20.6055 20.6047C20.3531 20.8571 20.0107 20.9989 19.6537 20.9989C19.4821 21.0061 19.3109 20.9774 19.151 20.9149C18.9911 20.8523 18.846 20.7572 18.7248 20.6355L12.25 14.0936L5.72132 20.622C5.60758 20.7395 5.4717 20.8333 5.32152 20.898C5.17135 20.9627 5.00984 20.997 4.84634 20.9989C4.48933 20.9989 4.14693 20.8571 3.89449 20.6047C3.64204 20.3522 3.50022 20.0099 3.50022 19.6529C3.49708 19.4878 3.5277 19.3239 3.5902 19.1711C3.6527 19.0184 3.74576 18.88 3.86367 18.7645L10.4462 12.2495L3.86367 5.66718C3.64181 5.45013 3.51171 5.15622 3.50022 4.84607C3.50022 4.48907 3.64204 4.14669 3.89449 3.89426C4.14693 3.64182 4.48933 3.5 4.84634 3.5C5.16941 3.50404 5.47902 3.63461 5.70786 3.86344Z"
                                    fill="black"
                                />
                            </svg>
                        </p>
                    {/each}
                </div>
            </div>
            <div class="cta">
                <a
                    rel="noreferrer"
                    href="https://www.booking.com/hotel/in/shri-ganga-view-guest-house.en-gb.html"
                    target="_blank"
                >
                    <div class="book">
                        <p class=" gradient-blue-pink gradient-text">
                            Book Now
                        </p>
                    </div>
                </a>
                <a href="./gallery">
                    <div class="gallery">
                        <p class=" gradient-blue-green gradient-text">Images</p>
                    </div>
                </a>
            </div>
        </div>
    </div>
</div>

<style>
    :global(.theme1) {
        background-color: var(--dark-gray);
        border: 5px solid var(--dark-gray);
        border-top: 0;
    }

    :global(.theme2) {
        background-color: white;
        border: 5px solid white;
        border-top: 0;
    }

    .category {
        height: 580px;
        width: 100%;
        flex-flow: column nowrap;
        justify-content: flex-start;
    }

    .title {
        width: 100%;
        height: 76px;
        justify-content: flex-start;
    }

    .title p {
        margin: 0 20px;
        font-family: "Julius Sans One";
        font-size: 1.5rem;
        justify-content: flex-start;
    }

    .content {
        width: 100%;
        height: 504px;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        position: relative;
        overflow: hidden;
    }

    .content:hover .overlay {
        top: 0%;
    }

    .overlay {
        width: 101%;
        height: 101%;
        background: #000000ad;
        position: absolute;
        top: 100%;
        transition: all 0.6s cubic-bezier(0.68, -0.6, 0.32, 1.6);
        flex-flow: column nowrap;
        justify-content: space-between;
    }

    .features {
        flex-flow: column nowrap;
        width: 100%;
    }

    .pro,
    .con {
        width: 100%;
        margin-top: 20px;
        padding: 0 3%;
        flex-flow: row wrap;
        justify-content: flex-start;
    }

    .features p {
        margin: 10px;
        padding: 10px 10px 10px 20px;
        border-radius: 25px;
        white-space: nowrap;
        font-weight: bolder;
    }

    .pro p {
        background: rgba(183, 219, 36, 0.75);
    }

    .con p {
        background: rgba(244, 36, 17, 0.75);
    }

    .cta {
        width: 100%;
        margin: 10px;
        flex-flow: row wrap;
    }

    .cta a {
        margin: 10px;
        text-decoration: none;
    }

    .book {
        background-color: white;
        border-radius: 10px;
        padding: 0 15px;
        width: 200px;
    }

    .gallery {
        background-color: var(--dark-gray);
        border-radius: 10px;
        padding: 0 15px;
        width: 200px;
    }

    .cta a div p {
        font-family: "Julius Sans One";
        margin: 10px;
    }

    @media (min-width: 1000px) {
        .category {
            max-width: 49vw;
        }

        .cta a div p {
            font-size: 1.5rem;
        }

        .pro p,
        .con p {
            font-size: 1.2rem;
        }
    }
</style>

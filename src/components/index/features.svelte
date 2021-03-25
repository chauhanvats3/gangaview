<script>
    let illustrations = [{
        src: "images/illustrations/sunset.svg",
        caption: "Unobstructed Sunset View"
    },
    {
        src: "images/illustrations/ghat.svg",
        caption: "Closest to the ghat"
    },
    {
        src: "images/illustrations/patio.svg",
        caption: "Public Accessible Patio And Terrace"
    }];
</script>

<style>
    .features {
        width: 100%;
        min-height: 50vh;
        flex-flow: column nowrap;
        justify-content: flex-start;
        background-color: #f1f1f1;
    }

    .title {
        font-family: 'Julius Sans One';
        width: 100%;
        height: 65.5px;
        background-color: white;
        justify-content: flex-start;
        padding: 0 20px;
    }

    .title p {
        font-size: 1.5rem;
    }

    .content {
        border: 6px solid white;
        border-top: 0px;
        width: 100%;
        flex-grow: 1;
        flex-flow: column nowrap;
        justify-content: flex-start;
    }

    .illus {
        flex-flow: column nowrap;
        width: 100%;
        margin: 25px 0;
    }

    embed {
        margin: 10px auto;
        width: 65%;
    }

    .illus p {
        font-size: 24px;
        margin: 10px auto;
        font-family: 'Julius Sans One';
        text-align: center;
    }
</style>

<div class="features">
    <div class="title">
        <p class=" gradient-text gradient-blue-pink">We Boast . . .</p>
    </div>
    <div class="content">

        {#each illustrations as illustration}
        <div class="illus">
            <embed src={illustration.src} type="">
            <p>{illustration.caption}</p>
        </div>
        {/each}
    </div>
</div>
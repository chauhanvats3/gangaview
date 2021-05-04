<script>
    import EachReview from '../Testimonials/EachReview.svelte'

    let reviews = [
        {
            content: `It is the perfect hotel to fully enjoy Rishikesh. Close to all the nice places and still very peaceful. The rooms are big, clean and there is a nice rooftop place. <br><br>
            The staff and owner are super kind, thank you soo much for the wonderful stay!`,
            author: "Yven Donkers"
        },
        {
            content: "Amazing view, spacious open area, neat rooms and linen, stayed for 10 days and loved it. Thank you Vatsal, definitely coming back.",
            author: "A_Rush_Ice J"
        }]
</script>

<style>
    .reviews {
        width: 100%;
        min-height: 50vh;
        flex-flow: column nowrap;
        justify-content: flex-start;
        background-color: var(--back-white);
        border: 6px solid white;

    }

    a {
        flex-flow: column nowrap;
        width: 100%;
        min-height: 50vh;
        text-decoration: none;
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
        border-top: 0px;
        width: 100%;
        flex-grow: 1;
        flex-flow: column nowrap;
        justify-content: center;
        max-width: 75ch;
    }

    .review {
        margin: 10%;
        max-width: 30ch;
        font-family: 'Quicksand';
        font-size: 1.4rem;
        line-height: 2.3rem;
        letter-spacing: .07rem;
        word-spacing: .27rem;
        text-align: left;
    }

    .author {
        font-size: 1.7rem;
        width: 100%;
        justify-content: flex-end;
        font-family: 'Julius Sans One';
        color: #797979;
        padding: 5px 10%;
    }

    .contents {
        flex-flow: row wrap;
        width: 100%;
    }
</style>

<div class="reviews">
    <a href="./testimonials">
        <div class="title">
            <p class=" gradient-text gradient-blue-pink">Testimonials</p>
        </div>
        <!--   <div class="content">
            <div class="review">
                Wow what an amazing place! <br>
                Stayed here for 3-4 months and had the best time! <br>
                Good location, nice rooms and the family that own the place are super cute!!
            </div>
            <div class="author">Azi Ben Arroch</div>
        </div> -->
        <div class="contents">
            {#each reviews as review,index}
            <EachReview {review} {index} width="40vw" />
            {/each}
        </div>

    </a>
</div>
<script>
    import EachReview from '../components/Testimonials/EachReview.svelte'
    import Metadata from '../components/metadata.svelte'
    const metadata = { title: "Testimonials - Shri Ganga View Guest House", description: "Our guests leave the best reviews. Here’s some nice things our guests wrote about us on Google.", keywords: "guest house, budget, laxman jhula, ganga, view, hotel, rishikesh, room, sunset, terrace, ghat, cheap", thumb: "images/thumbnails/home.png" }
    let reviews = [
        {
            content: `It is the perfect hotel to fully enjoy Rishikesh. Close to all the nice places and still very peaceful. The rooms are big, clean and there is a nice rooftop place. <br/>
            The staff and owner are super kind, thank you soo much for the wonderful stay!`,
            author: "Yven Donkers"
        },
        {
            content: "Amazing view, spacious open area, neat rooms and linen, stayed for 10 days and loved it. Thank you Vatsal, definitely coming back.",
            author: "A_Rush_Ice J"
        },
        {
            content: `Wow what an amazing place!<br/>
            Stayed here for 3-4 months and had the best time! <br/>
            Good location, nice rooms and the family that own the place are super cute!!`,
            author: "Azi Ben Arroch"
        },
        {
            content: `Best hotel around Laxman Jhula!! Good piece, super nice view, cool staff and exactly what we needed! <br/>
            Recommend room 201 :) you can watch the sunset from you own balcony! <br/>
            The place is run by a family and they are very nice people.`,
            author: "Miki Szelestei"
        },
        {
            content: `Had such a beauuutiful time in this place.with amazing poeples who works here and most important only 1 vegan restraunt in lakshman jhula,with its amazing food nd services and enviroment inside. <br/>
            have also doms room with seperate besds and others rooms for families and for couples also..highely recommendable place just in the middle of lakshman jhula..🔝♻️🔊`,
            author: "CRAZY INDIAN TRAVELLER"
        },
        {
            content: `Hotel location is superb. Right in mid of main market. Top floor last room is having superb view of Ganga river. Staff is courteous and generous.<br/> This is one of best budgeted hotel`,
            author: "Prateek Gupta"
        },
        {
            content: `Osm view and easy to approach near laxman jhula, market and other. Hotel staff and hospitality very good. ☺️☺️`,
            author: "Arjun Rathore"
        },
        {
            content: `Better than so called 3 star property<br/>
            Beautiful view of ganga river<br/>
            Near to all cafes walking distance<br/>
            We got room in 700 rs only and million dollar view of ganga maiya`,
            author: "karan luthra"
        }
    ]
</script>

<div class="testimonials">
    <div class="info">
        <p>Here’s some nice things our guests wrote about us on Google.</p>
    </div>
    {#each reviews as review,index}
    <EachReview {review} {index} />
    {/each}
</div>

<style>
    .testimonials {
        width: 100%;
        flex-flow: column nowrap;
        margin-top: 70px;
    }

    .info {
        width: 100%;
        padding: 50px 20px;
    }

    .info p {
        font-family: 'Julius Sans One';
        font-size: 2rem;
        text-align: center;
    }
</style>
<script>
    import Metadata from '../components/metadata.svelte';
    import Hero from '../components/Hero.svelte'
    import EachFAQ from '../components/FAQs/eachfaq.svelte'
    const heroImage = "images/faqs.jpg"
    const path = [{ name: "FAQs", href: "./faqs" }]

    const metadata = { url: "https://gangaview.com/faqs", title: "FAQs - Shri Ganga View Guest House", description: "Here are some of the most frequently asked questions.", keywords: "guest house, budget, laxman jhula, ganga, view, hotel, rishikesh, room, sunset, terrace, ghat, cheap", thumb: "images/thumbnails/home.png" }

    let faqs = [
        {
            que: `Are smoking and consuming alcohol permitted in the facility premise?`,
            ans: `Alcohol consumption inside the room, without causing a ruckus is allowed in our Guest House`
        },
        {
            que: `Do you welcome unmarried couples here at the property?`,
            ans: `Yes, unmarried couples are allowed as well as married couples.`
        },
        {
            que: `Is covid negative report mandatory to travel to Rishikesh?`,
            ans: `Hi, It is advised by Govt to bring negative covid reports. If you cannot bring, test can be conducted on arrival at the border as well.`
        },
        {
            que: `Is there ac in any room?`,
            ans: `Sorry, we don't provide AC in any of the rooms currently.`
        },
        {
            que: `Do you have kitchen or cooking area in room?`,
            ans: `Sorry, there is no kitchen in the Guest House for public use.`
        },
        {
            que: `Which room has river view?`,
            ans: `The option in which 'River View' is listed as an amenity. Although you can catch a pretty good view from the patio as well.`
        },
        {
            que: `What's the speed of wifi connection at your place? Want to book for long stay work.`,
            ans: `Hi, we have a high speed internet that gives around 10Mbps.`
        },
        {
            que: `Can i park my bike there?`,
            ans: `Yes, we have a free two wheeler parking available.`
        },
        {
            que: `Is there in house restaurant available`,
            ans: `Sorry, we don't have any restaurant. But the cafe next door serves great food`
        },
        {
            que: `Do you have geyser in the bathroom ? Also, let me know if you have TV in the room`,
            ans: `Hi, We do have geyser in the bathroom. Unfortunately, we don't have TVs.`
        }
    ]
</script>

<div class="faqs">
    <Hero {heroImage} {path} />
    <div class="heading">
        <p>Frequently Asked Questions</p>
    </div>
    {#each faqs as qna,index}
    <EachFAQ {qna} {index} />
    {/each}
</div>

<style>
    .faqs {
        width: 100%;
        flex-flow: column nowrap;
    }

    .heading {
        width: 100%;
        padding: 40px 20px;
    }

    .heading p {
        font-family: 'Julius sans one';
        font-size: 4rem;
        text-align: center;
    }
</style>
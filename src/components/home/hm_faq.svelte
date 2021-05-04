<script>
    import EachFAQ from '../FAQs/eachfaq.svelte'
    let faqs = [
        {
            que: `Are smoking and consuming alcohol permitted in the facility premise?`,
            ans: `Alcohol consumption inside the room, without causing a ruckus is allowed in our Guest House`
        },
        {
            que: `Do you welcome unmarried couples here at the property?`,
            ans: `Yes, unmarried couples are allowed as well as married couples.`
        }]
</script>

<a href="./faqs" class="faqs">
    <div class="title">
        <p class=" gradient-text gradient-blue-green">FAQs</p>
    </div>
    <div class="wrapper">
        {#each faqs as qna,index}
        <EachFAQ {qna} {index} />
        {/each}
    </div>
</a>

<style>
    .faqs {
        width: 100%;
        border: 6px solid white;
        flex-flow: column nowrap;
        text-decoration: none;
        justify-content: flex-start;
        background: var(--back-white);
    }


    .title {
        font-family: 'Julius Sans One';
        width: 100%;
        height: 65.5px;
        background-color: white;
        justify-content: flex-start;
        padding: 0 14px;
    }

    .title p {
        font-size: 1.5rem;
    }

    .wrapper {
        width: 100%;
        flex-flow: row wrap;
    }
</style>
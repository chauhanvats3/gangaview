<script>
    import EachFAQ from '../FAQs/eachfaq.svelte'
    let qna = {
        que: `Is covid negative report mandatory to travel to Rishikesh?`,
        ans: `Hi, It is advised by Govt to bring negative covid reports. If you cannot bring, test can be conducted on arrival at the border as well.`
    }
</script>

<a href="./faqs" class="faqs">
    <div class="title">
        <p class=" gradient-text gradient-blue-green">FAQs</p>
    </div>
    <EachFAQ {qna} />
</a>

<style>
    .faqs {
        width: 100%;
        border: 6px solid var(--dark-gray);
        flex-flow: column nowrap;
        text-decoration: none;
        justify-content: flex-start;
    }


    .title {
        font-family: 'Julius Sans One';
        width: 100%;
        height: 65.5px;
        background-color: var(--dark-gray);
        justify-content: flex-start;
        padding: 0 14px;
    }

    .title p {
        font-size: 1.5rem;
    }

    .title {}
</style>
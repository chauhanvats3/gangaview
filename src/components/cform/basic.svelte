<script>

    import Text from '../inputs/text.svelte';
    import Select from '../inputs/select.svelte';

    export let data;

    const sexOptions = [{ text: "male", index: 0 }, { text: "female", index: 1 }, { text: "transgender", index: 2 }];

</script>

<div class="basic">
    <p>Basic Details</p>
    <Text inputName="First Name" id="f_name" bind:val={data.f_name} placeholder="John" />
    <Text inputName="Last Name" id="l_name" bind:val={data.l_name} placeholder="Doe" />

    <Select inputName="Sex" id="sex" bind:val={data.sex} placeholder="M/F" options={sexOptions} />
</div>

<style>
    .basic {
        flex-flow: column nowrap;
        width: 100%;
        max-width: 75ch;
        justify-content: flex-start;
        margin: 20px 0;
    }

    p {
        font-family: 'julius sans one';
        font-size: 1.5rem;
        width: 100%;
        justify-content: flex-start;
        letter-spacing: 1rem;
        padding: 20px 10px 0 20px;
    }
</style>
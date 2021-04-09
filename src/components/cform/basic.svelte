<script>

    import Text from '../inputs/text.svelte';
    import Select from '../inputs/select.svelte';
    import Date from '../inputs/date.svelte'

    export let data;

    const sexOptions = [{ text: "male", index: 0 }, { text: "female", index: 1 }, { text: "transgender", index: 2 }];

    const spCatOptions = [{ text: "male", index: 0 }, { text: "female", index: 1 }, { text: "transgender", index: 2 }];

    const countries = [{ text: "India", index: 0 }, { text: "Israel", index: 1 }, { text: "USA", index: 2 }];

    /* basic: {
            photo: "",
            f_name: "",
            l_name: "",
            sex: "",
            dob: "",
            sp_cat: "",
            nationality: "",
            address: "",
            city: "",
            country: ""
        } */

</script>

<div class="basic">
    <p>Basic Details</p>
    <Text inputName="First Name" id="f_name" bind:val={data.f_name} placeholder="Greatest" />
    <Text inputName="Last Name" id="l_name" bind:val={data.l_name} placeholder="Ever" />
    <Select inputName="Sex" id="sex" bind:val={data.sex} placeholder="M/F" options={sexOptions} />
    <Date inputName="Date Of Birth" id="dob" bind:val={data.dob} placeholder="dd/mm/yyyy" minDate="today" />
    <Select inputName="Special Category" id="sp_cat" bind:val={data.sp_cat} placeholder="Others"
        options={spCatOptions} />
    <Select inputName="Nationality" id="nationality" bind:val={data.nationality} placeholder="Wakanda"
        options={countries} />
    <Text inputName="Address" id="address" bind:val={data.address} placeholder="Greatest" />

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
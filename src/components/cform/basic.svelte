<script>

    import Text from '../inputs/text.svelte';
    import Select from '../inputs/select.svelte';
    import Date from '../inputs/date.svelte'

    export let data;

    const sexOptions = [{ text: "male", index: 0 }, { text: "female", index: 1 }, { text: "transgender", index: 2 }];

    const spCatOptions = [
        { index: 0, value: 3, text: "Crew" },
        { index: 1, value: 7, text: "Diplomat Exempted" },
        { index: 2, value: 4, text: "Emergency Transit" },
        { index: 3, value: 12, text: "Loss of Passport" },
        { index: 4, value: 1, text: "Newly Born" },
        { index: 5, value: 10, text: "OCI" },
        { index: 6, value: 6, text: "Official Exempted" },
        { index: 7, value: 8, text: "Other Exempted" },
        { index: 8, value: 9, text: "Others" },
        { index: 9, value: 11, text: "PIO" },
        { index: 10, value: 2, text: "Refugee" },
        { index: 11, value: 5, text: "TLP" }];

    /* 
    
     */

    const countries = [{ text: "India", index: 0 }, { text: "Israel", index: 1 }, { text: "USA", index: 2 }];

    $: console.log(data)

</script>

<div class="basic">
    <p>Basic Details</p>
    <Text inputName="First Name" id="f_name" bind:val={data.f_name} placeholder="Greatest"
        hint="According to passport" />

    <Text inputName="Last Name" id="l_name" bind:val={data.l_name} placeholder="Ever" hint="Also called surname" />

    <Select inputName="Sex" id="sex" bind:val={data.sex} placeholder="M/F" options={sexOptions}
        hint="Whatever your passport says!" />

    <Date inputName="Date Of Birth" id="dob" bind:val={data.dob} placeholder="" maxDate="today"
        hint="When are we celebrating, mate?" />

    <Select inputName="Special Category" id="sp_cat" bind:val={data.sp_cat} placeholder="Others"
        options={spCatOptions} />

    <Select inputName="Nationality" id="nationality" bind:val={data.nationality} placeholder="Wakanda"
        options={countries} hint="You pledge Allegiance to the flag of. . ." />

    <Text inputName="Address" id="address" bind:val={data.address} placeholder="Address"
        hint="Home is where the heart is; But we need permanent address here." />

    <Text inputName="City" id="city" bind:val={data.city} placeholder="City" hint="...And city" />

    <Select inputName="Country" id="country" bind:val={data.country} placeholder="Wakanda" options={countries}
        hint="...And The Country" />



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
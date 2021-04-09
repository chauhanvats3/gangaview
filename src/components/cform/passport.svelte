<script>
    import Text from '../inputs/text.svelte';
    import Select from '../inputs/select.svelte';
    import Date from '../inputs/date.svelte';
    import { onMount } from 'svelte'

    export let passport, visa;



    //var today = new Date('1995-12-17T03:24:00');
    //let todayStr = `${today.getFullYear()}-${parseInt(date.getMonth() + 1)}-${today.getDate()}`;
    //console.log(todayStr + "Date")


    const countries = [{ text: "India", index: 0 }, { text: "Israel", index: 1 }, { text: "USA", index: 2 }];
    const visaTypes = [{ text: "India", index: 0 }, { text: "Israel", index: 1 }, { text: "USA", index: 2 }];
    const visaSubtypes = [{ text: "India", index: 0 }, { text: "Israel", index: 1 }, { text: "USA", index: 2 }];

</script>

<div class="passport">
    <p>Passport Details</p>
    <Text inputName="Passport Number" id="pass_no" bind:val={passport.number} placeholder="AB123456" />
    <Date inputName="Issued On" id="pdoi" bind:val={passport.issue} placeholder="dd/mm/yyyy" />
    <Date inputName="Expiring On" id="pdoe" bind:val={passport.expiry} placeholder="dd/mm/yyyy" />
    <Text inputName="City" id="pcity" bind:val={passport.city} placeholder="Birnin Zana" />
    <Select inputName="Country" id="pcountry" bind:val={passport.country} placeholder="Wakanda" options={countries} />


    <p>Visa Details</p>
    <Text inputName="Visa Number" id="pass_no" bind:val={visa.number} placeholder="AB123456" />
    <Text inputName="Issued On" id="vdoi" bind:val={visa.issue} placeholder="dd/mm/yyyy" />
    <Text inputName="Expiring On" id="vdoe" bind:val={visa.expiry} placeholder="dd/mm/yyyy" />
    <Text inputName="City" id="vcity" bind:val={visa.city} placeholder="Birnin Zana" />
    <Select inputName="Country" id="vcountry" bind:val={visa.country} placeholder="Wakanda" options={countries} />
    <Select inputName="Visa Type" id="vtype" bind:val={visa.type} placeholder="Tourist" options={visaTypes} />
    <Select inputName="Visa Subtype" id="vsubtype" bind:val={visa.subtype} placeholder="e-TV" options={visaSubtypes} />

</div>

<style>
    .passport {
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
<script>
    import Text from '../inputs/text.svelte';
    import Select from '../inputs/select.svelte';
    import Date from '../inputs/date.svelte';
    import { specialCategories, countries, sexOptions, states, visaTypes, purpose } from '../../../static/data.js';

    export let passport, visa, passdatavalid, visadatavalid;
    let visaSelected = visaTypes[0]
    let visaSubtypes = visaSelected.subtypes;

    $: {
        visaSubtypes = visaChanged(visa.type);
    }

    let visaChanged = (selected) => {

        if (!selected) {
            return [{ text: "", index: 0, value: 0 }]
        }

        let visaSelected = visaTypes.find(element => element.text.trim().toLowerCase() === selected.trim().toLowerCase());
        console.log(selected)
        console.log(visaSelected)
        if (visaSelected)
            return visaSelected.subtypes;
        else return visaTypes[0].subtypes
    }
</script>

<div class="passport">
    <p>Passport Details</p>
    <Text inputName="Passport Number" id="pass_no" bind:val={passport.number} placeholder="AB123456" hint="" />

    <Date inputName="Issued On" id="pdoi" bind:val={passport.issue} bind:valid={passdatavalid.issue} placeholder=""
        maxDate="today" />


    <Text inputName="City" id="pcity" bind:val={passport.city} placeholder="King's Landing"
        hint="Where passport was issued." />

    <Select inputName="Country" id="pcountry" bind:val={passport.country} bind:valid={passdatavalid.country}
        placeholder="Westeros" options={countries} hint="Where passport was issued." />


    <Date inputName="Expiring On" id="pdoe" bind:val={passport.expiry} bind:valid={passdatavalid.expiry} placeholder=""
        minDate="today" />


    <p>Visa Details</p>
    <Text inputName="Visa Number" id="visa_no" bind:val={visa.number} placeholder="AB123456" />

    <Date inputName="Issued On" id="vdoi" bind:val={visa.issue} bind:valid={visadatavalid.issue} placeholder=""
        maxDate="today" />

    <Text inputName="City" id="vcity" bind:val={visa.city} placeholder="Lorath" hint="Where Visa was issued." />

    <Select inputName="Country" id="vcountry" bind:val={visa.country} bind:valid={visadatavalid.country}
        placeholder="Essos" options={countries} hint="Where Visa was issued." />

    <Select inputName="Visa Type" id="vtype" bind:val={visa.type} placeholder="e-Visa" options={visaTypes}
        hint="Special symbols like - are needed" bind:valid={visadatavalid.type} />

    <Select inputName="Visa Subtype" id="vsubtype" bind:val={visa.sub_type} bind:valid={visadatavalid.sub_type}
        placeholder="e-TV" options={visaSubtypes} hint="Special symbols like - are needed" />

    <Date inputName=" Expiring On" id="vdoe" bind:val={visa.expiry} placeholder="" minDate="today"
        bind:valid={visadatavalid.expiry} />

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
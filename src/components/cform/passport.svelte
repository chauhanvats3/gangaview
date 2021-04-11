<script>
    import Text from '../inputs/text.svelte';
    import Select from '../inputs/select.svelte';
    import Date from '../inputs/date.svelte';
    import { specialCategories, countries, sexOptions, states, visaTypes, purpose } from '../../../static/data.js';

    export let passport, visa;
    let visaSelected = visaTypes[0]
    let visaSubtypes = visaSelected.subtypes;

    $: {
        visaSubtypes = visaChanged(visa.type);
    }

    let visaChanged = (selected) => {

        if (!selected) {
            return [{ text: "", index: 0, value: 0 }]
        }

        let visaSelected = visaTypes.find(element => element.text.toLowerCase() === selected.toLowerCase());
        return visaSelected.subtypes;
    }
</script>

<div class="passport">
    <p>Passport Details</p>
    <Text inputName="Passport Number" id="pass_no" bind:val={passport.number} placeholder="AB123456" />

    <Date inputName="Issued On" id="pdoi" bind:val={passport.issue} placeholder="" maxDate="today" />


    <Text inputName="City" id="pcity" bind:val={passport.city} placeholder="Birnin Zana" />

    <Select inputName="Country" id="pcountry" bind:val={passport.country} placeholder="Wakanda" options={countries} />


    <Date inputName="Expiring On" id="pdoe" bind:val={passport.expiry} placeholder="" minDate="today" />


    <p>Visa Details</p>
    <Text inputName="Visa Number" id="pass_no" bind:val={visa.number} placeholder="AB123456" />
    <Date inputName="Issued On" id="vdoi" bind:val={visa.issue} placeholder="" maxDate="today" />

    <Text inputName="City" id="vcity" bind:val={visa.city} placeholder="Birnin Zana" />
    <Select inputName="Country" id="vcountry" bind:val={visa.country} placeholder="Wakanda" options={countries} />
    <Select inputName="Visa Type" id="vtype" bind:val={visa.type} placeholder="Tourist" options={visaTypes} />
    <Select inputName="Visa Subtype" id="vsubtype" bind:val={visa.subtype} placeholder="e-TV" options={visaSubtypes} />
    <Date inputName="Expiring On" id="vdoe" bind:val={visa.expiry} placeholder="" minDate="today" />

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
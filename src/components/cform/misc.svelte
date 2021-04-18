<script>

    import Text from '../inputs/text.svelte';
    import Select from '../inputs/select.svelte';
    import Date from '../inputs/date.svelte'
    import Number from '../inputs/number.svelte'
    import { countries, states, purpose, yesno } from '../../../static/data.js';

    export let data, datavalid;

    let stateSelected = states[0]
    let districts = stateSelected.districts;

    $: {
        districts = stateChanged(data.next_destination.state);
    }

    let stateChanged = (selected) => {

        if (!selected) {
            return [{ text: "", index: 0 }]
        }

        let stateSelected = states.find(element => element.text.toLowerCase() === selected.toLowerCase());
        return stateSelected.districts;
    }

</script>

<div class="misc">
    <p>Miscellaneous</p>
    <Date inputName="Arrival In India" id="doai" bind:val={data.arrival.date} bind:valid={datavalid.arrival.date}
        placeholder="" maxDate="tomorrow" hint="Arrival Date according to latest Visa" />

    <Select inputName="Arrived From Country" id="arrcountry" bind:val={data.arrival.country}
        bind:valid={datavalid.arrival.country} placeholder="Westeros" options={countries}
        hint="The last country you were in." />

    <Text inputName="City" id="arrcity" bind:val={data.arrival.city} placeholder="King's Landing"
        hint="And the city in that country" />

    <Text inputName="Place" id="arrplace" bind:val={data.arrival.place} placeholder="Red Keep"
        hint="Exact Place in that city" />

    <Number inputName="Intended Stay Duration" id="intstay" bind:val={data.intended_stay} placeholder="30"
        hint="We too wish Infinite was an option!" />

    <Select inputName="Employed In India?" id="employed" bind:val={data.employed} bind:valid={datavalid.employed}
        placeholder="No" options={yesno} hint="Yes/No" height="85px" />

    <Select inputName="Purpose Of Visit" id="purpose" bind:val={data.purpose} bind:valid={datavalid.purpose}
        placeholder="Tourism" options={purpose} hint="" />

    <Select inputName="Next Destination" id="destination" bind:val={data.next_destination.india} placeholder="Yes"
        options={yesno} hint="Inside India?" height="85px" bind:valid={datavalid.next_destination.india} />

    {#if data.next_destination.india==="Yes"}
    <Select inputName="State" id="deststate" bind:val={data.next_destination.state}
        bind:valid={datavalid.next_destination.state} placeholder="Uttarakhand" options={states} hint="" />

    <Select inputName="District" id="destdist" bind:val={data.next_destination.district}
        bind:valid={datavalid.next_destination.district} placeholder="Uttarkashi" options={districts} hint="" />

    <Text inputName="Place" id="destplace" bind:val={data.next_destination.place} placeholder="Harsil" hint="" />

    {:else if data.next_destination.india==="No"}
    <Select inputName="Country" id="destcountry" bind:val={data.next_destination.country}
        bind:valid={datavalid.next_destination.country} placeholder="Sothoryos" options={countries}
        hint="Next Destination Country" />

    <Text inputName="City" id="destccity" bind:val={data.next_destination.city} placeholder="Summer Sea"
        hint="Destination City" />

    <Text inputName="Place" id="destcplace" bind:val={data.next_destination.place} placeholder="Naath"
        hint="Destination Place" />
    {/if}

    <Number inputName="Indian Contact Number" id="indnum" bind:val={data.contact_info.indian_number}
        bind:valid={data.contact_info.indian_number} placeholder="911234567890" hint="Without the + sign" />

    <Number inputName="Permanent Contact Number" id="permnum" bind:val={data.contact_info.permanent_number}
        bind:valid={data.contact_info.permanent_number} placeholder="911234567890" hint="Indian Also Accepted" />

</div>

<style>
    .misc {
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
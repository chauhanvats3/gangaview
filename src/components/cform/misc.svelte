<script>

    import Text from '../inputs/text.svelte';
    import Select from '../inputs/select.svelte';
    import Date from '../inputs/date.svelte'
    import Number from '../inputs/number.svelte'
    import { countries, states, purpose, yesno } from '../../../static/data.js';

    export let data;

    let stateSelected = data.next_destination.state;
    let districts;
    $: districts = stateSelected.districts;

</script>

<div class="misc">
    <p>Miscellaneous</p>
    <Date inputName="Arrival In India" id="doai" bind:val={data.arrival.date} placeholder="" maxDate="tomorrow"
        hint="Arrival Date according to current Visa" />
    <Select inputName="Arrived From Country" id="arrcountry" bind:val={data.arrival.country} placeholder="Gondor"
        options={countries} hint="The last country you were in." />
    <Text inputName="City" id="arrcity" bind:val={data.arrival.city} placeholder="Osgiliath"
        hint="And the city in that country" />
    <Text inputName="Place" id="arrplace" bind:val={data.arrival.place} placeholder="Minas Tirith"
        hint="Exact Place in that city" />
    <Number inputName="Intended Stay Duration" id="intstay" bind:val={data.intended_stay} placeholder="30"
        hint=". . .but you might never leave!" />
    <Select inputName="Employed In India?" id="employed" bind:val={data.employed} placeholder="No" options={yesno}
        hint="Yes/No" />
    <Select inputName="Purpose Of Visit" id="purpose" bind:val={data.purpose} placeholder="Tourism" options={purpose}
        hint="Simple." />
    <Select inputName="Next Destination" id="destination" bind:val={data.next_destination.india} placeholder="Yes"
        options={yesno} hint=" Inside India?" />

    {#if data.next_destination.india==="Yes"}
    <Select inputName="State" id="deststate" bind:val={data.next_destination.state} placeholder="Uttarakhand"
        options={states} hint="" />
    <Select inputName="District" id="destdist" bind:val={data.next_destination.district} placeholder="Pauri Garhwal"
        options={districts} hint="" />
    <Select inputName="Place" id="destplace" bind:val={data.next_destination.place} placeholder="Laxman Jhula"
        options={yesno} hint="" />
    {:else}
    <!-- else content here -->
    {/if}

    <Number inputName="Indian Contact Number" id="indnum" bind:val={data.contact_info.indian_number}
        placeholder="911234567890" hint="Without the + sign" />
    <Number inputName="Permanent Contact Number" id="permnum" bind:val={data.contact_info.permanent_number}
        placeholder="911234567890" hint="Also Without the + sign" />

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
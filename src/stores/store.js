import { cachedStore } from './cachedStore'


const defaultData = {
    basic: {
        f_name: "",
        l_name: "",
        sex: "",
        dob: "",
        sp_cat: "",
        nationality: "",
        address: "",
        city: "",
        country: ""
    },
    passport: {
        number: "",
        city: "",
        country: "",
        issue: "",
        expiry: "",
    },
    visa: {
        number: "",
        city: "",
        country: "",
        issue: "",
        expiry: "",
        type: "",
        sub_type: "",
    },
    misc: {
        arrival: {
            date: "",
            country: "",
            city: "",
            place: ""
        },
        intended_stay: "",
        employed: "",
        purpose: "",
        next_destination: {
            india: "",
            dest_country: "",
            state: "",
            city: "",
            district: "",
            place: ""
        },
        contact_info: {
            indian_number: "",
            permanent_number: ""
        }
    }
};

const defaultValid = {
    basic: {
        sex: true,
        dob: true,
        sp_cat: true,
        nationality: true,
        country: true
    },
    passport: {
        country: true,
        issue: true,
        expiry: true,
    },
    visa: {
        country: true,
        issue: true,
        expiry: true,
        type: true,
        sub_type: true,
    },
    misc: {
        arrival: {
            date: true,
            country: true
        },
        employed: true,
        purpose: true,
        next_destination: {
            india: true,
            country: true,
            state: true,
            district: true
        },
        contact_info: {
            indian_number: true,
            permanent_number: true
        }
    }
};


export const dataset = cachedStore('dataset', defaultData)
export const datavalid = cachedStore('datavalid', defaultValid)
export const defaults = { "defaultData": defaultData, "defaultValid": defaultValid };


import { cachedStore } from './cachedStore'


const defaultData = {
    basic: {
        image: "",
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
            country: "",
            state: "",
            city: "",
            district: "",
            place: ""
        },
        contact_info: {
            email: "",
            indian_number: "",
            permanent_number: ""
        }
    }
};

export const dataset = cachedStore('dataset', defaultData)

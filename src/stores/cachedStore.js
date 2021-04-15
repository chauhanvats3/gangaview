import { writable } from 'svelte/store';

export const cachedStore = (key, initial) => {
    if (typeof window !== 'undefined') {
        const persist = localStorage.getItem(key)
        const data = persist ? JSON.parse(persist) : initial

        const store = writable(data, () => {
            const unsubscribe = store.subscribe(value => {
                localStorage.setItem(key, JSON.stringify(value))
            })
            return unsubscribe
        })
        return store
    } else {
        const data = initial;
        const store = writable(data, () => {
            const unsubscribe = store.subscribe(value => {
                //Do Nothing
            })
            return unsubscribe
        })
        return store
    }

}
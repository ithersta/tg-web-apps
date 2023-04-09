import pRetry from "p-retry";

/** @type {import('./$types').PageServerLoad} */
export async function load({url}) {
    const source = url.searchParams.get('options');
    const options = await pRetry<any>(async () => {
        const response = await fetch(source)
        return await response.json()
    }, {retries: 5})
    return {options}
}

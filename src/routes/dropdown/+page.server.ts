import pRetry, {AbortError} from "p-retry";

/** @type {import('./$types').PageServerLoad} */
export async function load({url}) {
    const source = url.searchParams.get('options');
    const options = await pRetry<any>(async () => {
        const response = await fetch(source)
        return await response.json().catch(() => {
            throw new AbortError(response.statusText)
        })
    }, {retries: 5})
    return {options}
}

/** @type {import('./$types').PageServerLoad} */
export async function load({url}) {
    const source = url.searchParams.get('options');
    const options = (await fetch(source)).json()
    return {options}
}

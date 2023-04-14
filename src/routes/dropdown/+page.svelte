<script lang="ts">
    import Input from './Input.svelte'
    import {page} from '$app/stores';
    import {onMount} from "svelte";

    const url = $page.url;
    const urlParams = url.searchParams
    const options = $page.data.options
    const noneOption = urlParams.get("noneOption")
    const noneConfirm = urlParams.get("noneConfirm")
    let showMainButton = () => {}
    let showConfirmNone = () => {}

    let inputValue = ""
    let selectedOptionId = null
    $: filteredOptions = options.filter(option => option.text.toLowerCase().includes(inputValue.toLowerCase()))
    $: if (selectedOptionId !== null) showMainButton()

    function onOptionSelected(id: bigint) {
        selectedOptionId = id
    }

    onMount(() => {
        const webApp = window.Telegram.WebApp
        webApp.MainButton.onClick(() => webApp.sendData(JSON.stringify(selectedOptionId)))
        webApp.MainButton.setParams({'text': 'Подтвердить'})
        showMainButton = () => webApp.MainButton.show()
        showConfirmNone = () => {
            webApp.showConfirm(noneConfirm, (confirmed: boolean) => {
                if (confirmed) webApp.sendData(JSON.stringify(null))
            })
        }
    })
</script>

<style>
    .selected {
        color: var(--tg-theme-button-text-color);
        background-color: var(--tg-theme-button-color);
    }
</style>

<main>
    <Input bind:inputValue/>
    {#if noneOption !== null}
        <button class="my-2 w-full text-text" on:click={showConfirmNone}>{noneOption}</button>
    {/if}
    {#each filteredOptions as option}
        <p class="mx-2 px-2 py-3 w-auto text-text justify-start rounded-md"
           class:selected={option.id === selectedOptionId}
           on:click={() => onOptionSelected(option.id)}>{option.text}</p>
    {/each}
</main>

<script lang="ts">
    export let inputValue = "";
</script>

<style>
    input {
        background-color: var(--tg-theme-bg-color);
    }
</style>

<form class="group relative p-2">
    <svg width="20" height="20" fill="currentColor"
         class="absolute left-5 top-1/2 -mt-2.5 text-text pointer-events-none"
         aria-hidden="true">
        <path fill-rule="evenodd" clip-rule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"/>
    </svg>
    <input class="h-12 focus:outline-none appearance-none w-full text-sm leading-6 text-text placeholder-hint rounded-md py-2 pl-10 ring-1 ring-hint shadow-sm"
           type="text" placeholder="Поиск..." autocomplete="off" bind:value={inputValue} on:input>
</form>

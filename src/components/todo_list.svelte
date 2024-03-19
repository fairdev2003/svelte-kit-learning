<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    export let todos: string[]

    const dispatch = createEventDispatcher();

    function sayHello(todo: any) {
        dispatch('message', {
            text: todo
        });
    }

</script>

<div class="flex flex-col justify-center items-center mx-5 gap-y-5 mt-5">
    {#each todos as todo, index}
        <button class="bg-gray-700 overflow-hidden w-full h-auto p-3 flex items-center justify-center hover:bg-red-500 hover:border-none cursor-pointer" on:click={() => {
            sayHello(index)
        }}>
            <p class="text-lg font-[600] text-white ">{todo}</p>
        </button>
    {/each}
</div>
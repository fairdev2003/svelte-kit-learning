<script lang="ts">
    import axios from 'axios'

    let count : number = 0 
</script>

<main class="flex justify-center mt-5">
    <div class="flex justify-center flex-col">
        <input  type="number" class="flex text-center" bind:value={count}/>
        <h1 class="flex justify-center text-center">{ count }</h1>
        <div class="flex flex-wrap w-[200px] gap-1 justify-center">
            <button class="mt-5 flex justify-center w-1/3 bg-red-500" on:click={() => { count--; }}>-</button>
            <button class="mt-5 flex justify-center w-1/3 bg-emerald-500" on:click={() => { count++; }}>+</button>
        </div>
    </div>
</main>

<style>
   input::-webkit-outer-spin-button,
   input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
   }
</style>
<script lang="ts">
    import triangle from "../assets/svg/sidebar_triangle.svg";
    import { onMount } from "svelte";

    let fileNames: string[] = [];

    onMount(async () => {
        const response = await fetch("/api/files");
        const data: { fileNames: string[] } = await response.json();
        fileNames = data.fileNames;
    });
</script>


<div class="sidebar absolute w-[3rem] h-full bg-black bg-opacity-80 flex px-3">
    <div class="sidebar-content w-full">
        <div class="sidebar-content">
            <h2 class="mt-4 w-full break-words overflow-hidden">
                Welcome to Sistema
            </h2>
        </div>
        <div class="sidebar-content flex flex-col">
            {#if fileNames.length > 0}
                {#each fileNames as fileName}
                    <p on:click={() => {
                        $: {
                            // Update the URL without reloading the page
                            history.replaceState({}, '', `/wiki/${fileName}`);
                            location.reload();
                        }
                    }} class="w-full break-words overflow-hidden hover:text-blue cursor-pointer">{fileName}</p>
                {/each}
            {/if}
        </div>
    </div>
    <div class="flex items-center">
        <img src={triangle} class="fill-white w-10 h-10" alt="controller" loading="lazy" />
    </div>
</div>


<style>
    .sidebar {
        transition: width 0.3s ease-in-out;
        white-space: nowrap;
    }

    .sidebar:hover {
        width: 30rem;
    }

    .sidebar-content {

    }


    .sidebar .sidebar-content {
        width: 0;
        visibility: hidden;

        transition: width 0.3s ease-in-out, opacity 0.5s ease-in-out 1s;
    }


    .sidebar:hover .sidebar-content {
        width: 100%;
        visibility: visible;
    }


    .content-item {
        font-size: 2rem;
    }

    h2 {
        font-size: 2rem;
        white-space: nowrap;
    }

    p {
        font-size: 1.5rem;
        white-space: nowrap;
    }
</style>

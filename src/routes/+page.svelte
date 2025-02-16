<script lang="ts">
    import { onMount as load } from "svelte";

    let markdownLines: string[] = [];


    load(async () => {
        const response = await fetch("/src/md/test.md");
        const text = await response.text();
        markdownLines = text.split("\n");
    });

</script>

<section class="py-5 px-[4.45rem]">
    {#each markdownLines as line}
        <p>{line}</p>
    {/each}
    <div class="flex items-center gap-x-3">
        <img class="w-20 h-20" alt="controller" src="https://res.cloudinary.com/dzaslaxhw/image/upload/v1722194377/ae2/ae2__controller.png"/>
        <h1>Welcome modopedian</h1>
    </div>
    <div class="flex flex-col gap-y-3 w-1/2 mt-5">
        <p>
            Modopedia is the go-to source for everything related to Minecraft mods. Whether you're looking for gameplay enhancements, new dimensions, powerful tools, or technical automation, our encyclopedia covers thousands of mods across all Minecraft versions.        </p>
        <p>
            Our platform provides detailed descriptions, installation guides, compatibility information, and historical insights into thousands of mods. From Minecraft and Skyrim to indie game tweaks and total conversion mods, we catalog everything in one place.
        </p>
        <p>
            With a community-driven approach, ModPedia allows users to contribute, review, and discuss mods, ensuring the most up-to-date and reliable information. Discover new ways to enhance your favorite games today!
        </p>
    </div>
</section>

<style>
    p {
        font-size: 20px;
    }
</style>
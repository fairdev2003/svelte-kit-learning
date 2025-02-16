<script lang="ts">
    import { MarkdownParser } from './parser';
    import {onMount, type SvelteComponent} from "svelte";

    export let path: string

    let parser = new MarkdownParser();
    let markdown: string[];
    let components: { component: typeof SvelteComponent, props: Record<string, any> }[]
    let error: string = "";

    onMount(async () => {

        if (!path) {
            error = "No .md path provided";
            return
        }
        const response = await fetch(path);
        if (response.ok) {
            const text = await response.text();
            markdown = text.split("\n");
            parser.setMarkdownLines(markdown);
            parser.initializeMarkdownComponents(markdown);
            components = parser.getComponents();
        } else {
            error = "Invalid markdown path";

        }

    });

</script>
<section>
    {#if components != null}
        {#each components as { component, props }}
            <svelte:component this={component} {...props} />
        {/each}
    {/if}
    <div class="flex justify-center">
        {#if error}
            <h2>{error}</h2>
        {/if}
    </div>
</section>




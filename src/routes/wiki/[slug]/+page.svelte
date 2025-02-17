<script lang="ts">
    import { page } from '$app/stores';
    import MarkdownRenderer from "../../../markdown/MarkdownRenderer.svelte";


    let slug: string = $page.params.slug

    $: {
        slug = $page.params.slug;
    }
</script>

<section class="mx-20 my-10">
    <MarkdownRenderer path={`/md/${slug}`}/>
</section>
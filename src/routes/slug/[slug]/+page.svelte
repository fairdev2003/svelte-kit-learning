<script lang="ts">
    import { onMount } from "svelte";

	/** @type {import('./$types').PageData} */
	export let data: any;
    const { title,
            brand,
            category,
            description,
            price,
            images,
            rating,
            stock } = data.post.data.data

    onMount(() => {
        console.log(data.post.data)
    })

</script>

<div class="flex justify-center items-center flex-col text-center gap-y-5">
    <h1>{data.post.title}</h1>
    <h3>{ title }</h3>
    <div>{ brand }</div>
    <div>{ description }</div>
    <div>{ price }$</div>
    {#each images as image_src, index}
        <img src={image_src} alt={`image-${index}`}>
    {/each}
    <div>{ rating } ⭐</div>
    <div>{ stock } </div>
    <div>{ category } </div>
</div>

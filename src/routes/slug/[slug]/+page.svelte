<script lang="ts">

	/** @type {import('./$types').PageData} */
	export let data: any;
    const { title,
            brand,
            category,
            description,
            price,
            images,
            rating,
            stock 
        } = data.data.data

</script>

<div class="flex justify-center items-center flex-col text-center gap-y-5 my-10">
    <h1>{ title }</h1>
    <div>{ brand }</div>
    <div>{ description }</div>
    <div>{ price }$</div>
    {#each images as image_src, index}
        <img src={image_src} alt={`image-${index}`}>
    {/each}
    <div>{ rating } ⭐ </div>
    <div>{ stock } </div>
    <div>{ category } </div>
</div>

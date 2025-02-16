<script>
    import { page } from '$app/stores';
</script>
<div class="text-center mt-5 error">
    <h1 class="text-red-500">{$page.status}: {$page?.error?.message}</h1>
</div>

<style>
    @font-face {
        font-family: Faithful;
        src: url(../assets/fonts/Faithful.ttf);
    }

    .error {
        font-family: "Faithful", serif;
        font-weight: 400;
        font-style: normal;
    }

</style>

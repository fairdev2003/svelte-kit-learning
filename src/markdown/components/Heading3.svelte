<script lang="ts">
    import { cn } from "../../utils/className";

    export let className: string = "";
    export let title: string;
</script>

<h3 class={cn([className, "text-red"])}>
    {title}
</h3>
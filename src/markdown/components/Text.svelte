<script lang="ts">
    import { cn } from "../../utils/className";

    export let className: string = "";
    export let text: string;
</script>

<p class={cn([className, "text-red"])}>
    {text}
</p>
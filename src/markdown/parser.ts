import type { SvelteComponent } from "svelte";
import H1 from '../markdown/components/Heading1.svelte';  // Example component H1
import Text from '../markdown/components/Text.svelte';
import H2 from "./components/Heading2.svelte";
import H3 from "./components/Heading3.svelte"; // Example Text component

class MarkdownParser {
    public markdownLines: string[] = [];
    public components: { component: typeof SvelteComponent, props: Record<string, any> }[] = [];
    public pageInfo: Record<string, string | string[]> = {};

    // Set markdown lines
    public setMarkdownLines(markdownLines: string[]) {
        this.markdownLines = markdownLines;
    }

    // Get markdown lines as a single string
    public getMarkdownLines() {
        return this.markdownLines.join('\n');
    }

    // Initialize components based on markdown
    public initializeMarkdownComponents(lines: string[]) {
        const content: (string | { type: string, value: string })[] = [];
        let collecting = false;
        let meta: Record<string, string | string[]> = {};

        for (let line of lines) {
            line = line.trim();

            if (line.startsWith("# ")) {
                content.push({ type: "h1", value: line.substring(2) });
                this.components.push({
                    component: H1 as typeof SvelteComponent,  // Explicitly cast component
                    props: { title: line.substring(2), className: "text-blue-500" }
                });
                continue;
            }

            if (line.startsWith("## ")) {
                content.push({ type: "h2", value: line.substring(2) });
                this.components.push({
                    component: H2 as typeof SvelteComponent,  // Explicitly cast component
                    props: { title: line.substring(2) }
                });
                continue;
            }

            if (line.startsWith("### ")) {
                content.push({ type: "h3", value: line.substring(2) });
                this.components.push({
                    component: H3 as typeof SvelteComponent,  // Explicitly cast component
                    props: { title: line.substring(2) }
                });
                continue;
            }

            // Start collecting metadata between ---
            if (line.startsWith("---") && !collecting) {
                collecting = true;
                meta = {};
                continue;
            }

            // End collecting metadata
            if (line.startsWith("---") && collecting) {
                collecting = false;
                this.pageInfo = meta;
                continue;
            }

            // Collect metadata
            if (collecting) {
                const [key, ...value] = line.split(":").map(s => s.trim());
                if (key && value.length > 0) {
                    const val = value.join(":");
                    meta[key] = val.includes("|") ? val.split("|").map(v => v.trim()) : val;
                }
                continue;
            }

            // Plain text content
            if (!line.startsWith("<")) {
                content.push(line);
                this.components.push({
                    component: Text as typeof SvelteComponent,  // Explicitly cast component
                    props: { text: line }
                });
            } else {
                // tags implementation
            }

        }
    }

    // Get initialized components
    public getComponents() {
        return this.components;
    }

    // Initialize page metadata
    public initPageInfo(infoBox: string[]) {
        this.pageInfo = infoBox.reduce((acc, item) => {
            const [key, value] = item.split(":").map(s => s.trim());
            if (key && value) acc[key] = value;
            return acc;
        }, {} as Record<string, string | string[]>);
    }


}

export { MarkdownParser };

<script lang="ts">
    import TodoList from "../../components/todo_list.svelte";

    const basic_todos = [
        "Wash hands",
        "Prepere CV",
        "Go out with garbage"
    ]
    
    let todos: string[] = [
        "Wash hands",
        "Prepere CV",
        "Go out with garbage"
    ]

    let focused: boolean = false

    let input_value: string = '';

    const addTodo = () => {
        if (input_value.length > 0) {
            todos = [...todos, input_value]
            input_value = ""
        } else {
            alert("Text is too short!!")
        }
        
    }

    const onKeyDown = (e: any) => {
        if (focused && e.key === "Enter") {
            addTodo()
        }
    }

    const onFocus = () => {
        focused = true
    }

    const onBlur = () => {
        focused = false
    }

    function handleMessage(event: any) {
        let temp_todos : string[] = []
		todos.map((item: string, index: number) => {
            
            if (event.detail.text !== index) {
                temp_todos.push(item)
            }
        })

        todos = temp_todos
        
	}

    function loadBasic() {
        if (todos.length < 3) {
            todos = [...basic_todos]
        }
    }

    function deleteAll() {
        todos = []
    }
        

</script>

<main class="flex justify-center flex-col mt-5 items-center">
    <h1 class="mb-5 select-none">TODO App</h1>
    <input on:focus={onFocus} placeholder="Add todo..." on:blur={onBlur} class="w-auto h-[50px] text-xl text-center" bind:value={input_value}/>
    <div class="select-none">
        <button class="mt-5" on:click={addTodo}>Add todo</button>
        <button class="mt-5 " on:click={loadBasic}>Load todos</button>
        <button class="mt-5 " on:click={deleteAll}>Delete All</button>
    </div>
    <TodoList {todos} on:message={handleMessage}/>
</main>
<svelte:window on:keydown={onKeyDown} />

<style>
    input {
        @media (max-width: 576px) {
            
            
        }   
    }

    h1 {
        @media (max-width: 576px) {
            font-size: 40px;
            
        }  
    }
    
</style>
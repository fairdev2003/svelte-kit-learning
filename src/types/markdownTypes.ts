type ModPageInfo = {

    mod_name: string
    mod_tag: string

    // path, url
    mod_image?: string
    mod_background_image?: string

    mod_author: string
}

type ItemPageInfo = {
    item_name: string
    item_tag: string

    item_image?: string
    item_background_image?: string
    item_author: string
}

type BasePageInfo = {
    title: string
    author: string
}

type PageTypes = "mod" | "item"

type MarkdownPageInfo<T extends PageTypes> = T extends "mod" ? ModPageInfo : T extends "item" ? MarkdownPageInfo<T> : never
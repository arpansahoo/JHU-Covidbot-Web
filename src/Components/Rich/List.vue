<template>
    <div class="list">
        <div v-if="title" class="list-title">{{title}}</div>
        <div v-if="subtitle" class="list-subtitle">Subtitle</div>
        <ul :aria-label="title" class="list-content"><slot /></ul>
    </div>
</template>

<style lang="sass" scoped>
.list
    padding: 15px
    padding-bottom: 9px
    margin-left: 5px
    max-width: 309px
    margin-bottom: 10px
    margin-top: 15px
    border-radius: 12px
    background-color: var(--component-background)
    box-shadow: var(--shadow)

    &:focus
        outline: 0 !important
        
    .list-title
        font-weight: 500
        font-size: 16px
        line-height: 22px
        color: var(--text)

    .list-subtitle
        visibility: hidden
        font-size: 0px
        line-height: 0px
        color: var(--text-subtitle)

    .list-content
        list-style-type: none
        margin: 0
        padding: 0
        margin-top: 0px
</style>

<script>
export default {
    name: 'List',
    props: {
        title: {
            type: String,
            default: null
        },
        subtitle: {
            type: String,
            default: null
        }
    }
}
</script>
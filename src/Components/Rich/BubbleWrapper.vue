<template>
    <div class="bubble-wrapper"><slot /></div>
</template>

<style lang="sass" scoped>
.bubble-wrapper
    display: flex
    justify-content: flex-end
    padding-top: 0px
</style>

<script>
export default {
    name: 'BubbleWrapper'
}
</script>
<template>
    <div class="overlay">
        <!-- Agent Icon -->
        <img class="app-icon" src="https://brand.jhu.edu/assets/uploads/sites/5/2014/06/university.shield.small_.blue_.png" :alt="logo">

        <!-- Agent Title -->
        <h1 class="app-title">Welcome to the COVID-19 Q&A Chatbot</h1>

    </div>
</template>

<style lang="sass" scoped>
@import '@/Style/Mixins'
.overlay
    text-align: center
    padding-top: 25px
.app-icon
    width: 120px
    height: 120px
    border-radius: 16px
    object-fit: contain
    background-color: var(--image-background)
.app-title
    font-weight: 500
    font-size: 24px
    margin-top: 30px
    color: var(--text)
    line-height: 30px
.app-description
    font-size: 16px
    color: var(--text-secondary)
    line-height: 18px
    padding-left: 50px
    padding-right: 50px
    a[href]
        color: var(--text-secondary)
        text-decoration: none
        transition: 300ms
        
        &:hover
            color: var(--text)
.language-picker
    display: inline-flex
    border: 1px solid var(--border)
    border-radius: 40px
    cursor: pointer
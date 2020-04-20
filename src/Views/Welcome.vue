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
    font-weight: 500
    margin-right: 2px
    color: var(--text)
    align-items: center

    select
        @include reset
        width: 100%
        padding: 8px 12px
        margin-right: -24px
        padding-right: 24px
    i
        pointer-events: none
</style>

<script>
import * as langs from 'langs'

export default {
    name: 'Welcome',
    filters: {
        /* This filter turns language code to the local language name using the langs dependency (example "en" -> "English") */
        toLang(code){
            return langs.where('1', code).local
        }
    },
    props: {
        app: {
            type: Object,
            required: true
        }
    },
    data(){
        return {
            sel_lang: ''
        }
    },
    watch: {
        /* Save selected language */
        sel_lang(lang){
            if (this.history()) sessionStorage.setItem('lang', lang)
            else {
                this.config.fallback_lang = lang
            }
        }
    },
    /* Set default language on load (or fallback) */
    created(){
        if (this.app && this.app.defaultLanguageCode){
            this.sel_lang = this.app.defaultLanguageCode
        }
        else {
            this.sel_lang = this.config.fallback_lang
        }
    }
}
</script>
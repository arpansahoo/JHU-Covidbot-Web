export default {
    // PRODUCTION
    // endpoint: 'https://covid-19-qa-infobot-v1-vuxlmi.core.ushaflow.io', 
    // STAGING
    // endpoint: 'https://covid-19-qa-infobot-staging-xk.core.ushaflow.io', 
    // DEVELOPMENT
    endpoint: 'https://gateway.covid-19-bot.org', 
    // SANDBOX
    // endpoint: 'https://dialog-flow-test2-271723.core.ushaflow.io', 
    muted: false, // <- mute microphone at start
    start_suggestions: ["What is the coronavirus?", "What is social distancing?", "How can I protect myself and others?"], // <- array of suggestions, displayed at the start screen
    fallback_lang: 'en', // <- fallback language code, if history mode or network is unavailable
    voice: 'native' // <- voice of Text-To-Speech; for reference, see: https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisVoice/voiceURI
}
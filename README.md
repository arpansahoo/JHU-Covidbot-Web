## User interface (Vue.js) for the JHU COVID-19 Q&A Chatbot

Researchers at the Johns Hopkins University created a chatbot (built with Dialogflow) to help answer questions about COVID-19. To learn more about the chatbot, go [here](https://jhu-covid-qa.github.io/).

### Installation
Clone the repository. Run this command 
```
npm i
```

### Developing
Use either npm or yarn to start the development server.

npm:
```
npm run serve
```
yarn:
```
yarn serve
```

### Miscellaneous
Configuration settings (e.g. Dialogflow Gateway url and start suggestions) are in src/Config/index.js.

Welcome screen can be edited in src/Views/Welcome.vue

Chatbot app screen can be edited in src/Views/App.vue

Vue component involved in user input can be editied in src/Components/Parts/ChatInput.vue

### Deploying
Please file an issue or contact me if you'd like to deploy your changes to the live site.

### Preview
![](/preview.png)
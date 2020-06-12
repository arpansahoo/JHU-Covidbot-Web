## User interface for the JHU COVID-19 Q&A Chatbot

This is the web interface (written in Vue) for Johns Hopkins' COVID-19 chatbot. It features a chat screen and message input. This client-side interface sends user queries to the Dialogflow agent and fetches responses.

### Installation

Clone the repostiory.

Make sure to have npm and NodeJS installed. You may want to remove package-lock.json. Then install all dependencies by running this command

```
npm i
```

### Developing

Use npm or yarn to start the development server.
npm:

```
npm run serve
```

yarn:

```
yarn serve
```

### Codebase

The main Vue app is located src/Views/App.vue. This contains the code for displaying the header, chat screen (fulfillment text, list select cards, etc.), and chat input. It also contains the code for sending user requests to the Gateway and fetching responses.

src/Components contains Vue components used in this app. You can edit the style of each component within each vue file contained in the Components folder.

To make changes to the theme, go to src/Style.

The Dialogflow agent url is included as an endpoint in src/Config/index.js.

### Preview

![](/preview.png)

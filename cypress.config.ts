import { defineConfig } from "cypress";

export default defineConfig({
  viewportWidth: 640,
  viewportHeight: 520,
  e2e: {
    baseUrl: "http://localhost:8888",
    setupNodeEvents(on, config) {
      require("@deploysentinel/cypress-debugger/plugin")(on, config, {
        beforeNetworkSend: (event: any) => {
          if (event.request.url.includes("Manifest")) {
            return null;
          }
          if (event.request.url.includes("_app")) {
            return null;
          }
          return event;
        },
      });
      // implement node event listeners here
    },
  },
});

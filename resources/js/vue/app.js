import { createApp } from "vue";
import Coaches from "./Pages/Coaches.vue";

// Import FontAwesome Core
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

const app = createApp(Coaches);

app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");

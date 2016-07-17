import vue from "vue";
import Router from "vue-router";
import App from "./view/app";
import map from "./router";
import Resource from "vue-resource";

vue.config.devtools = true;

vue.use( Router );
vue.use( Resource );
const router = new Router();

map(router)
router.start(App, ".app")
import Vue from "vue";
import SChart from "./src/components/s-chart";

const Components = {
    SChart
}

Object.keys(Components).forEach(name => Vue.component(name, Components[name]))

export default Components;

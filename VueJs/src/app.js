import Vue from "vue";

console.log("Loaded App Js");

const app = new Vue({
    // el : "#app",
    data : {
        hello : "Hi There!"
    }
});

export { app };

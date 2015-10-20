import ListView from "./list/list.view"

var listView = new ListView();

document.addEventListener("DOMContentLoaded", function(event) {
    listView.setElement(document.body);
    listView.render();
});
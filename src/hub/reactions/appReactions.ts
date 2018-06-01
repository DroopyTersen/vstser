import hub from "../../hub";

let onInit = async function() {
    hideSplash();
};

let hideSplash = function() {
    document.getElementById("splash").classList.add("hidden");
    document.getElementById("root").classList.remove("hidden");
    setTimeout(() => document.getElementById("splash").style.display = "none", 300);
}



hub.on("app:init", onInit);

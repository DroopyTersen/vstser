import hub from "../../hub";
import { NavRoute, parseRoute, updateUrl } from "../../navigation";
import { _updateRoute } from "./navReactions";

let onInit = async function() {
    _updateRoute(parseRoute())
    hideSplash();
};

let hideSplash = function() {
    document.getElementById("splash").classList.add("hidden");
    document.getElementById("root").classList.remove("hidden");
    setTimeout(() => document.getElementById("splash").style.display = "none", 300);
}



hub.on("app:init", onInit);

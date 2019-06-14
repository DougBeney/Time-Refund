function blocker(details) {

    var url = details.url;

    if ( /^https?:\/\/(www\.)?reddit\.com/.test(url) ) {
        return {
            redirectUrl: browser.extension.getURL("blocked.html")
        };
    }
}

browser.webRequest.onBeforeRequest.addListener(
    blocker,
    {urls: ["<all_urls>"], types: ["main_frame"]},
    ["blocking"]
);

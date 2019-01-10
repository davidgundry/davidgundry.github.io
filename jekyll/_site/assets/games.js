var escapeContainer = document.createElement("div");
escapeContainer.id = "escape-video";
escapeContainer.style.pointerEvents = "none";
var escapeSection = document.querySelector("#escape");
escapeSection.insertBefore(escapeContainer,escapeSection.firstChild);

var platformContainer = document.createElement("div");
platformContainer.id = "platform-gen-video";
platformContainer.style.pointerEvents = "none";
var platformSection = document.querySelector("#platform-gen");
platformSection.insertBefore(platformContainer,platformSection.firstChild);

function onYouTubeIframeAPIReady()
{
    new YT.Player('platform-gen-video', {
        videoId: '4tPocz6EeEc',
        width: 480, height: 271,
        playerVars: { autoplay: 1, controls: 0, modestbranding: 1, loop: 1, fs: 0, cc_load_policy: 0, iv_load_policy: 3, autohide: 0, disablekb: 1 },
        events: {
        onReady: function(e) {
            e.target.mute();
        }
    }});

    new YT.Player('escape-video', {
        videoId: 'X_f8upZKcKc',
        width: 480, height: 271,
        playerVars: { autoplay: 1, controls: 0, modestbranding: 1, loop: 1, fs: 0, cc_load_policy: 0, iv_load_policy: 3, autohide: 0, disablekb: 1 },
        events: {
        onReady: function(e) {
            e.target.mute();
        }
        }
    });
}
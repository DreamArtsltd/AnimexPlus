    $(".button").removeAttr("disabled").text("Start");
  }
}

function onSessionRequestSuccess(session) {
  console.log('onSessionRequestSuccess', session);

  var mediaInfo = new chrome.cast.media.MediaInfo(
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    "video/mp4");
  var request = new chrome.cast.media.LoadRequest(mediaInfo);
  session.loadMedia(request, onMediaLoadSuccess, onError);
}

function onMediaLoadSuccess(e) {
  console.log('onMediaLoadSuccess', e);
}

$(".button").click(function() {
  chrome.cast.requestSession(onSessionRequestSuccess, onError);
});

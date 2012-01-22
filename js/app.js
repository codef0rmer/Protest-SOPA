chrome.extension.sendRequest({}, function(response) {
    var today = new Date();
    var sopaDate = new Date("January 18, 2012");
    if (today.getDate() == sopaDate.getDate() && today.getMonth() == sopaDate.getMonth() && today.getFullYear() == sopaDate.getFullYear()) {
        var blackImage = chrome.extension.getURL('images/1x1');
        $("body").live('DOMNodeInserted', function (e) {
            if (getDomain() == 'plus.google.com') {
                $("img[src$='photo.jpg'], img[src^='//images'], img[src^='//lh']").each (function () {
                    var width = $(this).width();
                    var height = $(this).height();
                    $(this).attr({'src': blackImage}).attr('width', width).attr('height', height);
                });            
            } else {
                $("img[src^='https://fbcdn-profile-a.akamaihd.net'], img[src^='https://fbcdn-sphotos-a.akamaihd.net'], img[src^='https://s-external.ak.fbcdn.net'], img[src^='https://fbcdn-photos-a.akamaihd.net'], img[src^='https://www.facebook.com']").each (function () {
                    var width = $(this).width();
                    var height = $(this).height();
                    $(this).attr({'src': blackImage}).attr('width', width).attr('height', height);
                });
                $("i[style^='background-image: url(https://fbcdn-sphotos-a.akamaihd.net']").each (function () {
                    $(this).css({"background-image" : "url(" + blackImage + ")"});
                });
            }
        });
    }
    
    function getDomain() {
        var url = window.location.href;
        return url.match(/:\/\/(.[^/]+)/)[1];
    }
});



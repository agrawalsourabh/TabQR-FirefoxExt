$(document).ready(function() {

    var qrcode = new QRCode(document.getElementById("qrcode"), {
        width: 120,
        height: 120,
        colorDark: "#daa520",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });

    function makeCode(url) {
        console.log(url);
        qrcode.makeCode(url);
    }
    let text = chrome.tabs.query({ currentWindow: true, active: true }, function(tabs) {
        text = tabs[0].url;
        makeCode(text);
    });


});
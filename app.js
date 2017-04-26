function url(channel) {
    var http = 'https://wind-bow.gomix.me/twitch-api/streams/' + channel + '?callback=?'
    return http;
}

var esl_ = url('ESL_SC2');
var free = url('freecodecamp');
var ogam = url('OgamingSC2');
var cret = url('cretetion');
var noob = url('noobs2ninjas');

$.getJSON(esl_, function(data) {
    if (data.stream == null) {
        $('#esl_').html('<div class="container4"><p class="text-center">Channel Offline</p></div>');
        $('.esl_-image').css('filter', 'grayscale(100%)');
        $('.esl_-grid').css('background-color', 'rgb(153,153,153)');
    } else
        $('#esl_').html('<div class="container4"><p class="text-center"><a href="' + data.stream.channel.url + '" target="_blank">' + data.stream.channel.status + '</a></p></div>');
});

$.getJSON(free, function(data) {
    if (data.stream == null) {
        $('#free').html('<div class="container4"><p class="text-center">Channel Offline</p></div>');
        $('.free-image').css('filter', 'grayscale(100%)');
        $('.free-grid').css('background-color', 'rgb(153,153,153)');
    } else
        $('#free').html('<div class="container4"><p class="text-center"><a href="' + data.stream.channel.url + '" target="_blank">' + data.stream.channel.status + '</a></p></div>');
});

$.getJSON(ogam, function(data) {
    if (data.stream == null) {
        $('#ogam').html("<div class='container4'><p class='text-center'>Channel Offline</p></div>");
        $(".ogam_-image").css("filter", "grayscale(100%)");
        $(".ogam-grid").css("background-color", "rgb(153,153,153)");
    } else
        $("#ogam").html("<div class='container4'><p class='text-center'><a href='" + data.stream.channel.url + "' target='_blank'>" + data.stream.channel.status + "</a></p></div>");
});

$.getJSON(cret, function(data) {
    if (data.stream == null) {
        $("#cret").html("<div class='container4'><p class='text-center'>Channel Offline</p></div>");
        $(".cret-image").css("filter", "grayscale(100%)");
        $(".cret-grid").css("background-color", "rgb(153,153,153)");
    } else
        $("#cret").html("<div class='container4'><p class='text-center'><a href='" + data.stream.channel.url + "' target='_blank'>" + data.stream.channel.status + "</a></p></div>");
});

$.getJSON(noob, function(data) {
    if (data.stream == null) {
        $("#noob").html("<div class='container4'><p class='text-center'>Channel Offline</p></div>");
        $(".noob-image").css("filter", "grayscale(100%)");
        $(".noob-grid").css("background-color", "rgb(153,153,153)");
    } else
        $("#noob").html("<div class='container4'><p class='text-center'><a href='" + data.stream.channel.url + "' target='_blank'>" + data.stream.channel.status + "</a></p></div>");
});

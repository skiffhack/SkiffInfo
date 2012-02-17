(function() {

  jQuery(function($) {
    return $.get("http://skiffcaptn.heroku.com/captain.json", function(data) {
      if (data.captain) {
        $.get("http://who.theskiff.org/profiles/" + data.captain.hash + ".json", function(data) {
          var tar;
          return tar = $(".status ul li").html(data.real_name);
        }, "jsonp");
      }
      return console.log(data);
    }, "jsonp");
  });

  $.get("http://crane.papercreatures.com/recent", function(data) {
    var tar, tmpl;
    tar = $(".logged-on ul");
    tmpl = tar.children('li').detach().get(0);
    return $.each(data.recent, function(idx, seen) {
      var newel;
      newel = tar.append($(tmpl).clone().attr('id', seen.hash));
      return $.get("http://who.theskiff.org/profiles/" + seen.hash + ".json", function(data) {
        return $("#" + seen.hash).html(data.real_name);
      }, "jsonp");
    });
  }, "jsonp");

}).call(this);

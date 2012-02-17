jQuery ($) ->
  #query the people API and fill out the people loop
  $.get "http://skiffcaptn.heroku.com/captain.json", (data) ->
    #convert to real profile
    if data.captain
      $.get "http://who.theskiff.org/profiles/#{data.captain.hash}.json", (data) ->
          tar = $(".status ul li").html(data.real_name)
        , "jsonp"

    console.log data
   , "jsonp"

  $.get "http://crane.papercreatures.com/recent", (data) ->
    tar = $(".logged-on ul")
    tmpl = tar.children('li').detach().get(0)
    $.each data.recent, (idx, seen) ->
      newel = tar.append $(tmpl).clone().attr('id', seen.hash)
      $.get "http://who.theskiff.org/profiles/#{seen.hash}.json", (data) ->
        $("##{seen.hash}").html(data.real_name)
      , "jsonp"
   , "jsonp"

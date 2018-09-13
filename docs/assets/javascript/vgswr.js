function randomWebsite(replaceURL) {
  jQuery.get("webring.txt", function(data) {
    // grab the webring and get all the websites and strip it of any nil or empty array values
    var websites = getWebsiteListFromData(data);

    website = websites[Math.floor(Math.random() * websites.length)];

    $(".website").attr("href", website);
    $(".random-site").attr("href", website);
    $(".website").text(website);

    if(replaceURL) {
      window.location.replace(website);
    }
  });
};

function getWebsiteListFromData(data) {
  // grab the webring and get all the websites and strip it of any nil or empty array values
  var websites = data.split("\n");
  websites = websites.filter(function(e){return e});

  return websites;
};

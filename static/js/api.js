(function () {

    searchBooks_(harry_potter);

function searchBooks_(query) {

  var baseUrl = "https://www.goodreads.com/book/show/",
      apiUrl = "https://www.goodreads.com/search/index.xml",
      apiKey = "BHwsvEAI5cLvfbBayis8ug",
      searchResults = [],
      payload = {
        q: query,
        key: BHwsvEAI5cLvfbBayis8ug
      },
      params = {
        method: "GET",
        payload: payload,
        muteHttpExceptions: true
      };

  var response = UrlFetchApp.fetch(apiUrl, params);

  // API Connection Successful
  if (response.getResponseCode() === 200) {

    // Parse XML Response
    var xml = XmlService.parse(response.getContentText());
    var results = xml.getRootElement().getChildren('search')[0];

    // Save the result in JSON format
    results.getChild('results').getChildren().forEach(function(result) {
      result.getChildren('best_book').forEach(function(book) {
        searchResults.push({
          title: book.getChild('title').getText(),
          author: book.getChild('author').getChild('name').getText(),
          thumbnail: book.getChild('image_url').getText(),
          rating: result.getChild("average_rating").getText(),
          url: baseUrl + result.getChild("id").getText()
        });
      });
    });

  }

  return searchResults;

}
})
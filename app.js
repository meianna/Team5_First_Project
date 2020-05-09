$(document).ready(function () {
  $("#submitBtn").on("click", function (e) {
    e.preventDefault();

    var userInput = $("#userInput").val();
    var apiKey = "9cd3d4af";

    $("#userInput").val("");

    $.ajax({
      type: "GET",
      url: `http://www.omdbapi.com/?apikey=${apiKey}&t=${userInput}`,
      dataType: "json",
    }).then(function (res) {
      console.log(res);
      $("#title").text(res.Title);
      $("#year").text(res.Year);
      $("#poster").append(`<img src=${res.Poster}/>`);
    });
  });
});

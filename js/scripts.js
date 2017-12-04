$(document).ready(function() {
  $("#groceries").submit(function(event) {
    var groceries = ["thing1", "thing2", "thing3", "thing4", "thing5"];
    var groceriesCaps = groceries.map(function(grocery) {
      return grocery.toUpperCase();
    });
    alert(groceriesCaps);
    groceries.forEach(function(grocery) {

      var thingInput = $("input#" + favorite).val();
      $("." + grocery).text(thingInput);
      $("#results").append("<li>" + grocery + "</li>")
    });
    $("#results").show();
    $("#groceries").hide();
    event.preventDefault();
  });
});

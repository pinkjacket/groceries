$(document).ready(function() {
  $("#groceries").submit(function(event) {
    event.preventDefault();

    var groceries = ["thing1", "thing2", "thing3", "thing4", "thing5"];
    var items = [];
    // groceries.forEach(function(grocery) {
    //   var thingInput = $("input#" + grocery).val();
    // }
    groceries.forEach(function(grocery) {
      items.push($("input#" + grocery).val());
    });
    items.sort();
    console.log(items);
    var itemsCaps = items.map(function(item) {
      return item.toUpperCase();
    });
    itemsCaps.forEach(function(itemCap) {
      $("#results").append("<li>" + itemCap + "</li>");
    });
    $("#results").show();
    $("#groceries").hide();
  });
});

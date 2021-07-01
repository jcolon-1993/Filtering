// The entire example runs when the DOM is ready
$(function ()
{
  // Data is in object literal notation
  var people =
  [
    {
      name: "Casey",
      rate: 60
    },
    {
      name: "Camille",
      rate: 80
    },
    {
      name: "Gordon",
      rate: 75
    },
    {
      name: "Nigel",
      rate: 120
    }
  ];

  // The function acts as a filter
  /* Declares priceRange. will return true if the person's wages are within the
    specified range.*/
    function priceRange(person)
    {
      return (person.rate >= 65) && (person.rate <= 90);
    };
    // Array for matching people
    var results = [];
    // filter() calls priceRange()
    results = people.filter(priceRange);


  // Creates table element
  var $tableBody = $("<tbody></tbody>");
  // Loop through new array and add matching people to the results table
  for (var i = 0; i < results.length; i++)
  {
    // Store current person
    var person = results[i];
    // Create a row for them
    var $row = $("<tr></tr>");
    // Add their name
    $row.append($("<td></td>").text(person.name));
    // Add their rate
    $row.append($("<td></td>").text(person.rate));
    // Add row to new content
    $tableBody.append($row);
  }

  // Add the new content after the body of the page
  // add tbody after thead
  $('thead').after($tableBody);
});

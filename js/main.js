$(document).ready(function() {
    var client = algoliasearch('#', '#');
    var index = client.initIndex('GSK_Employees_information');

    $('#typeahead-algolia').typeahead(null, {
        source: index.ttAdapter({ "hitsPerPage": 10 }),
        displayKey: 'LastName'
    });
});
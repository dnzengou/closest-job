var $input = $('input');
var $LastName = $('#lastName');

$(document).ready(function() {
    var client = algoliasearch('WJAYX27JB5', '7811aa9e37d97771767ce690b7331f92');
    var index = client.initIndex('GSK_Employees_information');

    $('#typeahead-algolia').typeahead(null, {
        source: index.ttAdapter({ "hitsPerPage": 10 }),
        displayKey: 'LastName'
    });
});
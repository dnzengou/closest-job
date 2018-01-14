var $input = $('input');
var $job = $('#job');

$(document).ready(function() {
    var client = algoliasearch('WJAYX27JB5', '7811aa9e37d97771767ce690b7331f92');
    var index = client.initIndex('jobs');

    $('#typeahead-algolia').typeahead({
        highlight: true,
        hint: true,
        minLength: 1
    }, {
        source: index.ttAdapter({ "hitsPerPage": 6 }),
        displayKey: 'job'
    });
});
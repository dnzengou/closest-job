/*
 * Get a Typeahead.js adapter
 * @param searchParams contains an object with query parameters (see search for details)
 */
ttAdapter: function(params) {
    var self = this;
    return function(query, cb) {
        self.search(query, function(success, content) {
            if (success) {
                cb(content.hits);
            }
        }, params);
    };
}
var path = require('path');

var PluginDependency = require('../../models/pluginDependency');
var Book = require('../../models/book');
var NodeFS = require('../../fs/node');
var installPlugin = require('../installPlugin');

var Parse = require('../../parse');

describe.skip('installPlugin', function() {
    var book;

    this.timeout(30000);

    before(function() {
        var fs = NodeFS(path.resolve(__dirname, '../../../'));
        var baseBook = Book.createForFS(fs);

        return Parse.parseConfig(baseBook)
        .then(function(_book) {
            book = _book;
        });
    });

    it('must install a plugin from NPM', function() {
        this.timeout(300000);
        var dep = PluginDependency.createFromString('ga');
        return installPlugin(book, dep);
    });
});

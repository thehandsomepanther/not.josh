var page = require('webpage').create();
var system = require('system');
var address = system.args[1];
page.viewportSize = {
    width: 1024,
    height: 768
};

var re = /\.(.*)\.com.*\/(.*)/;

page.open(address, function() {
    var match = address.match(re);
    if (!match) {
        return;
    }

    var filename = match[1] + '.' + match[2];
    console.log('Taking screenshot of ' + address);
    page.render('assets/' + filename + '.png');
    phantom.exit();
});

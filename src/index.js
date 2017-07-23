const path = require('path');
const childProcess = require('child_process');
const phantomjs = require('phantomjs-prebuilt');
const binPath = phantomjs.path;

const nots = [
    "https://www.facebook.com/paul.stone.9465",
    "https://www.facebook.com/wowJoshua",
    "https://www.facebook.com/joshua.shi",
    "https://www.facebook.com/joshua.shi.10",
    "https://www.facebook.com/joshuashi.chenger",
    "http://www.hudl.com/profile/8360316/josh-shi",
    "https://500px.com/629309850",
    "https://prezi.com/user/f63oxhwkl731/",
    "https://www.instagram.com/jshi_21/",
    "https://plus.google.com/107042551868308211661",
    "https://www.theknot.com/us/selphie-lin-and-joshua-shi-nov-2016",
    "https://www.youtube.com/embed/029bybGsOHo?autoplay=1&mute=1",
    "https://www.youtube.com/embed/8DtQoHhAjas?autoplay=1&mute=1",
    "https://www.youtube.com/embed/oVmnOuiG4x4?autoplay=1&mute=1",
    "https://www.youtube.com/embed/QrRuZ_dnO78?autoplay=1&mute=1",
    "https://www.youtube.com/embed/fMXmeA5OY6M?autoplay=1&mute=1",
    "https://www.youtube.com/embed/GgxcpqYYQC8?autoplay=1&mute=1",
    "https://www.flickr.com/photos/joshuas_pix/",
    "https://soundcloud.com/joshua-shi-1",
    "https://plus.google.com/106728782740582136229",
    "https://www.linkedin.com/in/joshua-he-shi-283b9593",
    "https://www.linkedin.com/in/joshuashi",
    "https://www.linkedin.com/in/shijoshua",
    "https://www.linkedin.com/in/joshuapshi",
    "https://www.linkedin.com/in/joshua-shi-aa810757",
    "https://www.linkedin.com/in/joshua-shi-5ba0369",
    "https://www.linkedin.com/in/joshua-shi-5381204b",
    "https://www.linkedin.com/in/joshua-shi-4622234a",
    "https://www.linkedin.com/in/josh-shi-22152a26",
    "https://www.linkedin.com/in/josh-shi-a151865",
    "https://www.linkedin.com/in/josh-shi-672a1883",
    "https://www.linkedin.com/in/josh-shi-672a1883",
    "https://www.linkedin.com/in/josh-shi-a029a7103",
    "https://www.linkedin.com/in/josh-shi-07141454",
    "https://www.linkedin.com/in/josh-shi-07141454",
    "https://www.linkedin.com/in/qianfeng-josh-shi-19342423",
    "https://www.linkedin.com/in/josh-shi-7aaa9084"
];

for (const url of nots) {
    var program = phantomjs.exec(path.join(__dirname, 'script.js'), url);
    program.stdout.pipe(process.stdout);
    program.stderr.pipe(process.stderr);
    program.on('exit', code => {
        // do something on end
    });
}

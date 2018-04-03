const express = require('express');
const os = require('os');
const { detect } = require('detect-browser');
const browser = detect();

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    let lang = req.headers['accept-language'].substr(0,5);
    let ipAddress = req.connection.remoteAddress;
    let software = `${os.platform()} ${os.release()} ${browser.name} v${browser.version}`;
    console.log(req.headers['user-agent']);
    res.send({
        ipaddress: ipAddress,
        language: lang,
        software
    }).end();
});

app.listen(port, () => {
    console.log(`Server is up on ${port}`);
});


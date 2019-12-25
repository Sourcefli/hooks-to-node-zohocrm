
const express = require('express');
const app = express.Router();

const zoho = require('@trifoia/zcrmsdk');

const config = require('./zoho.config');

app.get('/contacts', (req, res, next) => {
    zoho.initialize(config).then((client) => {
        client.API.MODULES.get({
            module: 'Contacts',
            params: {
                page: 0,
                per_page: 25,
            },
        }).then((response) => {
            res.json(JSON.parse(response.body));
        }).catch(next);
    }).catch(next);
});

export default app;
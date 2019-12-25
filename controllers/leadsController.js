const express = require('express')
const router = express.Router()

const zoho = require('@trifoia/zcrmsdk')
const config = require('../zoho.config')

exports.getAllLeads = (req, res, next) => {
    zoho.initialize(config).then((client) => {
        client.API.MODULES.get({
            module: 'Leads',
            params: {
                page: 0,
                per_page: 25,
            },
        }).then((response) => {
            const data = JSON.parse(response.body)
            const leads = {...data}
            res.render('home', {
                data: leads
            })
            // res.json(leads)
        }).catch(next)
    }).catch(next)
}

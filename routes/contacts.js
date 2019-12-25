const express = require('express')
const router = express.Router()

const zoho = require('@trifoia/zcrmsdk')
const config = require('../zoho.config')

router.get('/leads', (req, res, next) => {
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
})


// router.get('/leads/search', (req, res, next) => {

//     const {
//         page: 0,
//         per_page: 25,
//         Phone
//         = req.query;
//     }

//     zoho.initialize(config).then((client) => {
//         client.API.MODULES.get({
//             module: 'Leads',
//             params: {
//                 page,
//                 per_page,
//                 criteria: `(Phone:equals:${Phone})`
//             }
//         }).then((response) => {
//             res.json(JSON.parse(response.body))
//         }).catch(next)
//     }).catch(next)
// })

module.exports = router
// https://www.npmjs.com/package/jenkins-api

const jenkinsapi = require('jenkins-api')

const jenkins = jenkinsapi.init("http://luis:lm642531@34.234.33.175:8080/")

const express = require('express')
const app = express()

const port = process.env.PORT || 3000

app.get(`/:jobName`, function (req, res) {
    let jobName = req.params.jobName
    jenkins.last_build_info(jobName, function(err, data) {
        if (err){ return console.log(err); }
        console.log('last build: ',data.id)
        res.redirect(`http://34.234.33.175:8080/job/${jobName}/${data.id}/cucumber-html-reports/overview-features.html`)
    })
})
app.listen(port)


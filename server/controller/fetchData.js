const mongodb = require('mongoose')
const Company = require('../models/companiesModel.js')
const Ads = require('../models/adsModel.js')

const fetchData = async () => {
    const data = await Ads.find()
    console.log("function Called")
    console.log(data)
}

const fetchData1 = async (req, res) => {
    let keyword = req.body.body.keyword
    
    console.log("keyword",keyword) 
    const data = await Ads.aggregate([{
        $lookup:
        {
            from: "companies1",
            localField: "companyId",
            foreignField: "_id",
            as: "Company"
        }
    }])
    // let x = "abhi"
    // x.toLowerCase()
    // console.log("function Called")
    // console.log(data)
    // console.log(data[0].primaryText.includes("help"))
    let newData = data.filter((item) => {
        // console.log(item.Company[0].name,"end")
        return (item.primaryText.toLowerCase().includes(keyword) == true || item.headline.toLowerCase().includes(keyword) == true || item.description.toLowerCase().includes(keyword) == true || item.Company[0].name.toLowerCase().includes(keyword) == true)
    })
    // console.log(newData)
    console.log("http://localhost:3001/getData")
    res.json(newData)
    // res.send('hii')
}


module.exports = fetchData1
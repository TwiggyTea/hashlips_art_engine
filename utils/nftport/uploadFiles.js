require('dotenv').config()
const fetch = require('node-fetch');
const FormData = require("form-data")
const basePath = process.cwd();
const fs = require("fs");


fs.readdirSync(`${basePath}/build/images`).forEach(file => {
    const formData = new FormData()
    const fileStream = fs.createReadStream(`${basePath}/build/images/${file}`)
    formData.append("file", fileStream)

    let url = 'https://api.nftport.xyz/v0/contracts';
    
    let options = {
        method: 'POST',
        headers: {
            Authorization: process.env.API_KEY
        },
        body: '{"chain":"rinkeby","name":"goldSquare","symbol":"C","owner_address":"0x4344CA26730aAfdf485169B7ebB3c130869b3480","metadata_updatable":true}'
        };
    
        fetch(url, options)
        .then(res => res.json())
        .then(json => console.log(json))
        .catch(err => console.error('error:' + err));
})

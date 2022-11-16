// Get modules
const request = require('request');
const dotenv = require('dotenv');
const { readFileSync } = require('fs');

dotenv.config();


// Read in JSON files
const rawA = readFileSync('./c1.json');
const rawB = readFileSync('./c2.json');
const rawC = readFileSync('./c3.json');


// Put in as const
const partA = JSON.parse(rawA); 
const partB = JSON.parse(rawB); 
const partC = JSON.parse(rawC); 

// A
request({
    method: 'PUT',
    uri: process.env.PART_A, 
    headers: {
        'Authorization' : process.env.AUTH,
        'Content-type' : 'application/json'
    },
    body: partA,
    json: true
  
}, function(error, request, body){
   console.log(body);
});


// B
request({
    method: 'PUT',
    uri: process.env.PART_B, 
    headers: {
        'Authorization' : process.env.AUTH,
        'Content-type' : 'application/json'
    },
    body: partB,
    json: true
  
}, function(error, request, body){
   console.log(body);
});


// C
request({
    method: 'PUT',
    uri: process.env.PART_C, 
    headers: {
        'Authorization' : process.env.AUTH,
        'Content-type' : 'application/json'
    },
    body: partC,
    json: true
  
}, function(error, request, body){
   console.log(body);
});
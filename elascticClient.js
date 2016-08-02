"use strict"
const elasticsearch = require("elasticsearch")
// import elasticsearch from "elasticsearch"

// let client = new elasticsearch.Client({
//   host: 'localhost:9200',
//   log: 'trace'
// });
//
// // client.get({
// //   index: 'dbexample',
// //   type: 'userInfo',
// //   id: 1234
// // }, function (error, response) {
// //   if (error)
// //     console.error(error);
// //
// //   console.log(response)
// // });
//
// client.get({
//   index: 'dbexample',
//   type: 'userInfo',
//   id: 1234
// }).then( data => {
//   console.log(data);
// },error => {
//   console.log(error)
// });

const ElasticClient = function(){

  this.client = new elasticsearch.Client({
    host: 'localhost:9200',
    log: 'trace'
  });
}

ElasticClient.prototype.getPeopleInfo = function(id){

  return this.client.get({
    index: 'dbexample',
    type: 'userInfo',
    id: id
  });
}

module.exports.ElasticClient = ElasticClient

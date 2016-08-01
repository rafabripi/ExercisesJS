"use strict"

import elasticsearch from "elasticsearch"

let client = new elasticsearch.Client({
  host: 'localhost:9200',
  log: 'trace'
});

client.get({
  index: 'dbexample',
  type: 'userInfo',
  id: 1234
}, function (error, response) {
  if (error)
    console.error(error);

  console.log(response)
});

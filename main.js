// Load the Cloudant library.
var Cloudant = require('@cloudant/cloudant');

// Initialize the library with my account.
var cloudant = Cloudant(
    {
        "username": "",
        "password": "",
        "host": "",
        "port": "",
        "url": ""
    }
);

cloudant.db.list(function(err, allDbs) {
  console.log('All my databases: %s', allDbs.join(', '))
});

// Specify the database we are going to use
var test = cloudant.db.use('shortener')

// insert a document
test.insert({ yes: true }, 'prova', function(err, body, header) {
  if (err) {
    return console.log('[shortener.insert] ', err.message);
  }

  console.log('Insert done.');
  console.log(body);
});
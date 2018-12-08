const redis = require('redis');
const client = redis.createClient();

client.on('error', err => { console.log(`Error: ${err}`) });

// ________________________________________________________
// Create value in DB
// inrease value
client.set('test_value', 1, redis.print);
client.get('test_value', redis.print);
client.incr('test_value', redis.print);

// ________________________________________________________
// function to write values from array
client.rpush(['frameworks', 'ReactJS', 'Redux'], (err, reply) => { console.log(reply) });

// function to read values from array
client.lrange('frameworks', 0, -1, (err, reply) => { console.log(reply) });

// function to delete values from array

// client.del('frameworks', function(err, reply) {
//     console.log(reply);
// });
client.quit();
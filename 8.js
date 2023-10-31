const map = new Map();
map.set('key1', 'value1');
map.set('key2', 'value2');
map.set('key3', 'value3');

map.forEach((value, key) => {
  console.log( key,value);
});

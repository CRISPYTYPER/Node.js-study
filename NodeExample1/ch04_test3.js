process.on('tick', function(count) {
  console.log('tick event occured : %s', count);
});

setTimeout(function() {
  console.log('2초 후에 tick event 전달 시도함.');

  process.emit('tick','2');
}, 2000);
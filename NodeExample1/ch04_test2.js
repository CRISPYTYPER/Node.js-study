process.on('exit', function() {
  console.log('exit event occured');
});

setTimeout(function() {
  console.log('2초 후에 시스템 종료 시도함.');

  process.exit();
}, 2000);
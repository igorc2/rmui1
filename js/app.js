React.render(
    React.createElement(Forum, null),
    document.getElementById('forum')
);

var myemitter = new EventEmitter();

myemitter.on('STARTED', function(){
	console.log('started');
});

myemitter.on('STARTED', function(){
	console.log('started 2');
});

myemitter.emit('STARTED');

ForumDispatcher.register(function(action){
    console.log('received a action');
    console.log(action);
})
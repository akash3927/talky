/** @format */

const io = require('socket.io')(8000, {
	cors: {
		origin: 'http://127.0.0.1:5500',
	},
});
const users = {};

io.on('connection', (socket) => {
	socket.on('new-user-joined', (name) => {
		console.log('new user', name);
		users[socket.id] = name;
		socket.broadcast.emit('user-joined', name);
	});
	socket.on('send', (message) => {
		socket.broadcast.emit('reiceive', {
			message: message,
			name: users[socket.id],
		});
	});
});

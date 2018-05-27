/*
const WebSocket = require('ws'); // TODO: switch to socket.io?
const PORT = 8989;
const wss = new WebSocket.Server({ port: PORT });
const users = [];
let index = users.length;

const broadcast = (data, ws) => {
    wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN && client !== ws) {
            client.send(JSON.stringify(data));
        }
    })
};

wss.on('connection', (ws) => {
    // let index;
    console.log('listening on *: ' + PORT);

    ws.on('message', (message) => {
        const data = JSON.parse(message);

        switch (data.type) {
            case 'ADD_USER': {
                users.push('user' + index);

                console.log(users);

                if (users.length === 1) { // First client
                    // Show digital assistant
                    console.log("You're the first " + index); // user0 online

                    ws.send(JSON.stringify({
                        type: 'ACTIVATE_ASSISTANT',
                        payload: { assistant: true }, // At this moment it will be only 1 user
                    }));
                    broadcast({
                        type: 'ACTIVATE_ASSISTANT',
                        payload: { assistant: true },
                    }, ws);
                }

                ws.send(JSON.stringify({
                    type: 'USERS_LIST',
                    payload: { users: users }, // index = client
                }));
                broadcast({
                    type: 'USERS_LIST',
                    payload: { users: users }
                }, ws);

                index++;
                break;
            }
            case 'SEND_MESSAGE':
                broadcast({
                    type: 'SEND_MESSAGE',
                    author: data.author,
                    message: data.message,
                    //receiver
                    activeUser: data.activeUser,
                }, ws);
                console.log('server SEND_MESSAGE');
                break;
            default:
                break
        }
    });

    ws.on('close', () => {
        index--;
        users.splice(index, 1);

        console.log('close');
        console.log(users);
        broadcast({
            type: 'USERS_LIST',
            payload: { users: users },
        }, ws)
    })
});

*/

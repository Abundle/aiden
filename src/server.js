// TODO watch https://www.youtube.com/watch?v=84GXJANOYFw&list=PLfUtdEcvGHFHdOYFXj4cY6ZIFkSp6MOuY&index=1&t=0s

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
            case 'ADD_USER': { // TODO: assistant should be on by default?
                // index = users.length;
                users.push('user' + index);
                // index++;

                console.log(users);

                if (users.length === 1) { // First client
                    // Show digital assistant
                    console.log("You're the first " + index); // user0 online

                    ws.send(JSON.stringify({
                        type: 'ACTIVATE_ASSISTANT',
                        payload: { assistant: true }, // At this moment it will be only 1 user
                        // payload: { assistant: true, user: users }, // At this moment it will be only 1 user
                    }));
                    broadcast({
                        type: 'ACTIVATE_ASSISTANT',
                        payload: { assistant: true },
                        // payload: { assistant: true, user: users },
                    }, ws);
                }

                ws.send(JSON.stringify({
                    type: 'USERS_LIST',
                    payload: { users: users }, // index = client
                }));
                broadcast({
                    type: 'USERS_LIST',
                    payload: { users: users }
                    // users,
                    // payload: { users, client: index },
                }, ws);

                index++;


                /*ws.send(JSON.stringify({
                    type: 'USERS_LIST',
                    users,
                }));
                broadcast({
                    type: 'USERS_LIST',
                    users,
                }, ws);*/
                break;
            }
            case 'SEND_MESSAGE':
                broadcast({
                    type: 'SEND_MESSAGE',
                    // payload: { message: data.message, author: data.author },
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

    ws.on('close', () => { // TODO: if two windows are open, one is reloaded, it should make the other window the assistant?
        index--;
        users.splice(index, 1);

        console.log('close');
        console.log(users);
        broadcast({
            type: 'USERS_LIST',
            payload: { users: users },
            // users
        }, ws)
    })
});


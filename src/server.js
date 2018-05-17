// TODO watch https://www.youtube.com/watch?v=84GXJANOYFw&list=PLfUtdEcvGHFHdOYFXj4cY6ZIFkSp6MOuY&index=1&t=0s

const WebSocket = require('ws');
const PORT = 8989;
const wss = new WebSocket.Server({ port: PORT });
// const users = [];

const broadcast = (data, ws) => {
    wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN && client !== ws) {
            client.send(JSON.stringify(data));
        }
    })
};

wss.on('connection', (ws) => {
    let index;

    console.log('listening on *: ' + PORT);

    ws.on('message', (message) => {
        const data = JSON.parse(message);

        switch (data.type) {
            case 'ADD_USER': {
                index = users.length;

                if (index === 0) { // First client
                    // Show digital assistant
                    console.log("You're the first");
                    ws.send(JSON.stringify({
                        type: 'ACTIVATE_ASSISTANT',
                        payload: true,
                    }));
                    broadcast({
                        type: 'ACTIVATE_ASSISTANT',
                        payload: true,
                    }, ws);
                } /*else {
                    console.log('Sender phone');
                }*/

                users.push({ name: data.name, id: index + 1 });

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
            case 'ADD_MESSAGE':
                broadcast({
                    type: 'ADD_MESSAGE',
                    message: data.message,
                    author: data.author
                }, ws);
                break;
            default:
                break
        }
    });

    ws.on('close', () => {
        users.splice(index, 1);
        broadcast({
            type: 'USERS_LIST',
            users
        }, ws)
    })
});


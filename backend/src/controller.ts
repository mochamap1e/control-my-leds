// https://app-h5.govee.com/user-manual/wlan-guide

import Elysia, { status, t } from "elysia";

// socket used for sending messages
const socket = await Bun.udpSocket({});

// socket used for listening
Bun.serve({ 
    port: 4002,

    fetch(req, server) {
        if (server.upgrade(req)) { return; }
    },

    websocket: {
        message(ws, message) {
            console.log(message);
        }
    }
});

function Send(data: object) {
    socket.send(JSON.stringify(data), 4003, "10.0.0.89"); // i skipped the scanning part and just got the ip manually
}

export default new Elysia()
    .get("/state", async () => {
        Send({
            "msg": {
                "cmd": "devStatus",
                "data": {}
            }
        });

        return status(200);
    })

    .post("/power", ({ body }) => {
        Send({
            "msg": {
                "cmd": "turn",
                "data": {
                    "value": body.value
                }
            }
        });

        return status(200);
    }, {
        body: t.Object({
            value: t.Union([t.Literal(0), t.Literal(1)])
        })
    })
    
    .post("/brightness", ({ body }) => {
        Send({
            "msg": {
                "cmd": "brightness",
                "data": {
                    "value": body.value
                }
            }
        });

        return status(200);
    }, {
        body: t.Object({
            value: t.Number({ minimum: 1, maximum: 100 })
        })
    })
    
    .post("/color", ({ body }) => {
        Send({
            "msg": {
                "cmd": "colorwc",
                "data": {
                    "color": {
                        "r": body.r,
                        "g": body.g,
                        "b": body.b
                    },
                    "colorTemInKelvin": 0
                }
            }
        });

        return status(200);
    }, {
        body: t.Object({
            r: t.Number({ minimum: 0, maximum: 255 }),
            g: t.Number({ minimum: 0, maximum: 255 }),
            b: t.Number({ minimum: 0, maximum: 255 })
        })
    });
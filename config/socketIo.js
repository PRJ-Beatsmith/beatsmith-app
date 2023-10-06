const socket = require("../Sockets/socketServer");
// const socketConf = require("../Sockets/serverConfInfra/socket");
// const applicationSocket = require("../Sockets/applicationSocket");
// const whiteboardSocket = require("../Sockets/whiteboardSocket");
// const bcmsSocket = require("../Sockets/bcmsSocket");
const socketio = require("socket.io");

/**
 * Start socket.io listening
 * @function
 * @param {object} server
 */

const listen = (server) => {
  const io = socketio.listen(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
    maxHttpBufferSize: 1e8,
  });

  socket.init(io);
  socketConf.init(io);
  socketMessaging.init(io);
  applicationSocket.init(io);
  whiteboardSocket.init(io);
  paymentTerminalSocket.init(io);
  bcmsSocket.init(io);
  console.log("Socket.IO connected");
};

/**
 * Close socket.io connection
 * @function
 */
const close = () => {
  socketio.close();
  console.log("Socket.IO closed");
};

module.exports = {
  listen,
  close,
};

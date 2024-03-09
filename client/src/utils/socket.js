import socketIOClient from "socket.io-client";

//  export const socket = socketIOClient(`https://${window.location.hostname}:${process.env.REACT_APP_PORT}`)
export const socket =
  process.env.NODE_ENV === "production"
    ? socketIOClient(`https://${window.location.hostname}`, {
        path: `${process.env.PUBLIC_URL}/socket.io`,
      })
    : socketIOClient(
        `https://${window.location.hostname}:${process.env.REACT_APP_PORT}`,
      );

export const appSocket = (query) => {
  const socket =
    process.env.NODE_ENV === "production"
      ? socketIOClient(`https://${window.location.hostname}/application`, {
          path: `${process.env.PUBLIC_URL}/socket.io`,
          query,
        })
      : socketIOClient(
          `https://${window.location.hostname}:${process.env.REACT_APP_PORT}/application`,
          {
            path: `${process.env.PUBLIC_URL}/socket.io`,
            query,
          },
        );
  return socket;
};

export const socketConf =
  process.env.NODE_ENV === "production"
    ? socketIOClient(`https://${window.location.hostname}/conference`, {
        path: `${process.env.PUBLIC_URL}/socket.io`,
      })
    : socketIOClient(
        `https://${window.location.hostname}:${process.env.REACT_APP_PORT}/conference`,
      );

export const socketChat = (query) =>
  process.env.NODE_ENV === "production"
    ? socketIOClient(`https://${window.location.hostname}/chat`, {
        path: `${process.env.PUBLIC_URL}/socket.io`,
        query,
      })
    : socketIOClient(
        `https://${window.location.hostname}:${process.env.REACT_APP_PORT}/chat`,
        {
          path: `${process.env.PUBLIC_URL}/socket.io`,
          query,
        },
      );

export const socketMonitoringDevice = () =>
  socketIOClient("https://local.sessionwebsocket.de:6969/monitoring", {
    path: `/socket.io`,
    withCredentials: false,
  });

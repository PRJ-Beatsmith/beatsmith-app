const urlParams = new URLSearchParams(window.location.search);

const isInDebugMode = () => {
  return (
    urlParams.get("debug") === "true" || process.env.NODE_ENV === "development"
  );
};

const Logger = {
  log: function (...params) {
    if (isInDebugMode()) {
      console.log(...params);
    }
  },
  error: function (...params) {
    if (isInDebugMode()) {
      console.error(...params);
    }
  },
  debug: function (...params) {
    if (isInDebugMode()) {
      console.debug(...params);
    }
  },
  info: function (...params) {
    if (isInDebugMode()) {
      console.info(...params);
    }
  },
  warn: function (...params) {
    if (isInDebugMode()) {
      console.warn(...params);
    }
  },
  assert: function (...params) {
    if (isInDebugMode()) {
      console.assert(...params);
    }
  },
  trace: function (...params) {
    if (isInDebugMode()) {
      console.trace(...params);
    }
  },
  count: function (...params) {
    if (isInDebugMode()) {
      console.count(...params);
    }
  },
  countReset: function (...params) {
    if (isInDebugMode()) {
      console.countReset(...params);
    }
  },
  time: function (params) {
    if (isInDebugMode()) {
      console.time(params);
    }
  },
  timeLog: function (...params) {
    if (isInDebugMode()) {
      console.timeLog(...params);
    }
  },
  timeStamp: function (...params) {
    if (isInDebugMode()) {
      console.timeStamp(...params);
    }
  },
  timeEnd: function (params) {
    if (isInDebugMode()) {
      console.timeEnd(params);
    }
  },
  group: function (...params) {
    if (isInDebugMode()) {
      console.group(...params);
    }
  },
  groupEnd: function (...params) {
    if (isInDebugMode()) {
      console.groupEnd(...params);
    }
  },
  groupCollapsed: function (...params) {
    if (isInDebugMode()) {
      console.groupCollapsed(...params);
    }
  },
  profile: function (...params) {
    if (isInDebugMode()) {
      console.profile(...params);
    }
  },
  profileEnd: function (...params) {
    if (isInDebugMode()) {
      console.profileEnd(...params);
    }
  },
  dir: function (...params) {
    if (isInDebugMode()) {
      console.dir(...params);
    }
  },
  dirXml: function (...params) {
    if (isInDebugMode()) {
      console.dirXml(...params);
    }
  },
  clear: () => {
    if (isInDebugMode()) {
      console.clear();
    }
  },
};

export default Logger;

const NOT_SET = "NOT_SET";
const KNOCKING = "KNOCKING";
const KNOCKING_ACCEPT = "KNOCKING_ACCEPT";
const KNOCKING_REJECT = "KNOCKING_REJECT";
const USER = Object.freeze({
  ACTIVE: "ACTIVE",
  INACTIVE: "INACTIVE",
  INVITED: "INVITED",
  PENDING: "PENDING",
  EXPIRED: "EXPIRED",
  REGISTERED: "REGISTERED",
  EXTERNAL: "external",
  INTERNAL: "internal",
  EXTERNAL_LOGINS: Object.freeze({
    SOURCE: "source",
    SOUCE_ID: "sourceId",
    SOURCE_TYPE: Object.freeze({
      LDAP: "ldap",
      OIDC: "oidc",
      SAML: "saml",
    }),
  }),
  EVENTS: Object.freeze({
    ON_UPDATE_ONLINE_STATUS: "onUpdateOnlineStatus",
    ON_UPDATE_CALL_STATUS: "onUpdateCallStatus",
    ON_ACTIVATED: "onActivated",
    ON_DEACTIVATED: "onDeactivated",
  }),
});

const QUEUE = Object.freeze({
  EVENTS: Object.freeze({
    ON_UPDATE_ONLINE_STATUS: "onUpdateOnlineStatus",
    ON_UPDATE_CALL_STATUS: "onUpdateCallStatus",
  }),
});

const BASE_SESSION_AVATAR_URL = "/img/avatars/session";

const SOUNDS = Object.freeze({
  SIMPLY_NOTIFIED: "Simply Notified",
  CLASSIC_PING: "Classic Ping",
  TRADITIONAL_CALL_HARMONY: "Traditional Call Harmony",
  MODERN_MOBILE_MELODY: "Modern Mobile Melody",
  MELODIC_HARMONY_ALERT: "Melodic Harmony Alert",
  ENIGMATIC_WAIT_TUNE: "Enigmatic Wait Tune",
  HOLDING_PATTERN_HARMONY: "Holding Pattern Harmony",
  UNIVERSAL_RING: "Universal Ring",
  SLEEK_SMARTPHONE_SOUND: "Sleek Smartphone Sound",
  VIDEO_CALL_SIGNAL: "Video Call Signal",
  VIRTUAL_MEETUP_MELODY: "Virtual Meetup Melody",
  PROMPT_WAIT_HARMONICS: "Prompt Wait Harmonics",
  ANTICIPATION_TUNE: "Anticipation Tune",
  SOFT_WHISPER_ALERT: "Soft Whisper Alert",
  GENTLE_BREEZE_PING: "Gentle Breeze Ping",
  MENU_MUSING_TUNE: "Menu Musing Tune",
  QUIET_PAUSE_CHIME: "Quiet Pause Chime",
  VIDEO_CALL_BEACON_QUEUE_CALL: "Video Call Beacon Queue Call",
});

const VOLUMN_LEVELS = Object.freeze({
  LOW: "low",
  MEDIUM: "medium",
  HIGH: "high",
});

const constants = Object.freeze({
  NOT_SET,
  KNOCKING,
  KNOCKING_ACCEPT,
  KNOCKING_REJECT,
  USER,
  BASE_SESSION_AVATAR_URL,
  QUEUE,
  SOUNDS,
  VOLUMN_LEVELS,
});

export default constants;

import * as TYPES from "actions/types";

const initialState = {
  signUpData: {
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    birthday: "",
    allAgreementsAccepted: false,
    termsOfUse: false,
    agePolicy: false,
    privacyPolicy: false,
    onboardingStep: 1,
  },
  forgotPasswordData: {
    email: "",
    newPassword: "",
    forgotPasswordStep: 1,
  },
  socket: null,
  isAuthenticated: false,
  user: {},
  loading: false,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.UPDATE_SIGNUP_DATA:
      return {
        ...state,
        signUpData: { ...state.signUpData, ...action.payload },
      };
    case TYPES.SIGNUP_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case TYPES.SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: action.payload,
      };
    case TYPES.SIGNUP_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case TYPES.LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case TYPES.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: action.payload,
      };
    case TYPES.LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case TYPES.UPDATE_FORGOT_PASSWORD_DATA:
      return {
        ...state,
        forgotPasswordData: { ...state.forgotPasswordData, ...action.payload },
      };
    default:
      return state;
  }
};

export default authReducer;

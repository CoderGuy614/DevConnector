import { GET_PROFILE, PROFILE_ERROR } from "../actions/types";

const initialState = {
  profiles: [],
  repos: [],
  loading: true,
  error: {},
  profile: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_PROFILE:
      return {
        ...state,
        profile: payload,
        loading: false,
      };
    case PROFILE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}

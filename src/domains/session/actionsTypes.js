import namespace from 'helpers/namespace';

export default namespace({
  CREATE_SESSION_REQUEST: null,
  CREATE_SESSION_SUCCESS: null,
  CREATE_SESSION_FAILURE: null,
  START_CREATE_SESSION: null,
  FINISH_CREATE_SESSION: null,

  SET_SESSION_SUCCESS: null,
  SET_SESSION_ERROR: null,

  DELETE_SESSION: null,
  START_DELETE_SESSION: null,
  FINISH_DELETE_SESSION: null,

  SET_SESSION_CONTEXT:null,

  CHECK_SESSION_TOKEN: null,
  SET_SESSION_TOKEN: null,

  CLEAR_SESSION: null,
}, 'SESSION');
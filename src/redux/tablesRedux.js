import Axios from 'axios';
import { api } from './../setting.js';

/* selectors */
export const getAll = ({tables}) => tables.data;
export const getLoadingState = ({tables}) => tables.loading;

/* action name creator */
const reducerName = 'tables';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');
const UPDATE_TABLE = createActionName('UPDATE_TABLE');

/* action creators */
export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
export const fetchError = payload => ({ payload, type: FETCH_ERROR });
export const updateTable = payload => ({ payload: {...payload, id: payload.id, status: payload.status}, type: UPDATE_TABLE});

/* thunk creators */
export const fetchFromAPI = () => {
  return (dispatch, getState) => {
    dispatch(fetchStarted());

    Axios
      .get(`${api.url}/${api.tables}`)
      .then(res => {
        dispatch(fetchSuccess(res.data));
      })
      .catch(err => {
        dispatch(fetchError(err.message || true));
      });
  };
};

export const updateAPI = (id, status) => {
  return (dispatch, getState) => {
    dispatch(updateTable(id, status));
  };
};

const tableStatus = (status, tableOrder) => {
  if(status === 'ordered') {
    return '123';
  } else if (status === 'free') {
    return null;
  } else {
    return tableOrder;
  }
};

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case FETCH_START: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
        },
      };
    }
    case FETCH_SUCCESS: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        data: action.payload,
      };
    }
    case FETCH_ERROR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
        },
      };
    }
    case UPDATE_TABLE: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        data: statePart.data.map(
          (table, i) => i === action.payload.id ? {...table, status: action.payload.status, order: tableStatus(action.payload.status, table.order)}
            : table
        ),
      };}
    default:
      return statePart;
  }
}

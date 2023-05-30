import { ADD_BIODATA, GET_LIST_BIODATA } from "../../action/biodataActions";

const initialState = {
  getListBiodataResult: false,
  getListBiodataLoading: false,
  getListBiodataError: false,

  addBiodataResult: false,
  addBiodataLoading: false,
  addBiodataError: false,
};

const biodata = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_BIODATA:
      return {
        ...state,
        getListBiodataResult: action.payload.data,
        getListBiodataLoading: action.payload.loading,
        getLisKontakError: action.payload.errorMessage,
      };

    case ADD_BIODATA:
      return {
        ...state,
        addBiodataResult: action.payload.data,
        addBiodataLoading: action.payload.loading,
        addBiodataError: action.payload.errorMessage,
      };

    default:
      return state;
  }
};

export default biodata;

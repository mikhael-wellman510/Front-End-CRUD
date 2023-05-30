import axios from "axios";

export const GET_LIST_BIODATA = "GET_LIST_BIODATA";
export const ADD_BIODATA = "ADD_LIST_BIODATA";

export const getListBiodata = () => {
  console.log("masuk action");
  return async (dispatch) => {
    //loading
    dispatch({
      type: GET_LIST_BIODATA,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    //get api
    await axios({
      method: "GET",
      url: "http://localhost:5000/biodata",
      timeout: 100000,
    })
      .then((response) => {
        //berhasil get api
        console.log("berhasil dapat data", response.data);
        dispatch({
          type: GET_LIST_BIODATA,
          payload: {
            loading: false,
            data: response.data?.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        console.log(error);
        dispatch({
          type: GET_LIST_BIODATA,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const addBiodata = (data) => {
  console.log("masuk action");
  return async (dispatch) => {
    //loading
    dispatch({
      type: ADD_BIODATA,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    //get api
    await axios({
      method: "POST",
      url: "http://localhost:5000/update",
      timeout: 100000,
      data: data,
    })
      .then((response) => {
        //berhasil get api
        console.log("berhasil dapat data", response.data);
        dispatch({
          type: ADD_BIODATA,
          payload: {
            loading: false,
            data: response.data?.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        console.log(error);
        dispatch({
          type: ADD_BIODATA,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

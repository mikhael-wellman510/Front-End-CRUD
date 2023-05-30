import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../css/style.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getListBiodata } from "../../action/biodataActions";

const HomePage = () => {
  const dispatch = useDispatch();

  const { getListBiodataResult, getListBiodataLoading, getListBiodataError } =
    useSelector((state) => state.BiodataReducers);

  useEffect(() => {
    // getList Kontak
    dispatch(getListBiodata());
  }, [dispatch]);

  return (
    <div className="h1">
      <table>
        <tr>
          <th>No </th>
          <th>Name</th>
          <th>Email</th>
          <th>contact</th>
          <th>Action</th>
        </tr>

        {getListBiodataResult ? (
          getListBiodataResult.map((biodata, index) => {
            return (
              <tr key={biodata.id}>
                <td>{index + 1}</td>
                <td>{biodata.name}</td>
                <td>{biodata.email}</td>
                <td>{biodata.contact}</td>
                <td>
                  <Link>
                    <button>Edit</button>
                  </Link>
                  <button>Delete</button>
                  <Link>
                    <button>View</button>
                  </Link>
                </td>
              </tr>
            );
          })
        ) : getListBiodataLoading ? (
          <p>Loading. . .</p>
        ) : (
          <p>{getListBiodataError ? getListBiodataError : "data kosong"}</p>
        )}
      </table>
      <Link to="/addContact">
        <button>Add Kontak</button>
      </Link>
    </div>
  );
};

export default HomePage;

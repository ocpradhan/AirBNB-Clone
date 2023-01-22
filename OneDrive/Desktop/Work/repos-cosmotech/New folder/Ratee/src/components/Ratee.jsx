import React, { useRef } from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/ratee.css";
import PerfectScrollbar from "react-perfect-scrollbar";

export default function Ratee() {
  // For Ratee Type
  const [rateeRows, setRateeRows] = useState([
    {
      id: 1,
      check: (
        <th scope="row">
          <input
            type="checkbox"
            name="select-row"
            id="select-row"
            className="form-check-input"
          />
        </th>
      ),
      input: (
        <td className="input-td">
          <input
            type="text"
            className="form-control"
            id="ratee-type"
            maxLength="500"
            required
          />
        </td>
      ),
      Status: (
        <td className="status-select">
          <select name="status" id="status" className="form-select ">
            <option valuee="active" selected className="dropdown-item">
              Active
            </option>
            <option value="inactive" className="dropdown-item">
              Inactive
            </option>
          </select>
        </td>
      ),
    },
    {
      id: 2,
      check: (
        <th scope="row">
          <input
            type="checkbox"
            name="select-row"
            id="select-row"
            className="form-check-input"
          />
        </th>
      ),
      input: (
        <td className="input-td">
          <input
            type="text"
            className="form-control"
            id="ratee-type"
            maxLength="500"
            required
          />
          <div id="status1"></div>
        </td>
      ),
      Status: (
        <td className="status-select">
          <select name="status" id="status" className="form-select ">
            <option value="active" selected className="dropdown-item">
              Active
            </option>
            <option value="inactive" className="dropdown-item">
              Inactive
            </option>
          </select>
        </td>
      ),
    },
    {
      id: 3,
      check: (
        <th scope="row">
          <input
            type="checkbox"
            name="select-row"
            id="select-row"
            className="form-check-input"
          />
        </th>
      ),
      input: (
        <td className="input-td">
          <input
            type="text"
            className="form-control"
            id="ratee-type2"
            maxLength="500"
            required
          />
        </td>
      ),
      Status: (
        <td className="status-select">
          <select name="status" id="status" className="form-select ">
            <option value="active" selected className="dropdown-item">
              Active
            </option>
            <option value="inactive" className="dropdown-item">
              Inactive
            </option>
          </select>
        </td>
      ),
    },
    {
      id: 4,
      check: (
        <th scope="row">
          <input
            type="checkbox"
            name="select-row"
            id="select-row"
            className="form-check-input"
          />
        </th>
      ),
      input: (
        <td className="input-td">
          <input
            type="text"
            className="form-control"
            id="ratee-type"
            maxLength="500"
            required
          />
          <div id="status3"></div>
        </td>
      ),
      Status: (
        <td className="status-select">
          <select name="status" id="status" className="form-select ">
            <option value="active" selected className="dropdown-item">
              Active
            </option>
            <option value="inactive" className="dropdown-item">
              Inactive
            </option>
          </select>
        </td>
      ),
    },
    {
      id: 5,
      check: (
        <th scope="row">
          <input
            type="checkbox"
            name="select-row"
            id="select-row"
            className="form-check-input"
          />
        </th>
      ),
      input: (
        <td className="input-td w-100">
          <input
            type="text"
            className="form-control"
            id="ratee-type"
            maxLength="500"
            required
          />
        </td>
      ),
      Status: (
        <td className="status-select">
          <select name="status" id="status" className="form-select ">
            <option value="active" className="dropdown-item">
              Active
            </option>
            <option value="inactive" className="dropdown-item">
              Inactive
            </option>
          </select>
        </td>
      ),
    },
  ]);

  const addRateeRow = () => {
    const newRow = {
      id: rateeRows.length + 1,
      check: (
        <th className="check-th" scope="row">
          <input
            type="checkbox"
            name="select-row"
            id="select-row"
            className="form-check-input"
          />
        </th>
      ),
      input: (
        <td className="input-td">
          <input
            type="text"
            className="form-control"
            id="ratee-type"
            maxLength="500"
            required
          />
        </td>
      ),
      Status: (
        <td className="status-select">
          <select name="status" id="status" className="form-select ">
            <option value="active" selected className="dropdown-item">
              Active
            </option>
            <option value="inactive" className="dropdown-item">
              Inactive
            </option>
          </select>
        </td>
      ),
    };
    setRateeRows([...rateeRows, newRow]);
    // scrollRef.current.update();
  };

  const deleteRateeRow = (id) => {
    const newRows = rateeRows.slice();
    setRateeRows(newRows.filter((row) => row.id !== id));
  };

  // For Service
  const [serviceRows, setServiceRows] = useState([
    {
      id: 1,
      check: (
        <th scope="row">
          <input
            type="checkbox"
            name="select-row"
            id="select-row"
            className="form-check-input"
          />
        </th>
      ),
      input: (
        <td className="input-td">
          <input
            type="text"
            className="form-control"
            id="ratee-type"
            maxLength="500"
            required
          />
        </td>
      ),
      service: (
        <td className="status-select">
          <select name="status" id="status" className="form-select ">
            <option valuee="category-1A" className="dropdown-item">
              Category 1 A
            </option>
            <option value="category-1A" className="dropdown-item">
              Category 1 A
            </option>
            <option value="category-1B" className="dropdown-item">
              Category 1 B
            </option>
          </select>
        </td>
      ),
      Status: (
        <td className="status-select">
          <select name="status" id="status" className="form-select ">
            <option valuee="active" selected className="dropdown-item">
              Active
            </option>
            <option value="inactive" className="dropdown-item">
              Inactive
            </option>
          </select>
        </td>
      ),
    },
    {
      id: 2,
      check: (
        <th scope="row">
          <input
            type="checkbox"
            name="select-row"
            id="select-row"
            className="form-check-input"
          />
        </th>
      ),
      input: (
        <td className="input-td">
          <input
            type="text"
            className="form-control"
            id="ratee-type"
            maxLength="500"
            required
          />
          <div id="status1"></div>
        </td>
      ),
      service: (
        <td className="status-select">
          <select name="status" id="status" className="form-select ">
            <option valuee="category-1A" className="dropdown-item">
              Category 1 A
            </option>
            <option value="category-1A" className="dropdown-item">
              Category 1 A
            </option>
            <option value="category-1B" className="dropdown-item">
              Category 1 B
            </option>
          </select>
        </td>
      ),
      Status: (
        <td className="status-select">
          <select name="status" id="status" className="form-select ">
            <option value="active" selected className="dropdown-item">
              Active
            </option>
            <option value="inactive" className="dropdown-item">
              Inactive
            </option>
          </select>
        </td>
      ),
    },
    {
      id: 3,
      check: (
        <th scope="row">
          <input
            type="checkbox"
            name="select-row"
            id="select-row"
            className="form-check-input"
          />
        </th>
      ),
      input: (
        <td className="input-td">
          <input
            type="text"
            className="form-control"
            id="ratee-type2"
            maxLength="500"
            required
          />
        </td>
      ),
      service: (
        <td className="status-select">
          <select name="status" id="status" className="form-select ">
            <option valuee="category-1A" className="dropdown-item">
              Category 1 A
            </option>
            <option value="category-1A" className="dropdown-item">
              Category 1 A
            </option>
            <option value="category-1B" className="dropdown-item">
              Category 1 B
            </option>
          </select>
        </td>
      ),
      Status: (
        <td className="status-select">
          <select name="status" id="status" className="form-select ">
            <option value="active" selected className="dropdown-item">
              Active
            </option>
            <option value="inactive" className="dropdown-item">
              Inactive
            </option>
          </select>
        </td>
      ),
    },
    {
      id: 4,
      check: (
        <th scope="row">
          <input
            type="checkbox"
            name="select-row"
            id="select-row"
            className="form-check-input"
          />
        </th>
      ),
      input: (
        <td className="input-td">
          <input
            type="text"
            className="form-control"
            id="ratee-type"
            maxLength="500"
            required
          />
          <div id="status3"></div>
        </td>
      ),
      service: (
        <td className="status-select">
          <select name="status" id="status" className="form-select ">
            <option valuee="category-1A" className="dropdown-item">
              Category 1 A
            </option>
            <option value="category-1A" className="dropdown-item">
              Category 1 A
            </option>
            <option value="category-1B" className="dropdown-item">
              Category 1 B
            </option>
          </select>
        </td>
      ),
      Status: (
        <td className="status-select">
          <select name="status" id="status" className="form-select ">
            <option value="active" selected className="dropdown-item">
              Active
            </option>
            <option value="inactive" className="dropdown-item">
              Inactive
            </option>
          </select>
        </td>
      ),
    },
    {
      id: 5,
      check: (
        <th scope="row">
          <input
            type="checkbox"
            name="select-row"
            id="select-row"
            className="form-check-input"
          />
        </th>
      ),
      input: (
        <td className="input-td w-100">
          <input
            type="text"
            className="form-control"
            id="ratee-type"
            maxLength="500"
            required
          />
        </td>
      ),
      service: (
        <td className="status-select">
          <select name="status" id="status" className="form-select ">
            <option valuee="category-1A" className="dropdown-item">
              Category 1 A
            </option>
            <option value="category-1A" className="dropdown-item">
              Category 1 A
            </option>
            <option value="category-1B" className="dropdown-item">
              Category 1 B
            </option>
          </select>
        </td>
      ),
      Status: (
        <td className="status-select">
          <select name="status" id="status" className="form-select ">
            <option value="active" className="dropdown-item">
              Active
            </option>
            <option value="inactive" className="dropdown-item">
              Inactive
            </option>
          </select>
        </td>
      ),
    },
  ]);

  const addServiceRow = () => {
    const newRow = {
      id: serviceRows.length + 1,
      check: (
        <th className="check-th" scope="row">
          <input
            type="checkbox"
            name="select-row"
            id="select-row"
            className="form-check-input"
          />
        </th>
      ),
      input: (
        <td className="input-td">
          <input
            type="text"
            className="form-control"
            id="ratee-type"
            maxLength="500"
            required
          />
        </td>
      ),
      Status: (
        <td className="status-select">
          <select name="status" id="status" className="form-select ">
            <option value="active" selected className="dropdown-item">
              Active
            </option>
            <option value="inactive" className="dropdown-item">
              Inactive
            </option>
          </select>
        </td>
      ),
    };
    setServiceRows([...serviceRows, newRow]);
  };

  const deleteServiceRow = (id) => {
    const newRows = serviceRows.slice();
    setServiceRows(newRows.filter((row) => row.id !== id));
  };

  return (
    <div className="ratee">
      <div className="container">
        <div className="button-group">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={addRateeRow}
          >
            ADD
          </button>
          <button type="button" className="btn btn-secondary">
            DELETE
          </button>
          <button type="button" className="btn btn-secondary">
            IMPORT
          </button>
        </div>
        <div className="table-wrapper  scrollbar scrollbar-primary">
          <table className="table table-striped table-hover table-bordered">
            <thead>
              <tr>
                <th scope="col" className="check-th">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    name="select-all"
                    id="select-all"
                  />
                </th>
                <th className="input-td" scope="col">
                  Ratee
                </th>
                <th className="status-select" scope="col">
                  Status
                </th>
                <th className="icon-td" scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {rateeRows.map((row) => (
                <tr key={row.id}>
                  {row.check}
                  {row.input}
                  {row.Status}
                  <td className="icon-td">
                    <div className="ratee-icons">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="icon"
                      >
                        <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
                      </svg>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="icon"
                        onClick={() => deleteRateeRow(row.id)}
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="container">
        <div className="h3">
          <h3>COMPANY</h3>
        </div>

        <div className="button-group">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={addServiceRow}
          >
            ADD
          </button>
          <button type="button" className="btn btn-secondary">
            DELETE
          </button>
          <button type="button" className="btn btn-secondary">
            IMPORT
          </button>
        </div>
        <div className="table-wrapper  scrollbar scrollbar-primary">
          <table className="table table-striped table-hover table-bordered ">
            <thead>
              <tr>
                <th scope="col" className="check-th">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    name="select-all"
                    id="select-all"
                  />
                </th>
                <th className="input-td" scope="col">
                  Ratee
                </th>
                <th className="status-select" scope="col">
                  Status
                </th>
                <th className="icon-td" scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {serviceRows.map((row) => (
                <tr key={row.id}>
                  {row.check}
                  {row.input}
                  {row.Status}
                  <td className="icon-td">
                    <div className="ratee-icons">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="icon"
                      >
                        <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
                      </svg>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="icon"
                        onClick={() => deleteServiceRow(row.id)}
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

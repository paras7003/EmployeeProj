import React, { useEffect, useState } from "react";
import axios from "axios";

function Employee() {
  const [form, setForm] = useState({ name: "", address: "", salary: 0 });
  const [employees, setEmployees] = useState(null);
  function getAllEmployees() {
    try {
      axios.get("http://localhost:8081/employee").then((d) => {
        setEmployees(d.data.empData);
      });
    } catch (error) {
      alert("Unable to call API !!!");
    }
  }
  useEffect(() => {
    getAllEmployees();
  }, []);
  const changeHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  function saveClick() {
    try {
      axios.post("http://localhost:8081/employee", form).then((d) => {
        alert(d.data.message);
        getAllEmployees();
        resetForm();
      });
    } catch (error) {
      alert("Unable to call API !!!");
    }
  }
  function resetForm() {
    setForm({ name: "", address: "", salary: 0 });
  }
  function renderEmployees() {
    return employees?.map((item) => {
      return (
        <tr>
          <td>{item.name}</td>
          <td>{item.address}</td>
          <td>{item.salary}</td>
          <td>
            <button
              className="btn btn-info"
              data-target="#editEmployee"
              data-toggle="modal"
              onClick={() => {
                setForm(item);
              }}
            >
              Edit
            </button>
          </td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => {
                deleteClick(item._id);
              }}
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  }
  function updateClick() {
    try {
      axios.put("http://localhost:8081/employee", form).then((d) => {
        alert(d.data.message);
        getAllEmployees();
        resetForm();
      });
    } catch (error) {
      alert(error?.message);
    }
  }
  function deleteClick(id) {
    let ans = window.confirm("Want to delete data ? ");
    if (!ans) return;
    try {
      axios
        .delete("http://localhost:8081/employee", { data: { id: id } })
        .then((d) => {
          alert(d.data.message);
          getAllEmployees();
          resetForm();
        });
    } catch (error) {
      alert(error?.message);
    }
  }
  return (
    <>
      <div className="row p-2 m-2">
        <div className="col-9">
          <h2 className="text-primary">Employees List</h2>
        </div>
        <div className="col-3">
          <button
            className="btn btn-info form-control"
            data-target="#newEmployee"
            data-toggle="modal"
          >
            Add New Employee
          </button>
        </div>
      </div>
      <div className="row border p-2 m-2">
        <table className="table table-bordered table-striped table-active">
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Salary</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{renderEmployees()}</tbody>
        </table>
      </div>
      {/* new Employee */}
      <div class="modal" tabindex="-1" role="dialog" id="newEmployee">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header bg-info">
              <h5 class="modal-title text-white">New Employee</h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div className="form-group row">
                <label className="col-4">Name</label>
                <div className="col-8">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Enter Name"
                    onChange={changeHandler}
                    value={form.name}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-4">Address</label>
                <div className="col-8">
                  <input
                    type="text"
                    name="address"
                    className="form-control"
                    placeholder="Enter Address"
                    onChange={changeHandler}
                    value={form.address}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-4">Salary</label>
                <div className="col-8">
                  <input
                    type="number"
                    name="salary"
                    className="form-control"
                    placeholder="Enter Salary"
                    onChange={changeHandler}
                    value={form.salary}
                  />
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-primary"
                data-dismiss="modal"
                onClick={saveClick}
              >
                Save changes
              </button>
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Edit Employee */}
      <div class="modal" tabindex="-1" role="dialog" id="editEmployee">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header bg-info">
              <h5 class="modal-title text-white">New Employee</h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div className="form-group row">
                <label className="col-4">Name</label>
                <div className="col-8">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Enter Name"
                    onChange={changeHandler}
                    value={form.name}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-4">Address</label>
                <div className="col-8">
                  <input
                    type="text"
                    name="address"
                    className="form-control"
                    placeholder="Enter Address"
                    onChange={changeHandler}
                    value={form.address}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-4">Salary</label>
                <div className="col-8">
                  <input
                    type="number"
                    name="salary"
                    className="form-control"
                    placeholder="Enter Salary"
                    onChange={changeHandler}
                    value={form.salary}
                  />
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-primary"
                data-dismiss="modal"
                onClick={updateClick}
              >
                Save changes
              </button>
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Employee;

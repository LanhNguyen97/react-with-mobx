import React from "react";
import { observer } from "mobx-react";
import Input from "./components/Input";
import ItemTodo from "./components/ItemTodo";
import store from "./store";
import "./App.css";

function App(): React.FunctionComponentElement<any> {
  return (
    <div className="App">
      <div className="container mt-4">
        <div className="row justify-content-center">
          <div className="col-md-6 col-12">
            <h1 className="mb-3">Todo List</h1>
            <div className="wrapper-todo-list pr-3">
              <ItemTodo />
            </div>
            <div className="wrapper-add-todo d-flex mt-3 pr-3">
              <div className="input-group">
                <Input
                  type="text"
                  className="form-control"
                  required
                  value={store.newTodo || ""}
                  onChange={(e) => (store.newTodo = e?.target?.value)}
                />
                <button
                  className="btn btn-success"
                  onClick={() => store.addTodo({ name: store.newTodo })}
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default observer(App);

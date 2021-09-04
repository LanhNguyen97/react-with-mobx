import { observer } from "mobx-react";
import React from "react";
import store from "../../store";
import Input from "../Input";

const ItemTodo: React.FC<any> = () => {
  console.log("store.todos ===>", store.todos);
  return (
    <>
      {store.todos.map((item, index) => (
        <div className="input-group mb-3" key={index.toString()}>
          <div className="input-group-text">
            <Input
              className="form-check-input mt-0"
              type="checkbox"
              onChange={() =>
                store.updateItem(index, {
                  ...item,
                  isCompleted: (item.isCompleted = !item?.isCompleted),
                })
              }
              checked={item?.isCompleted}
            />
          </div>
          <Input
            type="text"
            className="form-control"
            value={item?.name}
            onChange={(e) =>
              store.updateItem(index, { ...item, name: e?.target?.value })
            }
          />
          <button
            className="btn btn-danger"
            onClick={() => store.removeTodo(index)}
          >
            Remove
          </button>
        </div>
      ))}
    </>
  );
};

export default observer(ItemTodo);

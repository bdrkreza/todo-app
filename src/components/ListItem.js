import { useState } from "react";

export default function ListItem({ item, id, checkComplete, handleEditTodos }) {
  const [onEdit, setOnEdit] = useState(false);
  const [editValue, setEditValue] = useState(item.name);
  const handleEdit = () => {
    setOnEdit(true);
  };

  const handleSave = (id) => {
    setOnEdit(false);
    if (editValue) {
      handleEditTodos(editValue, id);
    } else {
      setEditValue(item.name);
    }
  };

  if (onEdit) {
    return (
      <ul>
        <li>
          <input
            type="text"
            name="editValue"
            id="editValue"
            value={editValue}
            onChange={(e) => setEditValue(e.target.value.toLowerCase())}
          />
          <button className="btn" onClick={() => handleSave(id)}>
            save
          </button>
        </li>
      </ul>
    );
  } else {
    return (
      <ul>
        <li>
          <label htmlFor={id} className={item.complete ? "active" : ""}>
            <input
              type="checkbox"
              id={id}
              checked={item.complete}
              onChange={() => checkComplete(id)}
            />
            {item.name}
          </label>
          <button className="btn" disabled={item.complete} onClick={handleEdit}>
            Edit
          </button>
        </li>
      </ul>
    );
  }
}

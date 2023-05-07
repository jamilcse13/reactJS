import { useState } from "react";

// use hook with passing a single string value
// function Todo() {
//   const [todo, setTodo] = useState("");
//   const [warning, setUpdatedWarning] = useState(null);

//   const handleInput = (e) => {
//     const inputValue = e.target.value;
//     const updatedWarning = inputValue.includes(".js")
//       ? "You need javascript skill to complete the task. Do you have it?"
//       : null;

//     setTodo(inputValue);
//     setUpdatedWarning(updatedWarning);
//   };

//   return (
//     <div>
//       <p>{todo}</p>
//       <p>
//         <textarea name="todo" value={todo} onChange={handleInput} />
//       </p>

//       <h2>{warning || "Good Choice"}</h2>
//     </div>
//   );
// }

// use hook with passing an object value
function Todo() {
  const [todo, setTodo] = useState({
        title: '',
        description: '',
    });

  const { title, description } = todo;

  return (
    <div>
      <p>{title}</p>
      <p>
        <input
          type="text"
          value={title}
          onChange={(e) => setTodo ({
            ...todo,
            title: e.target.value,
          })
        }
        />
      </p>

      <p>{description}</p>

      <p>
        <textarea
          name="todo"
          value={description}
          onChange={(e) => setTodo({
            ...todo,
            description: e.target.value,
          })
        }
        />
      </p>
    </div>
  );
}

export default Todo;

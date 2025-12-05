import React, { useReducer } from 'react'

const UseReducerHook = () => {

    const initailState = 0
                        // state,action
    const handleClick = (state, hadi) => {

        // console.log("Hello from HandleCLick");

        // console.log(state, hadi);

        if (hadi == "INC") {
            return state += 1
        }
        if (hadi == "DEC") {
            return state -= 1
        }



    }


    const [state, dispatch] = useReducer(handleClick, initailState)



    return (
        <div className='flex justify-center mt-12 gap-3'>

            <button onClick={() => dispatch("DEC")} className='px-6 py-2 bg-purple-500 rounded text-white cursor-pointer'>Decrement</button>
            <h1 className='text-4xl font-semibold'>{state}</h1>
            <button onClick={() => dispatch("INC")} className='px-6 py-2 bg-purple-500 rounded text-white cursor-pointer'>Increment</button>

        </div>
    )
}

export default UseReducerHook


// import React, { useReducer, useState } from "react";

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "ADD_TODO":
//       return [...state, action.payload];

//     case "DELETE_TODO":
//       return state.filter((todo) => todo.id !== action.payload);

//     default:
//       return state;
//   }
// };

// const UseReducerHook = () => {
//   const [todos, dispatch] = useReducer(reducer, []);
//   const [inputValue, setInputValue] = useState("");

//   const addTodo = () => {
//     if (inputValue.trim() === "") return;

//     const newTodo = {
//       id: Date.now(),
//       text: inputValue,
//     };

//     dispatch({ type: "ADD_TODO", payload: newTodo });
//     setInputValue("");
//   };

//   return (
//     <div style={{ margin: "50px" }}>
//       <h1>Todo App (useReducer)</h1>

//       <input
//         type="text"
//         placeholder="Enter todo..."
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)}
//         style={{
//           padding: "8px",
//           width: "250px",
//           marginRight: "10px",
//         }}
//       />

//       <button
//         onClick={addTodo}
//         style={{
//           padding: "8px 15px",
//           backgroundColor: "black",
//           color: "white",
//           borderRadius: "5px",
//         }}
//       >
//         Add
//       </button>

//       <ul style={{ marginTop: "20px" }}>
//         {todos.map((todo) => (
//           <li
//             key={todo.id}
//             style={{
//               marginBottom: "10px",
//               fontSize: "18px",
//               display: "flex",
//               justifyContent: "space-between",
//               width: "300px",
//             }}
//           >
//             {todo.text}

//             <button
//               onClick={() =>
//                 dispatch({ type: "DELETE_TODO", payload: todo.id })
//               }
//               style={{
//                 backgroundColor: "red",
//                 color: "white",
//                 border: "none",
//                 padding: "5px 10px",
//                 borderRadius: "5px",
//               }}
//             >
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default UseReducerHook;

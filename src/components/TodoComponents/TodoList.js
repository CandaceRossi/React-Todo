// // your components will all go in this `component` directory.
// // feel free to change this component.js into TodoList.js

// import React from "react";

// // your components will all go in this `component` directory.
// // feel free to change this component.js into TodoList.js

// import Todo from "./Todo.js";

// class TodoList extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       searchInput: ""
//     };
//   }

//   handleSearch = event => {
//     this.setState({
//       [event.target.name]: event.target.value
//     });
//   };

//   render() {
//     return (
//       <div>
//         <input
//           value={this.state.searchInput}
//           name="searchInput"
//           onChange={this.handleSearch}
//         />
//         <ul>
//           {this.props.todolist.map(
//             item =>
//               item.task.includes(this.state.searchInput) && (
//                 <Todo
//                   todoitem={item}
//                   toggleCompleted={this.props.toggleCompleted}
//                 />
//               )
//           )}
//         </ul>
//       </div>
//     );
//   }
// }

// export default TodoList;

// class TodoList extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       value: ""
//     };
//   }

//   handleChange = e => {
//     this.setState({ value: e.target.value });
//   };
//   //   changeTitle = e => {
//   //       this.SetState
//   //   }

//   render() {
//     return (
//       <div className="Wrapper">
//         {/* <h1 className="Title">{this.state.title}</h1> */}
//         <form>
//           <div className="Input">
//             <input
//               type="text"
//               className="Input-text"
//               id="input"
//               name="inputText"
//               onChange={this.handleChange}
//               value={this.value}
//             />
//           </div>
//         </form>
//       </div>
//     );
//   }
// }

// export default TodoList;

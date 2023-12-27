// export default function Todo({task, isDone}){
//     return (
//         <li>Task: {task} </li>
//     )
// }


// Conditional Rendering Option 1:
// export default function Todo({task, isDone}){
//   if(isDone === true){
//      return <li>Finished: {task}</li>
//   }
//   else{
//     return <li>Work on: {task}</li>
//   }
// }


// Conditional Rendering Option 2:
// export default function Todo({ task, isDone }) {
//    if(isDone){
//        return <li>Finished: {task}</li>
//    }
//     return <li>Work on: {task}</li>
// }



// Conditional Rendering Option 3: ternary operator
// export default function Todo({ task, isDone }) {
//     return (
//         <li>{isDone ? 'Finished': 'Work on'} : {task}</li>
//     )
// }



// // Conditional Rendering Option 4: &&
// export default function Todo({ task, isDone }) {
//     return (
//         <li>{task} {isDone && ': Done'}</li>
//     )
// }


// Conditional Rendering Option 5: ||
// export default function Todo({ task, isDone }) {
//     return (
//         <li>{task} {isDone || ': Do It'}</li>
//     )
// }




// Conditional Rendering Option 6:
export default function Todo({ task, isDone }) {
    let listItem;
    if (isDone) {
        listItem = <li>Finished: {task}</li>
    }
    else {
        return <li>Work on: {task}</li>
    }
    return listItem;
}







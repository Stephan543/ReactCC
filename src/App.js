import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'

function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: "Doctors Appointment",
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: "Meeting with Humber",
        day: 'Feb 6th at 2:30pm',
        reminder: true,
    },
    {
        id: 3,
        text: "Self Care",
        day: 'Feb 5th at 2:30pm',
        reminder: false,
    },
]
)


  const name = "Stephan";
  const x = true;
  
  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} />: 'Congrats, your tasks are complete!'}
        {/* <h1>Hello From React</h1> */}
      {/* <h2>Hello {x ? 'Yes': 'No'}</h2> */}
    </div>
  );
}



export default App;

// CSS in JS
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black',
// }
import TaskCard from './TaskCard'
import { useContext } from 'react'
import { TaskContext } from '../context/TaskContext'

function TaskList() {

    const { tasks } = useContext(TaskContext);

    const number = "https://robohash.org/"+Math.random()+"?set=set4";

    if (tasks.length === 0) {
        return <div className='container mx-auto p-10 bg-black rounded-md'>
            <h1 className='text-white text-center font-bold text-4xl'>
                you don't have tasks yet!
            </h1>
            <img src={number}
            alt="https://robohash.org/1?set=set4" 
            className='mx-auto'/>
        </div>
    }

    return (
        <div className='grid grid-cols-3 gap-2'>
            {tasks.map((task) => (
                <TaskCard key={task.id} task={task} />
            ))}
        </div>
    );
}

export default TaskList;
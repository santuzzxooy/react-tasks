import { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

function TaskCard({ task }) {

    const { deleteTask } = useContext(TaskContext)

    return (
        <div className='bg-black text-white p-4 rounded-md'>
            <h1 className='text-xl font-bold capitalize'>{task.title}</h1>
            <p className='text-gray-400 text-sm'>{task.description}</p>
            <button
                className='bg-blue-600 rounded-sm
                 text-black px-2 py-1 mt-4
                 hover:bg-blue-200'
                onClick={() => deleteTask(task.id)}
            >
                Delete Task
            </button>
        </div>
    )
}

export default TaskCard;
import { useState, useContext } from "react"
import { TaskContext } from '../context/TaskContext'

function TaskForm() {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const { createTask } = useContext(TaskContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        createTask({
            title,
            description,
        });
        setTitle('');
        setDescription('');
    };

    return (
        <div className="max-w-md mx-auto">
            <form onSubmit={handleSubmit}
                className="bg-black rounded-md p-10 mb-4"
            >
                <h1 className="text-white font-bold text-2xl mb-3">
                    Add tasks
                    </h1>
                <input placeholder="Write a title"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    className="bg-blue-300 hover:bg-blue-200 p-3 w-full mb-2"
                />
                <textarea placeholder="Write a description"
                    onChange={e => setDescription(e.target.value)}
                    value={description}
                    className="bg-blue-300 hover:bg-blue-200 p-3 w-full mb-2">
                </textarea>
                <button className='bg-blue-600 rounded-sm text-black px-2 py-1 mt-4 hover:bg-blue-200'>
                    Save
                </button>
            </form>
        </div>
    )
}

export default TaskForm
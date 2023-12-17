import React, { useRef, useState } from 'react'
import './todo.css'

function Todo() {
    const list = [
        {
            id: 1, 
            tasks: "Chess",
            time: "2 hours"
        },
        {
            id: 2, 
            tasks: "Coding",
            time: "3 hours"
        },
    ]
    const [lists, setList] = useState(list)
    const [updateState, setUpdateState] = useState(-1)
    
    return(
        
        
        <div className='crud'>
            <label> Todo List </label>
            <div>
            <AddList setList = {setList }/>
            <form onSubmit={handleSubmit}>
                
            <table>
                {
                    lists.map((current) => (
                        updateState === current.id ? <EditList current={current} lists={lists} setList={setList}/> :
                        <tr>
                            <td>{current.tasks}</td>
                            <td>{current.time}</td>
                            <td>
                                <button className='edit' onClick={() => handleEdit(current.id)}>Edit</button>
                                <button className='delete' type='button' onClick={() => handleDelete(current.id)}>Delete</button>
                            </td>
                        </tr>
                    ))
                }
            </table>
            </form>
            </div>
        </div>
    )

    function handleEdit(id) {
        setUpdateState(id)
    }
    function handleDelete(id) {
        const newlist = lists.filter((li) => li.id !== id)
        setList(newlist)
    }
    function handleSubmit(event) {
        event.preventDefault()
        const tasks = event.target.elements.tasks.value
        const time = event.target.elements.time.value
        const newlist = lists.map((li) => (
            li.id === updateState ? {...li, tasks:tasks, time: time} : li
        ))

        setList(newlist)
        setUpdateState(-1)
    }
}

function EditList({current, lists, setList}) {
    function handInputtasks(event) {
        const value = event.target.value;
        const newlist = lists.map((li) => (
            li.id === current.id ? {...li, tasks :value} : li
        ))

        setList(newlist)
    }
    function handInputtime(event) {
        const value = event.target.value;
        const newlist = lists.map((li) => (
            li.id === current.id ? {...li, time :value} : li
        ))

        setList(newlist)
    }
    return(
        <tr>
            <td><input type="text" onChange={handInputtasks} name='tasks' value={current.tasks}/></td>
            <td><input type="text" onChange={handInputtime} name='time' value={current.time}/></td>
            <td><button type='submit'>Update</button></td>
        </tr>
    )
}

function AddList({setList}) {
    const tasksRef = useRef()
    const timeRef = useRef()

    function handleSubmit(event) {
        event.preventDefault();
        const tasks = event.target.elements.tasks.value;
        const time = event.target.elements.time.value;
        const newlist = {
            id: 3,
            tasks,
            time
        }
        setList((prevList)=> {
            return prevList.concat(newlist)
        })
        tasksRef.current.value = ""
        timeRef.current.value = ""
    }
    return(
        <form className='addForm' onSubmit={handleSubmit}>
            <input type="text" name="tasks" placeholder="Enter Task" ref={tasksRef}/>
            <input type="text" name="time" placeholder="Enter Time" ref={timeRef}/>
            <button type="submit">Add</button>
        </form>
    )
}

export default Todo;
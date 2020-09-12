import React, { useState } from 'react';
import Card from './Card';
const ToDoList = ()=>{
    const [item,setItem] = useState()
    const[itemArray,setItemArray]=useState([]);
    const addItem = (event)=>{
        console.log("add Item")
        setItem(event.target.value)
    }
    const addToList=(event)=>{
        setItemArray((prevData)=>{
            return [...prevData,item]
        })
        console.log(itemArray);
        setItem("");
    }

    const removeItem = (itemId)=>{
        console.log("remove Item " + itemId);
        setItemArray((prevData)=>{
            return prevData.filter((cItem,cIndex)=>{
                // console.log(cItem)
                return cIndex !== itemId;
            })
        })   
    }
    return(
        <>
            <div className='bodydiv'>
                <div className='container'>
                    <h1>To Do List</h1>
                    <input type='text' onChange={addItem} value={item}/>
                    <button onClick={addToList}>+</button>
                </div>
                <ol>
                    {
                        itemArray.map((e,i)=>{
                            return <Card key={i} id={i} text={e} onSelect={removeItem} />
                        })
                    }
                </ol>
            </div>
        </>
    );
}

export default ToDoList
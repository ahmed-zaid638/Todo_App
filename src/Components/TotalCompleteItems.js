import React from 'react'
import { useSelector } from 'react-redux';
const TotalCompleteItems = () => {
  const completedTodos = useSelector((state) => {
    return state.todos.filter((todo) => {
      return todo.completed === true ;
    }
    )
  });
  
  return (
    <div className='todocomplete'>
       Total Complete Items :  {completedTodos.length}
    </div>
  )
}

export default TotalCompleteItems

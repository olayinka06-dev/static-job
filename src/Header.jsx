import React from 'react'
import { TodoList } from './TodoList'

export const Header = () => {
  return (
   <nav className='h-[20vh] relative'>
     <img className='h-full w-full bg-main' src="/images/bg-header-desktop.svg" alt="" />
     <TodoList/>
   </nav>
  )
}

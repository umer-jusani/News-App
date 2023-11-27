import React, { useContext } from 'react'
import { AppContext } from '../Context'

const Pagination = () => {
  const {nbPages , page , getPrevPage , getNextPage} = useContext(AppContext)
  return (
     <>
      <div className='pagination-btn'>
        <button onClick={()=>{getPrevPage()}}>PREV</button>
        <p>{page + 1} of {nbPages}</p>
        <button onClick={()=>{getNextPage()}}>NEXT</button>
      </div>
     </>
  )
}

export default Pagination

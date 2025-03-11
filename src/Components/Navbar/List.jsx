import React from 'react'

const List = ({data}) => {
  return (
    <li className="text-white font-mullish py-7 hover:text-lightBlue cursor-pointer transition-all duration-200 relative group">
      <a href="#">{data}</a>
      <div className="absolute bottom-0 w-full h-1 bg-lightBlue hidden group-hover:block transition-all duration-200"></div>
    </li>
  );
}

export default List
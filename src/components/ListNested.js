import React from 'react';

import './List.scss'
import ItemNested from './ItemNested';


const List = ({ children }) => {
  return (
    <div className='container--box'>
      {children}
    </div>
  )
}

const ListNested = ({ data, checked }) => {

  const renderItems = (item, i) => {
    const children = Object.values(item.children)

    return (
      <ItemNested 
        key={item.id}
        item={item} 
        children={children}
        isChecked={checked}
      />
    )
  }
  
  return (
    <List>
      { data.map(renderItems) }
    </List>
  )
}

export default ListNested;

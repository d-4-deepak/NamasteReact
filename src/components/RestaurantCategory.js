import React, { useState } from 'react'
import ItemList from './ItemList';

const RestaurantCategory = ({data,showItems,setShowIndex}) => {
    console.log("data is",data);
    // const [showItems,setShowItems] = useState(false);
    const handleClick = ()=>{
    //  if(showItems == false){
    //   setShowItems(true);
    //  }else{
    //   setShowItems(false);
    //  }
    setShowIndex();
    
    }
    
  return (
    <div>
        {/* Accordion Header */}
        <div className='   m-7 p-5 rounded-sm cursor-pointer shadow-lg' >
          <div className='flex justify-between' onClick={handleClick}>
          <span className='font-bold text-[1.2rem]'>{data.title} ({data.itemCards.length})</span>
          {showItems ? <span>🔽</span> :<span>🔼</span>}
          </div>
       {showItems && <ItemList data={data.itemCards} />} 
        </div>
      {/* Accordian body */}
    </div>
  )
}

export default RestaurantCategory

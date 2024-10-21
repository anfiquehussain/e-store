import React from 'react'
import ProductCard from '../ProductCard/ProductCard'

function RowCard(props) {
  return (
    <div>RowCard 
      <ProductCard prd={props.prd}/>
    </div>
  )
}

export default RowCard
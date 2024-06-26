/* eslint-disable react/prop-types */
import  { useState } from 'react'
import { useProducts } from '../../Context/Productcontext';

import "./ControleQuantity.css"

function ControleQuantity({id, qtyProduct}) {
  const [qty, setQty] = useState(1);
  const {minQuantitiy, addQuantitiyPlus } = useProducts();
  return (
    <div className='quantity'>
         <button
                onClick={() => {
                  minQuantitiy(id);
                }}>
                -
              </button>
              <input readOnly type="text" value={qtyProduct ? qtyProduct : 0} />
              <button
                onClick={() => {
                  setQty(qty)
                  addQuantitiyPlus(id, qty);
                }}>
                +
              </button>
    </div>
  )
}

export default ControleQuantity
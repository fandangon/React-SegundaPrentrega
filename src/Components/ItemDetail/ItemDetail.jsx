import React, { useState,useContext } from 'react';
import './ItemDetail.css'
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import CartContext from '../../Store/CartContext';
const ItemDetail = ({ item }) => {
   const [Carro, setCarro] = useState(0);
   const Cart= useContext(CartContext);
     function carrito(productosCarro) {
         Cart.addItem({cantidad: productosCarro,...item})
    }
 return (
   <>
   
   <div className='contenedorItem'>
   <div className="muestraItem">
   <div className="imgMuestra1"><img src={item?.imgMuestra}/></div>
   <div className="imgMuestra1"><img src={item?.imgMuestra1}/></div>
   </div>
   <div className="contenedorImagen">
   <div className="imagenItem"><img src={item?.img}  alt="Imagen Producto"/></div>
   <div className="descripcionItem">{item?.Descripcion}</div>
   </div>
   <div className="datosItem">
   <div className="tituloItem">{item?.titulo}</div>
     <div className="nombreItem">{item?.Nombre}</div>
     <div className="precioItem">$ {item?.Precio}</div>
     <div className="stockItem">Stock: {item?.stock}</div>
     <ItemCount initial={1} stock={item?.stock} onAdd={carrito}></ItemCount>
    <button onClick={()=>console.log(Cart.ProductosCarrito)} className='botonCarro'><Link to='/Cart' style={{ color: '#00264D' }}>Finalizar la compra</Link></button>
        
    

   </div>
     </div>
     
   </>
 );
};
export default ItemDetail;
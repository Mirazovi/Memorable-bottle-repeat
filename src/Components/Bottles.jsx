import { useEffect } from "react";
import { useState } from "react";
import Bottle from "./Bottle";
import { AddToLs, getCartFromLs, RemoveToLs } from "./localStorage";
import Cart from "./Cart";


const Bottles = () => {
    const [bottles,setBottles] = useState([])
    const [cart,setCart] = useState([]);
    useEffect(()=>{
        fetch('Bottle.json')
        .then(res => res.json())
        .then(data => setBottles(data))
    },[])
    useEffect(()=>{
        if(bottles.length>0){
            const getStoredCart = getCartFromLs();
            const saveCart = [];
            for(const id of getStoredCart){
                const bottle = bottles.find(bottle => bottle.id === id)
                if(bottle){
                    saveCart.push(bottle);
                }
            }
            setCart(saveCart)
        }
    },[bottles])
    const handleAdd = (bottle) =>{
        const newCart = [...cart,bottle]
        setCart(newCart);
        AddToLs(bottle.id)
    }
    const handleRemove = (id) =>{
        const remaining = cart.filter(bottle => bottle.id !== id);
        setCart(remaining);
        RemoveToLs(id);
    }
    return (
        <div>
            <p className="text-2xl text-center">Bottles : {bottles.length}</p>
            <div>
                <Cart 
                cart={cart}
                handleRemove={handleRemove}
                ></Cart>
            </div>
          
            <div className="grid grid-cols-4 gap-4 w-[90%] m-auto my-4">
                {
                    bottles.map((bottle,idx) => <Bottle
                     key={idx}
                     bottle={bottle}
                     handleAdd={handleAdd}
                     ></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;
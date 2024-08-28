import PropTypes from 'prop-types';
const Cart = ({cart,handleRemove}) => {
    // console.log(cart);
    return (
        <div className='text-center w-[90%] m-auto '>
            <h1 className='text-xl font-bold'>Cart :{cart.length}</h1>
            <div className='grid grid-cols-8 gap-4 py-2'>
                {
                    cart.map((bottle,idx) => 
                        <div key={idx}>
                            <img className='rounded-xl' src={bottle.img} alt="" />
                            <button onClick={()=>handleRemove(bottle.id)} className='p-1 rounded-lg bg-violet-700 text-xl text-white w-full my-2'>Remove</button>
                        </div>
                    )
                }
            </div>
        </div>
    );
};
Cart.propTypes = {
    cart:PropTypes.object,
    handleRemove:PropTypes.func
}
export default Cart;
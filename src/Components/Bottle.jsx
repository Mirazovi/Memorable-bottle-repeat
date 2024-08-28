import PropTypes from 'prop-types';
const Bottle = ({bottle,handleAdd}) => {
    const {name,img,price,stock} = bottle;
    return (
        <div className="border-2 border-red-700 rounded-xl p-6 text-center">
            <h1 className="text-2xl font-bold">Title :{name}</h1>
            <img className="py-2 w-full h-[300px]" src={img} alt="" />
            <p className="text-xl">Price :{price}$</p>
            <p className="text-xl py-2">Stock :{stock} pcs</p>
            <button onClick={()=> handleAdd(bottle)} className="text-xl text-white py-2 px-4 rounded-xl w-full bg-violet-800">Add Now</button>
        </div>
    );
};
Bottle.propTypes = {
    bottle: PropTypes.object,
    handleAdd:PropTypes.func
}
export default Bottle;
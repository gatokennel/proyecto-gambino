




const ProductItem = ({ data, addToCart }) => {
  let { id, name, price, description, img } = data;

  return (
    <body className="bg-white-100 z-0">
      <div className='z-0'>

        <div className="transition-transform w-72 bg-white drop-shadow-md rounded-lg m-5 hover:scale-105 hover:transition-transform">
          <img className="object-cover rounded-tl-lg rounded-tr-lg w-full h-60 "
                src={img} />
          <div className="px-5 py-3 space-y-2">
            <h3 className="text-lg">{name}</h3>
            <div className="space-x-2">
              <span className="px-3 py-0.5 border border-red-600 text-[11px] text-red-600">{description}</span>
            </div>
            <p className="space-x-2">
              <span className="text-2xl font-semibold">${price}</span>
              {/* <span className="text-sm line-through text-gray-500">$1000</span> */}
              {/* <span className="text-sm text-red-700">40% off</span> */}
            </p>
            <div className="flex justify-between items-center pt-3 pb-2">
              <button onClick={() => addToCart(id)}
                className="px-4 py-2 bg-red-800 hover:bg-amber-600 text-center text-sm text-white rounded duration-300">
                Agregar al carrito</button>

              <button
                className="text-4xl text-gray-300 hover:text-red-800 duration-300 active:text-red-800 focus:text-red-800">&hearts;</button>
            </div>
          </div>
        </div>

      </div>
    </body>


  )
};

export default ProductItem
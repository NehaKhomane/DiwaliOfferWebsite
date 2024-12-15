import { useState } from 'react';
import './Home.css';
export default  function Service(){
    const [products,setProducts]=useState([
        {
            image:'https://www.holidify.com/images/cmsuploads/compressed/ce5d56d214d66856b92455a933086ade--dresses-for-girls-baby-dresses_20171006174748.jpg',
            title:'lehenga suit',
            price:'2000rs',
            isAvailable:true
        },
        {
            image:'https://i.pinimg.com/236x/8c/da/2c/8cda2c33cc42b8b54097a5bb34734a23.jpg',
            title:'sherwani suit',
            price:'1700rs',
            isAvailable:true,
        },
        {
            image:'https://i.pinimg.com/736x/9d/43/cc/9d43cc7475e228d1d5f051b7239a7633.jpg',
            title:'Designer Dress',
            price:'3700rs',
            isAvailable:false,
        },
        {
            image:'https://i.pinimg.com/736x/3a/cf/8f/3acf8f28b99e759c689c84b45218cbff.jpg',
            title:'Ledies Suit',
            price:'1700rs',
            isAvailable:true,
        },
        {
            image:'https://medias.utsavfashion.com/media/catalog/product/cache/1/small_image/295x/040ec09b1e35df139433887a97daa66f/e/m/embroidered-art-silk-kurta-set-in-sky-blue-and-black-v1-mxx1204.jpg',
            title:'Kurta-Pant',
            price:'2500rs',
            isAvailable:false
        },
        {
            image:'https://e7.pngegg.com/pngimages/88/467/png-clipart-woman-wearing-pink-anarkali-dress-while-holding-pink-dupatta-scarf-anarkali-salwar-suit-party-dress-georgette-dress-textile-fashion-thumbnail.png',
            title:'Ledies Suit',
            price:'3000rs',
            isAvailable:false
        },
        {
            image:'https://i.pinimg.com/474x/bf/8c/fe/bf8cfe8f950f071c0020448fd5d933db.jpg',
            title:'Mens Suit',
            price:'1500rs',
            isAvailable:true
        },
        {
            image:'https://i.pinimg.com/474x/a0/29/40/a02940448a56474be417c7040732b254.jpg',
            title:'Men Kurta Suit',
            price:'1800rs',
            isAvailable:true
        }

    ])
    const [userSearch,setUserSearch]=useState('')
return(
    <>
    <div className='card-header'>
        <h2><i>DIWALI GREAT INDIAN SELL..!! TOP DEALS REVEALED EVERYDAY</i></h2>
        <p>10%+ discount on each product..!!</p>
    </div>
    <div className='card-container'>
        <div className='input-field'>
            
            <input type='text'placeholder='Search Products Here...'onChange={(e)=>{setUserSearch(e.target.value)}}></input>
        </div>
        {
            products.filter((product)=>{
                return userSearch.toLocaleLowerCase()=== '' ?product :product.title.toLocaleLowerCase().includes(userSearch)
            }).map((product,key)=>{
                return(
                    <div className='card'>
                        <img src={product.image}></img>
                        <h2>{product.title}</h2>
                        <div className='card-footer'>
                            <p>{product.price}</p>
                            <p className={product.isAvailable ? 'available' :'out-of-stock'}>
                               {product.isAvailable ? 'Available':'Out of Stock'}
                            </p>
                        </div>

                    </div>
                )
            })
        }
    </div>
    </>
)
}
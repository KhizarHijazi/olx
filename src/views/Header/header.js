import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCar, faCity,faMagnifyingGlass, faAngleDown,faPlus,faCartShopping} from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'


import olxBlue from '../../assets/OLX-Logo.png'
import olxBlack from '../../assets/OLX-Symbol.png'
import profileIcon from '../../assets/iconProfilePicture.png'
import { updateCart } from '../../redux/cartSlice'


function Header({user}){
const navigate =useNavigate()
const dispatch = useDispatch()

function addToCart(){
  dispatch(updateCart('Khizar Hijazi'))

}

    return (
        <div className="App-header">
      <div className='upper'>
        <img src={olxBlue}/>
        <div className="motors"><span><FontAwesomeIcon icon={faCar} /></span>MOTORS</div>
        <div className="property"><span><FontAwesomeIcon icon={faCity} /></span>PROPERTY</div>
      </div>
      
      <div className='navbar'>
{/* 1 Image  */}
  <img src={olxBlack} alt='olx' onClick={()=> navigate('/mapapi')}/>

{/* 2 Search Bar Small */}

<div className='search-Bar'>
<div className='search-icon'><FontAwesomeIcon icon={faMagnifyingGlass} /></div>
<input id='input-tag' placeholder='Pakistan'/><lable for='input-tag'></lable>
<div className='angle-down-div'><FontAwesomeIcon icon={faAngleDown} className='angle-down'/></div>
</div>

{/* 3 Search Bar Larger */}
<div className='serach-bar-larger'>
<input id='input-search' placeholder='Find Cars , Mobile Phones and more...'/><lable for='input-search'></lable>
<div className='search-bar-box'><FontAwesomeIcon icon={faMagnifyingGlass} className='search-icon2'/></div>

</div>

{/* 4 Login Button */}
{user ? 
  <div className='login-Btn-Box' onClick={'#'}><a href='#'>Logout</a></div>
  :
  <div className='login-Btn-Box' onClick={()=>navigate('/login')}><a href='#'>Login</a></div>
}

{/* 5 Cart/Prof */}
{user ? 
  <div className='cart-Box' onClick={addToCart} >
    <FontAwesomeIcon icon={faCartShopping} className='cart-icon' />
    </div>
  :
  <div className='profileIcon-Box' ><img src={profileIcon}/></div>
}


{/* 5 Sell Button */}

<div className='sell-plus-Box' onClick={()=> navigate('/post')}>
<FontAwesomeIcon icon={faPlus} className='plus-icon'  />
<span>SELL</span>

</div>



</div>


    </div>
    )
}

export default Header
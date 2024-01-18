import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCar, faCity,faMagnifyingGlass, faAngleDown,faPlus} from '@fortawesome/free-solid-svg-icons'
import olxBlue from '../../assets/OLX-Logo.png'
import olxBlack from '../../assets/olx-logo-vector.png'


function Header(){


    return (
        <div className="App-header">
      <div className='upper'>
        <img src={olxBlue}/>
        <div className="motors"><span><FontAwesomeIcon icon={faCar} /></span>MOTORS</div>
        <div className="property"><span><FontAwesomeIcon icon={faCity} /></span>PROPERTY</div>
      </div>
      
      <div className='navbar'>
{/* 1 Image  */}
  <img src={olxBlack} alt='olx'/>

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
<div className='login-Btn-Box'><a href='#'>Login</a></div>

{/* 5 Sell Button */}
<div className='sell-plus-Box'>
<FontAwesomeIcon icon={faPlus} className='plus-icon' />
<span>SELL</span>

</div>



</div>


    </div>
    )
}

export default Header
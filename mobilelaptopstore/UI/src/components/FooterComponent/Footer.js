import './Footer.css';
import { useState ,useEffect } from 'react';
function Footer() { 
	const [FooterContent , setFooterContent ]= useState();
	useEffect(()=>{
    if(localStorage.getItem("token")!=undefined)
    {
setFooterContent(<></>);
    }
  else
  {
setFooterContent(<>	
	
</>);
	}
});
  return (
  <>
	
		{/*footer section start*/}
{/*footer section end*/}

  </>
  );
}

export default Footer;




import React,{useContext,useState} from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Card ,ListGroup,Badge, Button,Form} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import './ProductList.css';


  const ProductList = () => {
    const{product}=useContext(GlobalContext);
    // const [design, setDesign] = useState({opacity: '0'});

function badgsnew(new1){
  if (new1) {
    return (
      <Badge className="new_item" bg="info">
        New
      </Badge>
    );}
}
   function badgssale(sale1){
  if (sale1) {
    return (
      <Badge className="sale_item" bg="danger">
        Sale
      </Badge>
    );}
}
     
  

  return (
    <>
    
        <h5 style={{marginLeft:'90px'}}>Product List </h5>
      <div className=' d-flex maindiv'>
          
        { product.map((product)=>
        
        <Card   variant="Light" className='cardMain' >
          <i className="fa-regular fa-heart fav" 
            style={{position:'absolute',
                   top:'10px',
                   left:'10px',
                  }}>
          </i>  
         
             <ListGroup variant="Light" key={product.id} > 
               <Card.Img variant="top" 
                    src={product.image} alt={product.product} 
                     style={{width:'300px',
                             height:'200px'}}/> 
                    <div className='divquick'> 
                  <Button  variant="light" className='quickview'>Quick View
                </Button></div>         

                             <h6 className='badgesNewSale'>
                               
                               {
                                 badgsnew(product.newitem)
                               }
                               {
                                 badgssale(product.itemsale)
                               }
                               </h6>
                <div > <button   className='addtocartbtn '>ADD TO CART</button></div>
               <div >
                 <Card.Title style={{color:'gray',
                    fontSize:'12px',
                    marginTop:'12px',lineHeight:'20px',textTransform:'uppercase'}}>{product.category}</Card.Title>
                  <div style={{top:'2px'}}>
                    <div > 
                          <Card.Subtitle className="mb-2 cardsub" 
                              style={{fontSize:'14px',lineHeight:'20px',marginTop:'7px',textTransform:'capitalize'}}>{product.product}
                          </Card.Subtitle>
                     </div>
                        <div style={{float:'right'}}>
                              <span  style={{position:'absolute',
                              top:'235px',
                                right:'15px',
                                width:"15px",
                                height:"15px", 
                                borderRadius:"50%", 
                                lineHeight:'20px',
                                border: "1px solid black",backgroundColor:`${product.color[0]}`}}></span>
                        </div>
                      </div>  
                   </div> 
                   <div style={{fontSize:'10px',lineHeight:'20px'}}>
                          <i className="fa-solid fa-star" ></i>
                          <i className="fa-solid fa-star" style={{margin:'2px'}}></i>
                          <i className="fa-solid fa-star" style={{margin:'2px'}}></i>
                          <i className="fa-solid fa-star" style={{margin:'2px'}}></i>
                          <i className="fa-solid fa-star" style={{margin:'2px'}}></i> 
                                        
                    </div>

                    <Card.Text style={{marginTop:'8px',fontSize:'13px',
                fontWeight:'bold',lineHeight:'20px'}}>{`$   ${parseFloat(product.amount).toFixed(2)}`}</Card.Text>
                <div style={{marginTop:'-5px'}}>
                    {product.color.map((c, index) => (
                                                  <span
                                                    key={index}
                                                    style={{
                                                      height: "16px",
                                                      width: "16px",
                                                      backgroundColor: c,
                                                      borderRadius: "50%",
                                                      display: "inline-block",                                           
                                                      margin:"1px", 
                                                      lineHeight:'20px'                                   
                                                    }}
                                                  ></span> ))}
                 </div>
                 <div style={{marginTop:'30px',lineHeight:'20px'}}> 
                      <Form.Check type='checkbox' label='Add To Compare' className='chkcompare' />
                    </div>

          
                      {console.log("New-Item", product.newitem)}
                      {console.log("sale-Item", product.itemsale)}
                      
              
             </ListGroup>
          </Card> 
          )}
       </div>  
        
    </>
  )
}

export default ProductList
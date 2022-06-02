import React ,{useState,useContext}from 'react';
import { useNavigate } from 'react-router-dom';
import { Card,Form,Row,Col,Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GlobalContext } from '../context/GlobalState';
import './AddProduct.css';
const AddProduct = () => {

  const productlist=useNavigate();
  const [category,setCategory]=useState('');
  const [product,setProduct]=useState('');
  const [amount,setAmount]=useState(0);
  const [color,setColor]=useState([]);
  const [newitem,setNewitem]=useState(false);
  const [itemsale,setItemsale]=useState(false);
  const [imageupload,setimageupload]=useState();
  const[imagedata,setImagedata]=useState();
 
  const{addProduct}=useContext(GlobalContext);
  console.log(imagedata)

  let formValid = false;

if (category && product && amount && imagedata && color) {
  formValid = true;
}

  const onSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      id: Math.floor(Math.random() * 100000000),
      category,
      product,
      amount,
      color,
      newitem,
      itemsale,
      image:imagedata
    } 
    addProduct(newProduct);

    productlist('/productlist');

  };

  const resetClick=()=>{
    setCategory('');
    setProduct('');
    setAmount();
    setColor('');
    setNewitem('');
    setItemsale('');
    setImagedata();
  };
  const cancleClick=()=>{
    productlist('/productlist');
  };
  const ColorClick = (e) => {
    setColor([...color, e.target.value]);
  };

  const imageUpload = (ev) => {
    const { files } = ev.target;

    // FileReader support
    if (FileReader && files && files.length) {
      const reader = new FileReader();
      reader.onload = function () {
        setImagedata(reader.result);
      };
      reader.readAsDataURL(files[0]);
      setimageupload(files[0]);
    }
  };

  // const imageUpload=(event)=>{
  //   console.log(event.target.files[0]);
  //   console.log('image button click..');

  //   const {files}  = event.target;
  //   if (FileReader && files && files.length) {
  //    const render=new FileReader();
  //    render.onload=function(){
  //      setImagedata(render.result);

  //    };
  //    render.readAsDataURL(files[0]);
  //    setimageupload(files[0]);
  // }
  // };


  return (
   <div className='contariner' >
      <div className='main'>
        <Card className='carddtl'>  
          <div style={{ fontSize: "18px" ,marginTop:'10px',marginLeft:'8px'}}>
                          Add Product
               <button type="button" className="close" aria-label="Close" 
                    style={{border:'none',background:'none',width:'10px' ,float:'right',padding:'2px',marginRight:'15px'}} 
                    onClick={cancleClick}>
                   <span aria-hidden="true" style={{color:'gray',width:'10px',fontSize:'22px'}}>&times;</span>
                </button>
           </div>
           <div></div><hr/>
            <Form>
            <Row  style={{margin:'8px'}}>
            <Form.Group as={Col} >
                    <Form.Label className='formlabel'>Category</Form.Label>
                        <Form.Select defaultValue={" "} onChange={(e) => setCategory(e.target.value)} 
                        style={{borderRadius:' 2em',color:'gray'}} required  className='txtcate'>
                            <option value="">Select Category </option>
                            <option>Men</option>
                            <option>Women</option>
                            <option>Kids</option>
                          </Form.Select>
                    </Form.Group>
                    <Form.Group as={Col} >
                    <Form.Label className='formlabel'>Product Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Product"  
                     onChange={(e) => setProduct(e.target.value)} style={{borderRadius:' 2em'}} className='txtprod' required/>
                  </Form.Group>
                  <Form.Group as={Col}>
                    <Form.Label className='formlabel'>Price</Form.Label>
                    <Form.Control type="number" placeholder="Enter Price" 
                     onChange={(e) => setAmount(e.target.value)} style={{borderRadius:' 2em'}} className='txtprice' required/>
                  </Form.Group>
              </Row>
              <Row className="mt-4" style={{display:'flex',width:'90%', margin:'8px'}}>
                       <Form.Group as={Col} style={{flex:'0 0 4%'}}>
                            <Form.Label className='formlabel'>Color(s) </Form.Label>
                       </Form.Group>
                       <Form.Group as={Col} style={{display:'flex',alignItems:'flex-start',flex:'0 0 29%'}}>
                       <Form.Control
                                        type="color"
                                        id="colorinput"                                                                      
                                        onChangeCapture={ColorClick}
                                        className="txtcolor"
                                      />
                                      {color.length > 0 && (
                                      <div  style={{marginLeft:'5px',borderRadius:'2em',display:'inline-block'
                                       ,border: '1px solid lightgray',boxShadow:'2px 1px 5px whitesmoke'}}>
                                       {color.map((c, index) => (
                                          <span
                                            key={index}
                                            style={{
                                              height: "20px",
                                              width: "20px",
                                              backgroundColor: c,
                                              borderRadius: "50%",
                                              display: "inline-block",
                                              border: "1px solid black",
                                              padding:'5px',
                                              marginLeft:'8px',
                                              marginTop:'5px',
                                              marginRight:'5px'                                      
                                            }}
                                          ></span>
                                        ))}
                                      </div> )}
                       </Form.Group>
                       <Form.Group as={Col} id="formGridCheckbox" style={{flex:'0 0 37%'}}>
                       <Form.Check type="checkbox" label="New Item"   
                                onChange={(e) => setNewitem(!newitem)}/>
                       </Form.Group>
                       <Form.Group as={Col} id="formGridCheckbox" >
                              <Form.Check type="checkbox" label="Item for Sale" 
                              onChange={(e) => setItemsale(!itemsale)}/><br/><br/>
                          </Form.Group>  
                   </Row>
                   <Row  style={{margin:'8px',marginTop:'-20px'}}>
                            <Form.Label style={{marginLeft:'12px'}}>Product Image</Form.Label>
                           
                              <div >
                              <Form.Group  >
                              <Form.Control
                                    className="mb-3"
                                    id="imgfile"
                                    type="file"
                                    accept="image/*"
                                    onChange={imageUpload} 
                                    required
                                    borderRadius="10px"
                                />
                              </Form.Group>
                              </div> 
                     </Row><hr/>
                          
              
                    <div className='btndisplay'>
                        <Button variant="outline-dark" type="reset" className='btnreset'
                        onClick={resetClick} >
                                  Reset
                                </Button>
                                <Button variant="primary" type="submit"
                                onClick={onSubmit} className="btnsubmit"
                                disabled={!formValid} >
                                  Add Product
                                </Button>
                        </div>
              

            </Form>

        </Card>

      </div>
   </div>
  )
}

export default AddProduct
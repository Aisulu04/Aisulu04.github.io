import { useState } from "react";
import "./form.css";


export default function Form(){

  const [form, setForm] = useState({
      name: "",
      phone: "",
      email: "",
  })


  const updateForm = (e) => {
      setForm ({
          ...form,
          [e.target.name]: e.target.value,
      })
  }

  const sendEmail = (e) => {

      e.preventDefault();
      
      e.target.reset();
  }



  return (
      <div className = "form-box">


          <form onSubmit = { sendEmail }>

              <div className = "field1">
              <label> Let's work together </label>
          
              <input 
                  type ="text" 
                  className = "form-input"
                  name ="name" 
                  placeholder="Name"
                  onChange ={updateForm} 
                  value = {form.name}
              />

              
              <input 
                  type ="tel" 
                  className = "form-input"
                  name ="phone" 
                  placeholder="8 777 777 77 77"
                  onChange ={updateForm} 
                  value = {form.phone}
              />

              <input 
                  type ="email" 
                  className = "form-input"
                  name ="email" 
                  placeholder="E-mail"
                  onChange ={updateForm} 
                  value = {form.email}
              />

              </div>


              <div className = "field2">      
              </div>

              <div className = "field3">

              </div>

              <div className = "field4">

              </div>
              

              <button 
              type = "submit"
              id= "submitBtn"
              className = "submitBtn"
              > submit</button>

          </form>
          

      </div>
  )
}























/**
 * import { useState } from "react";
import "./Forms.css";


const Forms = () =>{
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log({
      name,
      phone,
      message
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">name</label>
      <input 
        value={name}
        onChange={e => setName(e.target.value)}
        id="name"
        type="text"
      />

      <label htmlFor="phone">phone number</label>
      <input 
        value={phone}
        onChange={e => setPhone(e.target.value)}
        id="phone"
        type="number"
      />

      <label htmlFor="message">message</label>
      <textarea 
        value={message}
        onChange={e => setMessage(e.target.value)}
        id="message"
      />

      <button class="btn btn-primary" type="submit">Button</button>
    </form>
  )
}

export default Forms;
 */
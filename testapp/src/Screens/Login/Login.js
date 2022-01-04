
import React , {useState} from 'react'
import { ShowAlert, ValidateEmail } from '../../utils/CommonFunctions'



const Login = () => {
    const [show, setshow] = useState(false)
    const [data , setData] = useState({
        email : "",
        password : ""
    });

    const getData = (e) =>{
        const {name , value} = e.target
        // console.log(value);
        setData((prev)=>{
            return {
                ...prev,
                [name] : value

            }
        })
    }

    const onAlertButtonTap = (data) => {
        console.log("all done" + JSON.stringify(data));
    }

    const clicked = (e)=>{
        e.preventDefault();

        const {email , password} = data 
        if(data.fname == ''){
             ShowAlert({
                title: "enter fname", buttonText: "Submit",
                text: "sub text", onSubmit: (data) => onAlertButtonTap(data)
            })
        }else if(data.email == ''){
            ShowAlert({
                title: "enter email", buttonText: "Submit",
                text: "sub text", onSubmit: (data) => onAlertButtonTap(data)
            })
        }
        else if (ValidateEmail(data.email)) {
            ShowAlert("fill data with @!", "You clicked the button!", "error");
        }else{
            ShowAlert({
                title: "Good job!",
                text:  ` your email is ${email}`,
                icon: "success",
              }); 
        }
        
    }
    return (
        <>
           <section>
           <h1> React login from</h1>
           <div className='from'>
              <form action="">
                 <div className='formData'>
                 <label htmlFor="">email</label>
                  <input type="text" name='email' placeholder='email' value={data.email} onChange={(e)=>{setData({...data , email:e.target.value})}}/>
                 </div>
                 <div className='formData'>
                 <label htmlFor="">password</label>
                    <div className='pass'>
                    <input type={show? "text" : 'password'} name='password' placeholder='password'onChange={(e)=>{setData({...data , password : e.target.value})}} />
                        <i class= {show? "fas fa-eye" :  'fas fa-eye-slash'}  onClick={()=>setshow(!show)}></i>
                       
                    </div>
                 </div>
                 <div className='formData'>
                     <div className='checkbox'>
                     <input type="checkbox" defaultChecked name="" id=""  className='cheked'/>
                     <span>I accept condtion</span>
                     </div>
                 </div>
               
                 <button className='btn'onClick={clicked}> Login</button>
              </form>
           </div>

           </section>
        </>
    )
}

export default Login

import React, { useState } from 'react'
import "./register.css";
import swal from 'sweetalert';
import { ShowAlert, ValidateEmail } from '../../utils/CommonFunctions'

const Register = () => {

    const [show, setShow] = useState(false);

    const [data, setData] = useState({
        fname: "",
        lname: "",
        email: "",
        mobile: "",
        pass: ""
    });

    const [getdetails, setDetils] = useState([]);


    const getdata = (e) => {
        const { name, value } = e.target;
        // console.log(value);

        setData((preval) => {
            return {
                ...preval,
                [name]: value
            }
        })
    };

    const onAlertButtonTap = (data) => {
        console.log("all done" + JSON.stringify(data));
    }

    const senddata = (e) => {
        //  e.preventDefault();

        console.log("User Data : " + JSON.stringify(data));

        if (data.fname == '') {
            ShowAlert({
                title: "enter fname", buttonText: "Submit",
                text: "sub text", onSubmit: (data) => onAlertButtonTap(data)
            })
        } else if (data.lname == '') {
            ShowAlert({
                title: "enter lname", buttonText: "Submit",
                text: "sub text", onSubmit: (data) => onAlertButtonTap(data)
            })
        } else if (data.mobile == '') {
            ShowAlert({
                title: "enter mobile", buttonText: "Submit",
                text: "sub text", onSubmit: (data) => onAlertButtonTap(data)
            })
        } else if (data.mobile.length != 10) {
            ShowAlert({
                title: "enter 10 digit", buttonText: "Submit",
                text: "sub text", onSubmit: (data) => onAlertButtonTap(data)
            })
        } else if (data.email == '') {
            ShowAlert({
                title: "enter email", buttonText: "Submit",
                text: "sub text", onSubmit: (data) => onAlertButtonTap(data)
            })
        } else if (!ValidateEmail(data.email)) {

        }else if (data.pass == '') {
            ShowAlert({
                title: "enter password", buttonText: "Submit",
                text: "sub text", onSubmit: (data) => onAlertButtonTap(data)
            })
        }
        else {
            swal("All Good", "", "sucess");
        }
  
    }


    return (
        <section>
            <h1>React form</h1>
            <div className="main_part">
                {/* <form> */}
                <div className="form_data">
                    <label htmlFor="">firstname</label>
                    <input type="text" value={data.fname}
                        onChange={(e) => setData({ ...data, fname: e.target.value })} name="fname" />
                </div>
                <div className="form_data">
                    <label htmlFor="">lastname</label>
                    <input type="text" value={data.lname} onChange={(e) => setData({ ...data, lname: e.target.value })} name="lname" />
                </div>
                <div className="form_data">
                    <label htmlFor="" >email</label>
                    <input type="email" value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} name="email" />
                </div>
                <div className="form_data">
                    <label htmlFor="">mobile</label>
                    <input type="text" value={data.mobile} onChange={(e) => setData({ ...data, mobile: e.target.value })} name="mobile" />
                </div>
                <div className="form_data">
                    <label htmlFor="">password</label>
                    <div className="pass">
                        <input type={show ? "text" : "password"} value={data.pass} onChange={(e) => setData({ ...data, password: e.target.value })} name="pass" />
                        <i class={show ? "fas fa-eye icon icon" : "fas fa-eye-slash icon"} onClick={() => setShow(!show)}></i>
                    </div>
                </div>
                <div className="check_box">
                    <input type="checkbox" defaultChecked name="" id="" className='new' /> <span>click here</span>
                </div>

                <button onClick={() => senddata()}>Submit</button>
                {/* </form> */}
            </div>
        </section>
    )
}

export default Register;



{/* <i class=""></i> */ }


      // return
        // const { fname, lname, email, mobile, pass } = data
        // // console.log(fname);

        // if (!data) {
        //     swal("fill data!", "You clicked the button!", "error");
        // } else if (!email.includes("@")) {
        //     swal("please include @!", "You clicked the button!", "error");
        // } else {
        //     setDetils((old) => {
        //         return [...old, data]
        //     });

        //     swal({
        //         title: "Good job!",
        //         text: `name : ${fname}`,
        //         icon: "success",
        //     });
        // }



        //   console.log(getdetails);
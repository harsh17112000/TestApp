import React from 'react'
import swal from 'sweetalert';


export const ShowAlert = ({ title, text, buttonText, onSubmit }) => {

    swal({
        title: title,
        text: text,
        buttons: buttonText
    }).then((event) => {

        onSubmit(event)
    });
}

export const ValidateEmail = (email) => {
    const regex =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if(!(!email || regex.test(email) === false)){
            return false;
        }else{
           return true;
        }
   
}

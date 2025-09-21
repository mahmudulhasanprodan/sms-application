 
import {Bounce, toast } from 'react-toastify';

 // Tost Message is Here
export function SuccesToast (Ttile) {
toast.success(Ttile, {
position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
transition: Bounce,
});
};

import { useState } from "react";
import "../AdressModal/AdressModal.css"
import { Checkout } from "../Checkout/Checkout";

const  AddressModal = ({setShowModal,setNewAdd}) => {
    const [newAddress, setNewAddress] = useState({
        FirstName: "Ashutosh",
        LastName: "Birthare",
        Address: "Jaat Moholla ",
        City: "Guna",
        Pincode : 473001,
        MobileNumber: 9179910419,
      });

      const SaveAddressHandler = () => {
        setNewAdd((previousAddress) => ({
            ...previousAddress,
            FirstName: newAddress.FirstName,
            LastName: newAddress.LastName,
            Address: newAddress.Address,
            City: newAddress.City,
            Pincode: newAddress.Pincode,
            MobiletNumber: newAddress.MobileNumber,
          }));
        setShowModal(false)
        
      }
   
    return (
        <div className="address-page-main-div">
            <div> 
                
                <h3 className="address-page-heading"> Enter Your Delivery Address </h3>
                <input  
                onChange={(e) =>setNewAddress((previousAddress) => ({ ...previousAddress ,  FirstName: e.target.value }))}
                 className="address-page-input" type="text" placeholder="First-Name" />
                <input onChange={(e) =>setNewAddress((previousAddress) => ({ ...previousAddress ,  LastName: e.target.value }))}  className="address-page-input" type="text"placeholder="Last-Name"  />
                <input onChange={(e) =>setNewAddress((previousAddress) => ({ ...previousAddress ,  Address: e.target.value }))}  className="address-page-input" type="text" placeholder="Address"  />
                <input onChange={(e) =>setNewAddress((previousAddress) => ({ ...previousAddress ,  City: e.target.value }))} className="address-page-input" type="text" placeholder="City"  />
                <input onChange={(e) =>setNewAddress((previousAddress) => ({ ...previousAddress ,  Pincode: e.target.value }))} className="address-page-input" type="number" placeholder="Pin-Code"  />
                <input onChange={(e) =>setNewAddress((previousAddress) => ({ ...previousAddress ,  MobileNumber: e.target.value }))} className="address-page-input" type="number" placeholder="Mobile-No."  />
                <div className="address-page-button-div"><button  onClick={SaveAddressHandler} className="address-page-button"> Save </button></div>
                <div> { !setShowModal ? <Checkout newAddress={newAddress} /> : "" }</div>
                


            </div>

        </div>
    )
}
export { AddressModal }
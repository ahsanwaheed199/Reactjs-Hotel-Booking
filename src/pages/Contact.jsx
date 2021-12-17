import React,{useState} from 'react'
const Contact = () => {

    // for firebase database 
    const [userData, setUserData] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        message: "",
      });
    
      let name, value;
      const postUserData = (event) => {
        name = event.target.name;
        value = event.target.value;
    
        setUserData({ ...userData, [name]: value });
      };
    
      // connect with firebase
      const submitData = async (event) => {
        event.preventDefault();
        const { firstName, lastName, phone, email, message } = userData;
    
        if (firstName && lastName && phone && email && message) {
          const res = fetch(
            "https://ahsan-s-hotel-default-rtdb.firebaseio.com/userDataRecords.json",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                firstName,
                lastName,
                phone,
                email,
                message,
              }),
            }
          );
    
          if (res) {
            setUserData({
              firstName: "",
              lastName: "",
              phone: "",
              email: "",
              message: "",
            });
            alert("Data Stored");
          } else {
            alert("plz fill the data");
          }
        } else {
          alert("plz fill the data");
        }
      };
    
    // firebase database end 

return (
<div className="container contact">
    <div className="row">
        <div className="col-md-8 col-12 mx-auto">
            <div className="card shadow-lg border-0 p-4">
                <h1 className="text-center bg-dark text-white display-4 d-inline-block">Contact us</h1>
                <div className="form-group my-5">
                    <div className="row">
                        <div className="col-md-6 col-12 mx-auto my-2">
                            <input type="text" className="form-control-lg" placeholder="First Name"  value={userData.firstName}
                          onChange={postUserData}   name="firstName" required />
                        </div>
                        <div className="col-md-6 col-12 mx-auto my-2">
                            <input type="text" className="form-control-lg" placeholder="last Name"  value={userData.lastName}
                          onChange={postUserData} name="lastName" required />
                        </div>
                    </div>
                </div>
                <div className="form-group mb-5">
                    <div className="row">
                        <div className="col-md-6 col-12 mx-auto my-2">
                            <input type="email" className="form-control-lg" placeholder="Email Address"   value={userData.email}
                          onChange={postUserData}   name="email" required />
                        </div>
                        <div className="col-md-6 col-12 mx-auto my-2">
                            <input type="tel" className="form-control-lg" placeholder="Phone no."  value={userData.phone}
                          onChange={postUserData} name="phone" required />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <textarea className="form-control" row="20" placeholder="Your message" value={userData.message}
                          onChange={postUserData}    name="message" required></textarea>
                    </div>
                </div>
                <div className="mt-5 col-md-6 col-12 mx-auto">
                    <button className="btn btn-outline-dark btn-lg btn-block"   onClick={submitData} >Send Message</button>
                </div>
            </div>
        </div>
    </div>
</div>
)
}
export default Contact
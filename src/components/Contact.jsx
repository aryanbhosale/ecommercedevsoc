import React from 'react';

const Contact = () => {
  return (
    <div>
        <h1 className="display-5 md-5 py-3 text-center">
            CONTACT US
        </h1>
        <hr className='mt-3 ms-5 me-5' />
        <p className="lead md-5 py-5 p-5 mt-5 text-center">
        <a href="tel:+918779596908"><i className='fa fa-phone'></i> +91 8779596908</a>
            <br />
            <a href="mailto:dustiocom@gmail.com?subject=DUST Queries and Grievances"><i className="fa fa-envelope"></i> dustiocom@gmail.com</a>
            <br />
            <a href='https://www.google.com/maps/dir/15.3835048,73.8771786/bits+goa/@15.3823294,73.8585108,14z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3bbfb8375851666d:0x4ad5683010110240!2m2!1d73.8781616!2d15.3911236'><i className="fa fa-map-marker"></i> NH 17B, Bypass, Road, Zuarinagar, Sancoale, Goa 403726</a>
        </p>
    </div>
  );

}

export default Contact;
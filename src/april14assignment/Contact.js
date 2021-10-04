

import  GoogleMapReact from 'google-map-react'; 
export default function Contact (){
   
 
    return(
        <div style={{ height: '50vh', width: '100%' }}>
            <li><strong>Address: </strong>No 393, 1st Floor, Guru Krupa 7th Cross Road, 
            8th Main Rd, Mico Layout, BTM 2nd Stage, Bengaluru, Karnataka 560076</li>
            <li><strong>Hours:</strong>7.30 AM - 9.00 PM</li>
            <li><strong>PhoneNumber:</strong>063624 54616</li>
        <GoogleMapReact
        // google = {this.props.google}
        bootstrapURLKeys = {{key: "AIzaSyDF6tll31w0PwOC1sjL7TojP_-AGWq-NNI"}}
        defaultCenter={{lat: 12.913667005542772, lng:  77.60704651653491}} 
        defaultZoom = {3.5} >
        </GoogleMapReact>

      </div>
    )
}

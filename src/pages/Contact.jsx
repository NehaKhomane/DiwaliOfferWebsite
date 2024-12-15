import './Home.css';
export default function Contact(){
    return(
        <>
        
            <div className='Contact-sub'>
            
                <div className='contact-firstone'>
                    <h2>Let's Celebrate Together..!!</h2>
                    
                    <br></br>
                <i class="fa-regular fa-address-book"></i>
                <p>525, Centre St, Camp, Pune, Maharashtra 411001</p>
                <br></br>
                <i class="fa-solid fa-phone"></i>
                <p>9552849585/9960666190</p>
                <br></br>
                <i class="fa-solid fa-envelope"></i>
                <p>mulchansweet@gmail.com</p>
                <button>KNOW MORE</button>
                <div className='icons'>
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-square-instagram"></i>
                <i class="fa-brands fa-square-whatsapp"></i>
                <br></br>
                
                </div>
                <div className='map-box'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.370042420731!2d73.87524707423715!3d18.51217276943266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c04885489b63%3A0x22e3c2c201651ff2!2sMulchand%20Sweets!5e0!3m2!1sen!2sin!4v1727168234309!5m2!1sen!2sin" width="600" height="510" allowfullscreen="" loading="lazy" ></iframe>
                </div>

            </div>
        </div>
        </>
    )
}
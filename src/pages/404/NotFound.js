import React from 'react';
import image404 from '../../assets/images/404.jpg'

const NotFoundPage = () => {
    return(
        <>
            <div className="row no-gutters justify-content-center mt-3">
                 <div className="col-sm-12 col-lg-6">
                     <img src={image404}  alt="404" className="img-fluid" />
                 </div>
             </div>

             <div className="container mb-5">
                <h3 className="text-center">SORRY, PAGE NOT FOUND! </h3>
             <p className="text-center">The page you are looking for might have been removed, had its name changed or is temporarily unavailable</p>
            </div>
        </>
    )
}

export default NotFoundPage;
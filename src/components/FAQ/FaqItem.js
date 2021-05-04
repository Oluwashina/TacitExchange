import React from 'react';
import Collapsible from 'react-collapsible';

const FaqItem = ({title, children}) => {
    return ( 
        <>
            <Collapsible 
            className="faq"
            openedClassName="faq active"
            triggerOpenedClassName="faq-title active"
            triggerClassName="faq-title"
            contentInnerClassName="faq-content"
            transitionTime={300}
            easing="ease-out"
            trigger={title}>
                <p className="mb-0">
                    {children}
                </p>
            </Collapsible>

        </>
     );
}
 
export default FaqItem;
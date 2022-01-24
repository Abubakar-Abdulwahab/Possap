import React, { forwardRef } from 'react';



const SidebarFooter = ( { children, className, ...rest },
  ref) => {
  const sidebarFooterRef=
    ref  || React.createRef();
  return (
    <div ref={sidebarFooterRef} className={'possap-sidebar-footer ' + className} {...rest}>
      {children}
    </div>
  );
};

export default forwardRef(SidebarFooter);

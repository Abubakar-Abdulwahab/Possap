import React, { forwardRef } from 'react';
import classNames from 'classnames';



const SidebarContent = (
  { children, className, ...rest },
  ref,
) => {
  const sidebarContentRef = ref  || React.createRef();
  return (
    <div ref={sidebarContentRef} className={classNames('possap-sidebar-content', className)} {...rest}>
      {children}
    </div>
  );
};

export default forwardRef(SidebarContent);

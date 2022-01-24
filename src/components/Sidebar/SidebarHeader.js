import React, { forwardRef } from 'react';

const SidebarHeader = (
  { children, className, ...rest },
  ref,
) => {
  const sidebarHeaderRef =
    ref || React.createRef();
  return (
    <div ref={sidebarHeaderRef} className={'possap-sidebar-header', className} {...rest}>
      {children}
    </div>
  );
};

export default forwardRef(SidebarHeader);

import React, { forwardRef, createContext, useEffect, useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './SidebarStyles.css'

export const SidebarContext = createContext({
  collapsed: false,
  rtl: false,
  toggled: false,
});

const ProSidebar = (
  {
    children,
    className,
    width,
    collapsedWidth,
    collapsed,
    rtl,
    toggled,
    image,
    breakPoint,
    onToggle,
    style = {},
    ...rest
  },
  ref,
) => {
  const [sidebarState, setSidebarState] = useState({
    collapsed: typeof collapsed === 'undefined' ? false : collapsed,
    rtl: typeof rtl === 'undefined' ? false : rtl,
    toggled: typeof toggled === 'undefined' ? false : toggled,
  });

  const sidebarRef =
    ref || React.createRef();

  const handleToggleSidebar = () => {
    const toggleValue = sidebarState.toggled;
    setSidebarState({ ...sidebarState, toggled: !toggleValue });
    if (onToggle) {
      onToggle(!toggleValue);
    }
  };

  const widthStyle = width ? { width, minWidth: width } : {};
  const collapsedWidthStyle = collapsedWidth
    ? { width: collapsedWidth, minWidth: collapsedWidth }
    : {};
  const finalWidth = collapsed ? collapsedWidthStyle : widthStyle;

  useEffect(() => {
    setSidebarState({ ...sidebarState, collapsed, rtl, toggled });
  }, [collapsed, rtl, toggled]);

  return (
    <SidebarContext.Provider value={sidebarState}>
      <div
        ref={sidebarRef}
        className={classNames('possap-sidebar', className, breakPoint, { collapsed, rtl, toggled })}
        style={{ ...finalWidth, ...style }}
        {...rest}
      >
        <div className="possap-sidebar-inner">
          {image ? <img src={image} alt="sidebar background" className="sidebar-bg" /> : null}
          <div className="possap-sidebar-layout">{children}</div>
        </div>
        <div
          className="overlay"
          onClick={handleToggleSidebar}
          onKeyPress={handleToggleSidebar}
          role="button"
          tabIndex={0}
          aria-label="overlay"
        />
      </div>
    </SidebarContext.Provider>
  );
};
ProSidebar.prototype =  {
    collapsed: PropTypes.bool,
    rtl: PropTypes.bool,
    toggled: PropTypes.bool,
    width: PropTypes.string | PropTypes.number,
    collapsedWidth: PropTypes.string | PropTypes.number,
    image: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.node,
    breakPoint: PropTypes.oneOf(['xxl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs']),
    onToggle: PropTypes.func,
    style: PropTypes.object
  };

export default forwardRef(ProSidebar);

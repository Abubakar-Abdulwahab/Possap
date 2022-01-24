import React, { useState, forwardRef, useRef, useEffect, useContext } from 'react';
import classNames from 'classnames';
import SlideDown from 'react-slidedown';
import { createPopper } from '@popperjs/core';
import ResizeObserver from 'resize-observer-polyfill';
import { SidebarContext } from '../Sidebar';
import PropTypes from 'prop-types';



const SubMenu = (
  {
    children,
    icon,
    className,
    title,
    defaultOpen = false,
    open,
    prefix,
    suffix,
    firstchild,
    popperarrow,
    onOpenChange,
    ...rest
  },
  ref,
) => {
  let popperInstance;
  const { collapsed, rtl, toggled } = useContext(SidebarContext);
  const [closed, setClosed] = useState(!defaultOpen);
  const popperElRef = useRef(null);
  const referenceElement = useRef(null);
  const popperElement = useRef(null);

  const handleToggleSubMenu = () => {
    if (onOpenChange) onOpenChange(closed);
    setClosed(!closed);
  };

  useEffect(() => {
    if (firstchild) {
      if (collapsed) {
        if (referenceElement.current && popperElement.current) {
          popperInstance = createPopper(referenceElement.current, popperElement.current, {
            placement: 'right',
            strategy: 'fixed',
            modifiers: [
              {
                name: 'computeStyles',
                options: {
                  adaptive: false,
                },
              },
            ],
          });
        }

        if (popperElRef.current) {
          const ro = new ResizeObserver(() => {
            if (popperInstance) {
              popperInstance.update();
            }
          });

          ro.observe(popperElRef.current);
          ro.observe(referenceElement.current);
        }

        setTimeout(() => {
          if (popperInstance) {
            popperInstance.update();
          }
        }, 300);
      }
    }

    return () => {
      if (popperInstance) {
        popperInstance.destroy();
        popperInstance = null;
      }
    };
  }, [collapsed, rtl, toggled]);

  const subMenuRef = ref || React.createRef();

  return (
    <li
      ref={subMenuRef}
      className={classNames('possap-menu-item possap-sub-menu', className, {
        open: typeof open === 'undefined' ? !closed : open,
      })}
      {...rest}
    >
      <div
        ref={referenceElement}
        className="possap-inner-item"
        onClick={handleToggleSubMenu}
        onKeyPress={handleToggleSubMenu}
        role="button"
        tabIndex={0}
      >
        {icon ? (
          <span className="possap-icon-wrapper">
            <span className="possap-icon">
            <i className={"feather " + icon}></i> 
            {/* ICON */}
            </span>
          </span>
        ) : null}
        {prefix ? <span className="prefix-wrapper">{prefix}</span> : null}
        <span className="possap-item-content">{title}</span>
        {suffix ? <span className="suffix-wrapper">{suffix}</span> : null}
        <span className="possap-arrow-wrapper">
          <span className="possap-arrow" />
        </span>
      </div>

      {firstchild && collapsed ? (
        <div
          ref={popperElement}
          className={classNames('possap-inner-list-item popper-element', { 'has-arrow': popperarrow })}
        >
          <div className="popper-inner" ref={popperElRef}>
            <ul>{children}</ul>
          </div>
          {popperarrow ? <div className="popper-arrow" data-popper-arrow /> : null}
        </div>
      ) : (
        <SlideDown
          closed={typeof open === 'undefined' ? closed : !open}
          className="possap-inner-list-item"
        >
          <div>
            <ul>{children}</ul>
          </div>
        </SlideDown>
      )}
    </li>
  );
};
SubMenu.propTypes =  {
    children: PropTypes.node,
    className: PropTypes.string,
    icon: PropTypes.node,
    title: PropTypes.node,
    defaultOpen: PropTypes.bool,
    open: PropTypes.bool,
    prefix: PropTypes.node,
    suffix: PropTypes.node,
    firstchild: PropTypes.bool,
    popperarrow: PropTypes.bool,
    onOpenChange: PropTypes.func
  };
export default forwardRef(SubMenu);

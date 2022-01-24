/* eslint-disable react/no-array-index-key */
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';




const Menu = (
  {
    children,
    className,
    iconShape,
    popperArrow = false,
    subMenuBullets = false,
    innerSubMenuArrows = true,
    ...rest
  },
  ref,
) => {
  const menuRef = ref || React.createRef();
  return (
    <nav
      ref={menuRef}
      className={classNames('possap-menu', className, {
        [`shaped ${iconShape}`]: ['square', 'round', 'circle'].indexOf(iconShape) >= 0,
        'submenu-bullets': subMenuBullets,
        'inner-submenu-arrows': innerSubMenuArrows,
      })}
      {...rest}
    >
      <ul>
        {React.Children.toArray(children)
          .filter(Boolean)
          .map((child, index) =>
            React.cloneElement(child, {
              key: index,
              firstchild: 1,
              popperarrow: popperArrow === true ? 1 : 0,
            }),
          )}
      </ul>
    </nav>
  );
};
Menu.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    iconShape: PropTypes.string,
    popperArrow: PropTypes.bool,
    subMenuBullets: PropTypes.bool,
    innerSubMenuArrows: PropTypes.bool
  };

export default forwardRef(Menu);

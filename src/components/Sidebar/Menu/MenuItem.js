import React, { forwardRef } from 'react';
import classNames from 'classnames';
import Menu from './Menu';
import PropTypes from 'prop-types';

const MenuItem = (
  { children, className, icon, active, prefix, suffix, firstchild, popperarrow, ...rest },
  ref,
) => {
  const menuItemRef = ref || React.createRef();

  return (
    <li ref={menuItemRef} className={classNames('possap-menu-item', className, { active })} {...rest}>
      <div className="possap-inner-item" tabIndex={0} role="button">
        {icon ? (
          <span className="possap-icon-wrapper">
            <span className="possap-icon">
                {/* {icon} */}
                <i className={"feather " + icon}></i>
                </span>
          </span>
        ) : null}

        {prefix ? <span className="prefix-wrapper">{prefix}</span> : null}
        <span className="possap-item-content">{children}</span>
        {suffix ? <span className="suffix-wrapper">{suffix}</span> : null}
      </div>
    </li>
  );
};

Menu.propTypes =  {
    children: PropTypes.node,
    className: PropTypes.string,
    icon: PropTypes.node,
    active: PropTypes.bool,
    prefix: PropTypes.node,
    suffix: PropTypes.node,
    firstchild: PropTypes.bool,
    popperarrow: PropTypes.bool
  };

export default forwardRef(MenuItem);

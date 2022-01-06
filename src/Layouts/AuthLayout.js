import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';


AuthLayout.propTypes = {
  children: PropTypes.node
};

export default function AuthLayout({ children }) {
  return (
    <div>
      <RouterLink to="/">
        <img src="" className="img-fluid" alt="" />
      </RouterLink>

      <div>
        <p>
          hello
          {children}
        </p>
      </div>
    </div>
  );
}

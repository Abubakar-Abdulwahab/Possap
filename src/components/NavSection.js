import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'


const NavSection = ({navConfig}) => {
    const [open, setOpen] = useState(false);
    const [current, setcurrent] = useState(null)
    const { pathname } = useLocation();
    const match = (path) => {
        console.log(pathname)
        console.log(path)
        console.log(pathname.includes(path))
       return  pathname.includes(path) ? true : false;
    }
    // console.log(match('finance'))
    //+ match(item.path) ? "active" : ""
    const handleOpen = (item) => {
        // console.log(current, item.path)
        setOpen((prev) => !prev);
        setcurrent(item.path)
    };
    useEffect(() => {
        
    }, [current])
    return (
        <ul className="nav pcoded-inner-navbar">
        {navConfig && navConfig.map((list) => {
        const { subheader, items } = list;
        return (
            <>
            <li className="nav-item pcoded-menu-caption">
                <label>{subheader}</label>
            </li>
            {items.map(item =>(
                 <>
                 {item.children ?
                        <li onClick={() => handleOpen(item)} class={`nav-item pcoded-hasmenu ${(current === item.path && open) ? 'pcoded-trigger' : '' } `}  >
                        <a   class={ (open) ? 'nav-link active' : 'nav-link' }>
                            {item.icon}
                            <span class="pcoded-mtext">{item.title}</span>
                        </a>
            
                        <ul class={(current === item.path && open) ? 'pcoded-submenu pcoded-submenu-slider' : 'pcoded-submenu' } >
                            
                            {item.children.map(child => (
                                <li class="">
                                 <Link to={`${child.path}`} class="">{child.title}</Link></li>

                            ))}
                        </ul>
                    </li>
                    :
                    <li onClick={() => handleOpen(item)} class={`nav-item  ${match(item.path) ? " active" :""}`}><Link to={`${item.path}`} class="nav-link "><span class="pcoded-micon"><i class="feather icon-pie-chart"></i></span><span class="pcoded-mtext">{item.title}</span></Link></li>
                    
                 
                }
             </>
            ))}
            {/* {items.map(item =>(
                <li className={"nav-item "  + item.children ? "pcoded-hasmen " + match(item.path) ? "active" : ""  : ""} >
                <a href="javascript:" className="nav-link "><span className="pcoded-micon"><i className="feather icon-box"></i></span><span className="pcoded-mtext">{item.title}</span></a>
                {item.children &&
                    <ul className="pcoded-submenu"> 
                        {item.children.map(child =>(
                            <li className=""><Link to="{child.path}" className="">{child.title}</Link></li>
                            ))
                        }
                    </ul>
                
                }
            </li>
            ))} */}
            
                   
        </>
        );
      })}
       
        <li  className="nav-item disabled"><a href="javascript:" className="nav-link"><span className="pcoded-micon"><i className="feather icon-power"></i></span><span className="pcoded-mtext">Logout</span></a></li>
    </ul>
    )
}
NavSection.propTypes = {
    navConfig: PropTypes.array
  };

export default NavSection

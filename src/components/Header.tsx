import { Link, NavLink } from 'react-router-dom';
import { Affix } from 'antd';
import './Header.css';

export default function Header() {
    return (
        <Affix className='affix-header'>
            <div className='divHeader'>
                <Link to="/" className="logoLink">
                    <img className="affix-header-logo" alt='logo' src="/logo192.png" />
                </Link>
                <HeaderNavItem exact to="/" name="CD-Yang" />
                <HeaderNavItem to="/about" name="关于" />
            </div>
        </Affix>
    );
}

interface IHeaderProps {
    exact?: boolean;
    to: string;
    name: string;
}

const HeaderNavItem: React.FunctionComponent<IHeaderProps> = ({ exact, to, name }: IHeaderProps): JSX.Element =>
    <NavLink
        to={to}
        className="nav-item"
        exact={exact ? true : false}
        activeClassName="active">
        {name}
    </NavLink>;

import { NavLink } from "react-router-dom";
import { Affix } from 'antd';

export default function Header() {
    return (
        <Affix>
            <HeaderNavItem exact to="/" name="Blog" />
            <HeaderNavItem to="/about" name="About" />
            <HeaderNavItem to="/contact" name="Contact" />
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

// (props:IHeaderProps) => {
//     return (
//         <NavLink
//             to={props.to}
//             className="nav-item"
//             exact={props.exact ? true : false}
//             activeClassName="active">
//             {props.name}
//         </NavLink>
//     );
// }


interface NavbarLinkProp {
  link: string;
  active: boolean;
}
const NavbarLink: React.FC<NavbarLinkProp> = ({
  link,
  active
}) => {
  return (
    <li className={`navbar-link label-medium ${active ? 'active-link': ''}`}>
      {link}
    </li>
  )
}

export default NavbarLink


interface NavbarLinkProp {
  link: string;
  active: string;
}
const NavbarLink: React.FC<NavbarLinkProp> = ({
  link,
  active,
}) => {
  const activeLink = link === active;
  return (
    <li className={`navbar-link label-medium ${activeLink ? 'active': ''}`}>
      <a href={`#${link}`}>{link}</a>
    </li>
  )
}

export default NavbarLink
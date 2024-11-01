import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/outline";

import { Link } from 'react-router-dom';

import logo from '../assets/main-logo.png'

 
function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [openNestedMenu, setopenNestedMenu] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
 
  return (
    <React.Fragment>
      <Menu
        className="hello"
        open={isMenuOpen}
        handler={setIsMenuOpen}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-medium">
            <ListItem
              className="font-primary font-[700] flex items-center gap-2 py-2 pr-4 text-gray-900"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
               <Link to="/about">About</Link>
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden rounded-xl lg:block">
          <Menu
            placement="right-start"
            allowHover
            offset={15}
            open={openNestedMenu}
            handler={setopenNestedMenu}
          >
            <MenuHandler className="flex items-center justify-between">
              <MenuItem>
              <p className="font-primary font-[700]">Manager's Note</p>
              </MenuItem>
            </MenuHandler>
          </Menu>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>
          <Menu
            placement="bottom"
            allowHover
            offset={6}
            open={openNestedMenu}
            handler={setopenNestedMenu}
          >
            <MenuHandler className="flex items-center justify-between">
              <MenuItem>
              <p className="font-primary font-[700]">Manager's Note</p>
              </MenuItem>
            </MenuHandler>
          </Menu>
        </Collapse>
      </div>
    </React.Fragment>
  );
}
 
function NavList() {
  return (
    <List className="mb-6 mt-4 p-0 lg:mb-0 lg:mt-0 lg:flex-row lg:p-1">
      <Typography
        as={Link}
         to="/brands"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="font-primary font-[700] flex items-center gap-2 py-2 pr-4">Our Brands</ListItem>
      </Typography>
      {/* <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="font-primary font-[700] flex items-center gap-2 py-2 pr-4">
          Media Center
        </ListItem>
      </Typography> */}
      <NavListMenu />
      <Typography
        as={Link}
        to="/order"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="font-primary font-[700] flex items-center gap-2 py-2 pr-4">Order Online</ListItem>
      </Typography>
    </List>
  );
}
 
export function NavigationbarWithDropdownMultilevelMenu() {
  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
 
  return (
    <Navbar className="mx-auto max-w-screen-xl px-[20px] py-[10px]">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="/"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5 lg:ml-2"
        >
          <div className="image__wrapper w-[250px] h-[60px] max-w-[250px] bmd:w-[200px] bmd:h-[45px] relative">
            <img src={logo} alt="Golden Gate" className="absolute inset-0 w-full object-cover" />
          </div>
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <div className="hidden gap-2 lg:flex">
          <Button className="font-button text-[16px] capitalize font-normal bg-[#0C0F0A] rounded-[50px]" size="sm"> <Link to="/contact">Contact us</Link></Button>
        </div>
        <IconButton
          variant="text"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
        <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
          <Button className="font-button text-[16px] capitalize font-normal bg-[#0C0F0A] rounded-[50px]" size="sm" fullWidth>
            Contact Us
          </Button>
        </div>
      </Collapse>
    </Navbar>
  );
}
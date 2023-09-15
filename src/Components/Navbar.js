import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem,   NavbarMenu,
    NavbarMenuItem,  NavbarMenuToggle, Button} from "@nextui-org/react";
import {AcmeLogo} from "../Assets/AcmeLogo.jsx";
import { Link } from 'react-router-dom'

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
   "Overview",
   "Examples",
   "Tour",
   "Blog",
   "Help"
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
        <p className="font-bold text-2xl text-[#323232]">lobe</p>
          <AcmeLogo />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-8" justify="center">
      <NavbarItem  className="text-lg">
          <Link color="foreground" to="/leg">
            Overview
          </Link>
        </NavbarItem>
        <NavbarItem isActive  className="text-lg">
          <Link color="foreground" href="#">
            Examples
          </Link>
        </NavbarItem>
        <NavbarItem isActive  className="text-lg">
          <Link color="foreground" to="/">
            Tour
          </Link>
          
        </NavbarItem>
        <NavbarItem isActive  className="text-lg">
          <Link href="#" aria-current="page">
            Blog
          </Link>
        </NavbarItem>
        <NavbarItem isActive  className="text-lg">
          <Link color="foreground" href="#">
            Help
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button className="text-lg rounded-3xl font-medium" as={Link} href="#" variant="flat"
          style={{
            backgroundColor: "#04ddb2",
            color: "white"
          }}>
           Download
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "" : "foreground"
              }
              className="w-full"
              href={
                index === 0 ? "/gree" :index === 1 ? "/blue" : index === 2 ? "/" : index ===3 ? "/heel" : index === 4 ?  "/feel" : "" 
              }
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

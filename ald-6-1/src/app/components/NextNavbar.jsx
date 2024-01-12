'use client'
import React from "react";
import {Navbar, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";


export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  

  const links = [
    { label: "Apresentação", href: "/" },
    { label: "Etapas do Projeto", href: "/etapas" },
    { label: "Introdução ao Site 1", href: "/introducao" },
    { label: "Atividades do Projeto", href: "/atividades" },
    { label: "Matemática e Educação Financeira", href: "/matematica" },
    { label: "Recursos Didáticos", href: "/recursos" },
  ];

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <a href="/">
          <img src="/images/logo-blue.png" alt="Logo" height={50} width={50}/>
        </a>
              
              
        
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        
        
        <img src="/images/logo-blue.png" alt="Logo" height={60} width={60}/>
        
        
        

        <NavbarItem>
        <Link 
          className={`transition-all duration-500 ease-in-out ${
            location.pathname === '/' ? 'border-b-3 border-primary font-semibold text-blue-900' : 'hover:text-blue-900  hover:border-primary-focus hover:font-semibold'
          }`}
          href="/"
          color="foreground"
          passHref
        >
          Apresentação
        </Link>
        </NavbarItem>
        
        <NavbarItem>
          <Link className={`transition-all duration-500 ease-in-out ${
              location.pathname === '/etapas' ? 'border-b-3 border-primary font-semibold text-blue-900' : 'hover:text-blue-900  hover:border-primary-focus hover:font-semibold'
            }`}
          href="/etapas"
          color="foreground"
          passHref>
          Etapas do Projeto
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link className={`transition-all duration-500 ease-in-out ${
              location.pathname === '/introducao' ? 'border-b-3 border-primary font-semibold text-blue-900' : 'hover:text-blue-900  hover:border-primary-focus hover:font-semibold'
            }`} 
          href="/introducao"
          color="foreground"
          passHref>
          Intodução ao Site 1
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className={`transition-all duration-500 ease-in-out ${
              location.pathname === '/atividades' ? 'border-b-3 border-primary font-semibold text-blue-900' : 'hover:text-blue-900  hover:border-primary-focus hover:font-semibold'
            }`} 
          href="/atividades"
          color="foreground"
          passHref>
          Atividades do Projeto
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className={`transition-all duration-500 ease-in-out ${
              location.pathname === '/matematica' ? 'border-b-3 border-primary font-semibold text-blue-900' : 'hover:text-blue-900  hover:border-primary-focus hover:font-semibold'
            }`} 
          href="/matematica"
          color="foreground"
          passHref>
          Matemática e Educação Financeira
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className={`transition-all duration-500 ease-in-out ${
              location.pathname === '/recursos' ? 'border-b-3 border-primary font-semibold text-blue-900' : 'hover:text-blue-900  hover:border-primary-focus hover:font-semibold'
            }`} 
          href="/recursos"
          color="foreground"
          passHref>
          Recursos Didáticos
          </Link>
        </NavbarItem>
      </NavbarContent>

      

      <NavbarMenu>
        {links.map((link, index) => (
          <NavbarMenuItem key={index}>
            <Link
              href={link.href}
              size="lg"
              style={{ display: 'block', textAlign: 'center' }}
              className={`font-semibold text-primary-focus py-4 hover:text-primary ${
                location.pathname === link.href ? 'border-b-3 border-primary' : ''
              }`}
              passHref
            >
              {link.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>

    </Navbar>
  );
}

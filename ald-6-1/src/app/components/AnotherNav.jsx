'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from "../../../public/images/logo-white.png"
import { AiOutlineMenu, AiOutlineClose, AiOutlineInstagram, AiOutlineFacebook, AiOutlineTwitter } from 'react-icons/ai'
import { useState } from 'react'

function AnotherNav() {
    const [isOpen, setIsOpen] = useState(false);

    const handleNav = () => {
        setIsOpen(!isOpen);
    }
  return (
    <>
        <nav className='fixed w-full h-20 shadow-xl bg-primary z-999999 top-0 left-0'>
            <div className='flex justify-between items-center h-full w-full px-4 2xl:px-16'>
            
                <Link href='/'>
                    <Image 
                        src={Logo} 
                        alt="Logo" 
                        height={60} 
                        width={60}
                        className='cursor-pointer'
                    />
                </Link>
            
                <div className='hidden sm:flex'>
                    <ul className='hidden sm:flex'>
                        <Link href="/">
                            <li className='ml-10 hover:border-b text-white'>Apresentação</li>
                        </Link>
                        
                        <Link href="/etapas">
                            <li className='ml-10 hover:border-b text-white'>Etapas do Projeto</li>
                        </Link>
                        
                        <Link href="/introducao">
                            <li className='ml-10 hover:border-b text-white'>Intodução ao Site 1</li>
                        </Link>

                        <Link href="/atividades">
                            <li className='ml-10 hover:border-b text-white'>Atividades do Projeto</li>
                        </Link>

                        <Link href="/matematica">
                            <li className='ml-10 hover:border-b text-white'>Matemática e Educação Financeira</li>
                        </Link>

                        <Link href="/recursos">
                            <li className='ml-10 hover:border-b text-white'>Recursos Didáticos</li>
                        </Link>
                    </ul>
                </div>
                <div onClick={handleNav} className='sm:hidden cursor-pointer pl-24'>
                    <AiOutlineMenu size={25}/>
                </div>
            </div>
            <div className={
                isOpen 
                ?
                "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-primary-focus p-10 ease-in duration-500"
                :
                "fixed left-[-100%] top-0 p-10 ease-in duration-500"
            }>
            
            <div className='flex w-full items-center justify-end'>
                <div onClick={handleNav} className='cursor-pointer'>
                    <AiOutlineClose size={25}/>
                </div>
            </div>
            <div className='flex-col py-4'>
                    <ul>
                        <Link href="/">
                            <li onClick={() => setIsOpen(false)}
                                className='py-4 text-white cursor-pointer'>
                                Apresentação</li>
                        </Link>
                        
                        <Link href="/etapas">
                            <li onClick={() => setIsOpen(false)}
                                className='py-4 text-white cursor-pointer'>
                                Etapas do Projeto</li>
                        </Link>
                        
                        <Link href="/introducao">
                            <li onClick={() => setIsOpen(false)}
                                className='py-4 text-white cursor-pointer'>
                                Intodução ao Site 1</li>
                        </Link>

                        <Link href="/atividades">
                            <li onClick={() => setIsOpen(false)}
                                className='py-4 text-white cursor-pointer'>
                                Atividades do Projeto</li>
                        </Link>

                        <Link href="/matematica">
                            <li onClick={() => setIsOpen(false)}
                                className='py-4 text-white cursor-pointer'>
                                Matemática e Educação Financeira</li>
                        </Link>

                        <Link href="/recursos">
                            <li onClick={() => setIsOpen(false)}
                                className='py-4 text-white cursor-pointer'>
                                Recursos Didáticos</li>
                        </Link>
                    </ul>
            </div>
            <div className='flex flex-row justify-around pt-10 items-center'>
                <AiOutlineInstagram size={25} className='text-white cursor-pointer'/>
                <AiOutlineFacebook size={25} className='text-white cursor-pointer'/>
                <AiOutlineTwitter size={25} className='text-white cursor-pointer'/>

            </div>
                <Link href='/' className='justify-center'>
                    <Image 
                        src={Logo} 
                        alt="Logo" 
                        height={60} 
                        width={60}
                        className='cursor-pointer pt-10'
                    />
                </Link>
            </div>
        </nav>
    </>
  )
}

export default AnotherNav
// YAHAN PAR HUMNE CLERK KE SIGN IN COMPONENT KO USE KIYA HAI MATLAB JAB BH USER /SIGN-IN PAR JAYEGA TOH USSE SIGN UP PAGE DIKHEGA
// AUR ISS PAGE KO BANANE K LYE KUCH STEPS FOLLOW KIYE GAYE HAIN
// 1- (auth) folder banaya sabse pehle
// 2- Sign-up folder banaya aur usko (auth) walay folder k ander dal dya
// 3- Sign-up folder k ander [[..sign-up]] folder banaya
// 4- Ab is folder k ander page.jsx file banai

// ya simply type sign-up/[[...sign-up]]/page.jsx


import { SignUp } from '@clerk/nextjs'
import React from 'react'

const Page = () => {
  return (
    <SignUp/>
  )
}

export default Page

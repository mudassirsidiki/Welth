// YAHAN HUMNE SIMPLY SIGN IN PAGE AUR SIGN UP PAGE KO WRAP KARDYA 

import React from 'react'

const AuthLayout = ({children}) => {
  return (
    <div className='flex justify-center pt-36'>
      {children}
    </div>
  )
}

export default AuthLayout

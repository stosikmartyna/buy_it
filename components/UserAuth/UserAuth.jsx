import React, { useState } from 'react';
import { UserAuthSignIn } from './UserAuthSignIn';
import { UserAuthSignUp } from './UserAuthSignUp';

export const UserAuth = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    return (
        <>
            {isSignInForm 
                ? <UserAuthSignIn setIsSignInForm={setIsSignInForm} /> 
                : <UserAuthSignUp setIsSignInForm={setIsSignInForm} />
            }
        </>
    )
}
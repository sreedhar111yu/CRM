import React from 'react';
import { SignIn } from '@clerk/clerk-react';

function SignInPage() {
  const backgroundImageStyle = {
    backgroundImage: 'url("https://tse1.mm.bing.net/th?id=OIP.qeUK2EyZZkZ2LNfIqNfrGAHaEo&pid=Api&P=0&h=180")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '100vh', // Ensure it covers the full height of the viewport
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div style={backgroundImageStyle}>
      <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg">
        <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
      </div>
    </div>
  );
}

export default SignInPage;
  
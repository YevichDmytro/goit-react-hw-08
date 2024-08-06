import { Suspense } from 'react';
import AppBar from '../AppBar/AppBar';

const Layout = ({ children }) => {
  return (
    <>
      <AppBar />
      <Suspense fallback={<div>Loading page...</div>}>{children}</Suspense>
    </>
  );
};

export default Layout;

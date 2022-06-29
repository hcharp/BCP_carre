import React from 'react';
import { Navigationbar } from '../components';
import { Outlet } from 'react-router';

export default () => {
  return (
    <>
      <Navigationbar />
      <Outlet />
    </>
  );
};
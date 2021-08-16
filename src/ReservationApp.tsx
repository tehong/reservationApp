import React from 'react';
import RootNavigation from './navigation/RootNavigation';
import Backend, {BackendProvider} from './api/Backend';
import ReservationProvider from './providers/ReservationProvider';

// init the backend
Backend.initialize();

interface Props {}
const ReservationApp = () => {
  return (
    <ReservationProvider>
      <BackendProvider>
        <RootNavigation />
      </BackendProvider>
    </ReservationProvider>
  );
};

export default ReservationApp;

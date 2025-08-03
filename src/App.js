import React, { useState } from 'react';
import HomePage from './HomePage';
import VolunteerForm from './VolunteerForm';
import AdminView from './AdminView';
import Navbar from './Navbar';

function App() {
  const [page, setPage] = useState('home'); // default is home page

   return (
    <div>
      <Navbar setPage={setPage} /> {/* Navbar at top */}

      {page === 'home' && <HomePage />}
      {page === 'form' && <VolunteerForm />}
      {page === 'admin' && <AdminView />}
    </div>
  );
}


export default App;

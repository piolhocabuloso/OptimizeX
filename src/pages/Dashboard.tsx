import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Dashboard as DashboardComponent } from '@/components/dashboard/Dashboard';

const Dashboard = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1">
        <DashboardComponent />
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;

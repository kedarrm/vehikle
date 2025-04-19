import { getAdmin } from '@/actions/admin'
import Header from '@/components/header';
import { notFound } from 'next/navigation';
import React from 'react'
import Sidebar from './_components/sidebar';

const AdminLayout = async ({children}) => {
    const admin = await getAdmin();

    if(!admin.authorized){
        return notFound();
    }

  return (
    <div className='h-full'>
        <Header isAdminPage={true} />
        <div className='hidden md:flex h-full w-56 flex-col fixed inset-y-0 z-50'>
            <Sidebar />
        </div>
        <main className='md:pl-56 pt-[80px] pb-16 h-full'>{children}</main>
        <Sidebar /> 
    </div>
  )
}

export default AdminLayout
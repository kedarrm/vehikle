import { redirect } from 'next/navigation';
import React from 'react'
import {ReservationsList} from './_components/reservations-list';
import { auth } from '@clerk/nextjs/server';
import { getUserTestDrives } from '@/actions/test-drive';

export const metadata = {
    title: "My Reservations | Vehicle",
    description: "Manage your test drive reservations",
};


const ReservationsPage = async () => {
    // Check authentication on server
    const { userId } = await auth();
    if (!userId) {
        redirect("/sign-in?redirect=/reservations");
    }

    const reservationsResult = await getUserTestDrives();

    return (
        <div className="container mx-auto px-4 py-12">
      <h1 className="text-6xl mb-6 gradient-title">Your Reservations</h1>
      <ReservationsList initialData={reservationsResult} />
    </div>
    )
}

export default ReservationsPage;
import ComponentsDashboardFinance from '@/components/dashboard/components-dashboard-finance';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    title: 'Finance',
};

const Finance = () => {
  return (
    <ComponentsDashboardFinance />
  )
}

export default Finance

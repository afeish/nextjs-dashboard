import { Metadata } from 'next';
import { lusitana } from '@/app/ui/fonts';
import { Suspense } from 'react';
import { fetchFilteredCustomers } from '@/app/lib/data';
import CustomersTable from '@/app/ui/customers/table';

export const metadata: Metadata = {
  title: 'Customers',
};
export default async function page({
  searchParams,
}: {
  searchParams?: { query?: string; page?: string };
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  const customers = await fetchFilteredCustomers(query);
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-center">
        <h1 className={`${lusitana.className} text-2xl`}>Customers</h1>
      </div>
      <Suspense key={query + currentPage}>
        <CustomersTable customers={customers} />
      </Suspense>
    </div>
  );
}

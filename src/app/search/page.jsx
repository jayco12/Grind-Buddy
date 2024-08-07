"use client";
import { SessionProvider } from 'next-auth/react';
import SearchPage from '@/components/search/search';

const Search = ({ session }) => {
  return (
    <SessionProvider session={session}>
      <SearchPage />
    </SessionProvider>
  );
};

export default Search;

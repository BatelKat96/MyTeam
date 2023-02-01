import React from 'react'
import { Routes, Route } from 'react-router'

import { AppHeader } from './cmp/app-header';
import { HomePage } from './pages/home-page';

export function RootCmp() {
  return (
    <section className="app">
      <main className='main-container'>
        <AppHeader />
        <Routes>
          <Route element={<HomePage />} path="/" />
        </Routes>
      </main>

    </section>
  );
}

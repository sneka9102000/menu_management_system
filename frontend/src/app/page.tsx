'use client';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import { fetchMenus } from '@/redux/features/menuSlice';
import { useEffect } from 'react';

export default function Home() {
  const dispatch = useAppDispatch();
  const { menus, status } = useAppSelector((state) => state.menu);

  useEffect(() => {
    dispatch(fetchMenus());
  }, [dispatch]);

  return (
    <div>
      <h1>Menus</h1>
      {status === 'loading' && <p>Loading...</p>}
      {menus.map((menu) => (
        <div key={menu.id}>{menu.name}</div>
      ))}
    </div>
  );
}
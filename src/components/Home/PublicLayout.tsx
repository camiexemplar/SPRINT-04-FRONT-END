
import { Outlet } from 'react-router-dom';
import { PublicNavbar } from './PublicNavbar';

export function PublicLayout() {
  return (
    <div>

      <PublicNavbar />

      <main>
        <Outlet />
      </main>

      {/* adicionar o footer */}
      {/* <Footer /> */}
    </div>
  );
}
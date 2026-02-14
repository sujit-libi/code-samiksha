import { Button } from '@/components/ui/button';
import Logout from '@/module/auth/components/logout';
import { requireAuth } from '@/module/auth/utils/auth-utils';

export default async function Home() {
  const session = await requireAuth();
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <p>Welcome, {session.user?.name ?? 'User'}</p>
      <Logout>
        <Button>Logout</Button>
      </Logout>
    </div>
  );
}

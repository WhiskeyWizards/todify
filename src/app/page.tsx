// Libraries
import { redirect } from 'next/navigation';

const LandingPage = (): JSX.Element | null => {
  redirect('/app/today');
  return null;
};

export default LandingPage;

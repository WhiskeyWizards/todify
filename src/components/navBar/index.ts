// Libraries
import dynamic from 'next/dynamic';

export const NavBar = dynamic(() =>
  import(/* webpackChunkName: "navBar" */ './NavBar').then(({ NavBar: NavBarComponent }) => NavBarComponent),
);

"use client";

import Container from "../container/Container";
import Search from "../search/Search";
import Logo from "./Logo";
import UserMenu from "./UserMenu";

export interface NavBarProps {}

export default function NavBar({}: NavBarProps) {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <Logo />
            <Search />
            <UserMenu />
          </div>
        </Container>
      </div>
    </div>
  );
}

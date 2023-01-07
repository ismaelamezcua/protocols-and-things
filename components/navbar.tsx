import { useState } from "react";
import Link from "next/link";
import { IconSearch } from "@tabler/icons";

export default function Navbar() {
  const [searchOpen, setSearchOpen] = useState<boolean>(false);

  return (
    <>
      <div className="container sticky top-0 z-50 mx-auto max-w-6xl border-b border-black bg-white text-xl">
        <div className="flex items-center justify-between py-8">
          <Link href="/">
            <p className="font-bold">
              Protocols
              <span className="text-rose-600">&amp;</span>
              Things
            </p>
          </Link>
          <ul className="flex flex-row space-x-8">
            <li className="hover:underline">
              <Link href="/archive">Archive</Link>
            </li>
            <li className="hover:underline">
              <Link href="/about">About</Link>
            </li>
            <li className="hover:underline">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
          <p
            className="cursor-pointer"
            onClick={() => setSearchOpen(!searchOpen)}
          >
            <IconSearch />
          </p>
        </div>
      </div>
    </>
  );
}

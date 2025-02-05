import { role } from "@/lib/data";
import { menuItems } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Menu = () => {
  return (
    <div className="mt-4 text-sm">
      {menuItems.map((i) => (
        <div className="flex flex-col gap-2" key={i.title}>
          <span className="hidden lg:block text-gray-400">{i.title}</span>
          {i.items.map(
            (j) =>
              j.visible.includes(role) && (
                <Link
                  key={j.href}
                  href={j.href}
                  className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2 md:px-2
                  rounded-md hover:bg-mySkyLight"
                >
                  <Image src={j.icon} alt={j.label} width={20} height={20} />
                  <span className="hidden lg:block">{j.label}</span>
                </Link>
              )
          )}
        </div>
      ))}
    </div>
  );
};

export default Menu;

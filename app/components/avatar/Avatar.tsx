"use client";

import Image from "next/image";

export interface AvatarProps {}

export default function Avatar({}: AvatarProps) {
  return (
    <Image
      className="rounded-full"
      height={30}
      width={30}
      alt="avatar"
      src="/images/placeholder.png"
    />
  );
}

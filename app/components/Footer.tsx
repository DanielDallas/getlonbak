import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="mb-2 text-sm text-center text-gray-600 dark:text-gray-400">
      Copyright © {new Date().getFullYear()}. Made with ♥ by{" "}
      <Link href="https://thedanieldallas.com/" target="_blank" rel="noopener">
        Daniel Dallas.
      </Link>
    </div>
  );
}

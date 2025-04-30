import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <header className="bg-[#E2E2E2] p-2 fixed left-0 right-0">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <Image src="/next.svg" alt="Next js logo" className="h-[22px]" width={100} height={60} />
          <ul className="flex items-center gap-4 invisible md:visible">
            <li>Home</li>
            <li>Products</li>
            <li>Shopping Bag</li>
          </ul>
        </div>
      </header>
      <main>{children}</main>
      <footer className="bg-[#2F333A] p-2 text-center"><p className="text-white">© 2025 All Rights Reserved</p></footer>
    </div>
  );
}

import Link from 'next/link';

interface DropdownProps {
  items: { href: string; label: string }[];
  close: () => void;
  width: number;
  left: number;
  top: string | number;
}

export const DropdownMenu = ({ items, close, width, left, top }: DropdownProps) => {
  return (
    <div
      className="absolute rounded-[30px] border border-gray-200 bg-white shadow-xl z-50 px-10 py-8 text-black grid grid-cols-3 gap-y-6 gap-x-8 text-sm font-medium"
      style={{
        width: `${width}px`,
        left,
        top,
      }}
    >
      {items.map(({ href, label }) => (
        <Link key={href} href={href} onClick={close} className="hover:text-blue-700">
          {label}
        </Link>
      ))}
    </div>
  );
};

import { lusitana } from "@/app/ui/fonts";

export const Logo = () => {
  return (
    <div
      className={`${lusitana.className} bg-blue-500 rounded text-gray-200 text-right px-2 pt-8 text-xl md:text-3xl md:leading-normal`}
    >
      BLU
    </div>
  );
};

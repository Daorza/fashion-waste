import Link from "next/link";

const MobileNavLink = ({ icon, text, link, setDefault, isActive }) => {
  return (
    <Link
      href={link}
      className={`flex items-center gap-4 p-2 hover:rounded-md text-lg font-medium text-gray-700 hover:bg-gray-100 w-full ${isActive?"border-b-2 border-primary":"border-none"}`}
      onClick={() => setDefault()}
    >
      
      {icon && <span>{icon}</span>}
      {text}
      
    </Link>
  );
};

export default MobileNavLink;

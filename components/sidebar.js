import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="h-screen w-[250px] bg-white pt-4">
      <ul className="space-y-4">
        <li>
          <Link
            className="bg-orange-500 text-white hover:bg-orange-600 transition-all duration-200 ease-in-out p-4 mx-4 rounded-lg block"
            href="/jskjg/mudslide-inbox"
          >
            Mudslide Inbox
          </Link>
        </li>
        <li className="">
          <Link
            href="/jskjg/quikey-inbox"
            className="bg-orange-500 text-white hover:bg-orange-600 transition-all duration-200 ease-in-out p-4 mx-4 rounded-lg block"
          >
            Quikey Inbox
          </Link>
        </li>
        <li>
          <Link
            className="bg-orange-500 text-white hover:bg-orange-600 transition-all duration-200 ease-in-out p-4 mx-4 rounded-lg block"
            href="/jskjg/subscriber-list"
          >
            Subscriber List
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

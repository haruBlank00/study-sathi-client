import { Link } from "@tanstack/react-router";
import { SideBarItem } from "../data";

type ItemsMapperProps = {
  items: SideBarItem[];
};
export const ItemsMapper = ({ items }: ItemsMapperProps) => {
  return (
    <div className="flex flex-col gap-1">
      {items.map((item) => {
        const { id } = item;
        return <Item item={item} key={id} />;
      })}
    </div>
  );
};

export const Item = ({ item }: { item: SideBarItem }) => {
  const { icon, label, to } = item;

  return (
    <Link
      to={to}
      className={`flex gap-2 p-4 capitalize hover:bg-purple-400 hover:text-purple-900  rounded-md shadow-md transition`}
      activeProps={{ className: "bg-purple-400 text-purple-900" }}
      activeOptions={{
        exact: true,
      }}
    >
      {icon}
      {label}
    </Link>
  );
};

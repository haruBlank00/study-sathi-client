import { Link } from "@tanstack/react-router";
import { SideBarItem } from "../data";

type ItemsMapperProps = {
  items: SideBarItem[];
};
export const ItemsMapper = ({ items }: ItemsMapperProps) => {
  return items.map((item) => {
    const { id } = item;
    return <Item item={item} key={id} />;
  });
};

export const Item = ({ item }: { item: SideBarItem }) => {
  const { icon, label, to } = item;

  return (
    <Link
      to={to}
      className="flex gap-2 p-4 capitalize hover:bg-yellow-200 transition "
      activeProps={{ className: "bg-yellow-200 shadow-md" }}
      activeOptions={{
        exact: true,
      }}
    >
      {icon}
      {label}
    </Link>
  );
};

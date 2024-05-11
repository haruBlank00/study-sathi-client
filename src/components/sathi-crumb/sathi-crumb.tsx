import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ID } from "@/lib/utils";
import { Link, useRouterState } from "@tanstack/react-router";

type Crumb = {
  href?: string;
  label: string;
  id: string;
};

export const SathiCrumb = () => {
  const crumbs = useSathiCrumb();
  const numberOfCrumbs = crumbs.length;
  const lastCrumbPos = numberOfCrumbs - 1;
  return (
    <Breadcrumb className="my-4">
      <BreadcrumbList>
        {crumbs.map((crumb, i) => {
          const isLast = i === lastCrumbPos;
          const LinkOrPage_WhichOneIsIt = isLast ? BreadcrumbPage : Link;

          return (
            <BreadcrumbItem key={crumb.id}>
              <LinkOrPage_WhichOneIsIt className="capitalize">
                {crumb.label}
              </LinkOrPage_WhichOneIsIt>

              {!isLast && <BreadcrumbSeparator />}
            </BreadcrumbItem>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

const useSathiCrumb = (): Crumb[] => {
  const router = useRouterState();
  const pathname = router.location.pathname;

  const paths = pathname.split("/").filter((path) => !!path);
  const crumbs = paths.map((path) => ({
    href: `${path}`,
    label: path,
    id: ID(),
  }));
  return crumbs;
};

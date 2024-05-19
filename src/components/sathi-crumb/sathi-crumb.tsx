import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "@tanstack/react-router";
import { useSathiCrumb } from "./useSathiCrumb";

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
          console.log({ crumb });

          return (
            <BreadcrumbItem key={crumb.id}>
              <LinkOrPage_WhichOneIsIt className="capitalize" to={crumb.href}>
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

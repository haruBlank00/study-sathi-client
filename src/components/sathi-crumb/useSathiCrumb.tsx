import { ID } from "@/lib/utils";
import { useRouterState } from "@tanstack/react-router";

type Crumb = {
  href?: string;
  label: string;
  id: string;
};

export const useSathiCrumb = (): Crumb[] => {
  /**
   * say we have url like this `'/dashboard/challenges/6640e2dd9b4123c38c2433fd/logs/new'`
   * then the first bread crum will have url `/dashboard`
   * second crumb will have `/dashboard/challenges/
   * third crumb will have `/dashboard/challenges/challengeId/
   * and so on
   */
  const router = useRouterState();
  const pathname = router.location.pathname;

  const paths = pathname.split("/").filter((path) => !!path);
  const crumbs = paths.map((path, i) => {
    // let href;
    const href = paths.slice(0, i + 1).join("/");
    return {
      href: `/${href}`,
      label: path,
      id: ID(),
    };
  });
  return crumbs;
};

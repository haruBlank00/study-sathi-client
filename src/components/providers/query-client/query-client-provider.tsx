import { getEnv } from "@/lib/getEnv";
import { QueryClientProvider as ReactQueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { If, Then } from "react-if";
import { queryClient } from "./queryClient";

const isDevEnv = getEnv<boolean>("DEV");

export function QueryClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactQueryClient client={queryClient}>
      {children}
      <If condition={isDevEnv}>
        <Then>
          <ReactQueryDevtools initialIsOpen={false} />
        </Then>
      </If>
    </ReactQueryClient>
  );
}

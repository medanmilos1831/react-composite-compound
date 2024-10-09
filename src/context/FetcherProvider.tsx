import {
  UndefinedInitialDataOptions,
  useQuery,
  UseQueryResult,
} from "@tanstack/react-query";
import { createContext, PropsWithChildren, ReactNode, useContext } from "react";

const FetcherContext = createContext<any | undefined>(undefined);

const FetcherProvider = ({
  children,
  dataOptions,
}: PropsWithChildren<{ dataOptions: UndefinedInitialDataOptions }>) => {
  const query = useQuery(dataOptions);
  console.log(
    "%cFetcherProvider RENDER",
    "color: white; background-color: black"
  );
  return (
    <FetcherContext.Provider value={query}>
      <>{children}</>
    </FetcherContext.Provider>
  );
};

function Item<T>({
  children,
}: {
  children: (context: UseQueryResult<T, Error>) => ReactNode;
}) {
  console.log("%cItem RENDER", "color: white; background-color: blue");

  const context = useContext(FetcherContext);
  return <>{children(context)}</>;
}

FetcherProvider.Item = Item;

export { FetcherProvider };

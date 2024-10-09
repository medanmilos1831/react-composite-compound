import { SomeComponent } from "../components";
import { FetcherProvider } from "../context";
import { productRepo } from "../repo";

const HomePage = () => {
  console.log("%cHomePage RENDER", "color: white; background-color: black");
  return (
    <FetcherProvider
      dataOptions={{
        queryKey: ["todos"],
        queryFn: productRepo.getProducts,
      }}
    >
      <h1>Home page</h1>
      <FetcherProvider.Item<{ title: string }[]>>
        {({ data, isLoading }) => {
          if (isLoading) return <>Loading</>;
          return (
            <>
              {data?.map((item) => {
                return (
                  <div>
                    <span>{item.title}</span>
                  </div>
                );
              })}
            </>
          );
        }}
      </FetcherProvider.Item>
      <br />
      <br />
      <SomeComponent />
    </FetcherProvider>
  );
};

export { HomePage };

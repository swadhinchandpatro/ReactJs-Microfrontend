import AllowedRoute from "./AllowedRoutes";
import PageNotFound from "./404";

const RemoteRoutes = ({ slug }: { slug: string }) => {
  const matchedComponent = AllowedRoute?.find((item) =>
    item.path.includes(slug)
  );
  return matchedComponent ? matchedComponent.element : <PageNotFound />;
};

export default RemoteRoutes;

import { rootServiceProvider } from "./rootServiceProvider";

type serviceNameTypes = keyof typeof rootServiceProvider;

interface UseServiceOptions {
  params?: object;
  config?: object;
  option?: object;
  body?: object;
}

export const useService = (
  serviceName: serviceNameTypes,
  useServiceOptions?: UseServiceOptions
) => {
  return resolveService(serviceName, useServiceOptions);
};

const resolveService = (
  serviceName: serviceNameTypes,
  useServiceOptions?: UseServiceOptions
): any => {
  const service = rootServiceProvider[serviceName];
  let queryFnArgs = {
    serviceName: serviceName,
    params: useServiceOptions?.params,
    body: useServiceOptions?.body,
    config: useServiceOptions?.config,
  };
  return service(queryFnArgs, useServiceOptions?.option);
};

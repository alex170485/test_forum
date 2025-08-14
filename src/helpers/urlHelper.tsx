export const urlHelper = (uri: string, params?: Record<string, string>): string => {
  let url = `/${uri}`;

  if (params && Object.keys(params)?.length) {
    const searchParamsString = new URLSearchParams(params).toString();

    url = `${url}?${searchParamsString}`;
  }

  return url;
};

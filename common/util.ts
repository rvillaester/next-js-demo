export const constructAPIUrl = (resource: string) => {
  return `/api/${resource}`;
};

export const sleep = (ms: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export const DDB_URL = 'https://ndamt9wh03.execute-api.ap-southeast-1.amazonaws.com/dev';
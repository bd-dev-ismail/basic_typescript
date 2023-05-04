//mocking - string
const makePromise = (): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    const data: string = "Data is fetch";
    if (data) {
      resolve(data);
    } else {
      reject("Promise failed!! failed to fetch");
    }
  });
};
/// promise type boolean
const makePromiseBoolean = (): Promise<boolean> => {
  return new Promise<boolean>((resolve, reject) => {
    const data: boolean = true;
    if (data) {
      resolve(data);
    } else {
      reject("Promise failed!! failed to fetch");
    }
  });
};
/// promise type object
const makePromiseObject = (): Promise<object> => {
  return new Promise<object>((resolve, reject) => {
    const data: object = { status: true, data: "data fetch" };
    if (data) {
      resolve(data);
    } else {
      reject("Promise failed!! failed to fetch");
    }
  });
};

// const result1 = makePromise();

const getPromiseData = async (): Promise<string> => {
  const data = await makePromise();
  return data;
};
const getPromiseDataBoolean = async (): Promise<boolean> => {
  const data = await makePromiseBoolean();
  return data;
};
const getPromiseDataObject = async (): Promise<object> => {
  const data = await makePromiseObject();
  return data;
};

//Promise<string> Promise<boolean> Promise<>

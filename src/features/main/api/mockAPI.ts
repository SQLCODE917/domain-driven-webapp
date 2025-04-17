const fetchData1 = async () => {
  console.log("Fetching data1...");
  return new Promise<string[]>((resolve) => {
    setTimeout(() => resolve(["Item 1", "Item 2"]), 1000);
  });
};

const fetchData2 = async () => {
  console.log("Fetching data2...");
  return new Promise<string[]>((resolve) => {
    setTimeout(() => resolve(["Data A", "Data B"]), 1000);
  });
};

const createNewItem = async () => {
  console.log("Creating a new item...");
  return new Promise<{ success: boolean }>((resolve) => {
    setTimeout(() => resolve({ success: true }), 1000);
  });
};

export { fetchData1, fetchData2, createNewItem };

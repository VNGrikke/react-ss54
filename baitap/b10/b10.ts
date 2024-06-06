interface SearchResult<T> {
    value: T;
    index: number;
  }
  
  function findElement<T>(arr: T[], searchValue: T): Promise<SearchResult<T>> {
    return new Promise((resolve, reject) => {
      const index = arr.findIndex((element) => element === searchValue);
      if (index !== -1) {
        resolve({ value: arr[index], index });
      } else {
        reject(new Error(`Không tìm thấy phần tử ${searchValue}`));
      }
    });
  }
  
  findElement([1, 2, 3, 4, 5], 7)
    .then((result) => {
      console.log("Kết quả:", result.value, "tại vị trí:", result.index);
    })
    .catch((error: Error) => {
      console.error("Lỗi:", error.message);
    });
  
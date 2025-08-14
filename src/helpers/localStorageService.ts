export const localStorageService = {
  get(key: string) {
    try {
      const data = window.localStorage.getItem(key);

      if (data != null) {
        return JSON.parse(data);
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error('Getting data from local storage failed with', error?.message);
      }

      return null;
    }
  },
  set(key: string, data: unknown) {
    try {
      const stringifiedData = JSON.stringify(data);

      return window.localStorage.setItem(key, stringifiedData);
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error('Setting data to local storage failed with', error?.message);
      }

      return null;
    }
  },
  remove(key: string) {
    try {
      return window.localStorage.removeItem(key);
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error('Removing data from local storage failed with', error?.message);
      }

      return null;
    }
  },
};

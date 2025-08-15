const BASE_URL = 'https://my-json-server.typicode.com/alex170485/test_forum';

class ApiService {
  static async GET<T>(url: string): Promise<T> {
    const uri = `${BASE_URL}/${url}`;

    const response = await fetch(uri, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    let json = await response.json();

    if (response?.ok) {
      return json;
    }

    throw new Error();
  }
}

export default ApiService;

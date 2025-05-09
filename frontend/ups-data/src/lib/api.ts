import apiUrls from './api-urls.json'

export async function apiGet<T = any>(key: keyof typeof apiUrls, params?: Record<string, string | number>) {
  let url = apiUrls[key]
  if (!url) throw new Error(`API URL for key '${key}' not found.`)

  // Add query params if provided
  if (params) {
    const query = new URLSearchParams(params as Record<string, string>).toString()
    url += `?${query}`
  }

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  if (!response.ok) {
    throw new Error(`API GET request failed: ${response.status} ${response.statusText}`)
  }
  return response.json() as Promise<T>
}

export async function loginFastAPI(username: string, password: string) {
  const url = 'http://127.0.0.1:8000/import-data';
  const body = {
    username,
    password
    // params omitted to use backend default
  };

  console.log('[LOGIN] Fetching URL:', url);
  console.log('[LOGIN] Request body:', body);

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    console.log('[LOGIN] Response status:', response.status);

    const data = await response.json().catch(() => ({}));
    console.log('[LOGIN] Response body:', data);

    if (!response.ok) {
      return { success: false, error: data.detail || 'Login failed' };
    }

    return { success: true, data };
  } catch (err: any) {
    console.error('[LOGIN] Network or fetch error:', err);
    return { success: false, error: err.message || 'Network error' };
  }
} 
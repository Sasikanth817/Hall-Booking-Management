// Utility function to get the base API URL
export const getApiBaseUrl = () => {
  // In production, use the environment variable
  // In development, use relative paths (same origin)
  return process.env.NEXT_PUBLIC_API_URL || '';
};

// Utility function to make API calls
export const apiCall = async (endpoint: string, options: RequestInit = {}) => {
  const baseUrl = getApiBaseUrl();
  const url = baseUrl ? `${baseUrl}${endpoint}` : endpoint;
  
  return fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  });
};
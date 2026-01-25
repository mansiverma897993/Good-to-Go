import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to every request
apiClient.interceptors.request.use((config) => {
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Auth Services
export const authService = {
  register: async (email: string, password: string, name: string) => {
    const response = await apiClient.post('/auth/register', { email, password, name });
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
    }
    return response.data;
  },

  login: async (email: string, password: string) => {
    const response = await apiClient.post('/auth/login', { email, password });
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
    }
    return response.data;
  },

  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  },

  getProfile: async () => {
    const response = await apiClient.get('/auth/profile');
    return response.data;
  },

  updateProfile: async (data: any) => {
    const response = await apiClient.put('/auth/profile', data);
    return response.data;
  },

  getUserById: async (id: string) => {
    const response = await apiClient.get(`/auth/user/${id}`);
    return response.data;
  },
};

// Project Services
export const projectService = {
  getAll: async (filters?: any) => {
    const response = await apiClient.get('/projects', { params: filters });
    return response.data;
  },

  getById: async (id: string) => {
    const response = await apiClient.get(`/projects/${id}`);
    return response.data;
  },

  create: async (data: any) => {
    const response = await apiClient.post('/projects', data);
    return response.data;
  },

  update: async (id: string, data: any) => {
    const response = await apiClient.put(`/projects/${id}`, data);
    return response.data;
  },

  delete: async (id: string) => {
    const response = await apiClient.delete(`/projects/${id}`);
    return response.data;
  },
};

// Issue Services
export const issueService = {
  getAll: async (filters?: any) => {
    const response = await apiClient.get('/issues', { params: filters });
    return response.data;
  },

  getById: async (id: string) => {
    const response = await apiClient.get(`/issues/${id}`);
    return response.data;
  },

  create: async (data: any) => {
    const response = await apiClient.post('/issues', data);
    return response.data;
  },

  update: async (id: string, data: any) => {
    const response = await apiClient.put(`/issues/${id}`, data);
    return response.data;
  },

  delete: async (id: string) => {
    const response = await apiClient.delete(`/issues/${id}`);
    return response.data;
  },

  search: async (query: string) => {
    const response = await apiClient.get('/issues/search', { params: { q: query } });
    return response.data;
  },
};

// Guide Services
export const guideService = {
  getAll: async (filters?: any) => {
    const response = await apiClient.get('/guides', { params: filters });
    return response.data;
  },

  getById: async (id: string) => {
    const response = await apiClient.get(`/guides/${id}`);
    return response.data;
  },

  create: async (data: any) => {
    const response = await apiClient.post('/guides', data);
    return response.data;
  },

  update: async (id: string, data: any) => {
    const response = await apiClient.put(`/guides/${id}`, data);
    return response.data;
  },

  delete: async (id: string) => {
    const response = await apiClient.delete(`/guides/${id}`);
    return response.data;
  },
};

// Program Services
export const programService = {
  getAll: async () => {
    const response = await apiClient.get('/programs');
    return response.data;
  },

  getById: async (id: string) => {
    const response = await apiClient.get(`/programs/${id}`);
    return response.data;
  },

  create: async (data: any) => {
    const response = await apiClient.post('/programs', data);
    return response.data;
  },

  update: async (id: string, data: any) => {
    const response = await apiClient.put(`/programs/${id}`, data);
    return response.data;
  },

  delete: async (id: string) => {
    const response = await apiClient.delete(`/programs/${id}`);
    return response.data;
  },
};

// User Services
export const userService = {
  addBookmark: async (issueId: string) => {
    const response = await apiClient.post('/user/bookmarks', { issue_id: issueId });
    return response.data;
  },

  removeBookmark: async (bookmarkId: string) => {
    const response = await apiClient.delete(`/user/bookmarks/${bookmarkId}`);
    return response.data;
  },

  getBookmarks: async () => {
    const response = await apiClient.get('/user/bookmarks');
    return response.data;
  },

  addContribution: async (data: any) => {
    const response = await apiClient.post('/user/contributions', data);
    return response.data;
  },

  getContributions: async (userId?: string) => {
    const url = userId ? `/user/contributions/${userId}` : '/user/contributions';
    const response = await apiClient.get(url);
    return response.data;
  },
};

export default apiClient;

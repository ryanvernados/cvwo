export interface User {
  id: number;
  username: string;
  created_at: string;
  updated_at: string;
}

export interface Topic {
  id: number;
  title: string;
  description: string;
  created_by: number;
  created_at: string;
  updated_at: string;
  username: string;
}

export interface User {
  id: number;
  username: string;
  created_at: string;
  updated_at: string;
}

export interface Topic {
  id: number;
  user_id: number;
  title: string;
  description: string;
  created_by: number;
  created_at: string;
  updated_at: string;
}

export interface Post {
  id: number;
  topic_id: number;
  user_id: number;
  title: string;
  content: string;
  created_at: string;
  updated_at: string;
}

export interface Comment {
  id: number;
  post_id: number;
  user_id: number;
  content: string;
  created_at: string;
  updated_at: string;
}
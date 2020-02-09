export interface User {
  id: string;
  password: string;
  username: string;
}

export interface ArticlePreview {
  title: string;
  createdAt: string;
}

export interface Article {
  title: string;
  createdAt: string;
  content: string;
}

export interface BlogProps {
  id: string;
  title: string;
  brief_description: string;
  url: string;
  file: string;
  tags: string[];
  date: Date;
  updatedAt: Date;
}

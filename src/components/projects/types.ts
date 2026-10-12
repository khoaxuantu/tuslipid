export interface ProjectProps {
  id: number;
  title: string;
  description: string[];
  tools: string[];
  demoURL?: string;
  githubURL?: string;
  imageURL?: string;
  isFeatured?: boolean;
}

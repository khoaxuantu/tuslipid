interface ICardProps {
  id: number | string;
  content_section: "Projects" | "Blogs";
  title: string;
}

export interface IProjCardProps extends ICardProps {
  description: string[];
  tools: string[];
  demoURL?: string;
  githubURL?: string;
  imageURL?: string;
  isFeatured?: boolean;
}

export interface IBlogCardProps extends ICardProps {
  brief_description: string;
  url: string;
  file: string;
  tags: string[];
  date: Date;
}

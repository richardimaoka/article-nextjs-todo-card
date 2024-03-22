export type TodoItem = {
  id: string;
  title: string;
  description: string;
  comments?: Comment[];
};

export type TodoCommentAuthor = {
  name: string;
  imagePath: string;
};

export type TodoComment = {
  body: string;
  author: TodoCommentAuthor;
  createdAt: string;
};

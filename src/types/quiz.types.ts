export type Categories = {
  id: string;
  categoryName: string;
};

export type Options = {
  isRight: boolean;
  text: string;
};

export type Quizzes = {
  id: string;
  categoryName: string;
  description: string;
  questions: {
    question: string;
    options: Options[];
  }[];
  quizName: string;
  image: string;
};

export type QuizState = {
  categories: Categories[];
  quizzes: Quizzes[];
  points: number;
  result: number;
};

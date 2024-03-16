export interface BasicInterface {
  id: string;
  title: string;
  content: string;
  date: string;
}

export const AboutData: BasicInterface[] = [
  {
    id: '1',
    title: '제목1',
    content: '내용1',
    date: '날짜1',
  },
  {
    id: '2',
    title: '제목2',
    content: '내용2',
    date: '날짜2',
  },
  {
    id: '3',
    title: '제목3',
    content: '내용3',
    date: '날짜3',
  },
];

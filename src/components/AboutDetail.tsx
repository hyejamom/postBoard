import { Link } from 'react-router-dom';
import { BorderBox } from '../styles/borderBox';
import { Typography, Box, Input, Button } from '@mui/material';
import { BasicInterface } from '../data/BasicData';
import { InputBox } from './Basic';
import uuid from 'react-uuid';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AboutDetail = (props: {
  List: BasicInterface[];
  updateData: (nueList: BasicInterface) => void;
  deleteData: (id: string) => void;
}) => {
  const [addTitle, setAddTitle] = useState('');
  const [addContent, setAddContent] = useState('');
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const today = `${year}-${month}-${day}`;
  const navigate = useNavigate();

  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          width: '1000px',
          margin: '20px auto 0px',
          flexWrap: 'wrap',
        }}
      >
        {props.List.map((item) => {
          return (
            <Link to={`/about/${item.id}`} key={item.id}>
              <BorderBox sx={{ mr: '10px', mb: '10px' }}>
                <Typography variant="h1">{item.title}</Typography>
                <Typography variant="h2">{item.content}</Typography>
                <Typography variant="h3">{item.date}</Typography>
                <Button
                  onClick={(e) => {
                    e.preventDefault();
                    props.deleteData(item.id);
                  }}
                  sx={{ mt: '10px' }}
                >
                  삭제하기
                </Button>
              </BorderBox>
            </Link>
          );
        })}
      </Box>
      <InputBox>
        <Input
          placeholder="제목"
          value={addTitle}
          onChange={(e) => {
            setAddTitle(e.target.value);
          }}
          sx={{ mr: '10px' }}
        ></Input>
        <Input
          placeholder="내용"
          value={addContent}
          onChange={(e) => {
            setAddContent(e.target.value);
          }}
          sx={{ mr: '10px' }}
        ></Input>
        <Button
          onClick={() => {
            const newList = {
              id: uuid(),
              title: addTitle,
              content: addContent,
              date: today,
            };
            if (addTitle.length === 0) {
              alert('제목을 입력해주세요');
            } else if (addContent.length === 0) {
              alert('내용을 입력해주세요');
            } else {
              setAddTitle('');
              setAddContent('');
              props.updateData(newList);
            }
          }}
        >
          추가하기
        </Button>
      </InputBox>
    </Box>
  );
};

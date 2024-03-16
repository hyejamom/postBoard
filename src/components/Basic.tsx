import styled from '@emotion/styled';
import { BorderBox } from '../styles/borderBox';
import { Typography, Box, Button, Input } from '@mui/material';
import { BasicData, BasicInterface } from '../data/BasicData';
import { useState } from 'react';
import uuid from 'react-uuid';

const BasicWrap = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  width: '1000px',
  margin: '20px auto 0px',
  flexWrap: 'wrap',
});

export const InputBox = styled(Box)({
  marginTop: '20px',
});

export const Basic = () => {
  const [isModifiedText, isSetModifiedText] = useState(false);
  const [boxNumber, setBoxNumber] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [addTitle, setAddTitle] = useState('');
  const [addContent, setAddContent] = useState('');
  const [data, setData] = useState(BasicData);
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const formattedDate = `${year}-${month}-${day}`;
  const deleteData = (id: string) => {
    setData(data.filter((data) => data.id !== id));
  };
  const updateData = (newList: BasicInterface) => {
    setData((prevData) => [...prevData, newList]);
  };

  return (
    <>
      <BasicWrap>
        {data.map((data) => (
          <BorderBox key={data.id} sx={{ mr: '10px', mb: '10px' }}>
            {isModifiedText === true && boxNumber === data.id ? (
              <Box>
                <Input
                  defaultValue={data.title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                ></Input>
                <Input
                  defaultValue={data.content}
                  onChange={(e) => {
                    setContent(e.target.value);
                  }}
                ></Input>
              </Box>
            ) : (
              <Box>
                <Typography variant="h1">{data.title}</Typography>
                <Typography variant="h2">{data.content}</Typography>
              </Box>
            )}
            <Typography variant="h3">{data.date}</Typography>

            <Box sx={{ mt: '10px' }}>
              {isModifiedText === true && boxNumber === data.id ? (
                <Button
                  onClick={() => {
                    isSetModifiedText(false);
                    data.title = title;
                    data.content = content;
                  }}
                >
                  확인하기
                </Button>
              ) : (
                <Box>
                  <Button
                    onClick={() => {
                      setBoxNumber(data.id);
                      isSetModifiedText(true);
                    }}
                  >
                    수정하기
                  </Button>
                  <Button onClick={() => deleteData(data.id)}>삭제하기</Button>
                </Box>
              )}
            </Box>
          </BorderBox>
        ))}
      </BasicWrap>
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
              date: formattedDate,
            };
            updateData(newList);
            setAddTitle('');
            setAddContent('');
          }}
        >
          추가하기
        </Button>
      </InputBox>
    </>
  );
};

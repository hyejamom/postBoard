import { BorderBox } from '../styles/borderBox';
import { BasicInterface } from '../data/BasicData';
import { Typography, Button, Box, Input } from '@mui/material';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export const NewAboutDetail = (props: {
  List: BasicInterface[];
  deleteData: (id: string) => void;
}) => {
  const { id } = useParams();
  const selectedItem = props.List.find((item) => item.id === id);

  const [isModifiedText, isSetModifiedText] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  if (!selectedItem) {
    return <div>해당 항목을 찾을 수 없습니다.</div>;
  }

  return (
    <Box>
      <BorderBox sx={{ margin: '20px auto 0px' }}>
        {isModifiedText === true ? (
          <Box>
            <Input
              defaultValue={selectedItem.title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            ></Input>
            <Input
              defaultValue={selectedItem.content}
              onChange={(e) => {
                setContent(e.target.value);
              }}
            ></Input>
          </Box>
        ) : (
          <Box>
            <Typography variant="h1">{selectedItem.title}</Typography>
            <Typography variant="h2">{selectedItem.content}</Typography>
          </Box>
        )}
        <Typography variant="h3">{selectedItem.date}</Typography>

        <Box sx={{ mt: '10px' }}>
          {isModifiedText === true ? (
            <Button
              onClick={() => {
                isSetModifiedText(false);
                selectedItem.title = title;
                selectedItem.content = content;
              }}
            >
              확인하기
            </Button>
          ) : (
            <Box>
              <Button
                onClick={() => {
                  isSetModifiedText(true);
                }}
              >
                수정하기
              </Button>
              <Button
                onClick={() => {
                  props.deleteData(selectedItem.id);
                  navigate('/about');
                }}
              >
                삭제하기
              </Button>
            </Box>
          )}
        </Box>
      </BorderBox>
    </Box>
  );
};

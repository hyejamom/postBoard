import { Box } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import { AboutDetail } from './AboutDetail';
import { AboutData } from '../data/AboutData';
import { useState } from 'react';
import { NewAboutDetail } from './NewAboutDetail';
import { BasicInterface } from '../data/BasicData';

export const About = () => {
  const [data, setData] = useState(AboutData);
  const deleteData = (id: string) => {
    setData(data.filter((data) => data.id !== id));
  };
  const updateData = (newList: BasicInterface) => {
    setData((prevData) => [...prevData, newList]);
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <AboutDetail
            List={data}
            updateData={updateData}
            deleteData={deleteData}
          />
        }
      />
      <Route
        path="/:id"
        element={<NewAboutDetail List={data} deleteData={deleteData} />}
      />
    </Routes>
  );
};

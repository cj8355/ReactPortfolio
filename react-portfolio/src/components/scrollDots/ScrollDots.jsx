import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import "./scrollDots.scss"

export default function PaginationSize() {
  return (
    <Stack spacing={2}>
      <Pagination id="scrollDot" count={6} size="small" hidePrevButton hideNextButton/>
      
    </Stack>
  );
}
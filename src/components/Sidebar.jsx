import React from 'react';

import { Stack } from '@mui/material';

import {categories} from "../utils/constants";

const Sidebar = () => {

  console.log(categories);

  return (
       <Stack>

       {categories.map((category) => (
        <button>

          {<category.icon/>}

          {category.name}

        </button>
       ))}

       </Stack>
  )
}

export default Sidebar

import React, {useState} from 'react';

import { Paper, IconButton } from '@mui/material';
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const onhandleSubmit = (e) => {

        alert(searchTerm);

    }

  return (
    <Paper
    component='form'
    onSubmit={onhandleSubmit}
    sx={{
        borderRadius: 20,
        border: '1px solid #e3e3e3',
        pl: 2,
        boxShadow: 'none',
        mr: {sm: 5},
    }}
    >
      
        <input 
        type="text" 
        className='search-bar'
        placeholder='Search...'
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
        />

        <IconButton type="submit" sx={{p: '10px', color: 'red'}}>
            <SearchIcon/>
        </IconButton>

    </Paper>
  )
}

export default SearchBar

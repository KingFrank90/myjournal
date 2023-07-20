import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

const MyTable = (props) => {
    console.log(props);

    const renderMyTable = props.thoughtList.map((thoughts) => {
        return (
            <div className='item'>
              <div className='content'>
                <div className='date'>{thoughts.Date}</div>
                <div className='rant'>{thoughts.Thoughts}</div>
                
                <DeleteIcon />
              </div>
            </div>
          );    
    });
  return <div className='ui celled list'>Thought List{renderMyTable}</div>;
}

export default MyTable

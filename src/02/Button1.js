import * as React from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';
import AlarmIcon from '@mui/icons-material/Alarm';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export default function BasicButtons() {
  return (
    <Stack spacing={5} direction="column">

        <Stack spacing={2} direction="row">
            <p>BasicButtons</p>
            <Button variant="text">Text</Button>
            <Button variant="contained">Contained</Button>
            <Button variant="outlined">Outlined</Button>
        </Stack>

        <Stack spacing={2} direction="row">
            <p>Text Buttons</p>
            <Button>Primary</Button>
            <Button disabled>Disabled</Button>
            <Button href="#text-buttons">Link</Button>
        </Stack>

        <Stack spacing={2} direction="row">
            <p>Contained Buttons</p>
            <Button variant="contained">Contained</Button>
            <Button variant="contained" disabled>
            Disabled
            </Button>
            <Button variant="contained" href="#contained-buttons">
            Link
            </Button>
        </Stack>

        <Stack spacing={2} direction="row"> 
            <p>버튼 이벤트 설정</p>       
            <Button
                onClick={() => {
                    alert('clicked');
                }}
            >
            Click me
            </Button>
        </Stack>

        <Stack spacing={2} direction="row">
            <p>Color</p>
            <Button color="secondary">Secondary</Button>
            <Button variant="contained" color="success">
            Success
            </Button>
            <Button variant="outlined" color="error">
            Error
            </Button>
        </Stack>

        <Stack spacing={2} direction="row">
            <p>Size</p>
            <Box sx={{ '& button': { m: 1 } }}>
                <div>
                    <Button size="small">Small</Button>
                    <Button size="medium">Medium</Button>
                    <Button size="large">Large</Button>
                </div>
                <div>
                    <Button variant="outlined" size="small">
                    Small
                    </Button>
                    <Button variant="outlined" size="medium">
                    Medium
                    </Button>
                    <Button variant="outlined" size="large">
                    Large
                    </Button>
                </div>
                <div>
                    <Button variant="contained" size="small">
                    Small
                    </Button>
                    <Button variant="contained" size="medium">
                    Medium
                    </Button>
                    <Button variant="contained" size="large">
                    Large
                    </Button>
                </div>
            </Box>
        </Stack>

        <Stack spacing={2} direction="row">
            <p>Button with icons and label</p>
            <Button variant="outlined" startIcon={<DeleteIcon />}>
            Delete
            </Button>
            <Button variant="contained" endIcon={<SendIcon />}>
            Send
            </Button>            
        </Stack>
        <Stack direction="row" spacing={1}>
            <p>Icon Button</p>
            <IconButton aria-label="delete">
                <DeleteIcon />
            </IconButton>
            <IconButton aria-label="delete" disabled color="primary">
                <DeleteIcon />
            </IconButton>
            <IconButton color="secondary" aria-label="add an alarm">
                <AlarmIcon />
            </IconButton>
            <IconButton color="primary" aria-label="add to shopping cart">
                <AddShoppingCartIcon />
            </IconButton>
        </Stack>        
    </Stack>
  );
}

import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, TextField, Tooltip, Typography } from '@mui/material'
import React from 'react'
import {Add as AddIcon, DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack} from '@mui/icons-material'
import { useState } from 'react'
import styled from '@emotion/styled'

const SytledModal= styled(Modal)({
  display:"flex",
  alignItems:"center",
  justifyContent:"center"
});
const UserBox= styled(Box)({
  display:"flex",
  alignItems:"center",
  gap:"10px",
  marginBottom:"20px",
});


const Add = () => {
  const[open,setOpen] = useState(false)
  return (
    <><Tooltip onClick={e=>setOpen(true)} title="Delete"sx={{position:"fixed", bottom:20, left:{xs:"calc(50% - 25px)",md:30}}}>
 <Fab color="primary" aria-label="add">
  <AddIcon/>
</Fab>
  
</Tooltip>
<SytledModal
  open={open}
  onClose={e=>setOpen(false)}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box width={400} height={280} bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={5}> <Typography variant='h6' color="gray" textAlign="center">Creat post</Typography>
  <UserBox>
  <Avatar
  src='https://ebook.balitbangham.go.id/asset/admin-lte/dist/img/user1-128x128.jpg'
  sx={{width:30 , height: 30}}
  
  />
  <Typography fontWeight={500} variant="span">Jhon Doe</Typography>
    
  
  </UserBox>

  <TextField 
  sx={{width:"100%"}}
          id="standard-multiline-static"
          multiline
          rows={3}
          placeholder="what is on your mind?"
          variant="standard"
        />
        <Stack direction="row" gap={1} mt={2} mb={3}>
          <EmojiEmotions color='primary'/>
          <Image color="secondary"/>
          <VideoCameraBack color =""success/>          
          <PersonAdd color='error'/>
        </Stack>
        <ButtonGroup variant="contained" aria-label="outlined primary button group" fullWidth>
        <Button>Post</Button>
        <Button sx={{width:"100px"}}>
          <DateRange/>
          </Button>
        </ButtonGroup>
  
   </Box>
</SytledModal>
    </>
  )
}

export default Add
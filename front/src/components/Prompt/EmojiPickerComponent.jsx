import EmojiPicker from 'emoji-picker-react';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import {useState} from 'react'
import {MenuItem,Menu,IconButton} from '@mui/material'
import {Emoji} from './style'
const EmojiPickerComponent = () => {
	const [msg,setMsg] = useState("")
	const [showEmojiPicker,setShowEmojiPicker] = useState(false);
	  
	  const handleHideShowEmoji = (event) => {
	    setShowEmojiPicker(!showEmojiPicker);
	  };

	  const emojiClick = (emoji) => {
	  		console.log("emoji",emoji.emoji)
	  }
	 
	return (
		<>

			<IconButton
            onClick={handleHideShowEmoji}
            sx={{ ml: 2 ,cursor: 'pointer'}}
            
          >
            <AddReactionIcon />

          </IconButton>
          { showEmojiPicker && <Emoji><EmojiPicker onEmojiClick={emojiClick}/></Emoji>
          		}
			
		</>
		)

}
export default EmojiPickerComponent
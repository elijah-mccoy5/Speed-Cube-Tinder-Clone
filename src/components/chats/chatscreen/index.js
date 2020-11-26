import { Avatar } from '@material-ui/core';
import React, {useEffect, useState} from 'react';
import './index.css'
import database from '../../../firebase'

const ChatScreen = () => {
    const [input, setInput] = useState()
    const [messages, setMessages] = useState([])
    const handleSend = (e) => {
        e.preventDefault();
        database
        .collection('messages')
        .add({
          message: input
        });
        setInput("");
    }
    useEffect(() => {
        database
        .collection('messages')
        .onSnapshot((snapshot) => {
         setMessages(snapshot.docs.map((doc) => doc.data()))
        });
    }, [] )
    return (
        <div className="chat-screen">   
            {messages.map (message => (
                message.name ? (
                <div className="chat-screen-message">
                
                    <Avatar
                    className="chat-screen-image"
                    alt={message.name}
                    src={message.image}
                    />
                    <p className="chat-screen-text">{message.message}</p>
                </div>
                ) : (
                    <div className="chat-screen-message" >
                        <p className="chat-screen-text-user">{message.message}</p>
                    </div>
               )
            ))}

            
                <form className="chat-screen-input">
                    <input 
                    value={input} 
                    onChange={(e) => setInput(e.target.value)}
                     className="chat-screen-input-field" placehplder="Type a message..." type="text"/>
                    <button
                    onClick={handleSend}
                     className="input-button">Send</button>
                </form>
        </div>
    );
};

export default ChatScreen;
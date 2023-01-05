import React, { useEffect,useState } from 'react'
import "./SidebarChat.css"
import { Avatar,IconButton } from "@material-ui/core";
import db from "./firebase"
import { Link } from "react-router-dom";

function SidebarChat({ id, name, addNewChat }) {

    const  [seed, setSeed] = useState("")
    const [messages, setMessages] = useState("");
    useEffect(() => {
        if (id) {
            db.collection('room').doc(id).collection('messages').orderBy('timestamp','desc').onSnapshot((snapshot) => 
                setMessages(snapshot.docs.map((doc) =>
                doc.data()))
            );
        }
    },[id]);
    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, [])

    const createChat = () => {
        const roomName = prompt("Please enter name of the chat room");
        if (roomName){
           db.collection("room").add({
               name: roomName,
           });
        }
    };
    
    return !addNewChat ? (
        <Link to={`/rooms/${id}`}>
             <div className="SidebarChat">
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}></Avatar>
            <div className="sidebarChat__info">
                <h2>{name}</h2>
                <p>{messages[0]?.message}</p>
                
            </div>
        </div>
        </Link>
       
    ): (
        <div onClick={createChat} className="SidebarChat"><h2>Add new chat</h2></div>

    )
}

export default SidebarChat

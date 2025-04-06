import React, { useEffect, useState } from "react";
import connection from "../../Services/signalRConnection";
import "./Chat.css"

const Chat = ({ user, auctionId }) => {
    const [messages, setMessages] = useState([]);
    const [messageInput, setMessageInput] = useState("");

    useEffect(() => {
        // Start the SignalR connection
        connection.start()
            .then(() => console.log("SignalR Connected"))
            .catch(err => console.error("Connection failed: ", err));

        // Define a function to receive messages
        connection.on("ReceiveMessage", (user, message) => {
            setMessages((prevMessages) => [...prevMessages, { user, message }]);
        });

        return () => {
            connection.stop();
        };
    }, []);

    const sendMessage = async () => {
        if (messageInput.trim() === "") return;

        // Send message to SignalR hub
        await connection.invoke("SendMessage", user, messageInput)
            .catch(err => console.error(err));

        // Optionally: Save to the backend using an API call
        await fetch("http://localhost:44358/api/chat/send", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                auctionId: auctionId,
                senderId: user,
                receiverId: "ReceiverIDHere", // Adjust based on logic
                messageText: messageInput,
                timestamp: new Date().toISOString()
            })
        });

        setMessageInput("");
    };

    return (
        <div>
            <div className="chat-messages">
                {messages.map((msg, index) => (
                    <div key={index}>
                        <strong>{msg.user}</strong>: {msg.message}
                    </div>
                ))}
            </div>

            <div className="chat-input">
                <input
                    type="text"
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                    placeholder="Type a message..."
                />
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
};

export default Chat;

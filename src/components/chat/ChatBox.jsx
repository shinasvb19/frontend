import React, { useEffect, useRef, useState } from "react";
import { getUser } from "../../app/api/ChatRequest";
import { addMessage, getMessages } from "../../app/api/messageRequest";
import { format } from "timeago.js";
import InputEmoji from "react-input-emoji";
import "./ChatBox.css";
const ChatBox = ({
  chat,
  currentUser,
  setSendMessage,
  recieveMessage,
  online,
}) => {
  const [userData, setUserData] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const handleChange = (newMessage) => {
    setNewMessage(newMessage);
  };

  // fetching data for header
  useEffect(() => {
    const userId = chat?.members?.find((id) => id !== currentUser);
    // console.log("object", userId);
    const getUserData = async () => {
      try {
        const { data } = await getUser(userId);
        setUserData(data);
        console.log("my data", data);
      } catch (error) {
        console.log(error);
      }
    };

    if (chat !== null) getUserData();
  }, [chat, currentUser]);

  // fetch messages
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const { data } = await getMessages(chat._id);
        console.log(data);
        setMessages(data);
        console.log("message", data);
      } catch (error) {
        console.log(error);
      }
    };

    if (chat !== null) fetchMessages();
  }, [chat]);
  const handleSend = async (e) => {
    e.preventDefault();
    const message = {
      senderId: currentUser,
      text: newMessage,
      chatId: chat._id,
    };
    const receiverId = chat.members.find((id) => id !== currentUser);

    setSendMessage({ ...message, receiverId });
    // send message to database
    try {
      const { data } = await addMessage(message);
      setMessages([...messages, data]);
      setNewMessage("");
    } catch (err) {
      console.log("error");
    }
  };

  //   Receive Message from parent component
  useEffect(() => {
    console.log("Message Arrived: ", recieveMessage);
    if (recieveMessage !== null && recieveMessage.chatId === chat._id) {
      setMessages([...messages, recieveMessage]);
    }
  }, [recieveMessage]);

  const scroll = useRef();
  const imageRef = useRef();
  useEffect(() => {
    scroll.current?.scrollIntoView({ behavior: "smooth" });
  });

  return (
    <>
      <div className="ml-20 shadow-xl w-[1000px] h-[800px]  rounded-xl py-8 px-8">
        {chat ? (
          <>
            <div className="mt-6">
              <div className="flex items-center ">
                <div
                  className="rounded-full w-16 h-16 bg-cover "
                  style={{
                    backgroundImage: `url(${userData?.profilePicture})`,
                  }}
                ></div>
                <div className="flex flex-col ml-4">
                  <div className="">{userData?.name}</div>
                  <div className="text-sm font-thin">online</div>
                </div>
              </div>
              <hr className="mt-4 bg-[#ececec]" />
            </div>
            <div className="h-[600px] overflow-y-scroll no-scrollbar flex flex-col p-6">
              {messages.map((message) => (
                <>
                  <div
                    ref={scroll}
                    className={
                      message.senderId === currentUser
                        ? "message own mt-4 break-all"
                        : "message mt-4 break-all"
                    }
                  >
                    <span>{message.text}</span>
                    <span>{format(message.createdAt)}</span>
                  </div>
                </>
              ))}
            </div>
            <div className="chat-sender ">
              <div onClick={() => imageRef.current.click()}>+</div>
              <InputEmoji value={newMessage} onChange={handleChange} />
              <button className="send-button button" onClick={handleSend}>
                Send
              </button>
              <input
                type="file"
                name=""
                id=""
                style={{ display: "none" }}
                ref={imageRef}
              />
            </div>
          </>
        ) : (
          <div></div>
        )}
      </div>
    </>
  );
};

export default ChatBox;

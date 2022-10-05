import React from "react";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import dialogStyles from "./Dialogs.module.css";


const Dialogs = (props) => {

  let state = props.messagePage;

  let dialogsElements = state.dialogData.map((d) => (
    <DialogItem name={d.name} id={d.id} key={d.id} />
  ));

  let messagesElements = state.messageData.map((m) => (
    <Message message={m.message} key={m.id} />
  ));
  let newMessageBody = state.newMessageBody;

  let onSendMessage = () => {
    props.sendMessage();
  };

  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBodyCreator(body);
  };

  return (
    <div className={dialogStyles.dialogs}>
      <div className={dialogStyles.dialogItems}>{dialogsElements}</div>
      <div className={dialogStyles.messages}>
        <div>{messagesElements}</div>
        <div>
          <div>
            <textarea
              value={newMessageBody}
              onChange={onNewMessageChange}
              placeholder="Enter your message"
            />
          </div>
          <div>
            <button onClick={onSendMessage}>Send Message</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;

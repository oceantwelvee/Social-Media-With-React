
const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
  dialogData: [
    { id: 1, name: "Tamerlan" },
    { id: 2, name: "Kamran" },
    { id: 3, name: "Emka" },
  ],
  messageData: [
    { id: 1, message: "Hello" },
    { id: 2, message: "How are u?" },
    { id: 3, message: "What are u doing?" },
  ],
  newMessageBody: ""
}


const messageReducer = (state = initialState, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      return {
        ...state,
        newMessageBody: action.body
      }
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      return {
        ...state,
        newMessageBody: "",
        messageData: [...state.messageData, { id: 4, message: body }]
      }
    default:
      return state;
  }
};

export const sendMessageCreator = () => {
  return {
    type: SEND_MESSAGE,
  };
};

export const updateNewMessageBodyCreator = (body) => {
  return {
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body,
  };
};

export default messageReducer;
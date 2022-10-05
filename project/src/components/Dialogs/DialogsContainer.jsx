import {sendMessageCreator,updateNewMessageBodyCreator} from "../../redux/message-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


function mapStateToProps(state) {
  return {
    messagePage: state.messagePage
  }
};

function mapDispatchToProps(dispatch) {
  return {
      updateNewMessageBodyCreator: (body) => {
          dispatch(updateNewMessageBodyCreator(body));
    },
    sendMessage: () => {
      dispatch(sendMessageCreator())
    },
  }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs)

export default DialogsContainer;

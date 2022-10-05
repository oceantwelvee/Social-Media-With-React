import profileReducer from './profile-reducer';
import messageReducer from './message-reducer';



let store = {
   _state: {
    profilePage: {
      postData: [
        { id: 1, message: "Hi, How are you? ", likesCount: 10 },
        { id: 2, message: "It's my first post ", likesCount: 50 },
        { id: 3, message: "How are u ", likesCount: 30 },
        { id: 4, message: "Where are u from? ", likesCount: 100 },
        { id: 5, message: "The best social media ", likesCount: 6000 },
      ],
      newPostText: "IT- it is our future",
    },
    messagePage: {
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
    },
    friendsPage: {
      friendsList: [
        { id: 1, name: "Tamerlan" },
        { id: 2, name: "Kamran" },
        { id: 3, name: "Emka" },
        { id: 4, name: "Mom" },
        { id: 5, name: "Dad" },
        { id: 6, name: "Johnn" },
        { id: 7, name: "Mike" },
        { id: 8, name: "Phillip" },
      ],
    },
    musicPage: {
      musicList: [
        { id: 1, name: "1. Billie Ellish - Lovely" },
        { id: 2, name: "2. Tom Adell - Another Love" },
        { id: 3, name: "3. Sia - Chandelier" },
        { id: 4, name: "4. Ludovic Eunauidi - Experience" },
      ],
    },
    settingsPage: {
      settingsList: [
        { id: 1, name: "1. Конфиденциальность" },
        { id: 2, name: "2. Личный аккаунт" },
        { id: 3, name: "3. Заблокированные аккаунты" },
        { id: 4, name: "4. Двухфакторная идентификация" },
      ],
    },
  },
  _rerenderEntireTree(){
    console.log("State is changed");
  },
  getState() {
    return this._state
  },
  subscribe(observed){
    this._rerenderEntireTree = observed;
  },
  dispatch(action) {

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagePage = messageReducer(this._state.messagePage, action);
    this._rerenderEntireTree(this._state);
    
   

  }
};






export default store;
window.store = store;
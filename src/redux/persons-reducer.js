const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    addPersonDate: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrew'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'}
    ],
    addMessagesDate: [
        {id: 1, message: 'Добрый день!'},
        {id: 2, message: 'Ты вчера лег спать рано?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'}
    ],
    newMessageBody: '',
};

const personsReducer = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_NEW_MESSAGE_BODY: 
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.addMessagesDate.push({id: 6, message: body});
            return state;
        default: 
            return state;
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE,})
export const updateNewMessageBodyCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY, body: body,})


export default personsReducer;
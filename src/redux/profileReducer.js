//? Action variables
const addPost = 'ADD-POST';
const upPostTxt = 'UPDATE-POST-TEXT';

let initalState = {
   postsData: [
      { id: 1, ava: 'https://i.pinimg.com/474x/97/bc/5a/97bc5a55c52716b393db4fd73f86b643.jpg', name: 'Pepe Frog', message: 'WTF', time: '25min ago', },
      { id: 2, ava: 'https://i.pinimg.com/474x/97/bc/5a/97bc5a55c52716b393db4fd73f86b643.jpg', name: 'Pepe Frog', message: 'is', time: '2 days ago', },
      { id: 3, ava: 'https://i.pinimg.com/474x/97/bc/5a/97bc5a55c52716b393db4fd73f86b643.jpg', name: 'Pepe Frog', message: 'going on', time: '1 hour ago', },
      { id: 4, ava: 'https://i.pinimg.com/474x/97/bc/5a/97bc5a55c52716b393db4fd73f86b643.jpg', name: 'Pepe Frog', message: 'THIS DESIGN IS TRASH! THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!THIS DESIGN IS TRASH!', time: '22min ago', },
      { id: 5, ava: 'https://i.pinimg.com/474x/97/bc/5a/97bc5a55c52716b393db4fd73f86b643.jpg', name: 'Pepe Frog', message: 'THIS DESIGN IS TRASH!', time: '4min ago', },
      { id: 6, ava: 'https://i.pinimg.com/474x/97/bc/5a/97bc5a55c52716b393db4fd73f86b643.jpg', name: 'Pepe Frog', message: 'THIS DESIGN IS TRASH!', time: '5min ago', },
   ],
   newPostTxt: '',
};

const profileReducer = (state = initalState, action) => {
   switch (action.type) {
      case addPost : 
         let newPost = {
            id: 7,
            ava: 'https://i.pinimg.com/474x/97/bc/5a/97bc5a55c52716b393db4fd73f86b643.jpg',
            name: 'Amogus Amongasovich',
            message: state.newPostTxt,
            time: 'now',
         };
         return {        //! ==> stateCopy
            ...state,
            postsData: [newPost, ...state.postsData],  //! ===>  stateCopy.postsData.unshift(newPost);
         };
      case upPostTxt : 
         return {        //! ==> stateCopy
            ...state,
            newPostTxt: action.newTxt,
         };
      default: return state;
   };
};

//*abbreviation "AC" => "ActionCreator"
export const addPostAC = () => ({ type: addPost });
export const updatePostTxtAC = txt => ({ type: upPostTxt, newTxt: txt });

export default profileReducer;
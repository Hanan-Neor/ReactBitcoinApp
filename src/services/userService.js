import { storageService } from './async-storage-service.js';
// import { httpService } from './http.service';
// import { socketService, SOCKET_EVENT_USER_UPDATED } from './socket.service';
const STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser';
var gWatchedUser = null;

export const userService = {
  login,
  logout,
  signup,
  getUsers,
  getById,
  remove,
  update,
  getLoggedinUser,
};

window.userService = userService;
// Note: due to async, must run one by one...
// userService.signup({fullname: 'Puki Norma', username: 'user1', password:'123',score: 100, isAdmin: false})
// userService.signup({fullname: 'Master Adminov', username: 'admin', password:'123', score: 100, isAdmin: true})
// userService.signup({fullname: 'Muki G', username: 'muki', password:'123', score: 100})

userService.signup({
  // userService.login({
  username: "Avi Berger",
  coins: 100,
  moves: [
    {
      toId: '5a56640269f443a5d64b32ca',
      to: 'Ochoa Hyde',
      at: Date.now(),
      amount: 10
    },
    {
      toId: '5a56640269f443a5d64b32ca',
      to: 'Ochoa Hyde',
      at: Date.now(),
      amount: 10
    },
    {
      toId: '5a56640269f443a5d64b32ca',
      to: 'Ochoa Hyde',
      at: Date.now(),
      amount: 10
    },
    {
      toId: '5a5664025f6ae9aa24a99fde',
      to: 'Hallie Mclean',
      at: Date.now(),
      amount: 20
    },
  ],
})

function getUsers() {
  // return storageService.query('user');
  // return httpService.get(`user`)

  return {
    username: "Avi Berger",
    coins: 100,
    moves: [],
  }
}

async function getById(userId) {
  const user = await storageService.get('user', userId);
  // const user = await httpService.get(`user/${userId}`)
  gWatchedUser = user;
  return user;
}
function remove(userId) {
  return storageService.remove('user', userId);
  // return httpService.delete(`user/${userId}`)
}

async function update(user) {
  await storageService.put('user', user);
  // user = await httpService.put(`user/${user._id}`, user)
  // Handle case in which admin updates other user's details
  if (getLoggedinUser()._id === user._id) _saveLocalUser(user);
  return user;
}

async function login(userCred) {
  const users = await storageService.query('user'); //CLIENT STORAGE
  const user = users.find((user) => user.username === userCred.username); //CLIENT STORAGE
  return _saveLocalUser(user); //CLIENT STORAGE

  // const user = await httpService.post('auth/login', userCred) //SERVER STORAGE
  // socketService.emit('login', user._id); //SERVER STORAGE
  // if (user) return _saveLocalUser(user); //SERVER STORAGE
}
async function signup(userCred) {
  // let signedup = await storageService.query('user')
  const signedup = await storageService.query('user')
  if (!signedup || !signedup.length) {
    // signedup = await storageService.post('user', userCred); //CLIENT STORAGE
    const user = await storageService.post('user', userCred); //CLIENT STORAGE
    
    // const user = await httpService.post('auth/signup', userCred)  //SERVER STORAGE
    // socketService.emit('set-user-socket', user._id); //SERVER STORAGE
    // console.log('just signed up', user);
    // const users = await getUsers();
    // console.log('users', users);
    return _saveLocalUser(user);
  }
  // }else{
  //   return _saveLocalUser(signedup)
  // }
}
async function logout() {
  sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN_USER);
  // socketService.emit('unset-user-socket'); //SERVER STORAGE
  // return await httpService.post('auth/logout') //SERVER STORAGE
}

function _saveLocalUser(user) {
  sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user));
  return user;
}

function getLoggedinUser() {
  if (!sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER)) {
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, 'null');
  }
  return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER));
}

// // This IIFE functions for Dev purposes
// // It allows testing of real time updates (such as sockets) by listening to storage events
// (async () => {
//   var user = getLoggedinUser();
//   // Dev Helper: Listens to when localStorage changes in OTHER browser

//   // Here we are listening to changes for the watched user (comming from other browsers)
//   window.addEventListener('storage', async () => {
//     if (!gWatchedUser) return;
//     const freshUsers = await storageService.query('user');
//     const watchedUser = freshUsers.find((u) => u._id === gWatchedUser._id);
//     if (!watchedUser) return;
//     if (gWatchedUser.score !== watchedUser.score) {
//       console.log(
//         'Watched user score changed - localStorage updated from another browser'
//       );
//       socketService.emit(SOCKET_EVENT_USER_UPDATED, watchedUser);
//     }
//     gWatchedUser = watchedUser;
//   });
// })();

// // This is relevant when backend is connected
// (async () => {
//   var user = getLoggedinUser();
//   if (user) socketService.emit('set-user-socket', user._id);
// })();

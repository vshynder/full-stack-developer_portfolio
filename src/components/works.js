import phoneBook from "../images/phone-book.png";
import kinoteka from "../images/kinoteka.png";
import todoApp from "../images/heroku-todo.png";
import movieFinder from "../images/movie-finder.png";
import messengerCloneFront from "../images/messenger-clone-front.png";
import messengerCloneBack from "../images/messenger-clone-back.png";
import reactTodo from "../images/react-todo.png";
import imageFinder from "../images/image-finder.png";
import chuckNorrisJokes from "../images/chuck-norris.png";
import rspGame from "../images/rsp-game.png";

const frontEnd = [
  {
    title: "Phone Book",
    stack:
      "React, redux, react-router, react-transitions, sass, prop-types, netlify",
    image: phoneBook,
    url: "https://contacts-logger.netlify.app/",
    code: "https://github.com/vshynder/hw-react-08-phonebook",
  },
  {
    title: "Kinoteka",
    stack: "vanilla js, webpack",
    image: kinoteka,
    url: "https://vshynder.github.io/kinoteka/",
    code: "https://github.com/vshynder/kinoteka",
  },
  {
    title: "Movie finder",
    stack: "React, react-router, sass, prop-types, netlify",
    image: movieFinder,
    url: "https://hw-4-react.netlify.app/movies",
    code: "https://github.com/vshynder/hw-react-04-movies",
  },
  {
    title: "Messenger clone",
    stack: "React, react context, react-bootstrap, socket.io-client",
    url: "https://vshynder.github.io/whatsapp-clone/",
    image: messengerCloneFront,
    code: "https://github.com/vshynder/whatsapp-clone",
  },
  {
    title: "React Todo-app",
    stack: "React",
    image: reactTodo,
    url: "https://vshynder.github.io/react-todo-list/build/",
    code: "https://github.com/vshynder/react-todo-list",
  },
  {
    title: "Image finder",
    stack: "React, sass, styled-components, pixabayAPI",
    image: imageFinder,
    url: "vshynder/whatsapp-clone-backend",
    code: "https://github.com/vshynder/hw-react-03-image-finder",
  },
  {
    title: "Chuck Norris Jokes API",
    stack: "vanilla js, html, css",
    image: chuckNorrisJokes,
    url: "https://vshynder.github.io/chuckNorrisJokes/",
    code: "https://github.com/vshynder/chuckNorrisJokes",
  },
  {
    title: "Rock/Scissors/Paper Game",
    stack: "vanilla js, html, css",
    image: rspGame,
    ulr: "https://vshynder.github.io/rock-scissors-paper/",
    code: "https://github.com/vshynder/rock-scissors-paper",
  },
];

const backEnd = [
  {
    title: "Todo-app",
    stack: "NodeJS, ExpressJS, express-handlebars",
    image: todoApp,
    url: "https://express-node-todo.herokuapp.com/",
    code: "https://github.com/vshynder/express-node-todo",
  },
  {
    title: "Messenger clone back-end",
    stack: "NodeJS, ExpressJS, socket.io",
    image: messengerCloneBack,
    code: "https://github.com/vshynder/whatsapp-clone-backend",
  },
];

export default { frontEnd, backEnd };

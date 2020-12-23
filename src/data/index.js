export const users = [
  {
    id: "1",
    name: "Alex",
    age: 25,
    online: true,
  },
  {
    id: "2",
    name: "Nikita",
    age: 35,
    online: false,
  },
  {
    id: "3",
    name: "Kate",
    age: 45,
    online: false,
  },
];

const result = users.map((user) =>
  user.id === "3" ? {...user, online: !user.online} : user
);

const colors = {
  mainColor: "#819ff5",
  activeColor: "#5f73a1",
  leftSideBarColor: "#efeeee",
  buttonColor: "#dbd7d8",
  selectColor: "rgb(90, 90, 90)",
};

const theme = {
  dark: {
    primary: "#111111",
    secondary: "#4c4c47",

    background: "#111111",
    text: "#fff",
  },

  light: {
    primary: "#ffffff",
    secondary: colors.buttonColor,

    background: "#ffffff",
    text: colors.buttonColor,
  },
};

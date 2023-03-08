export default function getStorageTheme() {
  //set light-theme as the default
  let theme = "light-theme";

  //.getItem("theme") returns the keyValue
  //check if key exits
  if (localStorage.getItem("theme")) {
    //if key exists, mutate the value of the theme variable to the keyValue
    theme = localStorage.getItem("theme");
  }
  //if key doesn't exist return theme varible with "light-theme"
  return theme;
}

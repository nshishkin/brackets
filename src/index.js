module.exports = function check(str, bracketsConfig) {
  let stringLength = str.length;
  if (stringLength % 2 !== 0) {
      return false;
  }
  while (stringLength > 0) {
      const checkForPair = function() {
          for (let i = 0; i < stringLength - 1; i += 1) {
              for (let j = 0; j < bracketsConfig.length; j += 1) {
                  if (
                      str[i] === bracketsConfig[j][0] &&    // if first element is opening bracket
                      str[i + 1] === bracketsConfig[j][1]   //and second element corresponding closing bracket
                  ) {
                      str = str.slice(0, i) + str.slice(i + 2); //then we remove them from string and start search
                      return true;                              //from start of the string
                  }
              }
          }
          return false;
      };

      if (checkForPair()) {
          stringLength -= 2;
      } else {
          return false;
      }
  }
  return true;
}

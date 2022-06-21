/** Parses a menu item object and returns Gatsby-field URI.
 * @param {object} menuItem a single menu item
 * @param wordPressUrl
 */
 export const CreateLocalLink = (menuItem, wordPressUrl) => {

    const url = menuItem.url;
  
    if (url === '#') {
      return null;
    }
    /** Always want to pull of our API URL */
    let newUri = url.replace(wordPressUrl, '');
  
    return newUri;
  };
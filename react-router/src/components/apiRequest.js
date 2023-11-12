const apiRequest = async (url = "", optionObj = null, errMsg = null) => {
  try {
    const response = await fetch(url, optionObj);
    if (!response.ok) throw new Error("please reload the page");
  } catch (err) {
    errMsg = err.Message;
  } finally {
    return errMsg;
  }
};
export default apiRequest;

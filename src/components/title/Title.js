const Title = (notification, data) => {
    return (document.title = `${
      notification && notification > 0 ? `(${notification})` : ""
    } ${data}`);
};

export default Title;
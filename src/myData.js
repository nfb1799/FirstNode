const message = "Hello Heroku";

const getMessage = () => {
    console.log(message);
    return message;
};

module.exports = {
    getMessage,
}
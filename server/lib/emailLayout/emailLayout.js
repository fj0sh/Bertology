exports.emailLayout = (message, recepient, username) => {
  return `
    <div>
      <h2>Hello ${username}!</h2>
      <div>${message}</div>
      <div>${recepient}</div>
    </div>
    `;
};

exports.emailLayout = (message, username) => {
  return `
    <div>
      <h2>Hello ${username}!</h2>
      <p>${message}</p>
    </div>
    `;
};

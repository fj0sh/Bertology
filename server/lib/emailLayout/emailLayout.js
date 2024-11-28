exports.emailLayout = (title, message, recipient, username) => {
  return `
     <div
  style="
  background-color: #f9f9f9; 
  color: #333333; 
  font-family: Arial, sans-serif; 
  padding: 20px; 
  border-radius: 10px; 
  max-width: 600px; 
  margin: auto; 
  text-align: center; 
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);"
>
  <div
    style="
    font-size: 20px; 
    font-weight: bold; 
    margin-bottom: 10px;"
  >
    ${title}
  </div>

  <h2
    style="
    color: #2c3e50; 
    margin-bottom: 20px; 
    font-size: 24px;"
  >
    Hello, ${username}!
  </h2>

  <div
    style="
    background-color: #ffffff; 
    padding: 15px; 
    border: 1px solid #dddddd; 
    border-radius: 8px; 
    margin-bottom: 20px; 
    text-align: left;"
  >
    <p
      style="
      color: #555555; 
      font-size: 16px; 
      line-height: 1.6;"
    >
      ${message}
    </p>
  </div>

  <div
    style="
    font-size: 14px; 
    color: #999999; 
    font-weight: bold; 
    margin-top: 10px;"
  >
    ${recipient}
  </div>

  <footer
    style="
    margin-top: 20px; 
    font-size: 12px; 
    color: #aaaaaa;"
  >
    Thank you for choosing our service.
  </footer>
</div>;

    `;
};

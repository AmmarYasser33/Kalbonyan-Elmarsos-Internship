const postmark = require("postmark");

const client = new postmark.ServerClient(process.env.POSTMARK_SERVER_API);

client.sendEmail({
  From: "ammaradblmomen.2020@azhar.edu.eg",
  To: "ammaradblmomen.2020@azhar.edu.eg",
  Subject: "Hello from Postmark",
  HtmlBody: `<h2>Ammar say:</h2>
  <strong>Hello</strong> dear Postmark user.`,
  TextBody: "Hello from Postmark!",
  MessageStream: "task-app",
});

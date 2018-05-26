const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'madhu051196@gmail.com',
    pass: 'MadhuKanth)%!!96',
  },
});

exports.forgetPassword = (req, res) => {
  const mailOptions = {
    from: 'gogrocery@gmail.com', // sender address
    to: 'madhu051196@gmail.com', // list of receivers
    subject: 'Subject of your email', // Subject line
    html: '<p>Your html here</p>', // plain text body
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
      res.send({ Success: 'true' });
    }
  });
};

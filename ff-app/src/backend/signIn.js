const Member = require('./data/Member');

module.exports = (app) => {
  //for sign up form
  app.post('/api/account/signup', (req, res, next) => {
    const { body } = req;
    const { userName } = body;
    let { firstName } = body;
    let { lastName } = body;
    let { email } = body;
    const { password } = body;

    if (!userName || !firstName || !lastName || !email || !password) {
      return res.send({
        success: false,
        message: 'Error: input cannot be blank.'
      });
    }

    //email verification, use as unique key
    email = email.toLowerCase();
    email = email.trim();

    Member.find({
      email: email
    }, (err, pastMembers) => {
      if (err) {
        return res.send({
          success: false,
          message: 'Error: Server error'
        });
      } else if (pastMembers.length > 0) {
        return res.send({
          success: false,
          message: 'Error: Account already exists.'
        });
      }

      // Save the new member
      const newMember = new Member();

      newMember.userName = userName;
      newMember.firstName = firstName;
      newMember.lastName = lastName;
      newMember.email = email;
      newMember.password = newMember.generateHash(password);
      newMember.save((err, member) => {
        if (err) {
          return res.send({
            success: false,
            message: 'Error: Server error'
          });
        }
        return res.send({
          success: true,
          message: 'Thank you for signing up!'
        });
      });
    });

  });
};

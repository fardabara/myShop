let _route = 'auth/';
/* S A P A R A T O R */
exports.login = (req, res) => {
  res.render(_route + 'login');
};
/* S A P A R A T O R */
exports.register = (req, res) => {
  res.render(_route + 'register');
};
/* S A P A R A T O R */
exports.profile = (req, res) => {
  res.render(_route + 'profile');
};
/* S A P A R A T O R */
exports.logout = (req, res) => {
  res.redirect('/home');
};

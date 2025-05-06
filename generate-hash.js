const bcrypt = require('bcryptjs');

async function generateHash() {
  const password = 'admin';
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log('Хеш пароля "admin":', hashedPassword);
}

generateHash(); 
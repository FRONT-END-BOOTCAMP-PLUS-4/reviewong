import bcrypt from 'bcryptjs';

const password = 'newlec';
const hash = bcrypt.hashSync(password, 10);
console.log('hash:', hash);
const result = bcrypt.compareSync(password, hash);
console.log('compare result:', result);

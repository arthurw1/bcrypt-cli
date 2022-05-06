import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcryptjs';

export function genPair() {
  const uuid = uuidv4();
  bcrypt.hash(uuid, 3, function (err, hash) {
    if (err) {
      throw err;
    }
    console.log({
      uuid,
      hash,
    });
  });
}

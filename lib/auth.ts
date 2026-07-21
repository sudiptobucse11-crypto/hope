import { prisma } from './prisma';
import bcrypt from 'bcrypt';

export async function verifyUser(email: string, password: string) {
  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) return null;

  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) return null;

  return user;
}

export async function createUser(data: {
  name: string;
  email: string;
  password: string;
  role?: 'ADMIN' | 'LIBRARIAN' | 'STAFF' | 'MEMBER';
}) {
  const hashedPassword = await bcrypt.hash(data.password, 10);
  
  return prisma.user.create({
    data: {
      ...data,
      password: hashedPassword,
    },
  });
}

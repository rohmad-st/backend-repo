import { firestore } from '../config/firebaseConfig';
import { User } from '../entities/user';

const USERS_COLLECTION = 'USERS';

export const updateUser = async (
  id: string,
  data: Partial<User>
): Promise<void> => {
  await firestore.collection(USERS_COLLECTION).doc(id).update(data);
};

export const fetchUser = async (id: string): Promise<User | null> => {
  const userDoc = await firestore.collection(USERS_COLLECTION).doc(id).get();
  return userDoc.exists ? (userDoc.data() as User) : null;
};

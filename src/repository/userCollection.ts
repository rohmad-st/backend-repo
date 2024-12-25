import { firestore } from '../config/firebaseConfig';
import { User, UserData } from '../entities/user';

const USERS_COLLECTION = 'USERS';

export const updateUser = async (
  id: string,
  data: Partial<User>
): Promise<void> => {
  await firestore.collection(USERS_COLLECTION).doc(id).update(data);
};

export const fetchUsers = async (): Promise<UserData[]> => {
  const usersSnapshot = await firestore.collection(USERS_COLLECTION).get();
  return usersSnapshot.docs.map((doc) => ({
    _id: doc.id,
    ...doc.data()
  })) as UserData[];
};

export const fetchUser = async (id: string): Promise<User | null> => {
  const userDoc = await firestore.collection(USERS_COLLECTION).doc(id).get();
  return userDoc.exists ? (userDoc.data() as User) : null;
};

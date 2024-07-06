// import { ref, set, child, get } from "firebase/database";
// import { getCurrentUser } from "./User";
// import { database } from './Firebase';




import { database } from './Firebase'; 
import { ref, get } from 'firebase/database';



export const getAllTeachers = async () => {
   try {
   
    const teachersRef = ref(database, '/teachers');
    const snapshot = await get(teachersRef);
    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      throw new Error('Дані про вчителі відсутні');
    }
  } catch (error) {
    console.error('Помилка при отриманні даних про вчителі:', error);
    throw error;
  }
};

// export const getAllTeachers = async () => {
//   try {
//     const databaseRef = ref(database);
//     const result = await get((databaseRef, "teachers"));
//     const teachersData = result.val();
//     if (Array.isArray(teachersData)) {
//       const prevTeachers = teachersData.slice(0);
//       return prevTeachers;
//     } else {
//       console.error("Teachers data is not an array");
//       return [];
//     }
//   } catch (error) {
//     console.error(error);
//   }
// }

// export const addTeacher = async (objectTeacher) => {
//   try {
//     const userData = getCurrentUser();
//     const userId = userData?.uid;
//     let teachersArray =
//       (await get(ref(database, `users/${userId}/teachers`))).val() || [];
//     if (!Array.isArray(teachersArray)) {
//       teachersArray = [];
//     }
//     teachersArray.push(objectTeacher);
//     await set(ref(database, `users/${userId}/teachers`), teachersArray);
//   } catch (error) {
//     console.error(error);
//   }
// }

// export const removeTeacher = async (teacherID) => {
//   try {
//     const userData = getCurrentUser();
//     const userId = userData?.uid;
//     const arrayFavorites = await getFavorites();
//     const updatedFavorites = arrayFavorites?.filter(
//       (favorite) => favorite.id !== teacherID
//     );
//     await set(ref(database, `users/${userId}/teachers`), updatedFavorites);
//     return updatedFavorites;
//   } catch (error) {
//     console.error(error);
//   }
// }

// export const getFavorites = async () => {
//   try {
//     const userData = getCurrentUser();
//     const userId = userData?.uid;
//     const result = await get(child(ref(database), `users/${userId}/teachers`));
//     return result.val();
//   } catch (error) {
//     console.error(error);
//   }
// }



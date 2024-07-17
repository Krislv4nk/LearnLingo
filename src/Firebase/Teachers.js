
import { getCurrentUser } from "./User";


import { database } from './Firebase'; 
import { ref, get, set, child } from 'firebase/database';



export const getAllTeachers = async () => {
   try {
   
    const teachersRef = ref(database, '/teachers');
    const snapshot = await get(teachersRef);
    if (snapshot.exists()) {
      return snapshot.val();
    } 
  } catch (error) {
    console.error('Error during fetching:', error);
  }
};

export const getTeachersByLanguage = async (language) => {
  try {
    const teachersRef = ref(database, '/teachers');
    const snapshot = await get(teachersRef);
    if (snapshot.exists()) {
      const teachers = snapshot.val();
      const filteredTeachersByLanguage = Object.values(teachers).filter(teacher => {
        return Array.isArray(teacher.languages) ? teacher.languages.includes(language) : teacher.languages === language;
      });
      console.log(filteredTeachersByLanguage);
      return filteredTeachersByLanguage;
    } 
  } catch (error) {
    console.error('Error during fetching:', error);
  }
};

export const getTeachersByLevel = async (levels) => {
  try {
    const teachersRef = ref(database, '/teachers');
    const snapshot = await get(teachersRef);
    
    if (snapshot.exists()) {
      const teachers = snapshot.val();

      const filteredTeachersByLevel = Object.values(teachers).filter((teacher) => {
         
        return Array.isArray(teacher.levels) ? teacher.levels.includes(levels) : teacher.levels === levels;
      });

      console.log(filteredTeachersByLevel);
      return filteredTeachersByLevel;
    } 
  } catch (error) {
    console.error('Error during fetching:', error);
  }
};


export const getTeachersByPrice = async (price) => {
  try {
    const teachersRef = ref(database, '/teachers');
    const snapshot = await get(teachersRef);
    
    if (snapshot.exists()) {
      const teachers = snapshot.val();

      const filteredTeachersByPrice = Object.values(teachers).filter(teacher => {
       
        return teacher.price_per_hour === +price;
      });

      console.log(filteredTeachersByPrice);
      return filteredTeachersByPrice;
    } 
  } catch (error) {
    console.error('Error during fetching:', error);
  }
}



export const addToFavorites = async (objectTeacher) => {
  try {
    const userData = getCurrentUser();
    const userId = userData?.uid;
    let teachersArray =
      (await get(ref(database, `users/${userId}/teachers`))).val() || [];
    if (!Array.isArray(teachersArray)) {
      teachersArray = [];
    }
    teachersArray.push(objectTeacher);
    await set(ref(database, `users/${userId}/teachers`), teachersArray);
  } catch (error) {
    console.error(error);
  }
}

export const removeFromFavorites = async (teacherID) => {
  try {
    const userData = getCurrentUser();
    const userId = userData?.uid;
    const arrayFavorites = await getFavoriteTeachers();
    const updatedFavorites = arrayFavorites?.filter(
      (favorite) => favorite.id !== teacherID
    );
    await set(ref(database, `users/${userId}/teachers`), updatedFavorites);
    return updatedFavorites;
  } catch (error) {
    console.error(error);
  }
}

export const getFavoriteTeachers = async () => {
  try {
    const userData = getCurrentUser();
    const userId = userData?.uid;
    const result = await get(child(ref(database), `users/${userId}/teachers`));
    return result.val();
  } catch (error) {
    console.error(error);
  }
}



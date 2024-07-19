
import { getCurrentUser } from "./User";


import { database } from './Firebase'; 
import { ref, get, set } from 'firebase/database';



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



export const addToFavorites = async (teacher) => {
  try {
    const userData = getCurrentUser();
    if (!userData) throw new Error("User is not authenticated");

    const userId = userData.uid;
    const userRef = ref(database, `users/${userId}/favorites`);
    
    const snapshot = await get(userRef);
    let teachersArray = snapshot.val() || [];

    if (!Array.isArray(teachersArray)) {
      teachersArray = [];
    }

    teachersArray.push(teacher);
    await set(userRef, teachersArray);
    
    return teachersArray; 
  } catch (error) {
    console.error("Error adding to favorites:", error);
    return []; 
  }
}

export const removeFromFavorites = async (teacherIndex) => {
  try {
    const userData = getCurrentUser();
    if (!userData) throw new Error("User is not authenticated");

    const userId = userData.uid;
    const userRef = ref(database, `users/${userId}/favorites`);
   
    const snapshot = await get(userRef);
    const teachersArray = snapshot.val() || [];

    if (!Array.isArray(teachersArray)) {
      throw new Error("Invalid data format");
    }

    const updatedFavorites = teachersArray.filter(favorite => favorite.index !== teacherIndex); 
    await set(userRef, updatedFavorites);
    
    return updatedFavorites;
  } catch (error) {
    console.error("Error removing from favorites:", error);
    return []; 
  }
}

export const getFavoriteTeachers = async () => {
  try {
    const userData = getCurrentUser();
    if (!userData) throw new Error("User is not authenticated");

    const userId = userData.uid;
    const userRef = ref(database, `users/${userId}/favorites`);

    const snapshot = await get(userRef);
    return snapshot.val() || [];
  } catch (error) {
    console.error("Error getting favorite teachers:", error);
    return []; 
  }
}



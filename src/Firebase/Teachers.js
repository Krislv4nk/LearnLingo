
import { getCurrentUser } from "./User";
import { database } from './Firebase'; 
import { ref, get, set } from 'firebase/database';


export const getAllTeachers = async () => {
  try {
    const teachersRef = ref(database, '/teachers');
    const snapshot = await get(teachersRef);
    if (snapshot.exists()) {
     
      const teachersObject = snapshot.val();
      return Object.keys(teachersObject).map(key => ({
        id: key, 
        ...teachersObject[key]
      }));
    }
    return []; 
  } catch (error) {
    console.error('Error during fetching:', error);
    return []; 
  }
};


export const getTeachersByLanguage = async (language) => {
  try {
    const teachersRef = ref(database, '/teachers');
    const snapshot = await get(teachersRef);
    if (snapshot.exists()) {
      const teachersObject = snapshot.val();
      const filteredTeachersByLanguage = Object.keys(teachersObject).map(key => ({
        id: key, 
        ...teachersObject[key]
      })).filter(teacher => {
        return Array.isArray(teacher.languages) ? teacher.languages.includes(language) : teacher.languages === language;
      });
      console.log(filteredTeachersByLanguage);
      return filteredTeachersByLanguage;
    }
    return []; 
  } catch (error) {
    console.error('Error during fetching:', error);
    return [];
  }
};


export const getTeachersByLevel = async (level) => {
  try {
    const teachersRef = ref(database, '/teachers');
    const snapshot = await get(teachersRef);
    if (snapshot.exists()) {
      const teachersObject = snapshot.val();
      const filteredTeachersByLevel = Object.keys(teachersObject).map(key => ({
        id: key, 
        ...teachersObject[key]
      })).filter(teacher => {
        return Array.isArray(teacher.levels) ? teacher.levels.includes(level) : teacher.levels === level;
      });
      console.log(filteredTeachersByLevel);
      return filteredTeachersByLevel;
    }
    return []; 
  } catch (error) {
    console.error('Error during fetching:', error);
    return []; 
  }
};


export const getTeachersByPrice = async (price) => {
  try {
    const teachersRef = ref(database, '/teachers');
    const snapshot = await get(teachersRef);
    if (snapshot.exists()) {
      const teachersObject = snapshot.val();
      const filteredTeachersByPrice = Object.keys(teachersObject).map(key => ({
        id: key, 
        ...teachersObject[key]
      })).filter(teacher => {
        return teacher.price_per_hour === +price;
      });
      console.log(filteredTeachersByPrice);
      return filteredTeachersByPrice;
    }
    return []; 
  } catch (error) {
    console.error('Error during fetching:', error);
    return []; 
  }
};


export const addToFavorites = async (teacher) => {
  try {
    const userData = getCurrentUser();
    if (!userData) throw new Error("User is not authenticated");

    const userId = userData.uid;
    const userRef = ref(database, `users/${userId}/favorites`);
    
    const snapshot = await get(userRef);
    let teachersArray = snapshot.val() || [];

    if (teachersArray.some(fav => fav.id === teacher.id)) {
      return teachersArray; 
    }

    teachersArray.push(teacher);
    await set(userRef, teachersArray);
    
    return teachersArray;
  } catch (error) {
    console.error("Error adding to favorites:", error);
    return [];
  }
};


export const removeFromFavorites = async (teacherId) => {
  try {
    const userData = getCurrentUser();
    if (!userData) throw new Error("User is not authenticated");

    const userId = userData.uid;
    const userRef = ref(database, `users/${userId}/favorites`);
    
    const snapshot = await get(userRef);
    let teachersArray = snapshot.val() || [];

    teachersArray = teachersArray.filter(favorite => favorite.id !== teacherId);
    await set(userRef, teachersArray);
    
    return teachersArray;
  } catch (error) {
    console.error("Error removing from favorites:", error);
    return [];
  }
};


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
};

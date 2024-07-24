
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
      return filteredTeachersByPrice;
    }
    return []; 
  } catch (error) {
    return []; 
  }
};


export const getFilteredTeachers = async (language, level, price) => {

  if (!language && !level && !price) {
      return await getAllTeachers();
    }
  try {
    let teachersLanguage, teachersLevel, teachersPrice;

    if (language) {
      teachersLanguage = await getTeachersByLanguage(language);
    }

    if (level) {
      teachersLevel = await getTeachersByLevel(level);
    }

    if (price) {
      teachersPrice = await getTeachersByPrice(price);
    }

    if (language && !level && !price) {
      return teachersLanguage;
    } else if (!language && level && !price) {
      return teachersLevel;
    } else if (!language && !level && price) {
      return teachersPrice;
    } else {
      let filteredTeachers = [];

      if (language && level && !price) {
        filteredTeachers = teachersLanguage.filter((teacherLang) =>
          teachersLevel.some((teacherLevel) => teacherLang.id === teacherLevel.id)
        );
      } else if (!language && level && price) {
        filteredTeachers = teachersLevel.filter((teacherLevel) =>
          teachersPrice.some((teacherPrice) => teacherLevel.id === teacherPrice.id)
        );
      } else if (language && !level && price) {
        filteredTeachers = teachersLanguage.filter((teacherLang) =>
          teachersPrice.some((teacherPrice) => teacherLang.id === teacherPrice.id)
        );
      } else if (language && level && price) {
        filteredTeachers = teachersLanguage.filter((teacherLang) =>
          teachersLevel.some((teacherLevel) =>
            teachersPrice.some((teacherPrice) =>
              teacherLang.id === teacherLevel.id && teacherLevel.id === teacherPrice.id
            )
          )
        );
      }

      return filteredTeachers;
    }
  } catch (error) {
    console.error(error);
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

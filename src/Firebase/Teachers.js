import { getDatabase, ref, set, child, get } from "firebase/database";
import { getUserData } from "./User";

export const getAllTeachers = async (teachersPerPage) => {
  try {
    const dbRef = ref(getDatabase());
    const avatar = await get(child(dbRef, "teachers"));
    const teachers = avatar.val();
    if (Array.isArray(teachers)) {
      const firstTeachers = teachers.slice(0, teachersPerPage);
      return firstTeachers;
    } else {
      console.error("Teachers data is not an array");
      return [];
    }
  } catch (error) {
    console.error(error);
  }
}

export const addTeacher = async (objectTeacher) => {
  try {
    const userData = getUserData();
    const userId = userData?.uid;
    const db = getDatabase();
    let teachersArray =
      (await get(ref(db, `users/${userId}/teachers`))).val() || [];
    if (!Array.isArray(teachersArray)) {
      teachersArray = [];
    }
    teachersArray.push(objectTeacher);
    await set(ref(db, `users/${userId}/teachers`), teachersArray);
  } catch (error) {
    console.error(error);
  }
}

export const removeTeacher = async (teacherID) => {
  try {
    const userData = getUserData();
    const userId = userData?.uid;
    const db = getDatabase();
    const arrayFavorites = await getFavorites();
    const updatedFavorites = arrayFavorites?.filter(
      (favorite) => favorite.id !== teacherID
    );
    await set(ref(db, `users/${userId}/teachers`), updatedFavorites);
    return updatedFavorites;
  } catch (error) {
    console.error(error);
  }
}

export const getFavorites = async () => {
  try {
    const userData = getUserData();
    const userId = userData?.uid;
    const db = getDatabase();
    const snapshot = await get(child(ref(db), `users/${userId}/teachers`));
    return snapshot.val();
  } catch (error) {
    console.error(error);
  }
}

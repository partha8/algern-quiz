import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  where,
  collection,
} from "@firebase/firestore";
import { db } from "../../firebase.config";
import { Categories, QuizState, Quizzes } from "../../types/quiz.types";

const initialState: QuizState = {
  categories: [],
  quizzes: [],
  quiz: null,
  points: 0,
  result: 0,
};

export const getCategories = createAsyncThunk(
  "quiz/getCategories",
  async (_, thunkAPI) => {
    try {
      const colRef = collection(db, "categories");
      const snapShot = await getDocs(colRef);
      let categories = [];
      categories = snapShot.docs.map((doc) => {
        const data = doc.data();
        data["id"] = doc.id;
        return data as Categories;
      });
      return categories;
    } catch (error) {
      console.error(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getQuizzesByCategory = createAsyncThunk(
  "quiz/getQuizzesByCategory",
  async (categoryName: string | undefined, thunkAPI) => {
    try {
      const colRef = collection(db, "quizzes");
      const queryRef = query(colRef, where("categoryName", "==", categoryName));
      const snapShot = await getDocs(queryRef);
      let quizzes = [];
      quizzes = snapShot.docs.map((doc) => {
        const data = doc.data();
        data["id"] = doc.id;
        return data as Quizzes;
      });
      return quizzes;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getQuiz = createAsyncThunk(
  "quiz/getQuiz",
  async (id: string, thunkAPI) => {
    try {
      const docRef = doc(db, "quizzes", `${id}`);
      const docSnap = await getDoc(docRef);
      console.log(docSnap.id);
      let data = docSnap.data() as Quizzes;
      data["id"] = id;
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
      })
      .addCase(getQuizzesByCategory.fulfilled, (state, action) => {
        state.quizzes = action.payload;
      })
      .addCase(getQuiz.fulfilled, (state, action) => {
        state.quiz = action.payload;
      });
  },
});

export default quizSlice.reducer;

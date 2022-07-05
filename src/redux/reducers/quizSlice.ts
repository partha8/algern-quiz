import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import {
  doc,
  getDoc,
  getDocs,
  getFirestore,
  where,
  collection,
} from "@firebase/firestore";
import { db } from "../../firebase.config";
import { Categories, QuizState } from "../../types/quiz.types";

const initialState: QuizState = {
  categories: [],
  quizzes: [],
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

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getCategories.pending, (state, action) => {
        console.log("pending");
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
      });
  },
});

export default quizSlice.reducer;

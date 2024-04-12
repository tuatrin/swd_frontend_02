import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Person } from "../interfaces/person.interface";

interface PersonState {
  persons: Person[];
  selectedRowKeys: React.Key[];
  editingPerson: Person | null;
  viewingPerson: Person | null;
}

const initialState: PersonState = {
  persons: JSON.parse(localStorage.getItem("persons") || "[]"),
  selectedRowKeys: [],
  editingPerson: null,
  viewingPerson: null,
};

const personSlice = createSlice({
  name: "person",
  initialState,
  reducers: {
    addPerson: (state, action: PayloadAction<Person>) => {
      // แทนที่ 'any' ด้วย type ที่ถูกต้อง
      state.persons.push(action.payload);
      localStorage.setItem("persons", JSON.stringify(state.persons));
    },
    editPerson: (state, action: PayloadAction<Person>) => {
      const index = state.persons.findIndex((p) => p.id === action.payload.id);
      if (index !== -1) {
        state.persons[index] = { ...state.persons[index], ...action.payload };
      }
    },
    deletePerson: (state, action: PayloadAction<string>) => {
      state.persons = state.persons.filter((p) => p.id !== action.payload);
      localStorage.setItem("persons", JSON.stringify(state.persons));
    },
    setSelectedRowKeys(state, action: PayloadAction<React.Key[]>) {
      state.selectedRowKeys = action.payload;
    },
    setEditingPerson(state, action: PayloadAction<Person | null>) {
      state.editingPerson = action.payload;
    },
    setViewingPerson(state, action: PayloadAction<Person | null>) {
      console.log("abc");
      state.viewingPerson = action.payload;
    },
  },
});

export const {
  addPerson,
  editPerson,
  deletePerson,
  setSelectedRowKeys,
  setEditingPerson,
  setViewingPerson,
} = personSlice.actions;
export default personSlice.reducer;

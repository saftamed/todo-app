import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    list: [{ id: 2, description: "finish redux", isDone: false }],
    edit:{
      show:false,
      disc:'',
      id:''
    },filter:'2'
  },
  reducers: {
    addTodo(state, action) {
      //console.log(action.payload);
      state.list = state.list.concat({
        description: action.payload,
        isDone: false,
        id: uuidv4(),
      });
    },
    setDone(state, action) {
      let t = state.list.find((to) => to.id === action.payload);
      t.isDone = !t.isDone;
      // state.list[0].isDone = !state.list[0].isDone;
    },
    startEdit(state, action){
      state.edit ={
        show:true,
        disc:state.list.find((to) => to.id === action.payload).description,
        id:action.payload
      }

    },
    endEdit(state, action){
      state.edit.show = false;
    },
    saveChanges(state, action){
      let t = state.list.find((to) => to.id === state.edit.id);
      t.description = action.payload
      state.edit.show = false

    },deleteTodo(state, action){
      state.list = state.list.filter((todo) => todo.id !== action.payload)
    },
    setFilter(state,action){
      state.filter = action.payload;
    }
  },
});

export const todoActions = todoSlice.actions;

export default todoSlice;

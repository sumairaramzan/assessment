

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Here i want to fecth another Data by using json api to perform ADD TO ART functionality /////////////

export const FetchData = createAsyncThunk(
  "FetchData",
  async (args, { rejectWithValue }) => {
    const resposeFetchData = await fetch("https://fakestoreapi.com/products", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(),
    });
    try {
      const resultFetchData = await resposeFetchData.json();
      console.log(resultFetchData, "Response in the FetchData");
      return resultFetchData;
    } catch (error) {
      console.log(error, "Erro in the FetchData");
      return rejectWithValue(error);
    }
  }
);

// Here i am Creating a action....
export const CreateUserData = createAsyncThunk(
  "CreateUserData",


  async (data, { rejectWithValue }) => {
    const response = await fetch(
      "https://64d61256754d3e0f13618ee0.mockapi.io/crud",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    try {
      const result = await response.json();
      console.log(result, "Data recieving from form");
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// here i am Showing the User Data..... or List of the User in the Api
export const ShowUserData = createAsyncThunk(
  "ShowUserData",

  // nechay aik args ya argument zaror define krna ha otherwise data show nhiii hoga............
  async (args, { rejectWithValue }) => {
    const responseShow = await fetch(
      "https://64d61256754d3e0f13618ee0.mockapi.io/crud"
    );
    try {
      // nechay await lagana Zarori ha.......
      const result = await responseShow.json();
      console.log(result, "Data recieving from form to show in Card");
      return result;
    } catch (error) {
      console.log(
        error,
        "error in the Data recieving from form to show in Card"
      );
      return rejectWithValue(error);
    }
  }
);

// Here i will Perform Deleting Action.....

export const DeleteUserData = createAsyncThunk(
  "DeleteUserData",
  async (id, { rejectWithValue }) => {
    console.log(id, "Id for Deleting");
    const DeleteShowData = await fetch(
      `https://64d61256754d3e0f13618ee0.mockapi.io/crud/${id}`,
      {
        method: "DELETE",
      }
    );
    try {
      const DeletingValue = await DeleteShowData.json();
      console.log(DeletingValue, "Here is the Deleting the Value");
      return DeletingValue;
    } catch (error) {
      console.log(error, "Here is the error in Deleting the Value");
      return rejectWithValue(error);
    }
  }
);

// here i am Performing Update Action....

export const UpdateUserData = createAsyncThunk(
  "UpdateUserData",
  async (data, { rejectWithValue }) => {
    console.log(data, "updated the data");
    const UpdateUserDataResponse = await fetch(
      `https://64d61256754d3e0f13618ee0.mockapi.io/crud/${data.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    try {
      const UpdateResponse = await UpdateUserDataResponse.json();
      console.log(UpdateResponse, "here is the value in the Update Respnse");
      return UpdateResponse;
    } catch (error) {
      console.log(error, "here is the Error in the Update response");
      return rejectWithValue(error);
    }
  }
);

const savedCart = JSON.parse(localStorage.getItem("cartData")) || [];
const savedCount = parseInt(localStorage.getItem("cartotalCount")) || 0;
const savedAmount = parseFloat(localStorage.getItem("cartotalAmount")) || 0;

export const UserDataSlice = createSlice({
  name: "User",

  initialState: {
   
    User: [],
    loading: "false",
    error: null,
    totalCount: savedCount,
    items: savedCart, // Stores cart items

    totalPrice: savedAmount,
  },
 
  reducers: {
    addCartItem: (state, action) => {
      const { quantity } = action.payload;
      console.log(quantity, "jjgfgjfjfj");
      console.log(action.payload, "this is for addCArt Distructuring");
      const { id, image, title, price } = action.payload;

      const existingItem = state.items.find(
        (item) =>
          item.id === id &&
          item.image === image &&
          item.title === title &&
          item.price === price
        // &&
        // item.quantity === quantity
      );
      if (existingItem) {
        const updatedItems = state.items.map((item) =>
          item === existingItem
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
        state.items = updatedItems;
      } else {
        const newItem = {
          id,
          image,
          title,
          price,
          quantity: quantity,
        };
        state.items = [...state.items, newItem];
        // console.log(state.items,"kkkkkk")
      }
      state.totalCount = state.totalCount + quantity;
      console.log(state.totalCount, "Total Count");
      const totalmt = state.items.reduce((accumulator, item) => {
        return accumulator + item.price * item.quantity;
      }, 0);
      state.totalPrice = totalmt;
      localStorage.setItem("cartData", JSON.stringify(state.items));
      // localStorage.setItem("cartData", state.items);
      localStorage.setItem("cartotalCount", state.totalCount);
      localStorage.setItem("cartotalAmount", totalmt);
    },

    RemoveCartItem: (state, action) => {
      const { id, image, title, price } = action.payload;
      const existingItem = state.items.find(
        (item) =>
          item.id === id &&
          item.image === image &&
          item.title === title &&
          item.price === price
      );

      if (existingItem && existingItem.quantity > 1) {
        const updatedItems = state.items.map((item) =>
          item === existingItem
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
        state.items = updatedItems;
      } else {
        const updatedItems = state.items.filter(
          (item) =>
            item.id !== id ||
            item.image !== image ||
            item.title !== title ||
            item.price !== price
        );
        state.items = updatedItems;
      }
      state.totalCount = state.totalCount - 1;
      const totalmt = state.items.reduce((accumulator, item) => {
        return accumulator + item.price * item.quantity;
      }, 0);
      state.totalPrice = totalmt;
      state.totalPrice = totalmt;
      localStorage.setItem("cartData", JSON.stringify(state.items));
      // localStorage.setItem("cartData", state.items);
      localStorage.setItem("cartotalCount", state.totalCount);
      localStorage.setItem("cartotalAmount", totalmt);
    },
  },

  
  extraReducers: {
   

    [FetchData.pending]: (state) => {
      state.loading = true;
    },
    [FetchData.fulfilled]: (state, action) => {
      state.loading = false;
      state.User = action.payload;
    },
    [FetchData.rejected]: (state, action) => {
      state.loading = true;
      state.error = action.payload;
    },

   
    [CreateUserData.pending]: (state) => {
      state.loading = true;
    },
   

    [CreateUserData.fulfilled]: (state, action) => {
     
      state.loading = false;
     
      state.User.push(action.payload);

    },
    // this is for data rejection k data reject ho gya ha...
    [CreateUserData.rejected]: (state, action) => {
      state.loading = true;
      state.error = action.payload;
    },

    /////////////////      this is For the ShowUserData         ///////////////////////////

    [ShowUserData.pending]: (state) => {
      state.loading = true;
    },
    [ShowUserData.fulfilled]: (state, action) => {
      state.loading = false;
      state.User = action.payload;
    },
    [ShowUserData.rejected]: (state, action) => {
      state.loading = true;
      state.error = action.payload;
    },

    // Here i am Performing Action For Delete the User.....

    [DeleteUserData.pending]: (state) => {
      state.loading = true;
    },

    [DeleteUserData.fulfilled]: (state, action) => {
      state.loading = false;

      console.log(action.payload, "Here is the Value in the Action.Payload");
      const { id } = action.payload;
      if (id) {
        state.User = state.User.filter((element) => element.id !== id);
      }
    },
    [DeleteUserData.rejected]: (state, action) => {
      state.loading = true;
      state.error = action.payload;
    },

    // this is for Update the data.....

    [UpdateUserData.pending]: (state) => {
      state.loading = true;
    },
    [UpdateUserData.fulfilled]: (state, action) => {
      state.loading = false;

      // yahan hum Update k liya kuch is trah sy likhian gay...
      state.User = state.User.map((ele) =>
        ele.id === action.payload.id ? action.payload : ele
      );
    },
    [UpdateUserData.rejected]: (state, action) => {
      state.loading = true;
      state.error = action.payload;
    },
  },
});

export const { addCartItem, RemoveCartItem } = UserDataSlice.actions;
export default UserDataSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../../services/auth.service";
import tongQuanService from './../../services/tongQuan.service';
import { VND } from "../../utils/func";

export const getChartRevenue = createAsyncThunk(
    "tongQuan/getChartRevenue",
    async (thunkAPI) => {
        try {
            const response = await tongQuanService.getChartRevenue();
            console.log("response", response);
            return response.data;
        } catch (error) {
            console.log("error", error);
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const getChartProduct = createAsyncThunk(
    "tongQuan/getChartProduct",
    async (thunkAPI) => {
        try {
            const response = await tongQuanService.getChartProduct();
            console.log("response", response);
            return response.data;
        } catch (error) {
            console.log("error", error);
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);



const initialState = {
    isFetching: false,

    isSuccessGetChartRevenue: false,
    isSuccessGetChartProduct: false,

    isError: false,
    message: "",

    chartRevenueData: [],
    chartProductData: [],
};


export const tongQuanSlice = createSlice({
    name: "tongQuan",
    initialState,
    reducers: {
        clearState: (state) => {
            state.isError = false;

            state.isSuccessGetChartRevenue = false;
            state.isSuccessGetChartProduct = false;

            state.isFetching = false;
            state.message = "";
            return state;
        },

        resetData: (state, action) => {
            state.chartRevenueData = [];
            state.chartProductData = [];
            return state;
        }
    },

    extraReducers: (builder) => {
        builder.addCase(getChartRevenue.pending, (state) => {
            console.log("getChartRevenue.pending", state)
            state.isFetching = true;
        })

        builder.addCase(getChartRevenue.fulfilled, (state, action) => {
            console.log("getChartRevenue.fulfilled", action.payload)
            state.isFetching = false;
            state.isSuccessGetChartRevenue = true;

            state.chartRevenueData = action.payload.result.data.map(item => {
                return {
                    name: `Tháng ${item.month}`,
                    "Doanh thu": item.totalProductValue - item.totalDiscountValue,
                }
            }
            ).reverse();
            //   state.message = action.payload.message;
        })

        builder.addCase(getChartRevenue.rejected, (state, action) => {
            console.log("getChartRevenue.rejected", action)
            state.isFetching = false;
            state.isError = true;
            // state.message = action.error.message;
        })


    }
});

export const { clearState, resetData } = tongQuanSlice.actions;

export const tongQuanSelector = (state) => state.tongQuan;
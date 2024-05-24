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
                    key: item.month
                }
            }
            ).reverse();


            // const data = [
            //     {
            //       key: 1,
            //       name: "Tháng 1",
            //       "Doanh thu": 1000,
            //       chiphi: 0,
            //     },
            //     {
            //       key: 2,
            //       name: "Tháng 2",
            //       "Doanh thu": 2000,
            //       chiphi: 0,
            //     },
            //     {
            //       key: 3,
            //       name: "Tháng 3",
            //       "Doanh thu": 3000,
            //       chiphi: 0,
            //     },
            //     {
            //       key: 4,
            //       name: "Tháng 4",
            //       "Doanh thu": 4000,
            //       chiphi: 0,
            //     },
            //     {
            //       key: 5,
            //       name: "Tháng 5",
            //       "Doanh thu": 5000,
            //       chiphi: 0,
            //     },
            //     {
            //       key: 6,
            //       name: "Tháng 6",
            //       "Doanh thu": 0,
            //       chiphi: 0,
            //     },
            //     {
            //       key: 7,
            //       name: "Tháng 7",
            //       "Doanh thu": 7000,
            //       chiphi: 0,
            //     },
            //     {
            //       key: 8,
            //       name: "Tháng 8",
            //       "Doanh thu": 0,
            //       chiphi: 0,
            //     },
            //     {
            //       key: 9,
            //       name: "Tháng 9",
            //       "Doanh thu": 8000,
            //       chiphi: 0,
            //     },
            //     {
            //       key: 10,
            //       name: "Tháng 10",
            //       "Doanh thu": 0,
            //       chiphi: 0,
            //     },
            //     {
            //       key: 11,
            //       name: "Tháng 11",
            //       "Doanh thu": 0,
            //       chiphi: 0,
            //     },
            //     {
            //       key: 12,
            //       name: "Tháng 12",
            //       "Doanh thu": 0,
            //       chiphi: 0,
            //     },
            //   ];

            //   state.chartRevenueData = data;



            // state.chartRevenueData = action.payload.result.data.map(item => {
            //     return {
            //         name: `Tháng ${item.month}`,
            //         "Doanh thu": item.totalProductValue - item.totalDiscountValue,
            //     }
            // }
            // ).reverse();
            //   state.message = action.payload.message;
        })

        builder.addCase(getChartRevenue.rejected, (state, action) => {
            console.log("getChartRevenue.rejected", action)
            state.isFetching = false;
            state.isError = true;
            // state.message = action.payload.message;
        })









        builder.addCase(getChartProduct.pending, (state) => {
            console.log("getChartProduct.pending", state)
            state.isFetching = true;
        })

        builder.addCase(getChartProduct.fulfilled, (state, action) => {
            console.log("getChartProduct.fulfilled", action.payload)
            state.isFetching = false;
            state.isSuccessGetChartProduct = true;


            state.chartProductData = action.payload.result.data.map(item => {
                return {
                    name: `Tháng ${item.month}`,
                    "Doanh thu": item.totalProductValue - item.totalDiscountValue,
                    key: item.month
                }
            }
            ).reverse();
        })

        builder.addCase(getChartProduct.rejected, (state, action) => {
            console.log("getChartProduct.rejected", action)
            state.isFetching = false;
            state.isError = true;
            // state.message = action.payload.message;
        })

    }
});

export const { clearState, resetData } = tongQuanSlice.actions;

export const tongQuanSelector = (state) => state.tongQuan;
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../../services/auth.service";
import tongQuanService from './../../services/tongQuan.service';
import { VND } from "../../utils/func";

export const getChartRevenueYear = createAsyncThunk(
    "tongQuan/getChartRevenueYear",
    async ({ values }, thunkAPI) => {
        try {
            const response = await tongQuanService.getChartRevenueYear({ values });
            console.log("response", response);
            return response.data;
        } catch (error) {
            console.log("error", error);
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const getChartRevenueMonth = createAsyncThunk(
    "tongQuan/getChartRevenueMonth",
    async ({ values }, thunkAPI) => {
        try {
            const response = await tongQuanService.getChartRevenueMonth({ values });
            console.log("response", response);
            return response.data;
        } catch (error) {
            console.log("error", error);
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const getChartRevenueQuarter = createAsyncThunk(
    "tongQuan/getChartRevenueQuarter",
    async ({ values }, thunkAPI) => {
        try {
            const response = await tongQuanService.getChartRevenueQuarter({ values });
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
    async ({ values }, thunkAPI) => {
        try {
            const response = await tongQuanService.getChartProduct({ values });
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
        builder.addCase(getChartRevenueYear.pending, (state) => {
            console.log("getChartRevenueYear.pending", state)
            state.isFetching = true;
        })

        builder.addCase(getChartRevenueYear.fulfilled, (state, action) => {
            console.log("getChartRevenueYear.fulfilled", action.payload)
            state.isFetching = false;
            state.isSuccessGetChartRevenue = true;

            state.chartRevenueData = action.payload.result.data.map(item => {
                return {
                    name: `Tháng ${item.month}`,
                    "Doanh thu": item.totalProductValue - item.totalDiscountValue,
                    key: item.month
                }
            }
            );
        })

        builder.addCase(getChartRevenueYear.rejected, (state, action) => {
            console.log("getChartRevenueYear.rejected", action)
            state.isFetching = false;
            state.isError = true;
            // state.message = action.payload.message;
        })


        



        builder.addCase(getChartRevenueMonth.pending, (state) => {
            console.log("getChartRevenueMonth.pending", state)
            state.isFetching = true;
        })

        builder.addCase(getChartRevenueMonth.fulfilled, (state, action) => {
            console.log("getChartRevenueMonth.fulfilled", action.payload)
            state.isFetching = false;
            state.isSuccessGetChartRevenue = true;

            state.chartRevenueData = action.payload.result.data.map(item => {
                return {
                    name: `${item.day}`,
                    "Doanh thu": item.totalProductValue - item.totalDiscountValue,
                    key: item.day
                }
            }
            );
        })

        builder.addCase(getChartRevenueMonth.rejected, (state, action) => {
            console.log("getChartRevenueMonth.rejected", action)
            state.isFetching = false;
            state.isError = true;
            // state.message = action.payload.message;
        })





        builder.addCase(getChartRevenueQuarter.pending, (state) => {
            console.log("getChartRevenueQuarter.pending", state)
            state.isFetching = true;
        })

        builder.addCase(getChartRevenueQuarter.fulfilled, (state, action) => {
            console.log("getChartRevenueQuarter.fulfilled", action.payload)
            state.isFetching = false;
            state.isSuccessGetChartRevenue = true;

            state.chartRevenueData = action.payload.result.data.map(item => {
                return {
                    name: `Tháng ${item.month}`,
                    "Doanh thu": item.totalProductValue - item.totalDiscountValue,
                    key: item.day
                }
            }
            );
        })

        builder.addCase(getChartRevenueQuarter.rejected, (state, action) => {
            console.log("getChartRevenueQuarter.rejected", action)
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

            state.chartProductData = action.payload.result.data

            // state.chartProductData = action.payload.result.data.map(item => {
            //     return {
            //         name: `Tháng ${item.month}`,
            //         "Doanh thu": item.totalProductValue - item.totalDiscountValue,
            //         key: item.month
            //     }
            // }
            // ).reverse();
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
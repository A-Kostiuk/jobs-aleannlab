import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Job, LocationDetails } from '../../interfaces/job';
import jobsApi from '../../axios/jobs-api';

interface Jobs {
  allJobs: Job[];
  itemOffset: number;
  itemsPerPage: number;
  currentJobs: Job[];
  selectJob: Job | null;
}

const initialState: Jobs = {
  allJobs: [],
  itemOffset: 0,
  itemsPerPage: 15,
  currentJobs: [],
  selectJob: null,
};

export const fetchAllJobs = createAsyncThunk<Job[] | any>(
  'jobs/fetchAllJobs',
  async () => {
    const res = await jobsApi.fetchAllJobs();
    return res.data;
  },
);


const jobsSlice = createSlice({
    name: 'jobs',
    initialState,
    reducers: {
      setSelectJob(state, action: PayloadAction<string>) {
        const searchJob = state.allJobs.find(job => job.id === action.payload);
        searchJob ? state.selectJob = searchJob : state.selectJob = null;
      },
      setCurrentJobs(state, action: PayloadAction<number>) {
        const itemOffset = action.payload;
        const {itemsPerPage, allJobs} = state;
        const endOffset = itemOffset + itemsPerPage;
        state.currentJobs = allJobs.slice(itemOffset, endOffset);
        state.itemOffset = itemOffset;
      },
      setJobsLocationDetails(state, action: PayloadAction<LocationDetails[]>) {
        state.allJobs = state.allJobs.map((job, index) => ({...job, locationDetails: action.payload[index]}));
      },
    },
    extraReducers: (builder) => {
      builder.addCase(fetchAllJobs.fulfilled, (state, action) => {
        state.allJobs = action.payload;
      });
    },
  },
);

export const {setSelectJob, setCurrentJobs, setJobsLocationDetails} = jobsSlice.actions;

export default jobsSlice.reducer;

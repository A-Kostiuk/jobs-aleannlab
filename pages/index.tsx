import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import { wrapper } from '../store';
import { fetchAllJobs, setCurrentJobs, setJobsLocationDetails } from '../store/jobs-slice/jobs-slice';
import HomePageWrapper from '../components/layouts/home-page-wrapper/home-page-wrapper';
import { useCustomDispatch, useCustomSelector } from '../hooks/store';
import { selectJobs } from '../store/selectors';
import JobsList from '../components/blocks/jobs-list/jobs-list';
import Pagination from '../components/ui/pagination/pagination';
import { useEffect } from 'react';
import { geoapifyApi } from '../axios/geoapify-api';

const Home: NextPage = () => {
  const dispatch = useCustomDispatch();
  const {currentJobs, allJobs, itemOffset} = useCustomSelector(selectJobs);

  useEffect(() => {
    const fetchLocation = async () => {
      const coordinates = allJobs.map(({location}) => {
        return [location.long, location.lat];
      });
      const postId = await geoapifyApi.geocodeReversePost(coordinates);
      let timerId = setInterval(async () => {
        const locations = await geoapifyApi.geocodeReverseGet(postId.data.id);
        if (locations.data.status !== 'pending') {
          dispatch(setJobsLocationDetails(locations.data));
          clearInterval(timerId);
        }
      }, 3000);
    };
    if (allJobs.length && (!!allJobs[0].locationDetails?.name || !!allJobs[0].locationDetails?.country)) {
      fetchLocation();
    }
  }, [allJobs, dispatch]);

  useEffect(() => {
    dispatch(setCurrentJobs(itemOffset));
  }, [dispatch]);


  return (
    <HomePageWrapper>
      <Head><title>Job board</title></Head>
      <div
        className="container mx-auto p-[9px] lg:pt-[29px] lg:pb-[64px] lg:px-0 grid grid-rows-[1fr_min-content] min-h-screen">
        <h1 className="sr-only">Job board</h1>
        <JobsList jobs={currentJobs} />
        <Pagination />
      </div>
    </HomePageWrapper>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(state => async () => {
  await state.dispatch(fetchAllJobs());
  return {
    props: {},
  };
});

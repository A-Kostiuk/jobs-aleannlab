import { GetServerSideProps, NextPage } from 'next';
import { wrapper } from '../../store';
import { fetchAllJobs, setSelectJob } from '../../store/jobs-slice/jobs-slice';

import JobDetailsHeader from '../../components/blocks/job-details-header/job-details-header';
import { useCustomSelector } from '../../hooks/store';
import { selectJobs } from '../../store/selectors';
import Posted from '../../components/ui/posted/posted';
import Salary from '../../components/ui/salary/salary';
import Description from '../../components/ui/description/description';
import ApplyBtn from '../../components/ui/apply-btn/apply-btn';
import AdditionalInfo from '../../components/ui/additional-info/additional-info';
import AttachedImages from '../../components/ui/attached-images/attached-images';
import SharedSvgIcons from '../../components/ui/shared-svg-icons/shared-svg-icons';
import Contacts from '../../components/blocks/contacts/contacts';
import Link from 'next/link';

const Id: NextPage = () => {
  const job = useCustomSelector(selectJobs).selectJob;

  if (!!job) {
    const {
      description,
      createdAt,
      salary,
      title,
      responsibilities,
      benefits,
      employment_type,
      compensation_benefits, pictures, name, address, email, phone, location,
    } = job;
    return (
      <section
        className="container mx-auto px-[15px] pt-[24px] pb-[37px] lg:pt-[56px] lg:pb-[162px] lg:px-[70px] xl:grid xl:grid-cols-[1fr,_400px] xl:gap-[135px]">
        <div className="mb-[63px] xl:mb-0">
          <JobDetailsHeader />
          <div
            className="grid grid-cols-2 gap-[5px] lg:grid-cols-[3.125fr_1fr] lg:gap-x-[60px] lg:gap-y-[7px] mb-[14px] lg:mb-[7px]">
            <h2 className="col-span-full lg:col-auto text-24 font-bold tracking-m75 text-gulfBlue100">{title}</h2>
            <Posted date={createdAt}
                    className="self-center lg:order-last text-13 text-gulfBlue060 tracking-p19 font-light
                  lg:text-18 text-gulfBlue036 font-normal tracking-m56
                  " />
            <div className="justify-self-end flex flex-col items-end gap-[4px] lg-gap-px">
            <span className="text-18 font-normal tracking-m56 text-gulfBlue082 lg:text-gulfBlue100 lg:order-last">
              Brutto, per year
            </span>
              <Salary salary={salary} />
            </div>
          </div>
          <Description description={description} responsibilities={responsibilities}
                       compensationBenefits={compensation_benefits} />
          <ApplyBtn className={'mb-[135px] lg:mb-[85px]'} />
          <div className="flex flex-col gap-[64px] lg:gap-[87px] lg:flex-col-reverse lg:mb-[100px]">
            <AttachedImages pictures={pictures} />
            <AdditionalInfo employmentType={employment_type} benefits={benefits} />
          </div>
          <Link href={'/'}
                className="hidden pt-[18px] pb-[16px] px-[25px] w-max bg-gulfBlue013 text-gulfBlue100 rounded-base text-12 font-semibold uppercase xl:flex gap-[19px] lg:items-center hover:bg-gulfBlue036 active:bg-gulfBlue013">
            <SharedSvgIcons width={10} height={18} id={'arrow'} />
            Return to job board
          </Link>
        </div>
        <Contacts name={name} address={address} email={email} phone={phone} location={location} />
      </section>
    );
  }
  return null;
};

export default Id;

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(state => async ({query}) => {
  const allJobs = state.getState().jobs.allJobs;
  if (!allJobs.length) await state.dispatch(fetchAllJobs());
  const id = query.id;
  if (typeof id === 'string') {
    state.dispatch(setSelectJob(id));
  }
  return {props: {}};
});

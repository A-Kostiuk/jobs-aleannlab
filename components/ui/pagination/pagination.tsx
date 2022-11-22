import React, { FC, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import { useCustomDispatch, useCustomSelector } from '../../../hooks/store';
import { setCurrentJobs } from '../../../store/jobs-slice/jobs-slice';
import { selectJobs } from '../../../store/selectors';
import SharedSvgIcons from '../shared-svg-icons/shared-svg-icons';

const Pagination: FC = () => {
  const dispatch = useCustomDispatch();
  const {itemsPerPage, allJobs, itemOffset} = useCustomSelector(selectJobs);

  useEffect(() => {
    dispatch(setCurrentJobs(itemOffset));
  }, [dispatch, itemOffset]);


  const pageCount = Math.ceil(allJobs.length / itemsPerPage);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % allJobs.length;
    dispatch(setCurrentJobs(newOffset));
  };
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel={<SharedSvgIcons width={18} height={18} id={'paginationArrow'} className="rotate-180"
                                 fill={'fill-white lg:fill-shipCove'} />}
      previousLabel={<SharedSvgIcons width={18} height={18} id={'paginationArrow'}
                                     fill={'fill-white lg:fill-shipCove'} />}
      onPageChange={handlePageClick}
      marginPagesDisplayed={2}
      pageRangeDisplayed={2}
      pageCount={pageCount}
      renderOnZeroPageCount={() => null}
      className="flex flex-wrap lg:flex-nowrap justify-center items-center gap-x-[25px] gap-y-[5px] bg-ghostWhite lg:bg-white w-full lg:w-auto lg:min-w-[515px] rounded-[10.4px] px-[24px] py-[10px]  mx-auto text-16/19 text-gulfBlue060 lg:text-stormGrey font-bold tracking-p133"
      activeClassName="text-sanMarino lg:text-havelockBlue relative after:content-[''] after:absolute after:w-[24px] after:h-[2px] after:bg-sanMarino lg:after:bg-havelockBlue after:bottom-[-10px] after:left-[-7px]"
      nextClassName="flex items-center before:content-[''] before:block before:w-[1.3px] before:h-[24px] before:bg-gulfBlue005 lg:after:bg-hawkesBlue before:mr-[26px] ml-auto lg:opacity-[.5]"
      previousClassName="flex items-center after:content-[''] after:block after:w-[1.3px] after:h-[24px] after:bg-gulfBlue005 lg:after:bg-hawkesBlue after:ml-[26px] mr-auto lg:opacity-[.5]"
      breakClassName="self-end lg:self-center"
    />
  );
};

export default Pagination;

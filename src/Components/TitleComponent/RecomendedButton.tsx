import React, { useEffect, useState } from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { RecomendedButtonContainer } from './RecomendedButton.styled';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../redax/store';
import { setLoadpage } from '../../redax/Books/booksSlice';
import { selectLoadPage, selectMaxPage } from '../../redax/Books/booksSelector';
import { getRecommendBooks } from '../../redax/Books/booksThanks';
import { useMediaQuery } from 'react-responsive';
type Props = {}

const RecomendedButton = (props: Props) => {
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const [isButtonDisabled2, setIsButtonDisabled2] = useState(false);
    const dispatch: AppDispatch = useDispatch();
    const page = useSelector(selectLoadPage);
    const maxPage = useSelector(selectMaxPage);

    const isMobile = useMediaQuery({
        query: '(max-width: 700px)'
    });

    const isTablet = useMediaQuery({
        query: '(min-width: 768px) and (max-width: 1400px)'
    });

    useEffect(() => {
        if (page === 1) {
            setIsButtonDisabled(true);
        } else {
            setIsButtonDisabled(false);
        }
        if (page === maxPage) {
            setIsButtonDisabled2(true);
        } else {
            setIsButtonDisabled2(false);
        }
    },[page, maxPage])

    useEffect(() => {
    if (isMobile) {
    dispatch(getRecommendBooks({limit:2, page: page}));
  } else if (isTablet) {
    dispatch(getRecommendBooks({limit:8, page: page}));
  } else {
    dispatch(getRecommendBooks({page: page}));
  }
}, [page, isMobile, isTablet, dispatch]);


    const onClickNext = () => {
        dispatch(setLoadpage(page + 1));
    }

     const onClickPrev = () => {
         dispatch(setLoadpage(page - 1)); 
    }


  return (
      <RecomendedButtonContainer>
          <button disabled={isButtonDisabled} onClick={onClickPrev}
              className={(page > 1)? 'active': ''}>
              <IoIosArrowBack /></button>
          <button disabled={isButtonDisabled2}
              className={(page < maxPage) ? 'active' : ''}
              onClick={onClickNext}><IoIosArrowForward /></button>
      </RecomendedButtonContainer>
  )
}

export default RecomendedButton
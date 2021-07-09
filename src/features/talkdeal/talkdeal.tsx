import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Banner from '../main/banner';
import KeywordNav from './keyword-nav';
import { fetchTalkdealMain } from './talkdeal.slice';

const Talkdeal = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTalkdealMain());
  }, []);

  return (
    <>
      <Banner />
      <KeywordNav />
    </>
  );
};

export default Talkdeal;

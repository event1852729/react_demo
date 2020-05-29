/* eslint-disable no-unused-expressions */
import React, { useState, useEffect, useInterval } from 'react';
import axios from 'axios';
import styled, { keyframes, css } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import PackageItem from './PackageItem';
import Pagination from './Pagination';
import getPackagePostData from '../helper/api';
import { tags as Tags } from '../config/Package';

const scale = keyframes`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.1);
  }

  100% {
    transform: scale(1);
  }
`;

const SearcherDiv = styled.div`
width:100%;
max-width:700px;
margin-top: 50px;
margin: 50px;
height 250px;
display: flex;
flex-direction: column;
align-items: center;
justift-content: center;
padding: 15px;
box-shadow: 0px 0px 4px #80808078;
`;
const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0 0 15px 0;
`;

const SearcherLabel = styled.span`
color: grey;
font-size 15px;
width: 59px;
display: flex;
align-items: center;
justify-content: center;
width: ${({ width }) => width || '64px'};
`;

const SearcherInput = styled.input`
flex: 1;
font-size: 16px;
padding: 7px;
outline: none;
margin-right:15px;
border-width: 0 0 2px 0px;
border-style: solid;
border-color: gray;
border-radius: 0px;
transition-duration: 0.3s;
transition-property: border-color;
background-color: transparent;
color: black;
transition-timing-function: ease-in-out;
`;

const SearcherCategoryTagListWrapper = styled.div`
display: flex;
align-items: flex-start;
justify-content: flex-start;
width: 100%;
margin: 0 0 15px 0;

`;
const SearcherCategorysubmitListWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
margin: 0 0 15px 0;

`;
const CategoryTagBtn = styled.button`
  width: auto;
  height: 30px;
  padding: 0 8px;
  margin: 0 5px 5px;
  background-color: #5896c1;
  background-color: ${({ actived }) => (actived ? 'rgb(234, 79, 79)' : '#5896c1')};
  color:white;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border: none;
  outline: none;
  border-radius: 5px;
  font-size: 15px;
  :hover {
    opacity: 0.8;
};
`;

const PackageDivContainer = styled.div`
  width:100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const PackageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  display: ${({ disabled }) => (disabled ? 'none' : 'flex')};
`;

const PackageTitle = styled.div` 
  font-weight:bold;
  font-size: 35px;
`;

const PackageLoading = styled.h1`
  font-size: 35px;
  color:black;
`;
const PackageSearch = styled.input`

`;

const FetchMoreLoadingStyle = css`
  position: fixed;
  bottom: 25px;
  margin: 0;
`;

const LoadingBox = styled.div`
  width: 200px;
  height: 60px;
  margin: 10px;
  background-color: white;
  box-shadow: 0px 0px 25px #80808078;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  opacity: ${({ loadingStatus }) => (loadingStatus ? 1 : 0)};
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease-in-out;
  animation: ${scale} 1s linear infinite;
`;

function PostPackage() {
  const [Keyword, setKeyword] = useState('');
  const dispatch = useDispatch();
  const Packages2 = useSelector((state) => state.Package.postResult);
  const loading = useSelector((state) => state.Package.loading);
  const postSize = useSelector((state) => state.Package.postSize);
  const scroll = useSelector((state) => state.Package.scrolling);
  const TAGS = useSelector((state) => state.Tag.Tags);
  const submitKeyword = useSelector((state) => state.Package.keyword);
  const searching = useSelector((state) => state.Package.searching);
  let loadingFlag;
  if (loading) {
    loadingFlag = searching ? <LoadingBox loadingStatus={loading}>搜尋中...</LoadingBox> : <LoadingBox loadingStatus={loading}>載入中...</LoadingBox>;
  }
  const handleSubmit = () => {
    if (!Keyword) {
      alert('請輸入關鍵字!');
      return null;
    }
    dispatch({
      type: 'SEARCHER_MORE_PACKAGE_LIST', keyword: Keyword, scrolling: true, loading: true, searching: true,
    });
  };
  const resetbutton = () => {
    setKeyword('');
    dispatch({ type: 'CLAER_TAG_LIST' });
    dispatch({ type: 'CLEAR_LIST_LOADING' });
    dispatch(getPackagePostData());
  };
  useEffect(() => {
    if (loading && scroll) {
      const id = setInterval(() => {
        dispatch({
          type: 'FETCH_MORE_PACKAGE_LIST', postSize: postSize + 3, loading: false, scrolling: false,
        });
        // setscroll(false);
      }, 500);
      return () => clearInterval(id);
    }
  });
  useEffect(() => {
    const fetchPosts = async () => {
      dispatch(getPackagePostData());
    };
    fetchPosts();
  }, [dispatch]);
  const onclickTag = (index) => {
    if (TAGS.includes(parseInt(index, 10) + 1)) {
      const taglist = TAGS.filter((el) => el !== parseInt(index, 10) + 1);
      dispatch({ type: 'CLAER_TAG_LIST' });
      dispatch({ type: 'SEARCHER_TAG_LIST', Tags: taglist });
    } else {
      dispatch({ type: 'SEARCHER_TAG_LIST', Tags: [parseInt(index, 10) + 1] });
    }
  };
  useEffect(() => {
    const fetchMoreScope = () => {
      dispatch({ type: 'FETCH_MORE_PACKAGE_LIST_LOADING', loading: true, scrolling: true });
    };
    const scrolling = () => {
      const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
      const remainingHeight = scrollHeight - (scrollTop + clientHeight);
      if (remainingHeight < 200) {
        fetchMoreScope();
      }
    };
    window.addEventListener('scroll', scrolling);
    return () => {
      window.removeEventListener('scroll', scrolling);
    };
  }, [postSize , Packages2]);
  return (
    <PackageDivContainer>
      <SearcherDiv>
        <InputWrapper>
          <SearcherLabel>關鍵字：</SearcherLabel>
          <SearcherInput
            value={Keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </InputWrapper>
        {Object.keys(Tags).length ? (
          <SearcherCategoryTagListWrapper>
            <SearcherLabel width="59px">分類：</SearcherLabel>
            {Object.values(Tags).map((tag, index) => (
              <CategoryTagBtn
                onClick={() => {
                  onclickTag(index);
                }}
                actived={TAGS.includes(parseInt(index, 10) + 1)}
              >
                {tag}
              </CategoryTagBtn>
            ))}
          </SearcherCategoryTagListWrapper>
        ) : null }
        <SearcherCategoryTagListWrapper>
          <SearcherLabel width="59px">標籤：</SearcherLabel>
          <CategoryTagBtn>java</CategoryTagBtn>
          <CategoryTagBtn>react</CategoryTagBtn>
        </SearcherCategoryTagListWrapper>
        <SearcherCategorysubmitListWrapper>
          <CategoryTagBtn
            onClick={handleSubmit}
            type="button"
          >
            {searching ? '搜尋中' : '搜尋'}
          </CategoryTagBtn>
          <CategoryTagBtn
            onClick={resetbutton}
            type="button"
            actived={1}
          >
            重置
          </CategoryTagBtn>
        </SearcherCategorysubmitListWrapper>
      </SearcherDiv>
      <PackageWrapper disabled={searching}>
        {Packages2.map((Package, index) => {
          if (Package.lenght !== 0) {
            if (Package.mb_name.toLowerCase().startsWith(submitKeyword)) {
              if (!submitKeyword) {
                if (postSize > index) {
                  return (
                    <PackageItem
                      community_id={Package.community_id}
                      have_sign={Package.have_sign}
                      mb_id={Package.mb_id}
                      mb_name={Package.mb_name}
                      pg_arrival_date={Package.pg_arrival_date}
                      pg_date={Package.pg_date}
                      pg_id={Package.pg_id}
                      pg_pic={Package.pg_pic}
                      pg_sign={Package.pg_sign}
                      pg_status={Package.pg_status}
                    />
                  );
                }
              } else if (Object.keys(TAGS).length) {
                if (TAGS.includes(parseInt(Package.pg_status, 10))) {
                  return (
                    <PackageItem
                      community_id={Package.community_id}
                      have_sign={Package.have_sign}
                      mb_id={Package.mb_id}
                      mb_name={Package.mb_name}
                      pg_arrival_date={Package.pg_arrival_date}
                      pg_date={Package.pg_date}
                      pg_id={Package.pg_id}
                      pg_pic={Package.pg_pic}
                      pg_sign={Package.pg_sign}
                      pg_status={Package.pg_status}
                    />
                  );
                }
              } else {
                return (
                  <PackageItem
                    community_id={Package.community_id}
                    have_sign={Package.have_sign}
                    mb_id={Package.mb_id}
                    mb_name={Package.mb_name}
                    pg_arrival_date={Package.pg_arrival_date}
                    pg_date={Package.pg_date}
                    pg_id={Package.pg_id}
                    pg_pic={Package.pg_pic}
                    pg_sign={Package.pg_sign}
                    pg_status={Package.pg_status}
                  />
                );
              }
            }
            return null;
          }
          return null;
        })}
      </PackageWrapper>
      {loadingFlag}
    </PackageDivContainer>
  );
}

export default PostPackage;

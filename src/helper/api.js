import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { FETCH_PACKAGE_LIST } from '../actions/Package';

const getPackagePostData = () => function (dispatch) {
  dispatch({ type: FETCH_PACKAGE_LIST, list: [], loading: true });
  const params = new URLSearchParams();
  params.append('community_id', '28');
  axios.post('http://140.136.155.97/package/manager_content.php', params)
    .then((response) => {
      console.log(response.data);
      dispatch({ type: FETCH_PACKAGE_LIST, list: response.data, loading: false });
    });
};
export default getPackagePostData;

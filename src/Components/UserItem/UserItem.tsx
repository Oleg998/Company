import { useParams } from "react-router-dom";
import notImg from "../../img/no_img.jpg";
import UserInfo from "./UserInfo/UserInfo";
import { useAppDispatch, useAppSelector } from "hooks/useTypedRedux";
import { fetchUsersById } from "Store/User/user-operations";
import { useEffect } from "react";
import { selectaUser } from "Store/User/user-selectors";
import Loader from "../Loader/Loader";


const UserItem = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id) {
      const numId = Number(id);
      if (!isNaN(numId)) {
        dispatch(fetchUsersById({ id: numId }));
      }
    }
  }, [dispatch, id]);

  const { user } = useAppSelector(selectaUser);

  if (!user) {
    return <Loader />;
  }

  const {
    user_id,
    user_email,
    user_firstname,
    user_lastname,
    user_avatar,
    user_status,
    user_city,
    user_phone,
    user_links,
    is_superuser,
  } = user;

  return (
    <UserInfo
      user_id={user_id}
      user_email={user_email}
      user_firstname={user_firstname}
      user_lastname={user_lastname}
      user_avatar={user_avatar || notImg}
      user_status={user_status}
      user_city={user_city}
      user_phone={user_phone}
      user_links={user_links}
      is_superuser={is_superuser}
    />
  );
};

export default UserItem;

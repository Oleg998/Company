import React, { useEffect, useState } from "react";
import css from "./UserList.module.css";
import UserGalleryItem from "./UserGalleryItem/UserGalleryItem";
import { selectaUser } from "Store/User/user-selectors";
import { useAppDispatch, useAppSelector } from "hooks/useTypedRedux";
import { fetchUsers } from "Store/User/user-operations";
import Pagination from "@mui/material/Pagination";
import { useSearchParams } from "react-router-dom";
import Loader from "Components/Loader/Loader";

export interface UserData {
  user_id: number;
  user_email: string;
  user_firstname: string;
  user_lastname: string;
  user_avatar?: string | null;
  
}

const ITEMS_PER_PAGE = 9;

const UserList = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const page: number = Number(searchParams.get("page")) || 1;

  const [currentPage, setCurrentPage] = useState(page);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers({ page: currentPage, page_size: ITEMS_PER_PAGE }));
  }, [dispatch, currentPage]);

  const { users, isLoading, error, total_results } =
    useAppSelector(selectaUser);

  const pageCount = Math.ceil(total_results / ITEMS_PER_PAGE);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
    setSearchParams({ page: value.toString() });
  };
  if (!users) {
    return <Loader />;
  }
  const userListItems = users.map((user: UserData) => (
    <UserGalleryItem
      key={user.user_id}
      user_id={user.user_id}
      user_email={user.user_email}
      user_firstname={user.user_firstname}
      user_lastname={user.user_lastname}
      user_avatar={user.user_avatar}
    />
  ));

  return (
    <div>
      {isLoading && <p>Loading users...</p>}
      {error && <p className={css.error}>Error: {error}</p>}
      <ul className={css.listItem}>{userListItems}</ul>
      <Pagination
        className={css.pagination}
        count={pageCount}
        page={currentPage}
        onChange={handlePageChange}
        variant="outlined"
        color="primary"
      />
    </div>
  );
};

export default UserList;

import { useMutation, useQuery } from "@tanstack/react-query";
import React from "react";

import { FiUserX, FiUserCheck } from "react-icons/fi"; // Importing icons
import {
  listUsersAPI,
  toggleUserBlockAPI,
} from "../../APIServices/users/usersAPI";
import { BASE_URL } from "../../utils/baseEndpoint";

const UsersList = () => {
  const { data, isError, isLoading, refetch } = useQuery({
    queryKey: ["users"],
    queryFn: listUsersAPI,
  });
  //toggle user mutation
  const mutation = useMutation({
    mutationFn: toggleUserBlockAPI,
    mutationKey: ["toggle-block-user"],
  });

  //Toogle user handler
  const toggleUserBlocking = (user) => {
    const actionURL = user?.isBlocked
      ? `${BASE_URL}/users/unblock-user`
      : `${BASE_URL}/users/block-user`;
    const userId = user._id;
    const data = {
      actionURL,
      userId,
    };
    mutation
      .mutateAsync(data)
      .then(() => {
        refetch(); // refetch the users
      })
      .catch((e) => console.log(e));
  };
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Users List</h2>
      <div className="space-y-3">
        {data?.map((user) => (
          <div
            key={user.id}
            className="flex items-center justify-between bg-gray-100 p-3 rounded-lg"
          >
            <span className="font-medium">
              {user.username}-{user.accountType}
            </span>
            <button
              className={`flex items-center gap-2 p-2 rounded text-white ${
                user.isBlocked ? "bg-red-500" : "bg-green-500"
              }`}
              onClick={() => toggleUserBlocking(user)}
            >
              {user.isBlocked ? (
                <FiUserX className="text-xl" />
              ) : (
                <FiUserCheck className="text-xl" />
              )}
              {user.isBlocked ? "Unblock" : "Block"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersList;

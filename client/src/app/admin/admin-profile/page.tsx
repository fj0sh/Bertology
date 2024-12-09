"use client";
import ImageUpload from "@/components/input/ImageUpload";
import useAuth from "@/hooks/requests/useAuth";
import { decrypter } from "@/lib/function/encrypter/encrypter";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Cookies from "universal-cookie";

const Profile = () => {
  const cookie = new Cookies();
  const { getUserById, user, editProfile } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [updatedUser, setUpdatedUser] = useState({
    firstname: "",
    lastname: "",
    phoneNumber: "",
    emailAddress: "",
    username: "",
  });
  const [newImage, setNewImage] = useState("");

  console.log(updatedUser);
  console.log(user);

  useEffect(() => {
    setNewImage(user ? user[0].profilePicture : "");
    const userId = JSON.parse(decrypter(cookie.get("jwt_auth"))).user.id;
    getUserById(userId).then((data) => {
      if (data) {
        setUpdatedUser({
          firstname: data[0].firstname,
          lastname: data[0].lastname,
          phoneNumber: data[0].phoneNumber,
          emailAddress: data[0].emailAddress,
          username: data[0].username,
        });
        setNewImage(data[0].profilePicture);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUpdatedUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    const userId = JSON.parse(decrypter(cookie.get("jwt_auth"))).user.id;
    try {
      await editProfile(
        parseInt(userId),
        updatedUser.firstname,
        updatedUser.lastname,
        updatedUser.phoneNumber,
        updatedUser.emailAddress,
        updatedUser.username,
        newImage
      );
      setIsEditing(false);
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Failed to update profile.");
    }
  };

  return (
    <div className="w-full flex-col gap-4 p-10">
      {user && (
        <>
          <div className="flex">
            <div className="w-[20%] h-full text-white">
              {isEditing ? (
                <div className="w-[200px] h-[200px] border border-dashed border-orangeRed p-1 rounded-full">
                  <ImageUpload
                    value={newImage}
                    onChange={(value) => handleChange}
                  />
                </div>
              ) : (
                <Image
                  src={newImage || "/images/empty-profile.jpg"}
                  width={200}
                  height={200}
                  alt="profile-Image.png "
                  className="border border-orangeRed rounded-full p-1"
                ></Image>
              )}
            </div>
            <div className="flex flex-col gap-4 text-white">
              <p>
                {user[0]?.firstname} {user[0]?.lastname}
              </p>
              <p>{user[0]?.emailAddress}</p>
            </div>
          </div>
          <div className="w-[80%] h-full  p-4 text-white">
            <div className="flex flex-col gap-2">
              <p className="text-[18px]">First Name:</p>
              {isEditing ? (
                <input
                  type="text"
                  name="firstname"
                  value={updatedUser.firstname}
                  onChange={handleChange}
                  className="bg-background border rounded-md border-orangeRed p-2 w-[20rem]"
                  placeholder="First Name"
                />
              ) : (
                <p className="p-2 font-semibold text-[18px]">
                  {updatedUser.firstname}
                </p>
              )}

              <p className="text-[18px]">Last Name:</p>
              {isEditing ? (
                <input
                  type="text"
                  name="lastname"
                  value={updatedUser.lastname}
                  onChange={handleChange}
                  className="bg-background border rounded-md border-orangeRed p-2 w-[20rem]"
                  placeholder="First Name"
                />
              ) : (
                <p className="p-2 font-semibold text-[18px]">
                  {updatedUser.lastname}
                </p>
              )}
              <p className="text-[18px]">Phone Number:</p>
              {isEditing ? (
                <input
                  maxLength={11}
                  type="text"
                  name="phoneNumber"
                  value={updatedUser.phoneNumber}
                  onChange={handleChange}
                  className="bg-background border rounded-md border-orangeRed p-2 w-[20rem]"
                  placeholder="First Name"
                />
              ) : (
                <p className="p-2 font-semibold text-[18px]">
                  {updatedUser.phoneNumber}
                </p>
              )}
              <p className="text-[18px]">Email Address:</p>
              {isEditing ? (
                <input
                  type="text"
                  name="emailAddress"
                  value={updatedUser.emailAddress}
                  onChange={handleChange}
                  className="bg-background border rounded-md border-orangeRed p-2 w-[20rem]"
                  placeholder="First Name"
                />
              ) : (
                <p className="p-2 font-semibold text-[18px]">
                  {updatedUser.emailAddress}
                </p>
              )}
              <p className="text-[18px]">Username:</p>
              {isEditing ? (
                <input
                  type="text"
                  name="username"
                  value={updatedUser.username}
                  onChange={handleChange}
                  className="bg-background border rounded-md border-orangeRed p-2 w-[20rem]"
                  placeholder="First Name"
                />
              ) : (
                <p className="p-2 font-semibold text-[18px]">
                  {updatedUser.username}
                </p>
              )}
            </div>
            {isEditing ? (
              <div className="flex gap-4">
                <button
                  onClick={handleSave}
                  className="bg-green-500 text-white py-2 px-4 rounded mt-2 "
                >
                  Save
                </button>
                <button
                  onClick={handleEditToggle}
                  className="bg-gray-500 text-white py-2 px-4 rounded mt-2"
                >
                  Cancel
                </button>
              </div>
            ) : (
              <button
                onClick={handleEditToggle}
                className="bg-blue-500 text-white p-2 rounded mt-2"
              >
                Edit Profile
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Profile;

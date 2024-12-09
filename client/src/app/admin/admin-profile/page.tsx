"use client";
import ImageUpload from "@/components/input/ImageUpload";
import useProtect from "@/hooks/fetcher/useProtect";
import useAuth from "@/hooks/requests/useAuth";
import { decrypter } from "@/lib/function/encrypter/encrypter";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Cookies from "universal-cookie";

const Profile = () => {
  useProtect();

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

  const cookies = new Cookies();
  const router = useRouter();

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
      Swal.fire({
        title: "Confirm Edit",
        text: "Are you sure you want to save this edit? You will be logged out for security purposes",
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "Yes",
        cancelButtonText: "No",
      }).then(async (res) => {
        if (res.isConfirmed) {
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
          cookies.remove("jwt_auth");
          router.push("/login");
        }
      });
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Failed to update profile.");
    }
  };

  return (
    <div className="w-full flex gap-4 p-10">
      {user && (
        <>
          <div className="flex w-[20%] h-full">
            <div className="w-full h-full flex items-center justify-center text-white bg-ninjaBlack py-6 rounded-md">
              {isEditing ? (
                <div className="w-[200px] h-[200px] border border-dashed border-orangeRed p-1 rounded-md">
                  <ImageUpload
                    value={newImage}
                    onChange={(value) => setNewImage(value)}
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
          </div>
          <div className="w-[80%] h-full rounded-md text-white flex flex-col gap-4">
            <div className="flex flex-col gap-4 text-white justify-center bg-ninjaBlack p-4 rounded-md">
              <p className="text-[28px] font-semibold">
                {user[0]?.firstname} {user[0]?.lastname}
              </p>
              <p className="text-[15px]">{user[0]?.emailAddress}</p>
            </div>
            <div className="flex flex-col gap-2 bg-ninjaBlack p-4 rounded-md">
              <p className="text-[18px]">First Name:</p>
              {isEditing ? (
                <input
                  type="text"
                  name="firstname"
                  value={updatedUser.firstname}
                  onChange={handleChange}
                  className="bg-ninjaBlack border rounded-md border-orangeRed p-2 w-[20rem]"
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
                  className="bg-ninjaBlack border rounded-md border-orangeRed p-2 w-[20rem]"
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
                  className="bg-ninjaBlack border rounded-md border-orangeRed p-2 w-[20rem]"
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
                  className="bg-ninjaBlack border rounded-md border-orangeRed p-2 w-[20rem]"
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
                  className="bg-ninjaBlack border rounded-md border-orangeRed p-2 w-[20rem]"
                  placeholder="First Name"
                />
              ) : (
                <p className="p-2 font-semibold text-[18px]">
                  {updatedUser.username}
                </p>
              )}
              {isEditing ? (
                <div className="flex gap-4">
                  <button
                    onClick={handleSave}
                    className="bg-green-500 text-white py-2 px-4 rounded mt-2 w-[10%]"
                  >
                    Save
                  </button>
                  <button
                    onClick={handleEditToggle}
                    className="bg-gray-500 text-white py-2 px-4 rounded mt-2 w-[10%]"
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <button
                  onClick={handleEditToggle}
                  className="bg-blue-500 text-white p-2 rounded mt-2 w-[10%]"
                >
                  Edit Profile
                </button>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Profile;

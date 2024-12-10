import React from "react";
import Swal from "sweetalert2";

const TryAgainSwal = (text?: string) => {
  Swal.fire({
    title: "Try Again",
    text: `${text ? text : "An error has occured. Please try again later"}.`,
    icon: "error",
    confirmButtonText: "Try Again",
    confirmButtonColor: "#FF0000",
    allowOutsideClick: false,
    allowEscapeKey: false,
    showConfirmButton: true,
    showCancelButton: false,
    timerProgressBar: true,
  });
};

export { TryAgainSwal };

import React from "react";
import styles from "./page.module.css";
import FormContact from "@/components/FormContact/FormContact";
import { ToastContainer } from "react-toastify";

type Props = {};

const ContactPage = ({}: Props) => {
  return (
    <div className={styles["page-contact"]}>
      <h2>Lorem est auctor neque nec urna. Nam pretium turpis et arcu.</h2>
      <h3>
        The view has been identified as the one from his bedroom window, facing
        east, a view which.
      </h3>
      <FormContact />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default ContactPage;

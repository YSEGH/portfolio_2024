"use client";

import React, { useRef } from "react";
import styles from "./page.module.css";
import FormContact from "@/components/FormContact/FormContact";
import { ToastContainer } from "react-toastify";
import ScrollBar from "@/components/ScrollBar/ScrollBar";
import Map from "@/components/Map/Map";
import Spacer from "@/components/Spacer/Spacer";

type Props = {};

const ContactPage = ({}: Props) => {
  const containerRef = useRef(null);

  return (
    <div className={styles["page-contact"]} ref={containerRef}>
      <ScrollBar container={containerRef} background={"var(--white)"} />
      <div className={styles["content"]}>
        <h2>Lorem est auctor neque nec urna. Nam pretium turpis et arcu.</h2>
        <Map />
        <Spacer withHr={true} size={24} />
        <h2>Lorem est auctor neque nec urna. Nam pretium turpis et arcu.</h2>
        <h3>
          The view has been identified as the one from his bedroom window,
          facing east, a view which.
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
    </div>
  );
};

export default ContactPage;

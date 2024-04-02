"use client";

import React, { useCallback, useEffect } from "react";
import { Resolver, SubmitHandler, useForm } from "react-hook-form";
import styles from "./FormContact.module.css";
import cx from "classnames";
import { Bounce, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { inter } from "@/app/font";

type Props = {};

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};

const resolver: Resolver<FormValues> = async (values) => {
  const errors: Record<string, { type: string; message: string }> = {};

  if (!values.firstName) {
    errors.firstName = {
      type: "required",
      message: "Merci de saisir votre prénom",
    };
  }

  if (!values.lastName) {
    errors.lastName = {
      type: "required",
      message: "Merci de saisir votre nom",
    };
  }

  if (!values.email) {
    errors.email = {
      type: "required",
      message: "Merci de saisir votre email",
    };
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = {
      type: "invalid",
      message: "Merci de saisir une adresse email valide",
    };
  }

  if (!values.message) {
    errors.message = {
      type: "required",
      message: "Merci de saisir votre message",
    };
  }

  return {
    values,
    errors,
  };
};

const FormContact: React.FC<Props> = ({}: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver });

  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);

  const getErrorMessage = useCallback(() => {
    if (errors.firstName) {
      return errors.firstName.message;
    } else if (errors.lastName) {
      return errors.lastName.message;
    } else if (errors.email) {
      return errors.email.message;
    } else if (errors.message) {
      return errors.message.message;
    } else {
      return "";
    }
  }, [errors]);

  useEffect(() => {
    const errorMessage = getErrorMessage();
    if (errorMessage) {
      toast.error(errorMessage, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
    }
  }, [errors, getErrorMessage]);

  return (
    <form className={styles["form-contact"]} onSubmit={handleSubmit(onSubmit)}>
      <input
        placeholder="Nom"
        className={cx(
          inter.className,
          styles["form-input"],
          styles["input-lastname"],
          {
            [styles["is-error"]]: errors.lastName,
          }
        )}
        {...register("lastName")}
      />
      <input
        placeholder="Prénom"
        className={cx(
          inter.className,
          styles["form-input"],
          styles["input-firstname"],
          {
            [styles["is-error"]]: errors.firstName,
          }
        )}
        {...register("firstName")}
      />

      <input
        placeholder="Email"
        className={cx(
          inter.className,
          styles["form-input"],
          styles["input-email"],
          {
            [styles["is-error"]]: errors.email,
          }
        )}
        {...register("email")}
      />
      <textarea
        placeholder="Message"
        className={cx(
          inter.className,
          styles["form-input"],
          styles["input-message"],
          {
            [styles["is-error"]]: errors.message,
          }
        )}
        {...register("message")}
      />
      <input
        type="submit"
        className={cx(
          inter.className,
          styles["form-input"],
          styles["input-submit"]
        )}
      />
    </form>
  );
};

export default FormContact;

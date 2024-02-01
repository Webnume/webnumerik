import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";
import styles from "../styles/Contact.module.scss";
import Header from "../components/Header";
import { useForm } from "react-hook-form";
import { gsap } from "gsap";
import { sendForm } from "@emailjs/browser";

export default function Contact() {
  const [message, setMessage] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const rightRef = useRef();
  const leftRef = useRef();
  const formRef = useRef();
  const [replyTo, setReplyTo] = useState({});
  // const onSubmit = () => {
  //   sendForm(
  //     "service_61kxv15",
  //     "template_f5slp2g",
  //     form.current,
  //     "EYm3Yz_oxNRXuNCCY"
  //   ).then(
  //     (result) => {
  //       console.log(result.text);
  //     },
  //     (error) => {
  //       console.log(error.text);
  //     }
  //   );
  //   reset();
  // };
  const onSubmit = async (data) => {
    console.log(data);
    const formatedData = new FormData(formRef.current);
    console.log(formatedData);

    const response = await fetch(
      "https://www.pcnumerik.fr/form-recaptcha-webnumerik/contact-sans-recaptcha.php",
      {
        method: "POST",
        body: formatedData,
      }
    );
    const formData = await response.text();
    // console.log(formData);
    reset();
    setMessage(formData);
  };

  useEffect(() => {
    let tl = gsap.timeline();
    tl.add("start");
    tl.from(
      rightRef.current,
      {
        duration: 2,
        ease: "bounce.out",
        opacity: 0,
        repeat: 0,
      },
      "start"
    );

    tl.from(
      leftRef.current,
      {
        duration: 1,
        ease: "bounce.out",
        x: -200,
        opacity: 0,
        repeat: 0,
      },
      "start"
    );
  }, []);

  const handleInputChange = (e) =>
    setReplyTo({
      ...replyTo,
      reply_to: e.currentTarget.value,
    });

  return (
    <div className="container">
      <Head>
        <title>WebNumerik Contact</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <div className={styles.left} ref={leftRef}>
          <div className={styles.wrapper}>
            <h1 className={styles.title}>LAISSEZ UN MOT </h1>
            <p className={styles.description}>
              Des questions ou même juste un petit bonjour, envoyez votre
              message.
            </p>
          </div>
        </div>
        <div className={styles.right} ref={rightRef}>
          {" "}
          {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={styles.form}
            ref={formRef}
          >
            {/* register your input into the hook by invoking the "register" function */}
            <label htmlFor="nom">Nom *</label>
            <input
              type="text"
              placeholder="Nom"
              {...register("nom", { required: true })}
              id="nom"
              name="nom"
              className={styles.inputText}
            />
            {/* errors will return when field validation fails  */}
            {errors.nom && (
              <span className={styles.error}>This field is required</span>
            )}

            {/* include validation with required or other standard HTML validation rules */}
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              placeholder="Email"
              {...register("email", { required: true })}
              id="email"
              name="email"
              className={styles.inputText}
              onChange={handleInputChange}
            />
            {/* errors will return when field validation fails  */}
            {errors.email && (
              <span className={styles.error}>This field is required</span>
            )}

            <label htmlFor="message">Message *</label>
            <textarea
              rows={4}
              placeholder="Message..."
              {...register("message", { required: true })}
              id="message"
              name="message"
              className={styles.inputText}
            ></textarea>
            {/* errors will return when field validation fails  */}
            {errors.message && (
              <span className={styles.error}>This field is required</span>
            )}
            <input
              {...register("from_name")}
              id="from_name"
              name="from_name"
              type="hidden"
              value="WebNumerik.fr"
            />
            <input
              {...register("reply_to")}
              id="reply_to"
              name="reply_to"
              type="hidden"
              value={replyTo}
            />

            <input
              type="submit"
              value="Envoyer le message"
              className={styles.buttonContact}
            />
         <label style={{padding:"1rem"}}>{message}</label> 
          </form>
        </div>
      </main>
    </div>
  );
}

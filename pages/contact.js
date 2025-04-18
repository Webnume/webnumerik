import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";
import styles from "../styles/Contact.module.scss";
import Header from "../components/Header";
import { useForm } from "react-hook-form";
import { gsap } from "gsap";


export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const rightRef = useRef(null);
  const leftRef = useRef(null);
  const formRef = useRef(null);


  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    // e.preventDefault();
    setStatus("Envoi en cours ...");

    const response = await fetch("/api/contact/route", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    

    if (result.status === "OK") {
      setStatus("Email envoyé avec succès!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setStatus("Echec d'envoi de l'email");
    }
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
            <label htmlFor="name">Nom *</label>
            <input
              type="text"
              placeholder="Nom"
              {...register("name", { required: true })}
              id="name"
              name="name"
              className={styles.inputText}
              onChange={handleChange}
              value={formData.name}
            />
            {/* errors will return when field validation fails  */}
            {errors.name && (
              <span className={styles.error}>* Champs requis</span>
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
              onChange={handleChange}
              value={formData.email}
            />
            {/* errors will return when field validation fails  */}
            {errors.email && (
              <span className={styles.error}>* Champs requis</span>
            )}

            <label htmlFor="message">Message *</label>
            <textarea
              rows={4}
              placeholder="Message..."
              {...register("message", { required: true })}
              id="message"
              name="message"
              className={styles.inputText}
              onChange={handleChange}
              value={formData.message}
            ></textarea>
            {/* errors will return when field validation fails  */}
            {errors.message && (
              <span className={styles.error}>* Champs requis</span>
            )}

            <input
              type="submit"
              value="Envoyer le message"
              className={styles.buttonContact}
            />
          </form>
          {status && <p>{status}</p>}
        </div>
      </main>
    </div>
  );
}

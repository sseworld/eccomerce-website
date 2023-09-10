import React from "react";
import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;
  return (
    <Wrapper>
      <h2 className="common-heading">Contact page</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6490.762493773169!2d77.12415147094148!3d30.48250710794818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fa658df4666d7%3A0x86f073da4fb48115!2z4KSX4KS14KSw4KWN4KSo4KSu4KWH4KSC4KSfIOCkruClieCkoeCksiDgpLjgpILgpLjgpY3gpJXgpYPgpKTgpL8g4KS44KWA4KSo4KS_4KSv4KSwIOCkuOClh-CkleCkguCkoeCksOClgCDgpLXgpL_gpKbgpY3gpK_gpL7gpLLgpK8g4KSo4KS-4KSw4KS-4KSv4KSj4KSX4KWd!5e0!3m2!1shi!2sin!4v1694354715373!5m2!1shi!2sin"
        width="100%"
        height="400"
        style={{ border: "0" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="container">
        <div className="contact-form">
          <form
            action=""
            method="POST"
            className="contact-inputs"
          >
            <input
              type="text"
              placeholder="username"
              name="username"
              required
              autoComplete="off"
            />
            <input
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required
            />
            <textarea
              name="Message"
              cols="30"
              rows="10"
              required
              autoComplete="off"
              placeholder="Enter you message"
            ></textarea>
            <input type="submit" value="send" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;

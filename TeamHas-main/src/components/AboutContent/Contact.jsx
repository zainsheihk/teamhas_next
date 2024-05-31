"use client"
import { ToastSuccess } from "@/utils/ToastShow";
import { contactUsAPiHandler } from "@/utils/api_handler";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";

const Contact = () => {
  const tempForm = {
    firstname: "",
    lastname: "",
    email: "",
    phoneNumber: "",
    business: "",
    coverLetter: "",
  }
  const [emailForm, setEmailForm] = useState(tempForm);
  const [loading, setLoading] = useState(false);

  const router = useRouter()

  const handleChange = (e) => {
    const { name, value } = e.target;

    let updatedValue;
    if (e.target.name === "phoneNumber") {
      updatedValue = value.replace(/[^0-9]/g, '')
    } else {
      updatedValue = value
    }

    setEmailForm({
      ...emailForm,
      [name]: updatedValue,
    })
  }

  const submitEmail = async (data) => {
    console.log("Submit Email")
    setLoading(true)
    try {
      const promise = contactUsAPiHandler(data); // Call the API only once
      const promiseToastId = toast.promise(promise, {
        pending: 'Submitting',
        success: 'Email Sent Successfully',
        error: 'Error in Submitting Form',
      });
  
      const response = await promise; // Wait for the promise to resolve
      if (response?.status) {
        toast.update(promiseToastId, {
          render: 'success',
          autoClose: 3000, // Close the toast automatically after 3 seconds
        });
        setEmailForm(tempForm)
        router.push("/thankyou/call-confirmed")
      } else {
        toast.update(promiseToastId, {
          render: 'error',
          autoClose: 3000, // Close the toast automatically after 3 seconds
        });
      }
  
    } catch (err) {
      console.log(err, "error on submit email")
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
      submitEmail(emailForm)

  }

  return (
    <main className="contact-page main-contact" id="gradient-bg">
      <div className="main-content banner-2">
        <h2 data-aos-duration="200" data-aos="fade-up">
          <span className="heading-gradient">Contact Us</span>
        </h2>
        {/* <!-- <h2 data-aos-duration="300" data-aos="fade-up">HOME | CONTACT</h2> --> */}
      </div>
      <div className="container pb-200">
        <div className="contact-form">
          <div className="left" data-aos="fade-right">
            <h2>CONTACT US</h2>
            <h3>
              Have questions?
              <br /> Hit us up with your questions/wild ideas
            </h3>
            <p>
              TeamHAS Visionz is all about turning chit-chat into creative
              fireworks!
            </p>
          </div>
          <div className="right">
            <form id="sendconact" onSubmit={handleSubmit}>
              <div
                className="form-group"
                data-aos-duration="200"
                data-aos="fade-up"
              >
                <input
                  className="form-control"
                  name="firstname"
                  type="text"
                  placeholder="First Name"
                  value={emailForm?.firstname}
                  onChange={handleChange}
                  required

                />
                <input
                  className="form-control"
                  name="lastname"
                  type="text"
                  placeholder="Last Name"
                  value={emailForm?.lastname}
                  onChange={handleChange}
                  required
                />
              </div>
              <div
                className="form-group"
                data-aos-duration="200"
                data-aos="fade-up"
              >
                <input
                  className="form-control"
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  value={emailForm?.email}
                  onChange={handleChange}
                  required
                />
                <input
                  className="form-control"
                  name="phoneNumber"
                  type="tel"
                  placeholder="Phone Number"
                  value={emailForm?.phoneNumber}
                  onChange={handleChange}
                  required
                />
              </div>
              <input
                className="form-control"
                type="text"
                name="business"
                placeholder="Business"
                value={emailForm?.business}
                  onChange={handleChange}
                  required
              />
              <textarea
                data-aos-duration="200"
                data-aos="fade-up"
                placeholder="Cover letter"
                className="form-control"
                name="coverLetter"
                id=""
                cols="30"
                rows="10"
                value={emailForm?.coverLetter}
                onChange={handleChange}
                required
              ></textarea>
              <button
                className="btn btn-primary"
                data-aos-duration="200"
                data-aos="fade-left"
                type='submit'
                disabled={loading}
              >
                <span>Submit</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;

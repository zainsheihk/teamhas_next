'use client'
import { ToastError, ToastSuccess } from '@/utils/ToastShow';
import { bookACallAPiHandler } from '@/utils/api_handler';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useState } from 'react'
import { toast } from 'react-toastify';

const BookacallComp = () => {
  const param = useSearchParams();
  const router = useRouter();
  const email = param?.get('email');
  const tempForm = {
    firstname: "",
    lastname: "",
    companyEmail: email,
    phoneNumber: "",
    plan: "",
  }
  const [emailForm, setEmailForm] = useState(tempForm);
  const [customplan, setCustomplan] = useState("");
  const [loading, setLoading] = useState(false);

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

  const submitEmail = async (updatedStateValues) => {
    console.log("Submit Email")
    setLoading(true)
    try {
      const promise = bookACallAPiHandler(updatedStateValues); // Call the API only once
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
        setEmailForm({ ...tempForm, companyEmail: "" })
        setCustomplan("");
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

    if (!emailForm?.plan) {
      ToastError("Fields are required!")
      return ""
    }
    if (emailForm?.plan === "custom_plan" && !customplan) {
      ToastError("Fields are required!")
      return ""
    }

    else {
      let updatedStateValues = emailForm;
      if (emailForm?.plan === "custom_plan") {
        updatedStateValues = { ...emailForm, customplan }
      }

      submitEmail(updatedStateValues)
    }


  }

  return (
    <main className="contact-page form-page">
      <div className="container">
        <img
          width="600px"
          className="img-mobile"
          src="/imgs/book-a-call-form-illustration-02.png"
        />

        <div className="contact-form">
          <div className="left" data-aos="fade-right">
            <h3>
              See what TeamHas <br /> can do for you
            </h3>
            <p>
              Book a short 20-min demo and discover a new way to get quality{" "}
              <br /> design work done reliably and affordably
            </p>
          </div>
          <div className="right cs-book-call">
            <form id="sendconact" autoComplete='off' noValidate onSubmit={handleSubmit}>
              <p>First Name</p>
              <input
                className="form-control"
                name="firstname"
                type="text"
                placeholder="Eg . Nelson"
                value={emailForm?.firstname}
                onChange={handleChange}
                required

              />
              <p>Last Name</p>

              <input
                className="form-control"
                name="lastname"
                type="text"
                placeholder="Eg . James"
                value={emailForm?.lastname}
                onChange={handleChange}
                required
              />

              <p>Company Email</p>
              <input
                className="form-control"
                name="companyEmail"
                type="email"
                placeholder="Eg . nelsonjames@gmail.com"
                value={emailForm?.companyEmail}
                onChange={handleChange}
                required
              />

              <p>Phone Number</p>
              <input
                className="form-control"
                name="phoneNumber"
                type="text"
                placeholder="Eg . +1 6892 0292"
                maxLength={11}
                value={emailForm?.phoneNumber}
                onChange={handleChange}
                required
              />

              <p>Select A Plan</p>
              <select
                className="form-control select-control select-plan"
                name="plan"
                value={emailForm?.plan}
                onChange={(e) => {
                  if (e.target.value === "custom_plan") {
                    let label = document.getElementById("requirements-label")
                    label.style.display = "block";
                    label.classList.add('slide-down-animation');
                    let inputTag = document.getElementById("custom-plan-input");
                    inputTag.style.display = 'block';
                    inputTag.classList.add('slide-down-animation');
                  } else {
                    let label = document.getElementById("requirements-label")
                    label.style.display = "none";
                    let inputTag = document.getElementById("custom-plan-input");
                    inputTag.style.display = "none";
                  }
                  handleChange(e)
                }}
              >
                <option hidden>Please Select</option>
                <option value="design_essentials">Design Essentials</option>
                <option value="complete_creative_package">Complete Creative Package</option>
                <option value="mainstream_needs">Mainstream Needs</option>
                <option value="custom_plan">Custom Plan</option>
              </select>

              <p id="requirements-label" style={{ display: "none" }}>
                Write Your Requirements
              </p>
              <input
                className="form-control"
                type="text"
                id="custom-plan-input"
                style={{ display: "none" }}
                placeholder="Requirements"
                name="customplan"
                value={customplan}
                onChange={(e) => setCustomplan(e.target.value)}
              />


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
}

export default BookacallComp;
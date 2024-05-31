"use client"
import { ToastError, ToastWarn } from '@/utils/ToastShow';
import { applyNowAPiHandler } from '@/utils/api_handler';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useState } from 'react'
import { toast } from 'react-toastify';

const ApplyNow = () => {
  const param = useSearchParams();
  const queryEmail = param?.get('email');
  const router = useRouter();
  const tempObj = {
    fullname: "",
    email: queryEmail ? queryEmail : "",
    phonenumber: "",
    curcompany: "",
    linkdin: "",
    message: "",
    pdf: "",
  }
  const [selectPdf, setSelectPdf] = useState("select");
  const [formFields, setFormFields] = useState(tempObj);
  const [loading, setLoading] = useState(false);



  const handleChange = (e) => {
    const { name, value } = e.target;

    let updatedValue;
    if (e.target.name === "phonenumber") {
      updatedValue = value.replace(/[^0-9]/g, '')
    } else {
      updatedValue = value
    }

    setFormFields({
      ...formFields,
      [name]: updatedValue
    })
  }

  const handleChangePDF = (e) => {
    var reader = new FileReader();
    var file = e.target.files[0];

    console.log(file);
    if(file?.type != "application/pdf") return ToastWarn("only pdf file uploaded")
    if(file?.size > 2000000) return ToastWarn("file size support 2mb only")

    reader.onload = function (event) {
      setFormFields({
        ...formFields,
        pdf: event.target.result,
      });
    };

    reader.readAsDataURL(file);

    setSelectPdf("selected")
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (selectPdf === "select") {
      ToastError("select file first");
    } else {

      setLoading(true)
    try {
      const promise = applyNowAPiHandler(formFields); // Call the API only once
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
        setFormFields({ ...tempObj, email: "" })
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
  }


  return (
    <main className="applynow contact-page form-page">
      <div className="container">
        <img width="360px" className="img-mobile" src="/imgs/applynow-left.png" />

        <div className="contact-form">
          <div className="left" data-aos="fade-right">
            <h6>Join Us !</h6>
            <p>Together we can make evevrything better</p>
          </div>
          <div className="right">
            <form id="sendconact" autoComplete='off' onSubmit={handleSubmit}>
              <p>Full Name</p>
              <input
                className="form-control"
                name="fullname"
                type="text"
                placeholder="Eg . Nelson James"
                value={formFields?.fullname}
                onChange={handleChange}
                required
              />

              <p>Email</p>

              <input
                className="form-control"
                name="email"
                type="email"
                placeholder="Eg . nelsonjames@gmail.com"
                value={formFields?.email}
                onChange={handleChange}
                required
              />

              <p>Phone Number</p>
              <input
                className="form-control"
                name="phonenumber"
                type="tel"
                maxLength={11}
                placeholder="Eg . +1 6892 0292"
                value={formFields?.phonenumber}
                onChange={handleChange}
                required
              />

              <p>Current Company</p>

              <input
                className="form-control"
                name="curcompany"
                type="text"
                placeholder="Eg . Google, Microsoft, etc"
                value={formFields?.curcompany}
                onChange={handleChange}
                required
              />
              <p>LinkdIn Profile</p>
              <input
                className="form-control"
                name="linkdin"
                type="url"
                placeholder="LinkdIn Profile"
                value={formFields?.linkdin}
                onChange={handleChange}
              />

              <p>Cover Letter</p>
              <textarea
                placeholder="Cover Letter"
                className="form-control"
                name="message"
                id=""
                cols="30"
                rows="5"
                height="100px"
                style={{ maxHeight: "100px" }}
                value={formFields?.message}
                onChange={handleChange}
                required
              ></textarea>
              <div className="applynow-btn">
                <div className="applynow-btn-file">
                  <button type="button" className={`btn btn-primary select ${selectPdf === "selected" ? "selectedInput" : ""}`}>
                    <input
                      type="file"
                      accept='.pdf'
                      name="pdf"
                      onChange={handleChangePDF}
                    />
                    <span>{selectPdf}</span>
                  </button>
                </div>
                <div className="applynow-btn-submit">
                  {" "}
                  <button
                    className="btn btn-primary"
                    type='submit'
                    disabled={loading}
                    // data-aos-duration="200"
                    // data-aos="fade-left"
                    id="submit-form2"
                  >
                    <span>Submit</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ApplyNow
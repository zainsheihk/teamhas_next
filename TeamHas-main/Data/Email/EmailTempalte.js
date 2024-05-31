export const bookACall = (firstname, lastname, companyEmail, phoneNumber, plan, customplan) => {
  try {
    return ` <table bgcolor="#e5e5e5" width="100%" border="0" cellpadding="50" cellspacing="0">
        <tr>
          <td align="center">
            <table border="0" cellpadding="0" cellspacing="0">
              <tr>
                <td width="600" bgcolor="#ffffff" style="width: 600px">
                  <table border="0" cellpadding="0" cellspacing="0">
                    <tr>
                      <td>
                        <table border="0" cellpadding="15" cellspacing="0">
                          <tr>
                            <td align="center" width="600" style="width: 600px;padding-bottom: 2px">
                              <div style="background-color: #000000; padding: 1rem 0;">
                                <img src="https://team-has.vercel.app/imgs/logo.png" width="150" height="50"
                                  style="padding: 0" />
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td align="center" width="600" height="1" style="width: 600px;padding: 0"> <br />
                              <img src="https://team-has.vercel.app/imgs/logo.png" width="500" height="1"
                                style="padding: 0;" />
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 0px 50px 0px 50px;width: 600px" width="600">
                        <br />
                        <p style="padding: 0px;font-size: 21px;font-weight: bold;">Great news! 🎉 ${firstname} ${lastname} has confirmed a call!
                        </p>
                        <p style="padding: 0px;font-size: 16px;">We've booked a call with ${firstname} ${lastname} from Team Has.<br/> Company Email: ${companyEmail}<br/> Phone number: ${phoneNumber}<br/> for the ${customplan ? "custom plan " + customplan : "paln " + plan}. </p>
                        <br />
                      </td>
                    </tr>
                    <tr>
                      <td align="center" style="width: 600px;padding: 0">
                        <table border="0" cellpadding="0" cellspacing="0" bgcolor="#ffffff">
                          <tr>
                            <td style="width: 600px;text-align: center" align="center" width="600">
                              <img
                                src="https://attachment.nayapay.com:8443/fileUploader/download/UPLOAD_DIRECTORY/EMAILASSETS/line.png"
                                width="500" height="1" style="padding: 0;width: 500px;" />
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td style="width:600px;padding: 0">
                        <table border="0" cellpadding="0" cellspacing="0" bgcolor="#ffffff">
                          <tr>
                            <td style="width: 50px;text-align: left" align="left" width="50"></td>
                            <td style="width: 550px;text-align: left" align="left" width="550"><br />
                              <p style="font-size: 18px;font-weight: bold;">DETAILS (Book A Call)</p>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td style="width: 600px;padding: 0">
                        <table border="0" cellpadding="0" cellspacing="0" bgcolor="#ffffff">
                          <tr>
                            <td style="width: 50px;text-align: left" align="left" width="50"></td>
                            <td style="padding: 0px;width: 250px;text-align: left" align="left" width="250">
                              <p style="font-size: 16px;">First Name</p>
                            </td>
                            <td style="padding: 0px;width: 250px;text-align: right" align="right" width="250">
                              <p style="font-size: 16px;">${firstname}</p>
                            </td>
                            <td style="width: 50px;text-align: right" align="right" width="50"></td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td style="width: 600px;padding: 0">
                        <table border="0" cellpadding="0" cellspacing="0" bgcolor="#ffffff">
                          <tr>
                            <td style="width: 50px;text-align: left" align="left" width="50"></td>
                            <td style="padding: 0px;width: 250px;text-align: left" align="left" width="250">
                              <p style="font-size: 16px;">Last Name</p>
                            </td>
                            <td style="padding: 0px;width: 250px;text-align: right" align="right" width="250">
                              <p style="font-size: 16px;">${lastname}</p>
                            </td>
                            <td style="width: 50px;text-align: right" align="right" width="50"></td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr>
                    <td style="width: 600px;padding: 0">
                      <table border="0" cellpadding="0" cellspacing="0" bgcolor="#ffffff">
                        <tr>
                          <td style="width: 50px;text-align: left" align="left" width="50"></td>
                          <td style="padding: 0px;width: 250px;text-align: left" align="left" width="250">
                            <p style="font-size: 16px;">Company Email</p>
                          </td>
                          <td style="padding: 0px;width: 250px;text-align: right" align="right" width="250">
                            <p  style="font-size: 16px;">${companyEmail}</p>
                          </td>
                          <td style="width: 50px;text-align: right" align="right" width="50"></td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  <tr>
                  <td style="width: 600px;padding: 0">
                    <table border="0" cellpadding="0" cellspacing="0" bgcolor="#ffffff">
                      <tr>
                        <td style="width: 50px;text-align: left" align="left" width="50"></td>
                        <td style="padding: 0px;width: 250px;text-align: left" align="left" width="250">
                          <p style="font-size: 16px;">Phone Number</p>
                        </td>
                        <td style="padding: 0px;width: 250px;text-align: right" align="right" width="250">
                          <p style="font-size: 16px;">${phoneNumber}</p>
                        </td>
                        <td style="width: 50px;text-align: right" align="right" width="50"></td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                <td style="width: 600px;padding: 0">
                  <table border="0" cellpadding="0" cellspacing="0" bgcolor="#ffffff">
                    <tr>
                      <td style="width: 50px;text-align: left" align="left" width="50"></td>
                      <td style="padding: 0px;width: 250px;text-align: left" align="left" width="250">
                        <p style="font-size: 16px;">Plan</p>
                      </td>
                      <td style="padding: 0px;width: 250px;text-align: right" align="right" width="250">
                        <p style="font-size: 16px;">${plan}</p>
                      </td>
                      <td style="width: 50px;text-align: right" align="right" width="50"></td>
                    </tr>
                  </table>
                </td>
              </tr>
              ${customplan
        ? `  <tr>
                    <td style="width: 600px;padding: 0">
                    <table border="0" cellpadding="0" cellspacing="0" bgcolor="#ffffff">
                        <tr>
                        <td style="width: 50px;text-align: left" align="left" width="50"></td>
                        <td style="padding: 0px;width: 250px;text-align: left" align="left" width="250">
                            <p style="font-size: 16px;">Custom Plan</p>
                        </td>
                        <td style="padding: 0px;width: 250px;text-align: right" align="right" width="250">
                            <p style="font-size: 16px;">${customplan}</p>
                        </td>
                        <td style="width: 50px;text-align: right" align="right" width="50"></td>
                        </tr>
                    </table>
                    </td>
                </tr>`
        : ""
      }
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    `;
  } catch (err) { }
};


export const applyNow = (fullname, email, phonenumber, curcompany, linkdin, message,) => {
  try {
    return ` <p> <b>Subject</b>: New Form Submission from ${fullname}</p>

    <p>You have received a new form submission. Here are the details:</p>

    <ul>
        <li><strong>Full Name:</strong> ${fullname}</li>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Phone Number:</strong> <a href="tel:${phonenumber}">${phonenumber}</a></li>
        <li><strong>Current Company:</strong> ${curcompany}</li>
        <li><strong>LinkedIn Profile:</strong> <a href="${linkdin}">${linkdin}</a></li>
        ${message ? `<li><strong>Message:</strong> ${message}</li>` : ""}
    </ul>

    <p>Please find the attached PDF for more information.</p>

    <p>Best regards,</p>

    <hr>

    <p><strong>Attachment:</strong></p>`;
  } catch (err) { }
};

export const ContactUs = (firstname, lastname, email, phoneNumber, business, coverLetter) => {
  try {
    return ` <table bgcolor="#e5e5e5" width="100%" border="0" cellpadding="50" cellspacing="0">
        <tr>
          <td align="center">
            <table border="0" cellpadding="0" cellspacing="0">
              <tr>
                <td width="600" bgcolor="#ffffff" style="width: 600px">
                  <table border="0" cellpadding="0" cellspacing="0">
                    <tr>
                      <td style="padding: 0px 50px 0px 50px;width: 600px" width="600">
                        <br />
                        <p style="padding: 0px;font-size: 21px;font-weight: bold;">Great news! 🎉 ${firstname} ${lastname} want to contact with you!
                        </p>
                        <p style="padding: 0px;font-size: 16px;">We've booked a call with ${firstname} ${lastname} from Team Has.<br/>
                          <b>Email</b>: ${email}<br/> 
                          <b>Phone number</b>: ${phoneNumber}<br/> 
                          <b>Business</b>: ${business}<br/> 
                          <b>Cover Letter</b>: ${coverLetter}<br/> 
                        </p>
                        <br />
                      </td> 
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    `;
  } catch (err) { }
};
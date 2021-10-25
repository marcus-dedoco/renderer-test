import React, { FunctionComponent } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { css } from "@emotion/core";
import { GfiCocTemplateCertificate } from "../samples/customTemplateSample";

const containerStyle = css`
  background-color: #324353;
  color: #ffffff;
  padding: 15px;
  margin: auto;
  width: 80%;
  text-align: center;
`;

const flexStyle = css`
  display: flex;
  align-items: start;
  justify-content: space-evenly;
`;

export const CocTemplate: FunctionComponent<TemplateProps<GfiCocTemplateCertificate> & { className?: string }> = ({
  document,
  className = ""
}) => {
  return (
    <div css={containerStyle} className={className} id="custom-template">
      <div>
        <h4>This is to certify that</h4>
      </div>
      <div>
        <h1>{document.recipient.name}</h1>
      </div>
      <div>
        <h5>has attended</h5>
      </div>
      <div>
        <h5>{document.courseDetails.name}</h5>
      </div>
      <div>
        <h5>and passed the required assessment.</h5>
      </div>
      <div css={flexStyle}>
        <h5>Date: {document.courseDetails.date}</h5>
        <h5>Total Training Hours: {document.courseDetails.hours}</h5>
      </div>
      <h5>Instructional / Delivery Method: {document.courseDetails.deliveryMethod}</h5>
      <h5>Location: {document.courseDetails.location}</h5>
      <h5>Trainer: {document.courseDetails.trainer}</h5>

      <div css={flexStyle}>
        <div>
          <h5>{document.basSigner.name}</h5>
          <h5>{document.basSigner.appointment1}</h5>
          <h5>{document.basSigner.appointment2}</h5>
          <h5>{document.basSigner.appointment3}</h5>
        </div>
        <div>
          <h5>{document.ellipticSigner.name}</h5>
          <h5>{document.ellipticSigner.appointment1}</h5>
          <h5>{document.ellipticSigner.appointment2}</h5>
          <h5>{document.ellipticSigner.appointment3}</h5>
        </div>
        <div>
          <h5>{document.gfiSigner.name}</h5>
          <h5>{document.gfiSigner.appointment1}</h5>
          <h5>{document.gfiSigner.appointment2}</h5>
          <h5>{document.gfiSigner.appointment3}</h5>
        </div>
      </div>
    </div>
  );
};

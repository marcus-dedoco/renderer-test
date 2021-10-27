import React, { FunctionComponent } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { css } from "@emotion/core";
import { GfiCocTemplateCertificate } from "../samples/customTemplateSample";

const containerStyle = css`
  width: 1130.88px;
  height: 1052.08px;
  text-align: center;
  font-family: Arial, sans-serif;
`;

const backgroundImageStyle = css`
  position: absolute;
  width: 1130.88px;
  height: 1052.08px;
  top: 0;
  left: 0;
  z-index: -1;
`;

const contentStyle = css`
  width: 1130.88px;
  height: 1052.08px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const logoContainerStyle = css`
  padding-top: 174px;
  margin-bottom: 20px;
  width: 1130.88px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const logoStyle = css`
  width: 200px;
`;

const margin10TopStyle = css`
  margin-top: 10px;
`;
const largeTextStyleBold = css`
  font-size: 75px;
  font-weight: 700;
`;

const mediumTextStyleBold = css`
  font-size: 25px;
  font-weight: 700;
`;

const mediumTextStyle = css`
  font-size: 25px;
`;

const smallTextHeaderStyle = css`
  font-size: 15px;
  font-weight: 700;
  padding-left: 40px;
  color: #24069c;
`;

const smallTextStyle = css`
  font-size: 15px;
  padding-left: 40px;
`;

const hrStyleName = css`
  width: 640px;
`;

const hrStyleSignature = css`
  width: 238px;
`;

const signatureContainerStyleStyle = css`
  margin-top: 20px;
  width: 1130.88px;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
`;

const signatureStyle = css`
  width: 200px;
`;

const detailsContainerStyleStyle = css`
  padding-bottom: 50px;
  width: 1130.88px;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
`;

const detailsStyle = css`
  width: 240px;
  text-align: left;
`;

export const CocTemplate: FunctionComponent<TemplateProps<GfiCocTemplateCertificate> & { className?: string }> = ({
  document,
  className = ""
}) => {
  return (
    <div css={containerStyle} className={className} id="custom-template">
      <img css={backgroundImageStyle} src={document.certificateTemplate.file} alt={document.certificateTemplate.name} />
      <div css={contentStyle}>
        <div css={logoContainerStyle}>
          <div>
            <img css={logoStyle} src={document.signers.signer1.logo} alt={document.signers.signer1.entity} />
          </div>
          <div>
            <img css={logoStyle} src={document.signers.signer2.logo} alt={document.signers.signer2.entity} />
          </div>
          <div>
            <img css={logoStyle} src={document.signers.signer3.logo} alt={document.signers.signer3.entity} />
          </div>
        </div>
        <div css={margin10TopStyle}>
          <span css={mediumTextStyle}>This is to certify that</span>
        </div>
        <div css={margin10TopStyle}>
          <span css={largeTextStyleBold}>{document.recipient.name}</span>
          <hr css={hrStyleName} />
        </div>
        <div css={margin10TopStyle}>
          <span css={mediumTextStyle}>has attended</span>
        </div>
        <div css={margin10TopStyle}>
          <span css={mediumTextStyleBold}>{document.courseDetails.name}</span>
        </div>
        <div css={margin10TopStyle}>
          <span css={mediumTextStyle}>and passed the required assessment.</span>
        </div>
        <div css={margin10TopStyle}>
          <span css={mediumTextStyle}>
            Date: <u>{document.courseDetails.date}</u>
          </span>
        </div>
        <div css={signatureContainerStyleStyle}>
          <div>
            <img css={signatureStyle} src={document.signers.signer1.signature} alt={document.signers.signer1.name} />
            <hr css={hrStyleSignature} />
          </div>
          <div>
            <img css={signatureStyle} src={document.signers.signer2.signature} alt={document.signers.signer2.name} />
            <hr css={hrStyleSignature} />
          </div>
          <div>
            <img css={signatureStyle} src={document.signers.signer3.signature} alt={document.signers.signer3.name} />
            <hr css={hrStyleSignature} />
          </div>
        </div>

        <div css={detailsContainerStyleStyle}>
          <div css={detailsStyle}>
            <div>
              <span css={smallTextHeaderStyle}>{document.signers.signer1.name}</span>
            </div>
            <div>
              <span css={smallTextStyle}>{document.signers.signer1.appointment1.replace(/&amp;/g, "&")}</span>
            </div>
            <div>
              <span css={smallTextStyle}>{document.signers.signer1.appointment2.replace(/&amp;/g, "&")}</span>
            </div>
            <div>
              <span css={smallTextStyle}>{document.signers.signer1.appointment3.replace(/&amp;/g, "&")}</span>
            </div>
          </div>
          <div css={detailsStyle}>
            <div>
              <span css={smallTextHeaderStyle}>{document.signers.signer2.name}</span>
            </div>
            <div>
              <span css={smallTextStyle}>{document.signers.signer2.appointment1.replace(/&amp;/g, "&")}</span>
            </div>
            <div>
              <span css={smallTextStyle}>{document.signers.signer2.appointment2.replace(/&amp;/g, "&")}</span>
            </div>
            <div>
              <span css={smallTextStyle}>{document.signers.signer2.appointment3.replace(/&amp;/g, "&")}</span>
            </div>
          </div>
          <div css={detailsStyle}>
            <div>
              <span css={smallTextHeaderStyle}>{document.signers.signer3.name}</span>
            </div>
            <div>
              <span css={smallTextStyle}>{document.signers.signer3.appointment1.replace(/&amp;/g, "&")}</span>
            </div>
            <div>
              <span css={smallTextStyle}>{document.signers.signer3.appointment2.replace(/&amp;/g, "&")}</span>
            </div>
            <div>
              <span css={smallTextStyle}>{document.signers.signer3.appointment3.replace(/&amp;/g, "&")}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

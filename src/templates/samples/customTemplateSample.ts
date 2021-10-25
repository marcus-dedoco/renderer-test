import { v2 } from "@govtechsg/open-attestation";

export interface GfiCocTemplateCertificate extends v2.OpenAttestationDocument {
  name: string;
  recipient: {
    name: string;
  };
  courseDetails: {
    name: string;
    date: string;
    hours: string;
    deliveryMethod: string;
    location: string;
    trainer: string;
  };
  basSigner: {
    name: string;
    appointment1: string;
    appointment2: string;
    appointment3: string;
  };
  ellipticSigner: {
    name: string;
    appointment1: string;
    appointment2: string;
    appointment3: string;
  };
  gfiSigner: {
    name: string;
    appointment1: string;
    appointment2: string;
    appointment3: string;
  };
  $template: v2.TemplateObject;
}

export const gfiCocTemplateCertificate: GfiCocTemplateCertificate = {
  name: "Digital Assets Compliance (Foundation) Course Certificate of Completion",
  issuers: [
    {
      name: "Global Fintech Institute",
      id: "did:ethr:0x9a9E6BC003Ecd08e060A53AB26ab8e6c42f63B30",
      identityProof: {
        location: "potential-peach-koi.sandbox.openattestation.com",
        type: v2.IdentityProofType.DNSTxt
      }
    }
  ],
  recipient: {
    name: "Tang Hsin Jin"
  },
  courseDetails: {
    name: "Digital Assets Compliance (Foundation) Course",
    date: "13-14th October 2021",
    hours: "7",
    deliveryMethod: "Group-based synchronous",
    location: "Online",
    trainer: "Branson Lee"
  },
  basSigner: {
    name: "Chia Hock Lai",
    appointment1: "Co-Chairman",
    appointment2: "Blockchain Association",
    appointment3: "Singapore"
  },
  ellipticSigner: {
    name: "Elsa Said-Armanet",
    appointment1: "Director of Global",
    appointment2: "Partnerships, Elliptic",
    appointment3: ""
  },
  gfiSigner: {
    name: "Prof. David Lee",
    appointment1: "Co-Founder & Chair,",
    appointment2: "Board of Governers",
    appointment3: "Global Fintech Instituite"
  },
  $template: {
    name: "gfiCerts_dacfc",
    type: v2.TemplateType.EmbeddedRenderer,
    url: "https://optimistic-wing-536118.netlify.app"
  }
};

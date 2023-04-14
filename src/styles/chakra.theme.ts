import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    heading: "Inter",
    body: "Inter",
  },
  components: {
    Text: {
      variants: {
        "Heading-1-700": {
          fontWeight: "700",
          fontSize: "44px",
          lineHeight: "56px",
          color: "grey_scale.grey1",
        },
        "Heading-2-600": {
          fontWeight: "600",
          fontSize: "36px",
          lineHeight: "45px",
          color: "grey_scale.grey1",
        },
        "Heading-3-600": {
          fontWeight: "600",
          fontSize: "32px",
          lineHeight: "40px",
          color: "grey_scale.grey1",
        },
        "Heading-3-500": {
          fontWeight: "500",
          fontSize: "32px",
          lineHeight: "40px",
          color: "grey_scale.grey1",
        },
        "Heading-4-600": {
          fontWeight: "600",
          fontSize: "28px",
          lineHeight: "35px",
          color: "grey_scale.grey1",
        },
        "Heading-4-500": {
          fontWeight: "500",
          fontSize: "28px",
          lineHeight: "35px",
          color: "grey_scale.grey1",
        },
        "Heading-5-600": {
          fontWeight: "600",
          fontSize: "24px",
          lineHeight: "30px",
          color: "grey_scale.grey1",
        },
        "Heading-5-500": {
          fontWeight: "500",
          fontSize: "24px",
          lineHeight: "30px",
          color: "grey_scale.grey1",
        },
        "Heading-6-600": {
          fontWeight: "600",
          fontSize: "20px",
          lineHeight: "25px",
          color: "grey_scale.grey1",
        },
        "Heading-6-500": {
          fontWeight: "500",
          fontSize: "20px",
          lineHeight: "25px",
          color: "grey_scale.grey1",
        },
        "Heading-7-600": {
          fontWeight: "600",
          fontSize: "16px",
          lineHeight: "20px",
          color: "grey_scale.grey1",
        },
        "Heading-7-500": {
          fontWeight: "600",
          fontSize: "16px",
          lineHeight: "20px",
          color: "grey_scale.grey1",
        },
        "body-1-400": {
          fontWeight: "400",
          fontSize: "16px",
          lineHeight: "28px",
          color: "grey_scale.grey2",
        },
        "body-1-600": {
          fontWeight: "600",
          fontSize: "16px",
          lineHeight: "28px",
          color: "grey_scale.grey2",
        },
        "body-2-400": {
          fontWeight: "400",
          fontSize: "14px",
          lineHeight: "24px",
          color: "grey_scale.grey2",
        },
        "body-2-500": {
          fontWeight: "500",
          fontSize: "14px",
          lineHeight: "24px",
          color: "grey_scale.grey2",
        },
        "button-big-text": {
          fontWeight: "600",
          fontSize: "16px",
          lineHeight: "0px",
          color: "grey_scale.grey2",
        },
        "button-medium-text": {
          fontWeight: "600",
          fontSize: "14px",
          lineHeight: "0px",
          color: "grey_scale.grey2",
        },
        "input-placeholder": {
          fontWeight: "400",
          fontSize: "16px",
          lineHeight: "0px",
          color: "grey_scale.grey2",
        },
        "input-label": {
          fontWeight: "500",
          fontSize: "14px",
          lineHeight: "17px",
          color: "grey_scale.grey2",
        },
      },
    },
    Link: {
      variants: {
        link: {
          padding: "8px 16px",
          bg: "transparent",
          color: "grey_scale.grey0",
          borderRadius: "base",
          fontWeight: "bold",
          _hover: {
            textDecoration: "none",
            bg: "grey_scale.grey8",
          },
        },
        outline1: {
          padding: "8px 16px",
          bg: "transparent",
          color: "grey_scale.grey0",
          borderRadius: "base",
          borderWidth: "1.5px",
          borderColor: "grey_scale.grey0",
          textAlign: "center",
          fontWeight: "bold",
          _hover: {
            textDecoration: "none",
          },
        },
      },
    },
    Button: {
      variants: {
        brand_disable: {
          bg: "brand.brand3",
          borderRadius: "base",
          color: "brand.brand4",
        },
        sucess: {
          bg: "Feedback.sucess3",
          color: "Feedback.sucess1",
          borderRadius: "base",
          _hover: {
            bg: "Feedback.sucess2",
            color: "Feedback.sucess1",
          },
        },
        alert: {
          bg: "Feedback.alert3",
          color: "Feedback.alert1",
          borderRadius: "base",
          _hover: {
            bg: "Feedback.alert2",
            color: "Feedback.alert1",
          },
        },
        outline_brand: {
          bg: "transparent",
          color: "brand.brand1",
          borderRadius: "base",
          borderWidth: "1.5px",
          borderColor: "brand.brand1",
          _hover: {
            bg: "brand.brand4",
          },
        },
        outline1: {
          bg: "transparent",
          color: "grey_scale.grey0",
          borderRadius: "base",
          borderWidth: "1.5px",
          borderColor: "grey_scale.grey0",
        },
        outline2: {
          bg: "transparent",
          color: "grey_scale.grey0",
          borderRadius: "base",
          borderWidth: "1.5px",
          borderColor: "grey_scale.grey4",
          _hover: {
            bg: "grey_scale.grey1",
            color: "grey_scale.grey10",
          },
        },
        big45: {
          bg: "grey_scale.grey1",
          color: "grey_scale.grey10",
        },
        light: {
          bg: "grey_scale.grey10",
          color: "grey_scale.gray1",
          borderRadius: "base",
        },
        outline_light: {
          bg: "transparent",
          color: "grey_scale.grey10",
          borderRadius: "base",
          borderWidth: "1.5px",
        },
        brand_opacity: {
          bg: "brand.brand4",
          color: "brand.brand1",
          borderRadius: "base",
        },
        brand1: {
          bg: "brand.brand1",
          color: "grey_scale.whiteFixed",
          borderRadius: "base",
          padding: "8px 16px",
          _hover: {
            bg: "brand.brand2",
            color: "grey_scale.whiteFixed",
          },
        },
        brand2: {
          bg: "grey_scale.grey7",
          color: "grey_scale.grey3",
          borderRadius: "24px",
          p: "0px 12px 0px 12px",
          _hover: {
            bg: "brand.brand2",
            color: "grey_scale.whiteFixed",
          },
        },
        disable: {
          bg: "grey_scale.grey5",
          borderRadius: "base",
          color: "grey_scale.whiteFixed",
        },
        negative: {
          bg: "grey_scale.gray6",
          borderRadius: "base",
          color: "grey_scale.gray2",
        },
        grey1: {
          bg: "grey_scale.grey0",
          color: "grey_scale.whiteFixed",
          borderRadius: "base",
          _hover: {
            bg: "grey_scale.grey1",
            color: "grey_scale.whiteFixed",
          },
        },
      },
    },
  },
  colors: {
    brand: {
      brand1: "#4529E6",
      brand2: "#5126EA",
      brand3: "#B0A6F0",
      brand4: "#EDEAFD",
    },
    grey_scale: {
      grey0: "#0B0D0D",
      grey1: "#212529",
      grey2: "#495057",
      grey3: "#868E96",
      grey4: "#ADB5BD",
      grey5: "#CED4DA",
      grey6: "#DEE2E6",
      grey7: "#E9ECEF",
      grey8: "#F1F3F5",
      grey9: "#F8F9FA",
      grey10: "#FDFDFD",
      whiteFixed: "#FFFFFF",
    },
    feedback: {
      alert1: "#CD2B31",
      alert2: "#FDD8D8",
      alert3: "#FFE5E5",
      sucess1: "#18794E",
      sucess2: "#CCEBD7",
      sucess3: "#DDF3E4",
    },
    random_profile: {
      random1: "#E34D8C",
      random2: "#C04277",
      random3: "#7D2A4D",
      random4: "#7000FF",
      random5: "#6200E3",
      random6: "#36007D",
      random7: "#349974",
      random8: "#2A7D5F",
      random9: "#153D2E",
      random10: "#6100FF",
      random11: "#5700E3",
      random12: "#30007D",
    },
  },
  styles: {
    global: {
      "html, body": {
        fontFamily: "inter",
        height: "100vh",
      },
      button: {
        cursor: "pointer",
      },
    },
  },
});

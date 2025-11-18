export const INITIAL_GLOBAL_STYLES = {
  fontFamily: "Roboto",
  fontSize: 13,
  lineSpacing: 1,
};

export const INITIAL_USER_INFO = {
  name: "Jason Erickson",
  title: "Online marketer",
  company: "JE marketing",
  phone: "212-931-0000",
  mobile: "",
  website: "www.je-marketing.com",
  email: "jason@je-marketing.com",
  address: "1937 Fieldcrest Road, NY 10011",
  image: "https://via.placeholder.com/80",
};

export const INITIAL_DESIGN = {
  color: "#000000",
  nameFont: "",
  nameColor: "#45668E",
  nameFontSize: "",
  nameLineSpacing: "",
  titleFont: "",
  titleColor: "",
  titleFontSize: "",
  titleLineSpacing: "",
  companyFont: "",
  companyColor: "",
  companyFontSize: "",
  detailsFont: "",
  detailsColor: "",
  detailsSize: "",
  socialSize: 16,
  socialSpace: 8,
  socialColorMode: "web",
  socialCustomColor: "#1877F2",
  socialFill: "left",
  imageShape: "rounded-2",
  imageSize: "100px",
  imagePosition: "start",
  label: "left",
  direction: "left",
  separator: "left",
};

export const INITIAL_SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/",
  twitter: "https://twitter.com/",
  instagram: "https://www.instagram.com/",
  linkedin: "https://www.linkedin.com/",
};

// Changed structure to support type-based differentiation
export const INITIAL_STYLED_SIGNEDOFF = {
  type: "signature", // Can be 'signature', 'signoff', or 'custom'
  signature: {
    signOff: "Kind regards,",
    signAs: "",
    fontStyle: "cursive",
    size: 20,
    alignment: "left",
    color: "#000000",
    isCustom: false,
    imageData: null,
  },
  signoff: {
    signOff: "Kind regards,",
    fontStyle: "cursive",
    size: 20,
    alignment: "left",
    color: "#000000",
  },
};

export const DISCLAIMER = {
  type: "",
  color: "#4a4a4a",
  fontSize: 14,
  align: "left",
  customText: "",
  decorativeLine: true,
};

export const DISCLAIMER_TEXT = {
  confidential:
    "IMPORTANT: The contents of this email and any attachments are confidential. They are intended for the named recipient(s) only. If you have received this email by mistake, please notify the sender immediately and do not disclose the contents to anyone or make copies thereof.",
  noVirus:
    "Warning: Although taking reasonable precautions to ensure no viruses or malicious softwares are present in this email, the sender cannot accept responsibility for any loss or damage arising from the use of this email or attachments.",
  nonBinding:
    "No employee or agent is authorized to conclude any binding agreement on behalf of the company with another party by email without specific confirmation.",
  personalOpinion:
    "All views and opinions expressed in this email message are the personal opinions of the author and do not represent those of the company. No liability can be held for any damages, however caused, to any recipients of this message.",
  correctReciept:
    "If you received this email in error, please notify us immediately by sending an e-mail or by calling.",
};

// Map dialog values to constant keys
export const DISCLAIMER_TYPE_MAP = {
  confidentiality: "confidential",
  no_viruses: "noVirus",
  non_binding: "nonBinding",
  personal_opinions: "personalOpinion",
  correct_recipient: "correctReciept",
  custom: "custom",
};

// constants.js
export const QUOTE_TEXT = {
  success: `"I can't give you a sure-fire formula for success, but I can give you a formula for failure: try to please everybody all the time." - Herbert Bayard Swope.`,
  motivation: `"Only I can change my life. No one can do it for me." - Carol Burnett.`,
  william_shakespeare: `"Love all, trust a few, do wrong to none." - William Shakespeare`,
  science: `"Scientists have become the bearers of the torch of discovery in our quest for knowledge." - Stephen Hawking.`,
  finance: `"One of the funny things about the stock market is that every time one person buys, another sells, and both think they are astute." - William Feather.`,
  funny: `"Do not take life too seriously. You will never get out of it alive." - Elbert Hubbard.`,
  positive: `"Once you replace negative thoughts with positive ones, you'll start having positive results." - Willie Nelson.`,
  friendship: `"The greatest gift of life is friendship, and I have received it." - Hubert H. Humphrey.`,
  business: `"Great things in business are never done by one person. They're done by a team of people." - Steve Jobs.`,
  albert_einstein: `"Look deep into nature, and then you will understand everything better." - Albert Einstein.`,
};

export const QUOTE = {
  category: "",
  color: "#4a4a4a",
  fontSize: 14,
  align: "left",
  customText: "",
};

// Map dialog category values to constant keys
export const QUOTE_CATEGORY_MAP = {
  success: "success",
  motivational: "motivation",
  william_shakespeare: "william_shakespeare",
  science: "science",
  finance: "finance",
  random: "funny",
  funny: "funny",
  positive: "positive",
  friendship: "friendship",
  business: "business",
  albert_einstein: "albert_einstein",
  my_own_quotes: "custom",
};

export const VIDEO = {
  url: "",
  title: "",
  styleType: "compact",
  color: "#4a4a4a",
  fontSize: 14,
  align: "left",
  videoId: null,
};

export const GREEN_FOOTER_TEXT = {
  Environmental_responsibility:
    "Please consider your environmental responsibility. Before printing this e-mail message, ask yourself whether you really need a hard copy.",
  Environmental_responsibility_short:
    "Please consider the environment before printing this e-mail!",
  Do_you_really_need: "Do you really need to print this email?",
  Printing_kills_trees: "Printing emails kills trees. Print is murder!",
  Dont_print_this: "Don't print this, Ok?",
  Printing_emails: "Printing emails is SO 2009",
  Save_a_tree: "Save a tree - kill a beaver",
  Be_Carbon_free:
    "Be like me, be Carbon free - don't print this and save a tree",
  Save_ink_cartridges:
    "Save ink cartridges from going extinct! Don't print this email!",
};

export const GREEN_FOOTER_STYLE = {
  color: "#57c84d",
  fontSize: 14,
  align: "left",
  customText: "",
  category: "",
  icon: "",
};

// Add to your constants file
export const IMAGE_GALLERY = {
  images: [],
  galleryTitle: "",
  imageSize: 50,
  spaceBetween: 20,
  shape: "square",
  applyLink: true,
  link: "",
};

// Add to your constants file
export const ONLINE_MEETING = {
  enabled: false,
  schedulingProvider: "vcita",
  schedulerUrl: "",
  buttonText: "Book a meeting",
  buttonType: "Full",
  buttonSize: "M",
  buttonColor: "#007dff",
  buttonIcon: "circle",
  buttonShape: "rounded",
};

// Scheduling providers
export const SCHEDULING_PROVIDERS = {
  vcita: "vCita",
  calendly: "Calendly",
  acuity: "Acuity Scheduling",
  custom: "Custom",
};

// Button types
export const BUTTON_TYPES = {
  Full: "Full",
  Light: "Light",
  Simple: "Simple link",
};

// Button sizes
export const BUTTON_SIZES = {
  S: "Small",
  M: "Medium", 
  L: "Large",
};

// Button shapes
export const BUTTON_SHAPES = {
  square: "Square",
  rounded_sm: "Rounded Small",
  rounded: "Rounded",
};

// Icon options
export const ICON_OPTIONS = {
  circle: "CheckCircle",
  calendar_month: "CalendarMonth", 
  calendar_today: "CalendarToday",
  link: "Link",
  time: "AccessTime",
  emoticon: "InsertEmoticon",
  none: "None",
};

export const INITIAL_SOCIAL_BUTTONS = {
  enabled: false,
  links: [],
  style: "Stroke",
  shape: "rounded_sm",
  size:20
};

export const INITIAL_BANNER = {
  enabled: false,
  type: "predesigned", // "predesigned" or "custom"
  predesigned: {
    category: "Community",
    subcategory: "LGBT",
    size: "M",
    link: "",
    selectedBanner: null,
  },
  custom: {
    imageUrl: "",
    link: "",
    size: "M",
  },
};

export const INITIAL_CUSTOM_BUTTON = {
  enabled: false,
  buttonText: "Check out my website",
  buttonUrl: "",
  shape: "rounded_sm",
  type: "Full",
  color: "black",
  size: "M",
  fontColor: "black",
  alignment: "left",
  addArrow: true,
};

// In your utils/constant.js file
export const INITIAL_UPLOAD_BANNER = {
  enabled: false,
  imageUrl: "",
  link: "",
  size: "M",
};
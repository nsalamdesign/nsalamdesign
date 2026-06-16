import {categoryType} from "./category";
import {projectType} from "./project";
import {postType} from "./post";
import {reviewType} from "./review";
import {pricingType} from "./pricing";
import {faqType} from "./faq";
import {homeSettingsType} from "./homeSettings";
import { contactSettingsType } from "./contactSettings";

export const schema = {
  types: [
    categoryType,
    projectType,
    postType,
    reviewType,
    pricingType,
    faqType,
    homeSettingsType,
    contactSettingsType,
  ],
};
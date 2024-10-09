import { library } from '@fortawesome/fontawesome-svg-core';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { faCoffee, faHome, faUser, faCode, faBars, faArrowLeft, faArrowRight, faXmark, faPencil, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faSquareWhatsapp, faLinkedinIn, faTwitter} from '@fortawesome/free-brands-svg-icons'; // Correct package

const iconsToAdd: IconDefinition[] = [faCoffee, faHome, faUser, faCode, faBars, faArrowLeft, faArrowRight, faXmark, faPencil, faWhatsapp ,  faSquareWhatsapp, faMagnifyingGlass, faLinkedinIn, faTwitter];
library.add(...iconsToAdd);

// Export if necessary
export { library, iconsToAdd };

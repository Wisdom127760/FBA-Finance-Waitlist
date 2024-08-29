import FAQPage from "@components/FAQ/FAQPage";
import { faqData } from "@components/FAQ/FAQ-Data"; // Adjust the import path as needed

export default function Page() {
  return <FAQPage questions={faqData} />;
}

import type { Metadata } from "next";
import LegalPage from "@/components/legal/LegalPage";
import PrivacyChoicesDoc, { meta } from "@/content/policy/privacy-choices.mdx";

export const metadata: Metadata = {
  title: `${meta.title} — Heirloom Recipe Box`,
  description: meta.description,
};

export default function PrivacyChoicesPage() {
  return (
    <LegalPage title={meta.title}>
      <PrivacyChoicesDoc />
    </LegalPage>
  );
}


import type { Metadata } from "next";
import LegalPage from "@/components/legal/LegalPage";
import PrivacyDoc, { meta } from "@/content/policy/privacy.mdx";

export const metadata: Metadata = {
  title: `${meta.title} — Heirloom Recipe Box`,
  description: meta.description,
};

export default function PrivacyPage() {
  return (
    <LegalPage title={meta.title}>
      <PrivacyDoc />
    </LegalPage>
  );
}

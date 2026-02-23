import type { Metadata } from "next";
import LegalPage from "@/components/legal/LegalPage";
import TermsDoc, { meta } from "@/content/policy/terms.mdx";

export const metadata: Metadata = {
  title: `${meta.title} — Heirloom Recipe Box`,
  description: meta.description,
};

export default function TermsPage() {
  return (
    <LegalPage
      title={meta.title}
      description={meta.description}
      lastUpdated={meta.lastUpdated}
    >
      <TermsDoc />
    </LegalPage>
  );
}
